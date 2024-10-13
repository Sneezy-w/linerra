import { InitiationApiReq, DestinationApiReq, InitiationReqVO, DestinationReqVO, InitiationDO, DestinationDO, AddressApiRes, InitiationResVO, DestinationResVO } from "./address.entity";
import { PackageApiReq, PackageApiRes, PackageDO, PackageEditResVO, PackageReqVO } from "./package.entity";
import { OptionApiReq, OptionDO, OptionEditResVO, OptionReqVO } from "./option.entity";
import { Currency, ServiceApiRes } from "./general.entity";
import { ProductItem } from "./product.entity";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
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
  DC?: { // 确认收货(UPS,Canada Post可用) UPS: 不是发货到CA可用
    state: string; // 是否确认收货(选项:true/false)
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
  //   "option-amount": string; // 到付金额
  // }
  // D2PO?: { // Deliver to Post Office(available where Canada Post)
  //   state: string; // Yes or No(option:true/false)
  //   "option-qualifier-2	": string; // Post Office ID
  //   email?: string; // 邮箱
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

  // accessorialServices?: { // 包裹类型为“pallet”或货运商为dayrosssameday时可选	 Dayross Fedex
  //   state?: string; // Yes or No(option:true/false)

  //   /**
  //    * 货运商为Dayross时可多选值：
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
  //     * 货运商为Dayrosssameday时可多选值：
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
  //     * 货运商为Fedex且包裹类型为“pallet”可多选值：
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

  // pickup?: { // 仅货运商Dayross，Dayrosssameday可用且必填
  //   state?: string; // Yes
  //   starttime?: string; // 开始时间 预约上门取件开始时间 可选值:"06:00","06:30","07:00","07:30","08:00","08:30"......"20:30";
  //   endtime?: string; // 预约取件结束时间 可选值:“07:00","07:30","08:00","08:30"......"20:30" ;
  //   date?: string; // 预约取件日期(注：请避开节假日)  格式：YY-mm-dd;
  // },

  RS?: { // Return Service 仅UPS可用
    state: string; // 是否开启回件功能取值(true/false)

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

    description?: string; // 回件服务描述
  },

  DG?: { // 危险品（支持DHL,Fedex非文档类型包裹） not available when ship to CA
    state: string; // Yes or No(option:true/false)

    /**
     * 危险物品类型 可选有效值
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

  DIT?: { // 使用DHL官方发票，该选项不能和EDI（电子发票）同时使用
    state: string; // Yes or No(option:true/false)

    type?: string; //发票类型，可选值： CMI (Commercail Invoice)，PFI (Proforma Invoice)
  },

  TermsOfTrade?: { // 贸易条款 TermsOfTrade,支持货运商（FEDEX） 非文档类型包裹   not available when ship to CA
    state: string; // 有效值:DDP, DDU（DDP必须确认管理员已提前预设支付账号）
  },

  IOSS?: { // 欧盟关税代缴 IOSS(Canada Post, Fedex(not document)可用)  not available when ship to CA
    state: string; // 有效值:true,false 有效值 0（否）或1（是）
    ioss_id?: string; // 欧盟关税代缴 IOSS ID  IOSS/state 值为1时，必填。最大长度13位。

    /**
     * 	选择承运商为FEDEX时必填，有效值："PERSONAL_NATIONAL", "PERSONAL_STATE", "FEDERAL", "BUSINESS_NATIONAL", "BUSINESS_STATE", "BUSINESS_UNION"。
     */
    type?: string;
  },

}
