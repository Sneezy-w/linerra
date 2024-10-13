import { AddressType } from './dicts/addressType';
import { PackageType } from './dicts/packageType';
import { ShipmentStatus } from './dicts/shipmentStatus';
import { ProductUnitDHL, ProductUnitUPS, ProductUnitFedex } from './dicts/productUnit';
import { PackageAdditionalDCType, PackageAdditionalCODFundType, PackCodeState } from './dicts/packageAdditional';
import { LabelFormatDHL, LabelFormatUPS, LabelFormatPurolator, LabelFormatCanadaPost, LabelFormatFedex } from './dicts/labelFormat';
import {
  ShipmentAdditionalDCType,
  ShipmentAdditionalSOType,
  ShipmentAdditionalREFStateUPS,
  ShipmentAdditionalREFStateCanadaPost,
  ShipmentAdditionalSignatureTypeFedex,
  ShipmentAdditionalSignatureTypePurolator,
  ShipmentAdditionalSignatureTypePurolatorInternational,
  ShipmentAdditionalRSCode,
  ShipmentAdditionalDGTypeDHL,
  ShipmentAdditionalDGTypeFedex,
  ShipmentAdditionalDITType,
  ShipmentAdditionalTermsOfTradeState,
  ShipmentAdditionalIOSSType
} from './dicts/shipmentAdditional';

const Dicts = {
  "addressType": Object.values(AddressType),
  "packageType": Object.values(PackageType),
  "shipmentStatus": Object.values(ShipmentStatus),
  "productUnitDHL": Object.values(ProductUnitDHL),
  "productUnitUPS": Object.values(ProductUnitUPS),
  "productUnitFedex": Object.values(ProductUnitFedex),
  "packCodeState": Object.values(PackCodeState),
  "labelFormatDHL": Object.values(LabelFormatDHL),
  "labelFormatUPS": Object.values(LabelFormatUPS),
  "labelFormatPurolator": Object.values(LabelFormatPurolator),
  "labelFormatCanadaPost": Object.values(LabelFormatCanadaPost),
  "labelFormatFedex": Object.values(LabelFormatFedex),
  "packageAdditionalDCType": Object.values(PackageAdditionalDCType),
  "packageAdditionalCODFundType": Object.values(PackageAdditionalCODFundType),
  "shipmentAdditionalDCType": Object.values(ShipmentAdditionalDCType),
  "shipmentAdditionalSOType": Object.values(ShipmentAdditionalSOType),
  "shipmentAdditionalREFStateCanadaPost": Object.values(ShipmentAdditionalREFStateCanadaPost),
  "shipmentAdditionalREFStateUPS": Object.values(ShipmentAdditionalREFStateUPS),
  "shipmentAdditionalSignatureTypeFedex": Object.values(ShipmentAdditionalSignatureTypeFedex),
  "shipmentAdditionalSignatureTypePurolator": Object.values(ShipmentAdditionalSignatureTypePurolator),
  "shipmentAdditionalSignatureTypePurolatorInternational": Object.values(ShipmentAdditionalSignatureTypePurolatorInternational),
  "shipmentAdditionalRSCode": Object.values(ShipmentAdditionalRSCode),
  "shipmentAdditionalDGTypeDHL": Object.values(ShipmentAdditionalDGTypeDHL),
  "shipmentAdditionalDGTypeFedex": Object.values(ShipmentAdditionalDGTypeFedex),
  "shipmentAdditionalDITType": Object.values(ShipmentAdditionalDITType),
  "shipmentAdditionalIOSSType": Object.values(ShipmentAdditionalIOSSType),
  "shipmentAdditionalTermsOfTradeState": Object.values(ShipmentAdditionalTermsOfTradeState),
};

export default Dicts;
