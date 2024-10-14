import { postQuote } from '@/services/service/verykApi';
import { useState } from 'react';

const testQuoteServices: VerykType.QuoteService[] = [
  {
    isManual: 0,
    zoneId: '205',
    carrierZoneId: 0,
    chargeDetails: [
      {
        code: '434',
        name: 'Surcharge 434',
        price: 0.55,
      },
      {
        code: '270',
        name: 'RESIDENTIAL ADDRESS',
        price: 4.6,
      },
      {
        code: '375',
        name: 'FUEL SURCHARGE',
        price: 5.426,
      },
    ],
    isStandaloneAccount: 0,
    taxDetails: [
      {
        name: 'GST',
        rate: 0.05,
        price: '1.77',
      },
    ],
    id: '190',
    name: 'UPS Standard',
    code: '11',
    charge: '37.19',
    freight: '24.84',
    msrp: '74.80',
    eta: '2024-09-26',
    tax: 1.77,
    message: '',
    zoneprice: {
      id: '',
      description: '',
      postalcode_start: 'R3T3L6',
      postalcode_end: 'V7A1R5',
    },
    marketPrices: [],
    token: 'eyJjYXJyaWVyIjoiNSIsImFjY291bnQiOiIxMTEiLCJpZCI6IjE5MCJ9',
    carrier: {
      carrierId: '5',
      carrierCode: 'ups',
      name: 'UPS Canada',
      currency: {
        code: 'CAD',
        symbol: '$',
        value: '0.00',
      },
      logo: '/images/logos/ups.png',
    },
  },
  {
    isManual: 0,
    zoneId: 'G1',
    carrierZoneId: 0,
    chargeDetails: [
      {
        code: 'DC',
        name: 'Delivery confirmation',
        price: 0,
      },
      {
        code: 'FUELSC',
        name: 'Fuel surcharge',
        price: 7.574400000000001,
      },
    ],
    isStandaloneAccount: 0,
    taxDetails: [
      {
        name: 'GST',
        rate: 0.05,
        price: '2.31',
      },
    ],
    id: '180',
    name: 'Expedited Parcel',
    code: 'DOM.EP',
    charge: '48.42',
    freight: '38.53',
    msrp: '0.00',
    eta: '2024-09-26',
    tax: 2.31,
    message: '',
    zoneprice: {
      id: '',
      description: '',
      postalcode_start: 'R3T3L6',
      postalcode_end: 'V7A1R5',
    },
    marketPrices: [],
    token: 'eyJjYXJyaWVyIjoiMiIsImFjY291bnQiOiIyNiIsImlkIjoiMTgwIn0',
    carrier: {
      carrierId: '2',
      carrierCode: 'canada-post',
      name: 'Canada Post',
      currency: {
        code: 'CAD',
        symbol: '$',
        value: '0.00',
      },
      logo: '/images/logos/canadapost.png',
    },
  },
  {
    isManual: 0,
    zoneId: 'G1',
    carrierZoneId: 0,
    chargeDetails: [
      {
        code: 'DC',
        name: 'Delivery confirmation',
        price: 0,
      },
      {
        code: 'FUELSC',
        name: 'Fuel surcharge',
        price: 10.5768,
      },
    ],
    isStandaloneAccount: 0,
    taxDetails: [
      {
        name: 'GST',
        rate: 0.05,
        price: '2.83',
      },
    ],
    id: '183',
    name: 'Xpresspost',
    code: 'DOM.XP',
    charge: '59.38',
    freight: '45.97',
    msrp: '60.36',
    eta: '2024-09-25',
    tax: 2.83,
    message: '',
    zoneprice: {
      id: '',
      description: '',
      postalcode_start: 'R3T3L6',
      postalcode_end: 'V7A1R5',
    },
    marketPrices: [],
    token: 'eyJjYXJyaWVyIjoiMiIsImFjY291bnQiOiIyNiIsImlkIjoiMTgzIn0',
    carrier: {
      carrierId: '2',
      carrierCode: 'canada-post',
      name: 'Canada Post',
      currency: {
        code: 'CAD',
        symbol: '$',
        value: '0.00',
      },
      logo: '/images/logos/canadapost.png',
    },
  },
  {
    isManual: 0,
    zoneId: '',
    carrierZoneId: 0,
    chargeDetails: [
      {
        code: '434',
        name: 'Surcharge 434',
        price: 0.55,
      },
      {
        code: '270',
        name: 'RESIDENTIAL ADDRESS',
        price: 4.14,
      },
      {
        code: '375',
        name: 'FUEL SURCHARGE',
        price: 13.05,
      },
    ],
    isStandaloneAccount: 0,
    taxDetails: [
      {
        name: 'GST',
        rate: 0.05,
        price: '3.74',
      },
    ],
    id: '186',
    name: 'UPS Express',
    code: '01',
    charge: '78.49',
    freight: '57.01',
    msrp: '115.74',
    eta: '2024-09-24',
    tax: 3.74,
    message: '',
    zoneprice: {
      id: '',
      description: '',
      postalcode_start: 'R3T3L6',
      postalcode_end: 'V7A1R5',
    },
    marketPrices: [],
    token: 'eyJjYXJyaWVyIjoiNSIsImFjY291bnQiOiI0NiIsImlkIjoiMTg2In0',
    carrier: {
      carrierId: '5',
      carrierCode: 'ups',
      name: 'UPS Canada',
      currency: {
        code: 'CAD',
        symbol: '$',
        value: '0.00',
      },
      logo: '/images/logos/ups.png',
    },
  },
  {
    isManual: 0,
    zoneId: '',
    carrierZoneId: 0,
    chargeDetails: [
      {
        code: '434',
        name: 'Surcharge 434',
        price: 0.55,
      },
      {
        code: '270',
        name: 'RESIDENTIAL ADDRESS',
        price: 4.6,
      },
      {
        code: '375',
        name: 'FUEL SURCHARGE',
        price: 13.171,
      },
    ],
    isStandaloneAccount: 0,
    taxDetails: [
      {
        name: 'GST',
        rate: 0.05,
        price: '3.76',
      },
    ],
    id: '241',
    name: 'UPS Expedited',
    code: '02',
    charge: '78.91',
    freight: '56.83',
    msrp: '88.09',
    eta: '2024-09-25',
    tax: 3.76,
    message: '',
    zoneprice: {
      id: '',
      description: '',
      postalcode_start: 'R3T3L6',
      postalcode_end: 'V7A1R5',
    },
    marketPrices: [],
    token: 'eyJjYXJyaWVyIjoiNSIsImFjY291bnQiOiI0NiIsImlkIjoiMjQxIn0',
    carrier: {
      carrierId: '5',
      carrierCode: 'ups',
      name: 'UPS Canada',
      currency: {
        code: 'CAD',
        symbol: '$',
        value: '0.00',
      },
      logo: '/images/logos/ups.png',
    },
  },
  {
    isManual: 0,
    zoneId: '',
    carrierZoneId: 0,
    chargeDetails: [
      {
        code: '434',
        name: 'Surcharge 434',
        price: 0.55,
      },
      {
        code: '270',
        name: 'RESIDENTIAL ADDRESS',
        price: 4.6,
      },
      {
        code: '375',
        name: 'FUEL SURCHARGE',
        price: 13.819,
      },
    ],
    isStandaloneAccount: 0,
    taxDetails: [
      {
        name: 'GST',
        rate: 0.05,
        price: '3.94',
      },
    ],
    id: '242',
    name: 'UPS Express Saver',
    code: '13',
    charge: '82.84',
    freight: '59.93',
    msrp: '92.57',
    eta: '2024-09-24',
    tax: 3.94,
    message: '',
    zoneprice: {
      id: '',
      description: '',
      postalcode_start: 'R3T3L6',
      postalcode_end: 'V7A1R5',
    },
    marketPrices: [],
    token: 'eyJjYXJyaWVyIjoiNSIsImFjY291bnQiOiI0NiIsImlkIjoiMjQyIn0',
    carrier: {
      carrierId: '5',
      carrierCode: 'ups',
      name: 'UPS Canada',
      currency: {
        code: 'CAD',
        symbol: '$',
        value: '0.00',
      },
      logo: '/images/logos/ups.png',
    },
  },
  {
    isManual: 0,
    zoneId: 'G1',
    carrierZoneId: 0,
    chargeDetails: [
      {
        code: 'DC',
        name: 'Delivery confirmation',
        price: 0,
      },
      {
        code: 'FUELSC',
        name: 'Fuel surcharge',
        price: 17.387999999999998,
      },
    ],
    isStandaloneAccount: 0,
    taxDetails: [
      {
        name: 'GST',
        rate: 0.05,
        price: '4.65',
      },
    ],
    id: '181',
    name: 'Priority',
    code: 'DOM.PC',
    charge: '97.64',
    freight: '75.60',
    msrp: '97.64',
    eta: '2024-09-24',
    tax: 4.65,
    message: '',
    zoneprice: {
      id: '',
      description: '',
      postalcode_start: 'R3T3L6',
      postalcode_end: 'V7A1R5',
    },
    marketPrices: [],
    token: 'eyJjYXJyaWVyIjoiMiIsImFjY291bnQiOiIyNiIsImlkIjoiMTgxIn0',
    carrier: {
      carrierId: '2',
      carrierCode: 'canada-post',
      name: 'Canada Post',
      currency: {
        code: 'CAD',
        symbol: '$',
        value: '0.00',
      },
      logo: '/images/logos/canadapost.png',
    },
  },
];

