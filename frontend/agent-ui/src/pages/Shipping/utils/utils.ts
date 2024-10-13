
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

export const getDefaultCurrency = (value: number): VerykType.Currency => {
  return {
    code: "CAD",
    symbol: "$",
    value: value.toFixed(2)
  };
};

