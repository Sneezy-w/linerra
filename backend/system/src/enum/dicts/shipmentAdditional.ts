import { BaseDictEnum } from "./baseDictEnum";

export class ShipmentAdditionalDCType extends BaseDictEnum<string> {
  static readonly SIGNATURE_REQUIRED = new ShipmentAdditionalDCType('SIGNATURE_REQUIRED', 'shipmentAdditional.DC.signatureRequired', '1', 'Signature Required');
  static readonly ADULT_SIGNATURE_REQUIRED = new ShipmentAdditionalDCType('ADULT_SIGNATURE_REQUIRED', 'shipmentAdditional.DC.adultSignatureRequired', '2', 'Adult Signature Required');
}

export class ShipmentAdditionalSOType extends BaseDictEnum<String> {
  static readonly SO = new ShipmentAdditionalSOType('SO', 'shipmentAdditional.SO.so', 'SO', 'Signature');
  static readonly PA18 = new ShipmentAdditionalSOType('PA18', 'shipmentAdditional.SO.pa18', 'PA18', 'Signature(Proof of Age Required - 18)');
  static readonly PA19 = new ShipmentAdditionalSOType('PA19', 'shipmentAdditional.SO.pa19', 'PA19', 'Signature(Proof of Age Required - 19)');
}

export class ShipmentAdditionalREFStateCanadaPost extends BaseDictEnum<String> {
  static readonly DOC = new ShipmentAdditionalREFStateCanadaPost('DOC', 'shipmentAdditional.REF.doc', 'DOC', 'Document');
  static readonly SAM = new ShipmentAdditionalREFStateCanadaPost('SAM', 'shipmentAdditional.REF.sam', 'SAM', 'Commercial Sample');
  static readonly REP = new ShipmentAdditionalREFStateCanadaPost('REP', 'shipmentAdditional.REF.rep', 'REP', 'Repair Or Warranty');
  static readonly SOG = new ShipmentAdditionalREFStateCanadaPost('SOG', 'shipmentAdditional.REF.sog', 'SOG', 'Sale Of Goods');
  static readonly OTH = new ShipmentAdditionalREFStateCanadaPost('OTH', 'shipmentAdditional.REF.oth', 'OTH', 'Other');
}

export class ShipmentAdditionalREFStateUPS extends BaseDictEnum<String> {
  static readonly GIFT = new ShipmentAdditionalREFStateUPS('GIFT', 'shipmentAdditional.REF.gift', 'GIFT', 'Gift');
  static readonly SALE = new ShipmentAdditionalREFStateUPS('SALE', 'shipmentAdditional.REF.sale', 'SALE', 'Sale Of Goods');
  static readonly REPAIR = new ShipmentAdditionalREFStateUPS('REPAIR', 'shipmentAdditional.REF.repair', 'REPAIR', 'Repair Or Warranty');
  static readonly SAMPLE = new ShipmentAdditionalREFStateUPS('SAMPLE', 'shipmentAdditional.REF.sample', 'SAMPLE', 'Commercial Sample');
  static readonly INTERCOMPANYDATA = new ShipmentAdditionalREFStateUPS('INTERCOMPANYDATA', 'shipmentAdditional.REF.intercompanydata', 'INTERCOMPANYDATA', 'Intercompany');
  static readonly RETURN = new ShipmentAdditionalREFStateUPS('RETURN', 'shipmentAdditional.REF.return', 'RETURN', 'Return');
  static readonly OTHER = new ShipmentAdditionalREFStateUPS('OTHER', 'shipmentAdditional.REF.other', 'OTHER', 'Other');
}

export class ShipmentAdditionalSignatureTypeFedex extends BaseDictEnum<String> {
  static readonly SERVICE_DEFAULT = new ShipmentAdditionalSignatureTypeFedex('SERVICE_DEFAULT', 'shipmentAdditional.signature.serviceDefault', 'SERVICE_DEFAULT', 'Service Default');
  static readonly NO_SIGNATURE_REQUIRED = new ShipmentAdditionalSignatureTypeFedex('NO_SIGNATURE_REQUIRED', 'shipmentAdditional.signature.noSignatureRequired', 'NO_SIGNATURE_REQUIRED', 'No Signature Required');
  static readonly INDIRECT = new ShipmentAdditionalSignatureTypeFedex('INDIRECT', 'shipmentAdditional.signature.indirect', 'INDIRECT', 'Indirect');
  static readonly DIRECT = new ShipmentAdditionalSignatureTypeFedex('DIRECT', 'shipmentAdditional.signature.direct', 'DIRECT', 'Direct');
  static readonly ADULT = new ShipmentAdditionalSignatureTypeFedex('ADULT', 'shipmentAdditional.signature.adult', 'ADULT', 'Adult');
}