export const testQuoteFormData: VerykType.QuoteReqVO = {
  initiation: {
    regionId: 'CA',
    postalCode: 'R3T3L6',
    city: 'Winnipeg',
    province: {
      id: '3',
      name: 'MANITOBA',
      code: 'MB',
    },
  },
  option: {
    packingFee: 0,
  },
  destination: {
    regionId: 'CA',
    postalCode: 'V7A1R5',
    city: 'Richmond',
    type: 'residential',
    province: {
      id: '2',
      name: 'BRITISH COLUMBIA',
      code: 'BC',
    },
  },
  package: {
    type: 'parcel',
    packages: [
      {
        insurance: 0,
        weight: 6,
        dimension: {
          length: 12,
          width: 8,
          height: 6,
        },
      },
    ],
  },
};

export const testShipmentFormData = {
  initiation: {
    name: 'Sarah  YU',
    phone: '2048993858',
    address: '201-545 Hervo St.',
  },
  destination: {
    name: 'Zheng Shuang',
    phone: '2042952867',
    address: '10131 thirlmere dr',
  },
};

const defaultInitialValues: Record<string, any> = {
  initiation: {
    regionId: 'CA',
    postalCode: 'R3T3L6',
    city: 'Winnipeg',
    province: {
      id: '3',
      name: 'MANITOBA',
      code: 'MB',
    },
  },
  destination: {
    regionId: 'CA',
    //city: '',
    //postalCode: '',
  },
  package: {
    packages: [
      {
        // weight: 1.00,
        // dimension: {
        //   length: 1.00,
        //   width: 1.00,
        //   height: 1.00
        // },
        // insurance: 0.00
      },
    ],
  },
};

