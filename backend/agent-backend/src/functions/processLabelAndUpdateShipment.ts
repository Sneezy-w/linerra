import { VerykShipmentService } from '@linerra/system/src/services/veryk/verykShipmentService';
import { shipmentDetail } from '@linerra/system/src/utils/verykUtils';
import { shipmentApiResToApiUpdateDO } from '@linerra/system/src/models/veryk/shipment.convert';
import { Shipment } from '@linerra/system/src/dynamodb/toolbox';
import { UpdateAttributesCommand } from 'dynamodb-toolbox';
import logger from '@linerra/system/src/utils/logger';
import { sleep } from '@linerra/system/src/utils/utils';

interface ProcessLabelAndUpdateShipmentEvent {
  shipmentId: string;
  acceptLanguage: string;
}

export const handler = async (event: ProcessLabelAndUpdateShipmentEvent) => {
  const { shipmentId, acceptLanguage } = event;
  const verykShipmentService = VerykShipmentService.instance;

  //console.log(shipmentId, acceptLanguage);
  //console.log(process.env);



  //console.log(process.env);
  try {
    await sleep(5000);
    const labelFile = await verykShipmentService.saveAllLabelFile(shipmentId);

    const shipmentDetailApiRes = await shipmentDetail({ id: shipmentId }, acceptLanguage);

    const shipmentApiUpdateDO = shipmentApiResToApiUpdateDO(shipmentDetailApiRes);
    shipmentApiUpdateDO.labelFile = labelFile;

    await Shipment.build(UpdateAttributesCommand)
      .item({ ...shipmentApiUpdateDO })
      .options({ returnValues: "ALL_NEW" })
      .send();

    logger.info('Successfully processed label and updated shipment', { shipmentId });
  } catch (error) {
    logger.error('Error processing label and updating shipment:', error);
  }
};
