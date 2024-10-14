import { getAccessToken } from '@/access';
import { getCarriers } from '@/services/service/verykApi';
import { useModel } from '@umijs/max';
import { useRequest } from 'ahooks';
import { useEffect } from 'react';

export default () => {
  const {
    data: carriers,
    loading,
    runAsync: fetchCarriersAsync,
    run: fetchCarriers,
  } = useRequest(
    async () => {
      const response: API.R<VerykType.Carrier[]> = await getCarriers({
        skipErrorHandler: true,
      });
      return response.data?.map((carrier) => {
        return {
          ...carrier,
          logo: `/images/logos/${carrier.groupCode}.png`,
        };
      });
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
      fetchCarriers();
    }
  }, [currentUser]);

  // const getAllCarriers = () => async () => {
  //   let loadedCarriers: VerykType.Carrier[] | undefined = carriers;
  //   if (!loadedCarriers) {
  //     const accessToken = getAccessToken();
  //     if (accessToken) {
  //       loadedCarriers = await fetchCarriersAsync();
  //     }
  //   }
  //   return loadedCarriers || [];
  // };

  // const getAllCarrierIds = () => async () => {
  //   const allCarriers = await getAllCarriers()();
  //   return allCarriers.map((carrier) => carrier.id);
  // };

  // const getCarrierById = (carrierId: string) => async () => {
  //   let loadedCarriers: VerykType.Carrier[] | undefined = carriers;
  //   if (!loadedCarriers) {
  //     const accessToken = getAccessToken();
  //     if (accessToken) {
  //       loadedCarriers = await fetchCarriersAsync();
  //     }
  //   }
  //   const carrier = loadedCarriers?.find((item) => item.id === carrierId) || null;
  //   return carrier;
  // };

  // const getServiceById = (serviceId: string) => async () => {
  //   let loadedCarriers: VerykType.Carrier[] | undefined = carriers;
  //   if (!loadedCarriers) {
  //     const accessToken = getAccessToken();
  //     if (accessToken) {
  //       loadedCarriers = await fetchCarriersAsync();
  //     }
  //   }

  //   let foundService: VerykType.Service | null = null;
  //   loadedCarriers?.forEach((carrier) => {
  //     if (foundService) {
  //       return;
  //     }
  //     carrier.services?.forEach((service) => {
  //       if (service.id === serviceId) {
  //         foundService = { ...service, carrier };
  //         return;
  //       }
  //     });
  //   });
  //   return foundService;
  // };

  return {
    carriers,
    loading,
    fetchCarriers,
    fetchCarriersAsync,
    // getAllCarriers,
    // getAllCarrierIds,
    // getCarrierById,
    // getServiceById,
  };
};

export const getAllCarrierIds = (carriers: VerykType.Carrier[] | undefined) => {
  return carriers?.map((carrier) => carrier.id) || [];
};

export const getCarrierById = (carriers: VerykType.Carrier[] | undefined, carrierId: string) => {
  return carriers?.find((carrier) => carrier.id === carrierId);
};

export const getCarrierServiceById = (
  carriers: VerykType.Carrier[] | undefined,
  serviceId: string,
) => {
  let foundService: VerykType.Service | undefined;
  carriers?.forEach((carrier) => {
    if (foundService) {
      return;
    }
    carrier.services?.forEach((service) => {
      if (service.id === serviceId) {
        foundService = { ...service, carrier };
        return;
      }
    });
  });
  return foundService;
};
