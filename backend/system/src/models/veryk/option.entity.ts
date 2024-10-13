
export interface OptionReqVO {
  //referenceNumber?: string;
  memo?: string;
  //vipAccount?: string;
  packingFee?: number;
  labelFormat?: string;
}

export interface OptionApiReq {
  reference_number?: string;
  memo?: string;
  //vip_account?: string;
  packing_fee?: number;
  label_format?: string;
}


export interface OptionDO {
  memo?: string;
  packingFee?: number;
  labelFormat?: string;
}

export interface OptionEditResVO {
  memo?: string;
  packingFee?: number;
  labelFormat?: string;
}