export default () => {
  const [quoteServices, setQuoteServices] = useState<VerykType.QuoteService[]>(testQuoteServices);
  const [currentStep, setCurrentStep] = useState(0);
  const [quoteFormData, setQuoteFormData] = useState<VerykType.QuoteReqVO>();
  //const [selectedService, setSelectedService] = useState<VerykType.QuoteService>();
  const [selectedServiceId, setSelectedServiceId] = useState<string>();
  const [orderNumber, setOrderNumber] = useState<string>('');

  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [operationLoading, setOperationLoading] = useState<boolean>(false);

  const [quoteFormInitialValues, setQuoteFormInitialValues] = useState<Record<string, any>>();
  const [shipmentFormInitialValues, setShipmentFormInitialValues] = useState<Record<string, any>>();

  const fetchQuoteForCarrier = async (formData: any, carrierId: string) => {
    const response = await postQuote({ ...formData, carrierIds: [carrierId] });
    return response.data;
  };

  const fetchQuoteFormInitialValues = async () => {
    const initialValues = defaultInitialValues;
    return initialValues;
  };

  return {
    quoteServices,
    setQuoteServices,
    currentStep,
    setCurrentStep,
    quoteFormData,
    setQuoteFormData,
    selectedServiceId,
    setSelectedServiceId,
    orderNumber,
    setOrderNumber,
    dataLoading,
    setDataLoading,
    operationLoading,
    setOperationLoading,
    quoteFormInitialValues,
    setQuoteFormInitialValues,
    shipmentFormInitialValues,
    setShipmentFormInitialValues,

    fetchQuoteFormInitialValues,
    fetchQuoteForCarrier,
  };
};
