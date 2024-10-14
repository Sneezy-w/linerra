import { getShipmentPage } from '@/services/service/verykApi';
import { ProFormInstance } from '@ant-design/pro-components';
import { useCallback, useRef, useState } from 'react';
import { useAsyncFn } from 'react-use';

export const getSearchParams = (values: any) => {
  return {
    keyword: values.keyword,
    status: values.status,
    startDate: new Date(values.dateRange?.[0]).toISOString(),
    endDate: new Date(values.dateRange?.[1]).toISOString(),
    limit: 5,
  };
};

export default () => {
  const [shipmentList, setShipmentList] = useState<VerykType.ShipmentDetailResVO[]>([]);
  const [lastEvaluatedKey, setLastEvaluatedKey] = useState<Record<string, unknown> | undefined>(
    undefined,
  );
  const formRef = useRef<ProFormInstance>();

  const [shipmentState, fetchShipments] = useAsyncFn(
    async (params: VerykType.ShipmentPageReqVO) => {
      const res = await getShipmentPage(params);
      return res.data;
    },
    [],
  );

  const [searchLoading, setSearchLoading] = useState(false);

  const searchShipments = useCallback(
    async (values: any) => {
      setSearchLoading(true);
      const res = await fetchShipments(getSearchParams(values));
      setShipmentList(res?.items || []);
      setLastEvaluatedKey(res?.lastEvaluatedKey);
      setSearchLoading(false);
    },
    [fetchShipments, setShipmentList, setLastEvaluatedKey],
  );

  const loadMoreShipments = useCallback(async () => {
    const res = await fetchShipments({
      ...getSearchParams(formRef.current?.getFieldsValue()),
      lastEvaluatedKey,
    });
    setShipmentList((prev) => [...prev, ...(res?.items || [])]);
    setLastEvaluatedKey(res?.lastEvaluatedKey);
  }, [fetchShipments, lastEvaluatedKey, setShipmentList, setLastEvaluatedKey]);

  return {
    shipmentList,
    setShipmentList,
    lastEvaluatedKey,
    setLastEvaluatedKey,
    formRef,
    searchShipments,
    loadMoreShipments,
    searchLoading,
  };
};
