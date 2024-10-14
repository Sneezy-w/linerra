// src/models/userModel.ts
import { getAccessToken } from '@/access';
import { useModel } from '@umijs/max';
import { useRequest } from 'ahooks';
import { useEffect } from 'react';
import { getDicts } from '../services/service/dict';

export default () => {
  const {
    data: dicts,
    loading: loading,
    runAsync: fetchDictsAsync,
    run: fetchDicts,
  } = useRequest(
    async () => {
      const response: API.R<Record<string, API.Service.DictItem[]>> = await getDicts({
        skipErrorHandler: true,
      });
      return response.data;
    },
    {
      manual: true,
    },
  );

  const { currentUser } = useModel('@@initialState', (model) => ({
    currentUser: model.initialState?.currentUser,
  }));

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken && currentUser) {
      fetchDicts();
    }
  }, [currentUser]);

  return {
    dicts,
    loading,
    fetchDicts,
    fetchDictsAsync,
    // getDictItems,
    // getDictItem,
    // getDictItemCode,
  };
};

export const getDictItems = (
  dicts: Record<string, API.Service.DictItem[]> | undefined,
  dictType: string,
) => {
  return dicts?.[dictType] || [];
};

export const getDictItem = (
  dicts: Record<string, API.Service.DictItem[]> | undefined,
  dictType: string,
  value: string | undefined,
) => {
  return dicts?.[dictType]?.find((item) => item.value === value);
};

export const getDictItemCode = (
  dicts: Record<string, API.Service.DictItem[]> | undefined,
  dictType: string,
  value: string,
) => {
  const dictItem = getDictItem(dicts, dictType, value);
  return dictItem?.code;
};

export const findDictItem = (items: API.Service.DictItem[] | undefined, value: string) => {
  const dictItem = items?.find((item) => item.value === value);
  return dictItem;
};
