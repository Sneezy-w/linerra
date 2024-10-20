declare namespace VerykType {
  type Currency = {
    code: string;
    symbol: string;
    value: string;
  };

  type Service = {
    id: string;
    code: string;
    name: string;
    carrier?: Carrier;
  };

  type Carrier = {
    id: string;
    code: string;
    groupCode: string;
    logo?: string;
    name: string;
    regionId: string;
    currency: Currency;
    services?: Service[];
  };

  type Region = {
    id: string;
    name: string;
    phoneCode: string;
    type: string;
    timezone?: string;
    provinces: Province[];
  };

  type Province = {
    id: string;
    name: string;
    code: string;
  };

  type QuoteRequest = {
    carrierIds: string[];
    serviceId: string;
    initiation: Destination;
    destination: Destination;
    option: Option;
    package: Package;
  };

  type Destination = {
    address: string;
    address2: string;
    address3: string;
    city: string;
    company: string;
    mobilePhone: string;
    name: string;
    postalCode: string;
    province: string;
    regionId: string;
    type: string;
  };

  type Option = {
    memo: string;
    packingFee: number;
    vipAccount: string;
  };

  type Package = {
    packages: PackageAttribute[];
    type: string;
  };

  type PackageAttribute = {
    dimension?: {
      height: number;
      length: number;
      width: number;
    };
    insurance?: number;
    weight?: number;
  };

  type QuoteResponse = {
    carrierId: string;
    carrierCode: string;
    name: string;
    currency: Currency;
    services: QuoteService[];
  };

  type QuoteService = {
    carrierZoneId: number;
    charge: string;
    chargeDetails: {
      code: string;
      name: string;
      price: number;
    }[];
    code: string;
    eta: string;
    freight: string;
    id: string;
    isManual: number;
    isStandaloneAccount: number;
    marketPrices: any[];
    message: string;
    msrp: string;
    name: string;
    tax: number;
    taxDetails: {
      name: string;
      price: number | string;
      rate: number;
    }[];
    token: string;
    zoneId: string;
    zoneprice:
    | any[]
    | {
      id: string;
      description: string;
      postalcode_start: string;
      postalcode_end: string;
    };
    carrier?: {
      carrierId: string;
      carrierCode: string;
      name: string;
      currency: Currency;
      logo?: string;
    };
  };

  type QuoteReqVO = {
    initiation: InitiationReqVO;
    destination: DestinationReqVO;
    package: PackageReqVO;
    option: OptionReqVO;
    carrierIds?: string[];
  };

  type BaseAddressReqVO = {
    regionId: string;
    postalCode: string;
    name?: string;
    company?: string;
    phone?: string;
    province?: Province;
    city?: string;
    address?: string;
    address2?: string;
    address3?: string;
  };

  type Province = {
    id: string;
    name: string;
    code: string;
  };

  type InitiationReqVO = BaseAddressReqVO;
  type DestinationReqVO = BaseAddressReqVO & {
    type?: string;
    email?: string;
  };

  type PackageReqVO = {
    type: string;
    packages: PackageItemReqVO[];
  };

  type PackageItemReqVO = {
    weight: number;
    dimension?: {
      length: number;
      width: number;
      height: number;
    };
    insurance?: number;
    additional?: PackageAdditional;
    sinsured?: number; // Veryk insurance, available when fedex
  };

  type OptionReqVO = {
    memo?: string;
    packingFee?: number;
    labelFormat?: string;
  };

  type ShipmentReqVO = {
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
    sadditional?: ShipmentAdditional;
  };

  type PackageAdditional = Partial<{
    DC: {
      // Delivery Confirmation(available when UPS and ship to CA)
      state: string; // Yes or No
      type?: string; // 1:No Signature, 2:Signature Required, 3:Adult Signature Required
    };
    COD: {
      // Collect on Delivery(UPS and ship to U.S. or Canada available, ship to U.S. should not be a Env)
      state: string; // Yes or No
      amount?: number; // Collect on Delivery amount(required when state is true)
      fund_type?: string; // Fund Type,optionst(required when state is true): 0: check,cashier’s check or money order - no cash allowed, 8: cashier’s check or money order - no cash allowed
    };
    AH: {
      // Additional Handling(UPS and package should not be a Env available)
      state: string; // Additional Handling Yes or No(option:true/false)
    };
    ReferenceNumber: {
      // UPS Reference Number
      state: string; // Reference Number Yes or No(option:true/false)
      number?: string; // Reference Number
    };
    info: {
      // To the UAE(available when Fedex and ship to AE)
      state: string; // To the UAE Yes or No(option:true/false)
      ItemDescriptionForClearance?: string; // Description For Clearanc(required when state is true)
    };
    // |
    // { // dayros and dayros sameday
    //   state: string; // Yes (option:true)
    //   description: string; // Description of goods inside the pallet. It is available and required when the freight forwarder is dayros and dayros sameday
    // },
    IM: {
      // UPS description
      state: string; // Yes or No(option:true/false) Destination is mandatory for Mexico.
      description?: string;
    };
    packcode: {
      // Package description(available when Fedex and ship to CA,US,PR)
      //state: string; // Yes or No(option:true/false)
      state: string; // Pack Code: PIECE, BARREL, BASKET, BOX, BUNDLE, CARTON, CASE, CRATE, CYLINDER, DRUM, ENVELOPE, OTHER, PAIL, PALLET, REEL, SKID, TANK, TUBE
    };

    // pallet: { // Pallet data, only available when the freight forwarder is Fedex Freight, and required
    //   state: string; // Yes (option:true)
    //   description: string;
    // }
  }>;

  type ShipmentAdditional = {
    DC?: {
      // Confirm Receipt(available when UPS,Canada Post) UPS: Not available when shipping to CA
      state?: string; // Whether to confirm receipt(option:true/false)
      type?: string; // Confirmation Type(available when UPS),options: 1:Signature Required, 2:Adult Signature Required
    };
    SO?: {
      // Signature(available when Canada Post)
      state?: string; // Signature Yes or No
      'signature-type'?: string; // Signature Type,options: SO:Signature; PA18:Proof of Age Required - 18; PA19:Proof of Age Required - 19
    };
    HFP?: {
      // Hold for Pickup(available when Canada Post) Card for pickup(available when Canada Post TO CA)
      state?: string; // Card for pickup Yes or No(option:true/false)
    };
    DNS?: {
      // Do not safe drop(available when Canada Post to CA)
      state?: string; // Yes or No(option:true/false)
    };
    LAD?: {
      // Leave at door - do not card(available when Canada Post to CA)
      state?: string; // Yes or No(option:true/false)
    };
    // COD?: { // Collect on delivery(available where Canada Post to CA)
    //   state: string; // Yes or No(option:true/false)
    //   "option-amount": string; // COD amount
    // }
    // D2PO?: { // Deliver to Post Office(available where Canada Post)
    //   state: string; // Yes or No(option:true/false)
    //   "option-qualifier-2	": string; // Post Office ID
    //   email?: string; // Email
    // }

    _RFE?: {
      // Reason For Export(available where Canada Post and not ship to CA)
      state?: string; // Reason For Export options:DOC:Document; SAM:Commercial Sample; REP:Repair Or Warranty; SOG:Sale Of Goods; OTH:Other
      'other-reason	'?: string; // Other Reason(required when state is OTH)
    };

    EDI?: {
      // E-Commercial Invoice(available when DHL,UPS,FedEx) International non-document packages
      state?: string; // E-Commercial Invoice Yes or No(option:true/false)
    };

    signature?: {
      // Delivery Confirmation(available where Fedex) In Canada and the U.S., Indirect Signature Required is available for residential shipments only.
      state?: string; // Signature Yes or No

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
       */
      type?: string;
    };

    // accessorialServices?: { // Optional when the package type is "pallet" or the freight forwarder is dayrosssameday	 Dayross Fedex
    //   state?: string; // Yes or No(option:true/false)

    //   /**
    //    * Optional values when the freight forwarder is Dayross:
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
    //     * Optional values when the freight forwarder is Dayrosssameday:
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
    //     * Optional values when the freight forwarder is Fedex and the package type is "pallet":
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

    // pickup?: { // Only available when the freight forwarder is Dayross, Dayrosssameday, and required
    //   state?: string; // Yes
    //   starttime?: string; // Start time for appointment pickup, optional values: "06:00","06:30","07:00","07:30","08:00","08:30"......"20:30";
    //   endtime?: string; // End time for appointment pickup, optional values: "07:00","07:30","08:00","08:30"......"20:30";
    //   date?: string; // Appointment pickup date (note: please avoid holidays) Format: YY-mm-dd;
    // },

    RS?: {
      // Return Service Only available when UPS
      state?: string; // Whether to enable return service(option:true/false)

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
    };

    DG?: {
      // Dangerous goods(available when DHL) Non-document packages
      state?: string; // Yes or No(option:true/false)

      /**
       * Dangerous goods type
       * HE (Dangerous Goods)
       * HU (Not Restricted Dangerous Goods)
       * HW (Lithium Metal PI970 Section II)
       * HM (Lithium Metal PI969 Section II)
       * HD (Lithium Ion PI966 Section II)
       * HV (Lithium Ion PI967 Section II)
       */
      type?: string;
    };

    DIT?: {
      // Use DHL official invoice, this option cannot be used with EDI (electronic invoice)
      state?: string; // Yes or No(option:true/false)

      type?: string; // Invoice type, optional values: CMI (Commercail Invoice), PFI (Proforma Invoice)
    };

    TermsOfTrade?: {
      // Terms of Trade, supported by freight forwarder (FEDEX)
      state?: string; // Valid values: DDP, DDU (DDP must confirm that the admin has pre-set the payment account)
    };

    IOSS?: {
      // EU VAT number IOSS (Canada Post, Fedex)
      state?: string; // Valid values: true, false Valid values: 0 (No) or 1 (Yes)
      ioss_id?: string; // EU VAT number IOSS/state value of 1, required. Maximum length 13 digits.

      /**
       * Required when the carrier is FEDEX
       * Valid values: "PERSONAL_NATIONAL", "PERSONAL_STATE", "FEDERAL", "BUSINESS_NATIONAL", "BUSINESS_STATE", "BUSINESS_UNION".
       */
      type?: string;
    };
  };

  type ProductItem = {
    name: string; // Product Name
    qty?: number; // Quantity
    price?: number; // Unit Price

    unit?: string;

    origin?: string; // Origin country code, example: CN        UPS,DHL,Fedex
    HScode?: string; // Customs code  UPS,DHL,UBI
  };

  type ShipmentEditResVO = ShipmentReqVO & {
    number: string;
    status?: string;
  };

  type ShipmentDetailResVO = {
    number: string;
    externalId: string;
    waybillNumber: string;
    serviceId: string;
    status: 'open' | 'submitted' | 'completed' | 'cancelled';
    initiationRegionId: string;
    destinationRegionId: string;
    initiation: InitiationReqVO;
    destination: DestinationReqVO;
    package: PackageResVO;
    option: OptionReqVO;
    price: Price;
    payments: PaymentResVO[];
    total: Currency;
    submittedAt: string;

    product?: ProductItem[];
    destinationLocalized?: DestinationReqVO;
    sadditional?: ShipmentAdditional;

    labelFile?: LabelFile;

    created?: string;
  };

  type PackageResVO = {
    type: string;
    packages: PackageItemResVO[];
  };

  type PackageItemResVO = {
    waybillNumber?: string;
    weight: number;
    dimension?: {
      length: number;
      width: number;
      height: number;
    };
    insurance?: Currency;
    additional?: Partial<PackageAdditional>;
    sinsured?: number; // Veryk insurance, available when fedex
  };

  type Price = {
    msrp?: Currency;
    details?: PriceDetail[];
    charges?: PriceDetail[];
  };

  type PriceDetail = {
    code: string;
    description: string;
    price: Currency;
  };

  type PaymentResVO = {
    dateTime: string;
    description: string;
    subtotal: Currency;
  };

  type ShipmentPageReqVO = {
    limit: number;
    keyword?: string;
    status?: string;
    startDate?: string;
    endDate?: string;
    lastEvaluatedKey?: Record<string, any>;
  };

  type LabelFile = {
    label: string;
    invoice?: string;
    deliver?: string;
  };

  type TrackingInfoApiResVO = {
    id: string;
    number: string;
    carrier: {
      id: string;
      code: string;
      group_code: string;
      name: string;
      region_id: string;
    };
    tracking_url: string;
    list: TrackingEventApiResVO[];
  };

  type TrackingEventApiResVO = {
    context: string;
    timestamp: string | number;
    location: string;
    signed: string | number;
    datetime: {
      PRC: string;
      EST: string;
      GMT: string;
    };
  };
}
