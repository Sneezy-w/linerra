import { ShipmentDO, ShipmentEditResVO, ShipmentReqVO } from "../../models/veryk/shipment.entity";
import { verykCarriers } from "../../constant/verykConstant";
import { quoteApiResToResVO, quoteReqVOToApiReq } from "../../models/veryk/quote.convert";
import { QuoteReqVO, QuoteResVO } from "../../models/veryk/quote.entity";
import { quote, create, getLabel } from "../../utils/verykUtils";
import { shipmentApiResToApiUpdateDO, shipmentReqVOToApiReq, shipmentReqVOToDO } from "../../models/veryk/shipment.convert";
import { generateOrderNumber, now } from "../../utils/utils";
import { MainTable, Shipment } from "system/src/dynamodb/toolbox";
import { Condition, DeleteItemCommand, GetItemCommand, PutItemCommand, QueryCommand, UpdateItemCommand, UpdateItemResponse } from "dynamodb-toolbox";
import { UpdateAttributesCommand } from 'dynamodb-toolbox';
import { ServiceError } from "system/src/utils/serviceError";
//import { updateAttributesCommandReturnValuesOptionsSet } from "dynamodb-toolbox/dist/esm/entity/actions/updateAttributes/options";
import { LabelApiRes, LabelFile } from "system/src/models/veryk/label.entity";
import { S3Service } from "../s3Service";
import logger from "../../utils/logger";
import { LambdaService } from "../lambdaService";

export class VerykShipmentService {
  public static instance: VerykShipmentService = new VerykShipmentService();

  /**
   * Get available carriers
   * @returns
   */
  async getAvailableCarriers(): Promise<string[]> {
    const carriers = verykCarriers;
    return carriers.filter(carrier => ["2", "3", "4", "5", "9"].includes(carrier.id)).map(carrier => carrier.id);
  }

  /**
   * Get quotes
   * @param params
   * @param acceptLanguage
   * @returns
   */
  async quote(params: QuoteReqVO, acceptLanguage?: string): Promise<QuoteResVO[]> {
    const quotes = await quote(quoteReqVOToApiReq(params), acceptLanguage);
    return quotes.map(quoteApiResToResVO);
  }


  async save(params: ShipmentReqVO, currentUser: Record<string, string | number>): Promise<{ number: string }> {
    const shipmentDO = shipmentReqVOToDO(params);
    shipmentDO.stationId = currentUser.stationId as string;
    //shipmentDO.sortTimestamp = now();
    //let response: UpdateItemResponse<typeof Shipment, { returnValues: 'ALL_NEW' }> | UpdateItemResponse<typeof Shipment, { returnValues: 'ALL_OLD' }>;
    //shipmentDO.GSI1PK = "SHIPMENT_NO";
    if (!shipmentDO.number) {
      shipmentDO.number = generateOrderNumber("VK", currentUser.stationNo as string);
      await Shipment.build(PutItemCommand)
        .item({ ...shipmentDO, sortTimestamp: now() })
        //.options({ returnValues: "ALL_OLD" })
        .send();

    } else {
      //console.log(shipmentDO);

      // const command = Shipment.build(UpdateItemCommand)
      //   .item({ ...shipmentDO })
      // console.log(command);
      //const { Item } = await Shipment.build(GetItemCommand).key({ number: shipmentDO.number }).send()


      //console.log(Item);
      //console.log({ ...Item, ...shipmentDO });
      await Shipment.build(UpdateAttributesCommand)
        .item({ ...shipmentDO })
        //.options({ returnValues: "ALL_NEW" })
        .send();
    }
    return { number: shipmentDO.number };

  }


  async get(number: string): Promise<ShipmentDO> {
    const { Item } = await Shipment.build(GetItemCommand).key({ number }).send();
    return Item as ShipmentDO;
  }

  async delete(number: string): Promise<void> {

    // only delete open shipment
    const condition: Condition<typeof Shipment> = {
      attr: 'status',
      eq: 'open'
    };
    await Shipment.build(DeleteItemCommand)
      .key({ number })
      .options({ condition })
      .send();
  }

  async getPage(params: { limit: number, keyword?: string, status?: string, dateRange: [string, string], lastEvaluatedKey?: Record<string, unknown> }, currentUser: Record<string, string | number>) {
    // const filter: Record<string, any> = {}
    // if (params.status) {
    //   filter.status = {
    //     attribute: "status",
    //     eq: params.status
    //   }
    // }
    let statusCondition, keywordCondition: Condition<typeof Shipment>;
    let conditions: Condition<typeof Shipment>[] = [];
    if (params.status) {
      statusCondition = {
        attr: 'status' as const,
        eq: params.status
      };
      conditions.push(statusCondition);
    }

    if (params.keyword) {
      keywordCondition = {
        or: [
          {
            attr: 'number',
            contains: params.keyword
          },
          {
            attr: 'externalId',
            contains: params.keyword
          }
        ]
      };
      conditions.push(keywordCondition);
    }

    let filters: Record<string, Condition<typeof Shipment>> = {};

    if (conditions.length > 1) {
      filters.Shipment = {
        and: conditions
      };
    } else if (conditions.length === 1) {
      filters.Shipment = conditions[0];
    }

    const pageResult = await MainTable.build(QueryCommand)
      .query({
        index: "GSI1",
        partition: `STATION#${currentUser.stationId}`,
        range: {
          gte: `SHIPMENT#${params.dateRange[0]}`,
          lte: `SHIPMENT#${params.dateRange[1]}`
        }
      })
      .entities(Shipment)
      .options({
        limit: (conditions.length > 0 ? undefined : params.limit),
        reverse: true,
        filters: filters,
        exclusiveStartKey: params.lastEvaluatedKey
      })
      .send();
    //console.log(pageResult);
    //console.log(pageResult.LastEvaluatedKey);
    return pageResult;
  }


