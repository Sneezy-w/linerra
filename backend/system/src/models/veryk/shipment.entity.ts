import { InitiationApiReq, DestinationApiReq, InitiationReqVO, DestinationReqVO, InitiationDO, DestinationDO, AddressApiRes, InitiationResVO, DestinationResVO } from "./address.entity";
import { PackageApiReq, PackageApiRes, PackageDO, PackageEditResVO, PackageReqVO } from "./package.entity";
import { OptionApiReq, OptionDO, OptionEditResVO, OptionReqVO } from "./option.entity";
import { Currency, ServiceApiRes } from "./general.entity";
import { ProductItem } from "./product.entity";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
import { LabelFile } from "./label.entity";
export interface ShipmentReqVO {
  //token?: string;
  number?: string;
  serviceId: string;
  //state: "open" | "order";
  initiation: InitiationReqVO;
  destination: DestinationReqVO;
  package: PackageReqVO;
  option: OptionReqVO;

  product?: ProductItem[];
  destinationLocalized?: DestinationReqVO;
  sadditional?: ShipmentAdditional
  price?: Price
}

export interface ShipmentApiReq {
  //token: string;
  service_id: string;
  payment_method: "account";
  state: "order";
  initiation: InitiationApiReq;
  destination: DestinationApiReq;
  package: PackageApiReq;
  option: OptionApiReq;

  product?: ProductItem[];
  destination_localized?: DestinationApiReq;
  sadditional?: ShipmentAdditional
}
export interface ShipmentDO {
  number: string;
  externalId?: string;
  waybillNumber?: string;
  serviceId: string;
  status: "open" | "submitted" | "completed" | "cancelled";
  initiationRegionId?: string;
  destinationRegionId?: string;
  initiation: InitiationDO;
  destination: DestinationDO;
  package: PackageDO;
  option: OptionDO;
  price?: Price;
  payments?: PaymentDO[];
  total?: Currency;
  submittedAt?: string;

  stationId: string;
  //sortTimestamp: string;
  //GSI1PK: "SHIPMENT_NO";
  product?: ProductItem[];
  destinationLocalized?: DestinationDO;
  sadditional?: ShipmentAdditional;

  labelFile?: LabelFile;


  created?: string;
}

export interface ShipmentApiUpdateDO {
  number: string;
  externalId: string;
  waybillNumber: string;
  serviceId: string;
  status: "submitted" | "completed" | "cancelled";
  //initiationRegionId: string;
  //destinationRegionId: string;
  //initiation: InitiationDO;
  //destination: DestinationDO;
  package: PackageDO;
  price: Price;
  payments: PaymentDO[];
  total: Currency;
  submittedAt: string;

  labelFile?: LabelFile;

  //GSI1PK: "SHIPMENT_NO";
  //product?: ProductItem[];
  //destinationLocalized?: DestinationDO;
  //sadditional?: ShipmentAdditional
}

export interface ShipmentEditResVO {
  number: string;
  serviceId: string;
  initiation: InitiationResVO;
  destination: DestinationResVO;
  package: PackageEditResVO;
  option: OptionEditResVO;
  //price: Price;
  //payments: PaymentDO[];
  //total: Currency;
  //submittedAt: string;

  status?: "open" | "submitted" | "completed" | "cancelled";

  product?: ProductItem[];
  destinationLocalized?: DestinationResVO;
  sadditional?: ShipmentAdditional
}

export interface ShipmentDetailResVO {
  number: string;
  externalId: string;
  waybillNumber: string;
  serviceId: string;
  status: "open" | "submitted" | "completed" | "cancelled";
  initiationRegionId: string;
  destinationRegionId: string;
  initiation: InitiationDO;
  destination: DestinationDO;
  package: PackageDO;
  option: OptionDO;
  price: Price;
  payments: PaymentDO[];
  total: Currency;
  submittedAt: string;

  product?: ProductItem[];
  destinationLocalized?: DestinationDO;
  sadditional?: ShipmentAdditional;

  labelFile?: LabelFile;

  created?: string;
}

export interface ResponsePageVO<T> {
  items: T[];
  lastEvaluatedKey?: Record<string, NativeAttributeValue>
}

