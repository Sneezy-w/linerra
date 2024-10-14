import { request } from '@umijs/max';

export async function getAvailableCarriers(options?: Record<string, any>) {
  return request<API.R<Array<string>>>('/api/veryk/shipment/getAvailableCarriers', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function getCarriers(options?: Record<string, any>) {
  return request<API.R<Array<VerykType.Carrier>>>('/api/veryk/general/getCarriers', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function getProvinces(regionId: string, options?: Record<string, any>) {
  return request<API.R<Array<VerykType.Province>>>('/api/veryk/general/getProvinces', {
    method: 'GET',
    params: { regionId },
    ...(options || {}),
  });
}

export async function getRegions(options?: Record<string, any>) {
  return request<API.R<Array<VerykType.Region>>>('/api/veryk/general/getRegions', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function postQuote(data: VerykType.QuoteReqVO, options?: Record<string, any>) {
  return request<API.R<Array<VerykType.QuoteResponse>>>('/api/veryk/shipment/quote', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
    ...(options || {}),
  });
}

export async function postShipment(data: VerykType.QuoteRequest, options?: Record<string, any>) {
  return request<API.R<{ number: string }>>('/api/veryk/shipment/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
    ...(options || {}),
  });
}

export async function postShipmentSave(data: VerykType.ShipmentReqVO, options?: Record<string, any>) {
  return request<API.R<{ number: string }>>('/api/veryk/shipment/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
    ...(options || {}),
  });
}

export async function postShipmentSubmit(data: VerykType.ShipmentReqVO, options?: Record<string, any>) {
  return request<API.R<{
    number: string,
    externalId: string,
    waybillNumber: string
  }>>('/api/veryk/shipment/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
    ...(options || {}),
  });
}

export async function getShipment(number: string, options?: Record<string, any>) {
  const encodedNumber = encodeURIComponent(number);
  return request<API.R<VerykType.ShipmentEditResVO>>(`/api/veryk/shipment/get/${encodedNumber}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function deleteShipment(number: string, options?: Record<string, any>) {
  const encodedNumber = encodeURIComponent(number);
  return request<API.R<void>>(`/api/veryk/shipment/delete/${encodedNumber}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

export async function getShipmentPage(data: VerykType.ShipmentPageReqVO, options?: Record<string, any>) {
  return request<API.R<API.ResponsePageVO<VerykType.ShipmentDetailResVO>>>('/api/veryk/shipment/page', {
    method: 'POST',
    data: data,
    ...(options || {}),
  });
}

export async function getSignedLabelUrl(key: string, options?: Record<string, any>) {
  return request<API.R<{ url: string }>>('/api/veryk/shipment/getSignedLabelUrl', {
    method: 'GET',
    params: { key },
    ...(options || {}),
  });
}

export async function getTracking(keyword: string, options?: Record<string, any>) {
  return request<API.R<VerykType.TrackingInfoApiResVO[]>>('/api/veryk/shipment/tracking', {
    method: 'GET',
    params: { keyword },
    ...(options || {}),
  });
}