  /**
   * Submit to veryk
   * @param params
   * @param acceptLanguage
   * @returns
   */
  async submit(params: ShipmentReqVO, currentUser: Record<string, string | number>, acceptLanguage?: string) {
    //console.log(params);
    if (params.number) {
      const shipmentDO = await this.get(params.number);
      //console.log(shipmentDO);
      if (shipmentDO.status !== "open") {
        throw new ServiceError("Shipment status is not open", "Shipment.StatusNotOpen");
      }
    }
    const { number } = await this.save(params, currentUser);
    //console.log(number);
    try {
      const apiReq = shipmentReqVOToApiReq(params);
      if (apiReq.option) {
        apiReq.option.reference_number = number;
      } else {
        apiReq.option = { reference_number: number };
      }
      const shipmentApiRes = await create(apiReq, acceptLanguage);
      //console.log(shipmentApiRes);
      //console.log(JSON.stringify(shipmentApiRes.package.packages, null, 2));

      //const labelFile = await this.saveAllLabelFile(shipmentApiRes.id, acceptLanguage);

      //const shipmentDetailApiRes = await shipmentDetail({ id: shipmentApiRes.id }, acceptLanguage);
      //console.log(JSON.stringify(shipmentDetailApiRes, null, 2));

      const shipmentApiUpdateDO = shipmentApiResToApiUpdateDO(shipmentApiRes);
      //shipmentApiUpdateDO.labelFile = labelFile;

      //console.log(shipmentApiUpdateDO);
      const { Attributes } = await Shipment.build(UpdateAttributesCommand)
        .item({ ...shipmentApiUpdateDO })
        .options({ returnValues: "ALL_NEW" })
        .send();
      // const referenceNumber = generateOrderNumber("VK", currentUser.stationNo);
      // const apiReq = shipmentReqVOToApiReq(params);
      // if (apiReq.option) {
      //   apiReq.option.reference_number = referenceNumber;
      // } else {
      //   apiReq.option = { reference_number: referenceNumber };
      // }
      // const submitRes = await create(apiReq, acceptLanguage);
      // return submitRes;

      LambdaService.instance.invokeAsynchronously(
        process.env.PROCESS_LABEL_AND_UPDATE_SHIPMENT_FUNCTION_NAME as string,
        { shipmentId: shipmentApiRes.id, acceptLanguage }
      );
      return { externalId: Attributes?.externalId, waybillNumber: Attributes?.waybillNumber, number: Attributes?.number };
    } catch (error) {
      //console.error(error);
      // throw new ServiceError("Failed to submit shipment", "Shipment.SubmitFailed");
      logger.error("Failed to submit shipment", error);
    }
    return {
      number: number || ""
    };
  }

  /**
   * get label
   * @param params
   * @param acceptLanguage
   * @returns
   */
  async getAllPrintableLabels(shipmentId: string): Promise<LabelApiRes> {
    const labelApiRes = await getLabel({ id: shipmentId, option: 1 });
    return labelApiRes;
  }

  async saveAllLabelFile(shipmentId: string): Promise<LabelFile> {
    const labelApiRes = await this.getAllPrintableLabels(shipmentId);
    if (!labelApiRes) {
      throw new ServiceError("Label not found", "Label.NotFound");
    }

    //console.log(labelApiRes.invoice?.name);
    //console.log(labelApiRes.delivery?.label);

    const { name: labelFileName, label: labelFileContent, type: labelFileType } = labelApiRes;
    const labelBuffer = Buffer.from(labelFileContent as string, 'base64');
    const labelKey = `label/${labelFileName}`;
    await S3Service.instance.uploadLabelFile(labelKey, labelBuffer, labelFileType);

    const labelFile: LabelFile = {
      label: labelKey
    };

    //console.log("invoice", labelApiRes.invoice);

    if (labelApiRes.invoice) {
      const { name: invoiceFileName, label: invoiceFileContent, type: invoiceFileType } = labelApiRes.invoice;
      const invoiceBuffer = Buffer.from(invoiceFileContent as string, 'base64');
      const invoiceKey = `invoice/${invoiceFileName}`;
      await S3Service.instance.uploadLabelFile(invoiceKey, invoiceBuffer, invoiceFileType);
      labelFile.invoice = invoiceKey;
    }

    //console.log("deliver", labelApiRes.deliver);

    if (labelApiRes.deliver) {
      const { name: deliverFileName, label: deliverFileContent, type: deliverFileType } = labelApiRes.deliver;
      const deliverBuffer = Buffer.from(deliverFileContent as string, 'base64');
      const deliverKey = `deliver/${deliverFileName}`;
      await S3Service.instance.uploadLabelFile(deliverKey, deliverBuffer, deliverFileType);
      labelFile.deliver = deliverKey;
    }

    return labelFile;
  }
}