export interface Price {
  msrp?: Currency;
  details?: PriceDetail[];
  charges?: PriceDetail[];
}

export interface PriceDetail {
  code: string;
  description: string;
  price: Currency;
}




export interface PaymentDO {
  dateTime: string;
  description: string;
  subtotal: Currency;
}

export interface ShipmentApiRes {
  id: string;
  reference_number: string;
  waybill_number: string;
  initiation_region_id: string;
  destination_region_id: string;
  initiation: {
    en_US: AddressApiRes;
  };
  destination: {
    en_US: AddressApiRes;
  };
  service: ServiceApiRes;
  iselink: number;
  package: PackageApiRes;
  price: Price;
  state: {
    id: string;
    code: string;
    name: string;
  };
  payments: {
    [key: string]: PaymentApiRes;
  };
  total: Currency;
  message: string;
  creationtime: string;
}

export interface PaymentApiRes {
  datetime: string;
  description: string;
  subtotal: Currency;
}

export interface ShipmentAdditional {
  DC?: { // Confirm receipt(available when UPS,Canada Post) UPS: Not available when shipping to CA
    state: string; // Whether to confirm receipt(option:true/false)
    type?: string; // Confirmation Type(available when UPS),options: 1:Signature Required, 2:Adult Signature Required
  }
  SO?: { // Signature(available when Canada Post)
    state: string; // Signature Yes or No
    "signature-type"?: string; // Signature Type,options: SO:Signature; PA18:Proof of Age Required - 18; PA19:Proof of Age Required - 19
  }
  HFP?: { // Hold for Pickup(available when Canada Post) Card for pickup(available when Canada Post TO CA)
    state: string; // Card for pickup Yes or No(option:true/false)
  }
  DNS?: { // Do not safe drop(available when Canada Post to CA)
    state: string; // Yes or No(option:true/false)
  }
  LAD?: { // Leave at door - do not card(available when Canada Post to CA)
    state: string; // Yes or No(option:true/false)
  },
  // COD?: { // Collect on delivery(available where Canada Post to CA)
  //   state: string; // Yes or No(option:true/false)
  //   "option-amount": string; // Amount to collect
  // }
  // D2PO?: { // Deliver to Post Office(available where Canada Post)
  //   state: string; // Yes or No(option:true/false)
  //   "option-qualifier-2	": string; // Post Office ID
  //   email?: string; // Email
  // }

  _RFE?: { // Reason For Export(available where Canada Post/ups and not ship to CA)


    /**
     *  Reason For Export options:
     *
     *  Canada Post:
     *  DOC:Document;
     *  SAM:Commercial Sample;
     *  REP:Repair Or Warranty;
     *  SOG:Sale Of Goods;
     *  OTH:Other
     *
     *  UPS:
     *  GIFT:Gift;
     *  SALE:Sale Of Goods;
     *  REPAIR:Repair Or Warranty;
     *  SAMPLE:Commercial Sample;
     *  INTERCOMPANYDATA:Intercompany;
     *  RETURN:Return;
     *  OTHER:Other
     */
    state: string;
    "other-reason	"?: string; // Other Reason(required when state is OTH(canada post) or OTHER(ups))
  },

  EDI?: { // E-Commercial Invoice(available where DHL,UPS,FedEx) International non-document packages
    state: string; // E-Commercial Invoice Yes or No(option:true/false)
  },

  signature?: { // Delivery Confirmation(available where Fedex,Purolator) In Canada and the U.S., Indirect Signature Required is available for residential shipments only.
    state: string; // Signature Yes or No

    /**
     * Confirmation Type(required where state is true)
     *
     * FEDEX Options:
     * SERVICE_DEFAULT:Service default Signature
     * NO_SIGNATURE_REQUIRED:No signature Required
     * INDIRECT:Indirect Signature Required
     * DIRECT:Direct Signature Required
     * ADULT:Adult Signature Required
     *
     * Purolator Options:
     * OriginSignatureNotRequired:No signature Required
     * ResidentialSignatureDomestic:Residential Signature Domestic
     * AdultSignatureRequired:Adult Signature Required
     *
     * Purolator international:
     * ResidentialSignatureIntl:Residential Signature Intl
     */
    type?: string;

  },

