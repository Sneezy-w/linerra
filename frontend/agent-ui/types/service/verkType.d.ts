declare namespace VerkType {
  type Currency = {
    code: string;
    symbol: string;
    value: string;
  };

  type Service = {
    id: string;
    code: string;
    name: string;
  };

  type Carrier = {
    id: string;
    code: string;
    groupCode: string;
    name: string;
    regionId: string;
    currency: Currency;
    services: Service[];
  };

  type Region = {
    id: string;
    name: string;
    type: string;
    timezone: string;
  };

  type Province = {
    id: string;
    name: string;
    code: string;
  };
}
