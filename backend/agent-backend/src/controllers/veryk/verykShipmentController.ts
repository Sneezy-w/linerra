import { Request, Response } from 'express';
import { VerykShipmentService } from '@linerra/system/src/services/veryk/verykShipmentService';
import { QuoteResVO } from '@linerra/system/src/models/veryk/quote.entity';
import { shipmentDetail, shipmentList, tracking } from 'system/src/utils/verykUtils';
import { shipmentDOToDetailResVO, shipmentDOToEditResVO } from 'system/src/models/veryk/shipment.convert';
import _ from 'lodash';
import { ShipmentDO } from '@linerra/system/src/models/veryk/shipment.entity';
import { S3Service } from '@linerra/system/src/services/s3Service';
import { ErrorShowType } from '@linerra/system/src/enum/errorShowType';
import logger from '@linerra/system/src/utils/logger';

const verykShipmentService = VerykShipmentService.instance;

export class VerykShipmentController {

  async getAvailableCarriers(req: Request, res: Response) {
    const carriers: string[] = await verykShipmentService.getAvailableCarriers();
    res.ok(carriers);
  }

  async quote(req: Request, res: Response) {
    const quotes: QuoteResVO[] = await verykShipmentService.quote(req.body, req.context.acceptLanguage);
    res.ok(quotes);
  }

  async save(req: Request, res: Response) {
    const shipment = await verykShipmentService.save(req.body, req.context.user);
    res.ok(shipment);
  }

  async get(req: Request, res: Response) {
    const shipment = await verykShipmentService.get(req.params.number);
    res.ok(shipmentDOToEditResVO(shipment));
  }

  async delete(req: Request, res: Response) {
    try {
      await verykShipmentService.delete(req.params.number);
      res.ok();
    } catch (error) {
      res.fail("Only open shipment can be deleted", "ONLY_OPEN_SHIPMENT_CAN_BE_DELETED");
    }
  }

  async getDetail(req: Request, res: Response) {
    const shipment = await verykShipmentService.get(req.params.number);
    res.ok(shipmentDOToDetailResVO(shipment));
  }

  async getPage(req: Request, res: Response) {

    const shipmentPage = await verykShipmentService.getPage({
      limit: Number(req.body.limit) || 10,
      keyword: req.body.keyword as string,
      status: req.body.status as string,
      dateRange: [req.body.startDate as string || new Date(new Date().setMonth(new Date().getMonth() - 3)).toISOString(), req.body.endDate as string || new Date().toISOString()],
      lastEvaluatedKey: req.body.lastEvaluatedKey as Record<string, unknown>
    }, req.context.user);

    res.ok({
      items: (shipmentPage.Items || []).map(shipment => shipmentDOToDetailResVO(shipment as ShipmentDO)),
      lastEvaluatedKey: shipmentPage.LastEvaluatedKey
    });
  }

  async submit(req: Request, res: Response) {
    const submit = await verykShipmentService.submit(req.body, req.context.user, req.context.acceptLanguage);
    res.ok(submit);
  }

  async shipmentList(req: Request, res: Response) {
    const shipments = await shipmentList({ keyword: req.query.keyword as string }, req.context.acceptLanguage);
    res.ok(shipments);
  }

  async shipmentDetail(req: Request, res: Response) {
    const shipment = await shipmentDetail({ id: req.params.id }, req.context.acceptLanguage);
    res.ok(shipment);
  }

  async getSignedLabelUrl(req: Request, res: Response) {
    try {
      const key = req.query.key as string;
      if (!key) {
        return res.fail('Key is required', 'KeyRequired', ErrorShowType.ERROR_MESSAGE, 400);
      }

      const url = await S3Service.instance.getSignedLabelUrl(key);
      res.ok({ url });
    } catch (error) {
      logger.error("Error getting label URL", error);
      res.fail('Error getting label URL', 'ErrorGettingLabelUrl', ErrorShowType.ERROR_MESSAGE, 500);
    }
  }

  async tracking(req: Request, res: Response) {
    const trackingApiRes = await tracking({ keyword: req.query.keyword as string }, req.context.acceptLanguage);
    res.ok(trackingApiRes);
  }


}