  // accessorialServices?: { // Optional when package type is "pallet" or freight forwarder is dayrosssameday
  //   state?: string; // Yes or No(option:true/false)

  //   /**
  //    * Valid values for freight forwarder Dayross:
  //     * APTFGT
  //     * DANGER
  //     * PRESDL
  //     * PRESPU
  //     * TLGDEL
  //     * TLGPU
  //     * INBOND
  //     * PROTEC
  //     * TRDSHW
  //     *
  //     *
  //     * Valid values for freight forwarder Dayrosssameday:
  //     * 2-MAN
  //     * 2-MANP
  //     * APPT
  //     * APPTPU
  //     * DISPOS
  //     * HAZARD
  //     * HEAT
  //     * TAIL
  //     * TAILPU
  //     *
  //     *
  //     * Valid values for freight forwarder Fedex and package type is "pallet":
  //     * CALL_BEFORE_DELIVERY
  //     * LIMITED_ACCESS_PICKUP
  //     * LIMITED_ACCESS_DELIVERY
  //     * LIFTGATE_DELIVERY
  //     * LIFTGATE_PICKUP
  //     * DO_NOT_STACK_PALLETS
  //     * TOP_LOAD
  //     * INSIDE_DELIVERY
  //     * INSIDE_PICKUP
  //     */
  //   accessorialServices?: string[];
  // },

  // pickup?: { // Only available when freight forwarder Dayross, Dayrosssameday
  //   state?: string; // Yes
  //   starttime?: string; // Start time for appointment pickup Valid values:"06:00","06:30","07:00","07:30","08:00","08:30"......"20:30";
  //   endtime?: string; // End time for appointment pickup Valid values:"07:00","07:30","08:00","08:30"......"20:30" ;
  //   date?: string; // Appointment pickup date (Note: Please avoid holidays) Format: YY-mm-dd;
  // },

  RS?: { // Return Service Only available when UPS
    state: string; // Whether to enable return service(option:true/false)

    /**
     * Return Service Type
     * Optional value：2,3,5,8,9
     * 2：Print and Mail Return Label
     * 3：One-Attempt Return Label
     * 5：Three Attempt Return Label
     * 8：Electronic Return Label
     * 9：Print Return Label (default)
     */
    code?: string;

    description?: string; // Return service description
  },

  DG?: { // Dangerous goods(available when DHL,Fedex non-document type packages) not available when ship to CA
    state: string; // Yes or No(option:true/false)

    /**
     * Dangerous goods type Valid values:
     *
     * DHL:
     * HE (Dangerous Goods)
     * HU (Not Restricted Dangerous Goods)
     * HW (Lithium Metal PI970 Section II)
     * HM (Lithium Metal PI969 Section II)
     * HD (Lithium Ion PI966 Section II)
     * HV (Lithium Ion PI967 Section II)
     *
     * Fedex:
     * ACCESSIBLE (Accessible)
     * INACCESSIBLE (Inaccessible)
     * LITHIUM_METAL ((Battery)Lithium metal)
     * LITHIUM_ION ((Battery)Lithium ion)
     */
    type?: string;
  },

  DIT?: { // Use DHL official invoice, this option cannot be used with EDI (electronic invoice)
    state: string; // Yes or No(option:true/false)

    type?: string; // Invoice type, valid values: CMI (Commercail Invoice)，PFI (Proforma Invoice)
  },

  TermsOfTrade?: { // Terms of trade, supported by freight forwarder (FEDEX) non-document type packages  not available when ship to CA
    state: string; // Valid values: DDP, DDU (DDP must confirm that the administrator has previously set up the payment account)
  },

  IOSS?: { // EU customs duty payment, available when Canada Post, Fedex(not document)  not available when ship to CA
    state: string; // Valid values: true,false  Valid values: 0 (No) or 1 (Yes)
    ioss_id?: string; // EU customs duty payment IOSS ID  Required when IOSS/state value is 1. Maximum length 13 digits.

    /**
     * Required when state is 1. Valid values: "PERSONAL_NATIONAL", "PERSONAL_STATE", "FEDERAL", "BUSINESS_NATIONAL", "BUSINESS_STATE", "BUSINESS_UNION".
     */
    type?: string;
  },

}
