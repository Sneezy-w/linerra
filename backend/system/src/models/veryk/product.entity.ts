export interface ProductItem {
  name: string; // Product Name
  qty?: number; // Quantity
  price?: number; // Unit Price

  unit?: string;

  origin?: string; // 原产国代码，例：CN        UPS,DHL,Fedex,Purolator可用
  HScode?: string; // 海关编码  UPS,DHL,UBI可用
  //weight?: number; // Total weight of this commodity, available when Fedex Postpony

}
