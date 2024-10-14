export interface ProductItem {
  name: string; // Product Name
  qty?: number; // Quantity
  price?: number; // Unit Price

  unit?: string;

  origin?: string; // Country of origin code, example: CN        UPS,DHL,Fedex,Purolator available
  HScode?: string; // Customs code  UPS,DHL,UBI available
  //weight?: number; // Total weight of this commodity, available when Fedex Postpony

}
