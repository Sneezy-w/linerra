import { CountryCode } from "libphonenumber-js";
import { getRegionById } from "@/models/regions";
import { parsePhoneNumber } from "libphonenumber-js";

export const getPriceDetails = (price: VerykType.Price): VerykType.PriceDetail[] => {
  return (((price?.details?.length || 0) > 0 ? price?.details : price?.charges) || [])
}

export const getTotal = (price: VerykType.Price): VerykType.Currency => {

  const priceDetails = getPriceDetails(price);
  const sum = priceDetails.reduce((acc, curr) => Number(acc) + Number(curr.price.value), 0)

  return {
    symbol: priceDetails[0]?.price?.symbol || '$',
    value: sum.toFixed(2),
    code: priceDetails[0]?.price?.code || 'CAD'
  }
}

export const getTotalPaid = (payments: VerykType.PaymentResVO[]): VerykType.Currency => {
  const sum = payments.reduce((acc, curr) => Number(acc) + Number(curr.subtotal.value), 0)

  return {
    symbol: payments[0]?.subtotal.symbol || '$',
    value: sum.toFixed(2),
    code: payments[0]?.subtotal.code || 'CAD'
  }
}

export const getDefaultCurrency = (value: number): VerykType.Currency => {
  return {
    code: "CAD",
    symbol: "$",
    value: value.toFixed(2)
  };
};

export const getNationalPhoneNumber = (phone: string | undefined, regionId: string, regions: VerykType.Region[]): string => {
  return `${getRegionById(regions, regionId)?.phoneCode} ${parsePhoneNumber(phone || '', regionId.toLocaleUpperCase() as CountryCode).formatNational()}`;
}