export class ShipmentAdditionalSignatureTypePurolator extends BaseDictEnum<String> {
  static readonly ORIGIN_SIGNATURE_NOT_REQUIRED = new ShipmentAdditionalSignatureTypePurolator('ORIGIN_SIGNATURE_NOT_REQUIRED', 'shipmentAdditional.signature.originSignatureNotRequired', 'OriginSignatureNotRequired', 'No Signature Required');
  static readonly RESIDENTIAL_SIGNATURE_DOMESTIC = new ShipmentAdditionalSignatureTypePurolator('RESIDENTIAL_SIGNATURE_DOMESTIC', 'shipmentAdditional.signature.residentialSignatureDomestic', 'ResidentialSignatureDomestic', 'Residential Signature Domestic');
  static readonly ADULT_SIGNATURE_REQUIRED = new ShipmentAdditionalSignatureTypePurolator('ADULT_SIGNATURE_REQUIRED', 'shipmentAdditional.signature.adultSignatureRequired', 'AdultSignatureRequired', 'Adult Signature Required');
}

export class ShipmentAdditionalSignatureTypePurolatorInternational extends BaseDictEnum<String> {
  static readonly RESIDENTIAL_SIGNATURE_INTL = new ShipmentAdditionalSignatureTypePurolatorInternational('RESIDENTIAL_SIGNATURE_INTL', 'shipmentAdditional.signature.residentialSignatureIntl', 'ResidentialSignatureIntl', 'Residential Signature Intl');
}

export class ShipmentAdditionalRSCode extends BaseDictEnum<String> {
  static readonly PRINT_AND_MAIL_RETURN_LABEL = new ShipmentAdditionalRSCode('PRINT_AND_MAIL_RETURN_LABEL', 'shipmentAdditional.RS.printAndMailReturnLabel', '2', 'Print and Mail Return Label');
  static readonly ONE_ATTEMPT_RETURN_LABEL = new ShipmentAdditionalRSCode('ONE_ATTEMPT_RETURN_LABEL', 'shipmentAdditional.RS.oneAttemptReturnLabel', '3', 'One-Attempt Return Label');
  static readonly THREE_ATTEMPT_RETURN_LABEL = new ShipmentAdditionalRSCode('THREE_ATTEMPT_RETURN_LABEL', 'shipmentAdditional.RS.threeAttemptReturnLabel', '5', 'Three Attempt Return Label');
  static readonly ELECTRONIC_RETURN_LABEL = new ShipmentAdditionalRSCode('ELECTRONIC_RETURN_LABEL', 'shipmentAdditional.RS.electronicReturnLabel', '8', 'Electronic Return Label');
  static readonly PRINT_RETURN_LABEL = new ShipmentAdditionalRSCode('PRINT_RETURN_LABEL', 'shipmentAdditional.RS.printReturnLabel', '9', 'Print Return Label');
}

export class ShipmentAdditionalDGTypeDHL extends BaseDictEnum<String> {
  static readonly DANGEROUS_GOODS = new ShipmentAdditionalDGTypeDHL('DANGEROUS_GOODS', 'shipmentAdditional.DG.dangerousGoods', 'HE', 'Dangerous Goods');
  static readonly NOT_RESTRICTED_DANGEROUS_GOODS = new ShipmentAdditionalDGTypeDHL('NOT_RESTRICTED_DANGEROUS_GOODS', 'shipmentAdditional.DG.notRestrictedDangerousGoods', 'HU', 'Not Restricted Dangerous Goods');
  static readonly LITHIUM_METAL_PI970_SECTION_II = new ShipmentAdditionalDGTypeDHL('LITHIUM_METAL_PI970_SECTION_II', 'shipmentAdditional.DG.lithiumMetalPI970SectionII', 'HW', 'Lithium Metal PI970 Section II');
  static readonly LITHIUM_METAL_PI969_SECTION_II = new ShipmentAdditionalDGTypeDHL('LITHIUM_METAL_PI969_SECTION_II', 'shipmentAdditional.DG.lithiumMetalPI969SectionII', 'HM', 'Lithium Metal PI969 Section II');
  static readonly LITHIUM_ION_PI966_SECTION_II = new ShipmentAdditionalDGTypeDHL('LITHIUM_ION_PI966_SECTION_II', 'shipmentAdditional.DG.lithiumIonPI966SectionII', 'HD', 'Lithium Ion PI966 Section II');
  static readonly LITHIUM_ION_PI967_SECTION_II = new ShipmentAdditionalDGTypeDHL('LITHIUM_ION_PI967_SECTION_II', 'shipmentAdditional.DG.lithiumIonPI967SectionII', 'HV', 'Lithium Ion PI967 Section II');
}

