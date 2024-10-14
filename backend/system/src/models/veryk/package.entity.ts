import { Currency } from "./general.entity";

export interface BasePackageVO {
  type: string;
  packages: PackageItemVO[];
}

export interface PackageItem {
  weight: number;
  dimension?: PackageItemDimension;
  insurance?: number;
  additional?: Partial<PackageAdditional>;
  sinsured?: number, // Veryk insurance, available when fedex
}

export interface PackageItemVO {
  weight: number;
  dimension?: PackageItemDimension;
  insurance?: number;
  additional?: Partial<PackageAdditional>;
  sinsured?: number, // Veryk insurance, available when fedex
}

export interface PackageItemDimension {
  length: number;
  width: number;
  height: number;
}

export interface PackageReqVO extends BasePackageVO {
  // type: string;
  // packages: PackageItemReqVO[];

}

export interface PackageApiReq {
  type: string;
  packages: PackageItem[];
}

export interface PackageAdditional {
  DC: { // Delivery Confirmation(available when UPS and ship to CA)
    state: string; // Yes or No
    type?: string; // 1:No Signature, 2:Signature Required, 3:Adult Signature Required
  },
  COD: { // Collect on Delivery(UPS and ship to U.S. or Canada available, ship to U.S. should not be a Env)
    state: string; // Yes or No
    amount?: number; // Collect on Delivery amount(required when state is true)
    fund_type?: string; // Fund Type,optionst(required when state is true): 0: check,cashier’s check or money order - no cash allowed, 8: cashier’s check or money order - no cash allowed
  },
  AH: { // Additional Handling(UPS and package should not be a Env available)
    state: string; // Additional Handling Yes or No(option:true/false)
  },
  ReferenceNumber: { // UPS Reference Number
    state: string; // Reference Number Yes or No(option:true/false)
    number?: string; // Reference Number
  },
  info: { // To the UAE(available when Fedex and ship to AE)
    state: string; // To the UAE Yes or No(option:true/false)
    ItemDescriptionForClearance?: string; // Description For Clearanc(required when state is true)
  }
  // |
  // { // dayros and dayros sameday
  //   state: string; // Yes (option:true)
  //   description: string; // Description of goods inside the pallet. It is available and required when the freight forwarder is dayros and dayros sameday
  // },
  IM: { // UPS description
    state: string; // Yes or No(option:true/false) Destination is mandatory for Mexico.
    description?: string;
  },
  packcode: { // Package description(available when Fedex and ship to CA,US,PR)
    //state: string; // Yes or No(option:true/false)
    state: string; // Pack Code: PIECE, BARREL, BASKET, BOX, BUNDLE, CARTON, CASE, CRATE, CYLINDER, DRUM, ENVELOPE, OTHER, PAIL, PALLET, REEL, SKID, TANK, TUBE
  },
  // pallet: { // Pallet data, only available when freight forwarder is Fedex Freight, and required
  //   state: string; // Yes (option:true)
  //   description: string;
  // }
}

export interface PackageEditResVO extends BasePackageVO {
  //type: string;
  //packages: PackageItemReqVO[];
}

// export interface PackageItemReqVO {
//   weight: number;
//   dimension: PackageItemDimensionReqVO;
//   insurance: number;
// }

// export interface PackageItemApiReq {
//   weight: number;
//   dimension: PackageItemDimensionApiReq;
//   insurance: number;
// }

// export interface PackageItemDimensionReqVO {
//   length: number;
//   width: number;
//   height: number;
// }

// export interface PackageItemDimensionApiReq {
//   length: number;
//   width: number;
//   height: number;
// }

export interface PackageDO {
  type: string;
  packages: PackageItemDO[];
}

export interface PackageItemDO {
  waybillNumber?: string;
  weight: number;
  dimension?: PackageItemDimensionDO;
  insurance?: Currency;
  additional?: Partial<PackageAdditional>;
  sinsured?: number, // Veryk insurance, available when fedex
}

export interface PackageItemDimensionDO extends PackageItemDimension {
}

export interface PackageApiRes {
  type: string;
  packages: PackageItemApiRes[];
}

export interface PackageItemApiRes {
  waybill_number: string;
  weight: string;
  dimension: PackageItemDimensionApiRes;
  insurance: Currency;
  // additional?: Partial<PackageAdditional>;
  // sinsured?: number, // Veryk insurance, available when fedex
}

export interface PackageItemDimensionApiRes {
  length: string;
  width: string;
  height: string;
}