export class ShipmentAdditionalDGTypeFedex extends BaseDictEnum<String> {
  static readonly ACCESSIBLE = new ShipmentAdditionalDGTypeFedex('ACCESSIBLE', 'shipmentAdditional.DG.accessible', 'ACCESSIBLE', 'Accessible');
  static readonly INACCESSIBLE = new ShipmentAdditionalDGTypeFedex('INACCESSIBLE', 'shipmentAdditional.DG.inaccessible', 'INACCESSIBLE', 'Inaccessible');
  static readonly LITHIUM_METAL = new ShipmentAdditionalDGTypeFedex('LITHIUM_METAL', 'shipmentAdditional.DG.lithiumMetal', 'LITHIUM_METAL', '(Battery)Lithium metal');
  static readonly LITHIUM_ION = new ShipmentAdditionalDGTypeFedex('LITHIUM_ION', 'shipmentAdditional.DG.lithiumIon', 'LITHIUM_ION', '(Battery)Lithium ion');
}

export class ShipmentAdditionalDITType extends BaseDictEnum<String> {
  static readonly COMMERCIAL_INVOICE = new ShipmentAdditionalDITType('COMMERCIAL_INVOICE', 'shipmentAdditional.DIT.commercialInvoice', 'CMI', 'Commercial Invoice');
  static readonly PROFORMA_INVOICE = new ShipmentAdditionalDITType('PROFORMA_INVOICE', 'shipmentAdditional.DIT.proformaInvoice', 'PFI', 'Proforma Invoice');
}

export class ShipmentAdditionalTermsOfTradeState extends BaseDictEnum<String> {
  static readonly DDP = new ShipmentAdditionalTermsOfTradeState('DDP', 'shipmentAdditional.TermsOfTrade.ddp', 'DDP', 'DDP');
  static readonly DDU = new ShipmentAdditionalTermsOfTradeState('DDU', 'shipmentAdditional.TermsOfTrade.ddu', 'DDU', 'DDU');
}

export class ShipmentAdditionalIOSSType extends BaseDictEnum<String> {
  static readonly PERSONAL_NATIONAL = new ShipmentAdditionalIOSSType('PERSONAL_NATIONAL', 'shipmentAdditional.IOSS.personalNational', 'PERSONAL_NATIONAL', 'PERSONAL NATIONAL');
  static readonly PERSONAL_STATE = new ShipmentAdditionalIOSSType('PERSONAL_STATE', 'shipmentAdditional.IOSS.personalState', 'PERSONAL_STATE', 'PERSONAL STATE');
  static readonly FEDERAL = new ShipmentAdditionalIOSSType('FEDERAL', 'shipmentAdditional.IOSS.federal', 'FEDERAL', 'FEDERAL');
  static readonly BUSINESS_NATIONAL = new ShipmentAdditionalIOSSType('BUSINESS_NATIONAL', 'shipmentAdditional.IOSS.businessNational', 'BUSINESS_NATIONAL', 'BUSINESS NATIONAL');
  static readonly BUSINESS_STATE = new ShipmentAdditionalIOSSType('BUSINESS_STATE', 'shipmentAdditional.IOSS.businessState', 'BUSINESS_STATE', 'BUSINESS STATE');
  static readonly BUSINESS_UNION = new ShipmentAdditionalIOSSType('BUSINESS_UNION', 'shipmentAdditional.IOSS.businessUnion', 'BUSINESS_UNION', 'BUSINESS UNION');
}
