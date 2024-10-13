import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ProForm, ProFormText, ProFormSelect, ProFormDigit } from '@ant-design/pro-form';
import { Steps, Row, Col, Card, Form, Select, Input, InputNumber, Button, Space, Typography } from 'antd';
import ProTable from '@ant-design/pro-table';
import { FooterToolbar, ModalForm, PageContainer, ProCard, ProFormDigitRange, ProFormField, ProFormFieldSet, ProFormGroup, ProFormInstance, ProFormList, ProFormListProps, ProFormTextArea, ProList } from '@ant-design/pro-components';
import { ContactsFilled, ContactsOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useAccess, useModel } from '@umijs/max';
import { useAsyncEffect, useRequest } from 'ahooks';
import { ProFormDependency } from '@ant-design/pro-components';
import { postQuote, postShipment, postShipmentSave, postShipmentSubmit } from '@/services/service/verykApi';
import { getAllCarrierIds, getCarrierServiceById } from '@/models/carriers';
import { getRegionById } from '@/models/regions';
import { No, Yes, YesNoOptions } from '@/constant/constant';
import DimensionInput from './DimensionInput';
import { testShipmentFormData } from '../models/shipmentForm';
import { history } from '@umijs/max';


const { Text, Title } = Typography;

const showAddress3 = (service: VerykType.Service | undefined) => {
  return ['dhl', 'ups', 'purolator'].includes(service?.carrier?.groupCode || '');
}

const singleParcelPackage = (service: VerykType.Service | undefined) => {
  return ['canadapost'].includes(service?.carrier?.groupCode || '');
}

const showDestinationLocalizedButton = (destinationRegion: VerykType.Region | undefined) => {
  return ['CN', 'HK', 'TW', 'MO'].includes(destinationRegion?.id || '');
}

const showPackageAdditionalDC = (service: VerykType.Service | undefined, destinationRegion: VerykType.Region | undefined) => {
  //Delivery Confirmation(available when UPS and ship to CA)
  return ['ups'].includes(service?.carrier?.groupCode || '') && ['CA'].includes(destinationRegion?.id || '');
}

const showPackageAdditionalCOD = (service: VerykType.Service | undefined, destinationRegion: VerykType.Region | undefined, packageType: string) => {
  // Collect on Delivery(UPS and ship to U.S. or Canada available, ship to U.S. should not be a Env)
  return ['ups'].includes(service?.carrier?.groupCode || '') && ['US', 'CA'].includes(destinationRegion?.id || '') && packageType !== 'env';
}

const showPackageAdditionalAH = (service: VerykType.Service | undefined, packageType: string) => {
  // Additional Handling(UPS and package should not be a Env available)
  return ['ups'].includes(service?.carrier?.groupCode || '') && packageType !== 'env';
}

const showPackageAdditionalReferenceNumber = (service: VerykType.Service | undefined) => {
  // UPS Reference Number
  return ['ups'].includes(service?.carrier?.groupCode || '');
}

const showPackageAdditionalUAE = (service: VerykType.Service | undefined, destinationRegion: VerykType.Region | undefined) => {
  // To the UAE(available when Fedex and ship to AE)
  return ['fedex'].includes(service?.carrier?.groupCode || '') && ['AE'].includes(destinationRegion?.id || '');
}

const showPackageAdditionalIM = (service: VerykType.Service | undefined) => {
  // UPS description
  return ['ups'].includes(service?.carrier?.groupCode || '');
}

const showPackageAdditionalPackCode = (service: VerykType.Service | undefined, destinationRegion: VerykType.Region | undefined) => {
  // Package description(available when Fedex and ship to CA,US,PR)
  return ['fedex'].includes(service?.carrier?.groupCode || '') && ['CA', 'US', 'PR'].includes(destinationRegion?.id || '');
}

const showProductsCard = (
  service: VerykType.Service | undefined,
  initiationRegion: VerykType.Region | undefined,
  destinationRegion: VerykType.Region | undefined,
  packageType: string | undefined
) => {
  // required when the regions are different between shipper and receiver address
  // It's not required when the package type is Env for UPS,DHL,Purolator
  if (packageType === 'env' && ['ups', 'dhl', 'purolator'].includes(service?.carrier?.groupCode || '')) {
    return false;
  }
  return initiationRegion?.id !== destinationRegion?.id;
}

const labelFormatItemsByGroupCode = (
  service: VerykType.Service | undefined,
  labelFormatDHLItems: API.Service.DictItem[] | undefined,
  labelFormatUPSItems: API.Service.DictItem[] | undefined,
  labelFormatPurolatorItems: API.Service.DictItem[] | undefined,
  labelFormatCanadaPostItems: API.Service.DictItem[] | undefined,
  labelFormatFedexItems: API.Service.DictItem[] | undefined
) => {
  const groupCode = service?.carrier?.groupCode;
  switch (groupCode) {
    case 'dhl':
      return labelFormatDHLItems || [];
    case 'ups':
      return labelFormatUPSItems || [];
    case 'purolator':
      return labelFormatPurolatorItems || [];
    case 'canadapost':
      return labelFormatCanadaPostItems || [];
    case 'fedex':
      return labelFormatFedexItems || [];
    default:
      return [];
  }
}

const productUnitItemsByGroupCode = (
  service: VerykType.Service | undefined,
  productUnitDHLItems: API.Service.DictItem[] | undefined,
  productUnitUPSItems: API.Service.DictItem[] | undefined,
  productUnitFedexItems: API.Service.DictItem[] | undefined
) => {
  const groupCode = service?.carrier?.groupCode;
  switch (groupCode) {
    case 'dhl':
      return productUnitDHLItems || [];
    case 'ups':
      return productUnitUPSItems || [];
    case 'fedex':
      return productUnitFedexItems || [];
    default:
      return [];
  }
}

const showProductOrigin = (service: VerykType.Service | undefined) => {
  // available when UPS,DHL,Fedex,Purolator
  return ['ups', 'dhl', 'fedex', 'purolator'].includes(service?.carrier?.groupCode || '');
}

const showProductHSCode = (service: VerykType.Service | undefined) => {
  // available when UPS,DHL
  return ['ups', 'dhl'].includes(service?.carrier?.groupCode || '');
}

const isProductHSCodeRequired = (service: VerykType.Service | undefined) => {
  // available when UPS,DHL
  return ['ups-import'].includes(service?.carrier?.code || '');
}

const showShipmentAdditionalDC = (
  service: VerykType.Service | undefined,
  destinationRegion: VerykType.Region | undefined
) => {
  // Delivery Confirmation(available when UPS,Canada Post) UPS: available when not ship to CA
  if (['ups'].includes(service?.carrier?.groupCode || '')) {
    return !['CA'].includes(destinationRegion?.id || '');
  }
  return ['canadapost'].includes(service?.carrier?.groupCode || '');
}

const showShipmentAdditionalDCType = (
  service: VerykType.Service | undefined,
  dcState: string | undefined,
) => {
  // available when UPS
  return ['ups'].includes(service?.carrier?.groupCode || '')
    && dcState === Yes
}

const showShipmentAdditionalSO = (
  service: VerykType.Service | undefined,
  dcState: string | undefined,
  ladState: string | undefined,
) => {
  // Signature(available when Canada Post) and DC type is true and not LAD
  return ['canadapost'].includes(service?.carrier?.groupCode || '')
    && dcState === Yes
    && ladState !== Yes
}

const showShipmentAdditionalSOType = (soState: string | undefined) => {
  // available when Canada Post and SO state is true
  return soState === Yes;
}

const showShipmentAdditionalHFP = (
  service: VerykType.Service | undefined,
  destinationRegion: VerykType.Region | undefined,
  dnsState: string | undefined,
  ladState: string | undefined
) => {
  // Card for pickup(available when Canada Post TO CA) and not DNS and not LAD
  return ['canadapost'].includes(service?.carrier?.groupCode || '')
    && ['CA'].includes(destinationRegion?.id || '')
    && dnsState !== Yes
    && ladState !== Yes;
}

const showShipmentAdditionalDNS = (
  service: VerykType.Service | undefined,
  destinationRegion: VerykType.Region | undefined,
  hfpState: string | undefined,
  ladState: string | undefined
) => {
  // Do not safe drop(available when Canada Post TO CA) and not HFP and not LAD
  return ['canadapost'].includes(service?.carrier?.groupCode || '')
    && ['CA'].includes(destinationRegion?.id || '')
    && hfpState !== Yes
    && ladState !== Yes;
}

const showShipmentAdditionalLAD = (
  service: VerykType.Service | undefined,
  destinationRegion: VerykType.Region | undefined,
  soState: string | undefined,
  hfpState: string | undefined,
  dnsState: string | undefined,
) => {
  // Leave at door - do not card(available when Canada Post TO CA) and not SO and not HFP and not DNS
  return ['canadapost'].includes(service?.carrier?.groupCode || '')
    && ['CA'].includes(destinationRegion?.id || '')
    && soState !== Yes
    && hfpState !== Yes
    && dnsState !== Yes;
}

const showShipmentAdditional_RFE = (
  service: VerykType.Service | undefined,
  destinationRegion: VerykType.Region | undefined,
) => {
  // Reason For Export(available where Canada Post/ups and not ship to CA)
  return ['canadapost', 'ups'].includes(service?.carrier?.groupCode || '')
    && !['CA'].includes(destinationRegion?.id || '');
}

const showShipmentAdditional_RFEOtherReason = (service: VerykType.Service | undefined, rfeState: string | undefined) => {
  // Other Reason(required when state is OTH(canada post) or OTHER(ups))
  return (rfeState === 'OTH' && ['canadapost'].includes(service?.carrier?.groupCode || ''))
    || (rfeState === 'OTHER' && ['ups'].includes(service?.carrier?.groupCode || ''));
}

const shipmentAdditionalREFStateItemsByGroupCode = (
  service: VerykType.Service | undefined,
  shipmentAdditionalREFStateCanadaPostItems: API.Service.DictItem[] | undefined,
  shipmentAdditionalREFStateUPSItems: API.Service.DictItem[] | undefined
) => {
  const groupCode = service?.carrier?.groupCode;
  switch (groupCode) {
    case 'canadapost':
      return shipmentAdditionalREFStateCanadaPostItems || [];
    case 'ups':
      return shipmentAdditionalREFStateUPSItems || [];
    default:
      return [];
  }
}

const showShipmentAdditionalEDI = (
  service: VerykType.Service | undefined,
  initiationRegion: VerykType.Region | undefined,
  destinationRegion: VerykType.Region | undefined,
  packageType: string | undefined,
  dITState: string | undefined
) => {
  // E-Commercial Invoice(available where DHL,UPS,FedEx) International non-document packages
  return ['dhl', 'ups', 'fedex'].includes(service?.carrier?.groupCode || '')
    && initiationRegion?.id !== destinationRegion?.id
    && packageType !== 'env'
    && dITState !== Yes;
}

const showShipmentAdditionalSignature = (
  service: VerykType.Service | undefined,
) => {
  // Delivery Confirmation(available when Fedex,Purolator)
  return ['fedex', 'purolator'].includes(service?.carrier?.groupCode || '')
}

const showShipmentAdditionalSignatureType = (
  signatureState: string | undefined
) => {
  // Signature Type(required where state is true)
  return signatureState === Yes;
}

const shipmentAdditionalSignatureTypeItemsByGroupCodeAndRegion = (
  service: VerykType.Service | undefined,
  initiationRegion: VerykType.Region | undefined,
  destinationRegion: VerykType.Region | undefined,
  shipmentAdditionalSignatureTypeFedexItems: API.Service.DictItem[] | undefined,
  shipmentAdditionalSignatureTypePurolatorItems: API.Service.DictItem[] | undefined,
  shipmentAdditionalSignatureTypePurolatorInternationalItems: API.Service.DictItem[] | undefined
) => {
  const groupCode = service?.carrier?.groupCode;
  switch (groupCode) {
    case 'fedex':
      return shipmentAdditionalSignatureTypeFedexItems || [];
    case 'purolator':
      if (initiationRegion?.id !== destinationRegion?.id) {
        return shipmentAdditionalSignatureTypePurolatorInternationalItems || [];
      }
      return shipmentAdditionalSignatureTypePurolatorItems || [];
    default:
      return [];
  }
}

const showShipmentAdditionalRS = (
  service: VerykType.Service | undefined,
) => {
  // Return Service(available when UPS)
  return ['ups'].includes(service?.carrier?.groupCode || '')
}

const showShipmentAdditionalRSCode = (
  rsState: string | undefined
) => {
  // Return Service Code(available when UPS) and state is true
  return rsState === Yes;
}

const showShipmentAdditionalRSDescription = (
  rsState: string | undefined
) => {
  // Return Service Description(available when UPS) and state is true
  return rsState === Yes;
}

const showShipmentAdditionalDG = (
  service: VerykType.Service | undefined,
  destinationRegion: VerykType.Region | undefined,
  packageType: string | undefined
) => {
  // Dangerous Goods(available when DHL,Fedex and not ship to CA and not document)
  return ['dhl', 'fedex'].includes(service?.carrier?.groupCode || '')
    && !['CA'].includes(destinationRegion?.id || '')
    && packageType !== 'env';
}

const showShipmentAdditionalDGType = (dgState: string | undefined) => {
  // Dangerous Goods Type(available when DHL) and state is true
  return dgState === Yes;
}

const shipmentAdditionalDGTypeItemsByGroupCode = (
  service: VerykType.Service | undefined,
  shipmentAdditionalDGTypeDHLItems: API.Service.DictItem[] | undefined,
  shipmentAdditionalDGTypeFedexItems: API.Service.DictItem[] | undefined
) => {
  const groupCode = service?.carrier?.groupCode;
  switch (groupCode) {
    case 'dhl':
      return shipmentAdditionalDGTypeDHLItems || [];
    case 'fedex':
      return shipmentAdditionalDGTypeFedexItems || [];
    default:
      return [];
  }
}

const showShipmentAdditionalDIT = (
  service: VerykType.Service | undefined,
  destinationRegion: VerykType.Region | undefined
) => {
  // Use DHL Official Invoice(available when DHL and not ship to CA)
  return ['dhl'].includes(service?.carrier?.groupCode || '')
    && !['CA'].includes(destinationRegion?.id || '');
}

const showShipmentAdditionalDITType = (ditState: string | undefined) => {
  // Use DHL Official Invoice Type(available when DHL) and state is true
  return ditState === Yes;
}

const showShipmentAdditionalTermsOfTrade = (
  service: VerykType.Service | undefined,
  destinationRegion: VerykType.Region | undefined,
  packageType: string | undefined
) => {
  // Terms of Trade(available when Fedex and not ship to CA and not document)
  return ['fedex'].includes(service?.carrier?.groupCode || '')
    && !['CA'].includes(destinationRegion?.id || '')
    && packageType !== 'env';
}

const showShipmentAdditionalIOSS = (
  service: VerykType.Service | undefined,
  destinationRegion: VerykType.Region | undefined,
  packageType: string | undefined
) => {
  // IOSS(available when Canada Post,Fedex(not document)) not available when ship to CA
  const isShipToCA = ['CA'].includes(destinationRegion?.id || '');
  const isFedex = ['fedex'].includes(service?.carrier?.groupCode || '');
  const isCanadaPost = ['canadapost'].includes(service?.carrier?.groupCode || '');
  const isNotDocument = packageType !== 'env';
  return !isShipToCA && (isFedex && isNotDocument || isCanadaPost);
}

const showShipmentAdditionalIOSSType = (service: VerykType.Service | undefined, iossState: string | undefined) => {
  // IOSS Type(available when Fedex) and state is true
  return ['fedex'].includes(service?.carrier?.groupCode || '') && iossState === Yes;
}

const showShipmentAdditionalIOSSId = (iossState: string | undefined) => {
  // IOSS ID(required when state is true)
  return iossState === Yes;
}


const DestinationLocalizedModalForm: React.FC<{
  modalVisit: boolean,
  setModalVisit: (modalVisit: boolean) => void,
  onFinish: (values: any) => Promise<boolean | void>
  destinationRegion: VerykType.Region | undefined
}> = ({ modalVisit, setModalVisit, onFinish, destinationRegion }) => {
  return (
    <ModalForm
      title="Localized Address"
      open={modalVisit}
      onFinish={onFinish}
      onOpenChange={setModalVisit}
      layout='horizontal'
      labelAlign='right'
      labelCol={{ span: 5 }}
    >
      <ProFormText
        name={['destinationLocalized', 'name']}
        label="Contact Name"
        placeholder="Required."
        rules={[{ required: true, message: 'Please enter a contact name' }]}
      />

      <ProFormText
        name={['destinationLocalized', 'company']}
        label="Company Name"
        placeholder="Optional."
      />

      <ProFormText
        name={['destinationLocalized', 'phone']}
        label="Cellphone Number"
        placeholder="Required."
        rules={[{ required: true, message: 'Please enter a cellphone number' }]}
        fieldProps={{
          addonBefore: `+${destinationRegion?.phoneCode || ''}`,
        }}
      />

      <ProFormText
        name={['destinationLocalized', 'address']}
        label="Address1"
        placeholder="Required."
        rules={[{ required: true, message: 'Please enter an address' }]}
      />

      <ProFormText name={['destinationLocalized', 'postalCode']} label="Postal Code" placeholder="Required."
        rules={[{ required: true, message: 'Please enter a postal code' }]} />

      <ProFormText name={['destinationLocalized', 'province']} label="Province/State" placeholder="Required."
        rules={[{ required: true, message: 'Please enter a province/state' }]}
        convertValue={(value) => value?.name || ''}
        transform={(value) => {
          return {
            destinationLocalized: {
              province: {
                id: '0',
                name: value,
                code: ''
              }
            }
          }
        }}
      />

      <ProFormText
        name={['destinationLocalized', 'city']}
        label="City"
        placeholder="Required."
        rules={[{ required: true, message: 'Please enter a city' }]}
      />


    </ModalForm>
  );
};

const ShipmentForm: React.FC = () => {
  const formRef = useRef<ProFormInstance>();

  const {
    //selectedService,
    //quoteFormData,
    serviceId,
    setCurrentStep,
    setQuoteFormData,
    setOrderNumber,
    dataLoading,
    operationLoading,
    setOperationLoading,
    setQuoteFormInitialValues,
    //setShipmentFormInitialValues,
    shipmentFormInitialValues
  } = useModel('Shipping.shipmentForm', (model) => ({
    //selectedService: model.selectedService,
    //quoteFormData: model.quoteFormData,
    serviceId: model.selectedServiceId,
    setCurrentStep: model.setCurrentStep,
    setQuoteFormData: model.setQuoteFormData,
    setOrderNumber: model.setOrderNumber,
    dataLoading: model.dataLoading,
    operationLoading: model.operationLoading,
    setOperationLoading: model.setOperationLoading,
    setQuoteFormInitialValues: model.setQuoteFormInitialValues,
    //setShipmentFormInitialValues: model.setShipmentFormInitialValues,
    shipmentFormInitialValues: model.shipmentFormInitialValues,
  }));

  const { regions, provinceRecord } = useModel('regions', (model) => ({
    regions: model.regions,
    provinceRecord: model.provinceRecord,
    //initiationRegion: getRegionById(model.regions, shipmentFormInitialValues?.initiation?.regionId),
    //destinationRegion: getRegionById(model.regions, shipmentFormInitialValues?.destination?.regionId),
  }));
  const initiationRegion = useMemo(() => {
    return getRegionById(regions, shipmentFormInitialValues?.initiation?.regionId);
  }, [regions, shipmentFormInitialValues]);
  const destinationRegion = useMemo(() => {
    return getRegionById(regions, shipmentFormInitialValues?.destination?.regionId);
  }, [regions, shipmentFormInitialValues]);

  const { allCarriers, carriersLoading } = useModel('carriers', (model) => ({
    allCarriers: model.carriers || [],
    carriersLoading: model.loading
  }));
  const {
    addressTypeItems,
    packageTypeItems,
    packageAdditionalDCTypeItems,
    packageAdditionalCODFundTypeItems,
    packCodeStateItems,
    labelFormatDHLItems,
    labelFormatUPSItems,
    labelFormatPurolatorItems,
    labelFormatCanadaPostItems,
    labelFormatFedexItems,
    productUnitDHLItems,
    productUnitUPSItems,
    productUnitFedexItems,
    shipmentAdditionalDCTypeItems,
    shipmentAdditionalSOTypeItems,
    shipmentAdditionalREFStateCanadaPostItems,
    shipmentAdditionalREFStateUPSItems,
    shipmentAdditionalSignatureTypeFedexItems,
    shipmentAdditionalSignatureTypePurolatorItems,
    shipmentAdditionalSignatureTypePurolatorInternationalItems,
    shipmentAdditionalRSCodeItems,
    shipmentAdditionalDGTypeDHLItems,
    shipmentAdditionalDGTypeFedexItems,
    shipmentAdditionalDITTypeItems,
    shipmentAdditionalIOSSTypeItems,
    shipmentAdditionalTermsOfTradeStateItems,
    dictsLoading
  } = useModel('dicts', (model) => ({
    addressTypeItems: model.dicts?.addressType,
    packageTypeItems: model.dicts?.packageType,
    packageAdditionalDCTypeItems: model.dicts?.packageAdditionalDCType,
    packageAdditionalCODFundTypeItems: model.dicts?.packageAdditionalCODFundType,
    packCodeStateItems: model.dicts?.packCodeState,
    labelFormatDHLItems: model.dicts?.labelFormatDHL,
    labelFormatUPSItems: model.dicts?.labelFormatUPS,
    labelFormatPurolatorItems: model.dicts?.labelFormatPurolator,
    labelFormatCanadaPostItems: model.dicts?.labelFormatCanadaPost,
    labelFormatFedexItems: model.dicts?.labelFormatFedex,
    productUnitDHLItems: model.dicts?.productUnitDHL,
    productUnitUPSItems: model.dicts?.productUnitUPS,
    productUnitFedexItems: model.dicts?.productUnitFedex,
    shipmentAdditionalDCTypeItems: model.dicts?.shipmentAdditionalDCType,
    shipmentAdditionalSOTypeItems: model.dicts?.shipmentAdditionalSOType,
    shipmentAdditionalREFStateCanadaPostItems: model.dicts?.shipmentAdditionalREFStateCanadaPost,
    shipmentAdditionalREFStateUPSItems: model.dicts?.shipmentAdditionalREFStateUPS,
    shipmentAdditionalSignatureTypeFedexItems: model.dicts?.shipmentAdditionalSignatureTypeFedex,
    shipmentAdditionalSignatureTypePurolatorItems: model.dicts?.shipmentAdditionalSignatureTypePurolator,
    shipmentAdditionalSignatureTypePurolatorInternationalItems: model.dicts?.shipmentAdditionalSignatureTypePurolatorInternational,
    shipmentAdditionalRSCodeItems: model.dicts?.shipmentAdditionalRSCode,
    shipmentAdditionalDGTypeDHLItems: model.dicts?.shipmentAdditionalDGTypeDHL,
    shipmentAdditionalDGTypeFedexItems: model.dicts?.shipmentAdditionalDGTypeFedex,
    shipmentAdditionalDITTypeItems: model.dicts?.shipmentAdditionalDITType,
    shipmentAdditionalIOSSTypeItems: model.dicts?.shipmentAdditionalIOSSType,
    shipmentAdditionalTermsOfTradeStateItems: model.dicts?.shipmentAdditionalTermsOfTradeState,
    dictsLoading: model.loading
  }));


  // useEffect(() => {
  //   if (selectedService) {
  //     setServiceId(selectedService.id);
  //   }
  // }, [selectedService]);

  const service = useMemo(() => {
    return serviceId ? getCarrierServiceById(allCarriers, serviceId) : undefined;
  }, [serviceId, allCarriers]);

  const labelFormatItems = useMemo(() => {
    if (!service) return [];
    return labelFormatItemsByGroupCode(
      service,
      labelFormatDHLItems,
      labelFormatUPSItems,
      labelFormatPurolatorItems,
      labelFormatCanadaPostItems,
      labelFormatFedexItems
    );
  }, [service, labelFormatDHLItems, labelFormatUPSItems, labelFormatPurolatorItems, labelFormatCanadaPostItems, labelFormatFedexItems]);

  const productUnitItems = useMemo(() => {
    if (!service) return [];
    return productUnitItemsByGroupCode(
      service,
      productUnitDHLItems,
      productUnitUPSItems,
      productUnitFedexItems
    );
  }, [service, productUnitDHLItems, productUnitUPSItems, productUnitFedexItems]);

  const shipmentAdditionalDGTypeItems = useMemo(() => {
    if (!service) return [];
    return shipmentAdditionalDGTypeItemsByGroupCode(
      service,
      shipmentAdditionalDGTypeDHLItems,
      shipmentAdditionalDGTypeFedexItems
    );
  }, [service, shipmentAdditionalDGTypeDHLItems, shipmentAdditionalDGTypeFedexItems]);

  const shipmentAdditionalREFStateItems = useMemo(() => {
    if (!service) return [];
    return shipmentAdditionalREFStateItemsByGroupCode(
      service,
      shipmentAdditionalREFStateCanadaPostItems,
      shipmentAdditionalREFStateUPSItems
    );
  }, [service, shipmentAdditionalREFStateCanadaPostItems, shipmentAdditionalREFStateUPSItems]);


  // useEffect(() => {
  //   if (quoteFormData && serviceId) {
  //     setFormInitialValues({
  //       serviceId,
  //       initiation: quoteFormData.initiation,
  //       destination: quoteFormData.destination,
  //       package: quoteFormData.package,
  //       option: quoteFormData.option,
  //       // product: [{} as VerykType.ProductItem],
  //     });
  //   }
  // }, [quoteFormData, serviceId]);
  useEffect(() => {
    if (shipmentFormInitialValues && formRef.current) {
      //formRef.current?.resetFields();
      formRef.current?.setFieldsValue(shipmentFormInitialValues);
    }
  }, [shipmentFormInitialValues, formRef]);

  const loading = useMemo(() => {
    return dictsLoading || carriersLoading || dataLoading;
  }, [dictsLoading, carriersLoading, dataLoading]);


  const [localizedModalVisit, setLocalizedModalVisit] = useState(false);

  const localizedModalOnFinish = useCallback(async (values: any) => {
    console.log(values);
    formRef.current?.setFieldsValue({
      destinationLocalized: {
        ...values
      }
    });
  }, []);

  //const [packageType, setPackageType] = useState<string>('env');
  // useEffect(() => {
  //   // fetchDictsAsync();
  //   fetchDicts();
  // }, []);

  const formOnValuesChange = useCallback((changedValues: any, allValues: any) => {
    if (changedValues.initiation?.regionId !== undefined) {
      // Reset initiation.province field
      formRef.current?.setFieldsValue({
        initiation: {
          province: undefined,
        },
      });
    }

    if (changedValues.destination?.regionId !== undefined) {
      // Reset destination.province field
      formRef.current?.setFieldsValue({
        destination: {
          province: undefined,
        },
      });
    }

    // if (changedValues.package?.type !== undefined) {
    //   // setPackageType(changedValues.package?.type);

    //   let packages = [];
    //   if (changedValues.package?.type === 'env' || changedValues.package?.type === 'pak') {
    //     packages = [{ weight: 1.00, }]
    //   } else {
    //     packages = [{ insurance: 0.00, weight: 1.00, dimension: { length: 1.00, width: 1.00, height: 1.00 } }]
    //   }
    //   formRef.current?.setFieldsValue({
    //     package: {
    //       packages: packages
    //     }
    //   })
    // }
  }, []);

  const handleSave = useCallback(async (formData: any) => {
    setOperationLoading(true);
    console.log(formData);
    console.log(formRef.current?.getFieldsFormatValue?.());
    const result = await postShipmentSave(formData);
    console.log(result);
    history.push(`/shipping/shipment/${result.data?.number}`);

    //formRef.current?.setFieldsValue(result.data);
    setOperationLoading(false);
  }, [setOperationLoading, formRef]);

  const handleSubmit = useCallback(async () => {
    setOperationLoading(true);
    //console.log(formData);
    try {
      const formData = await formRef.current?.validateFieldsReturnFormatValue?.();
      console.log(formData);
      const result = await postShipmentSubmit(formData);
      console.log(result);
      setOrderNumber(result.data?.number || '');
      setCurrentStep(3);
    } catch (errorInfo) {
      //console.log('validate error:', errorInfo);

    }
    setOperationLoading(false);

  }, [setOperationLoading, setCurrentStep, setOrderNumber, formRef]);


  const handleReQuote = useCallback(async () => {

    const currentFormData = formRef.current?.getFieldsFormatValue?.();

    const quoteFormData = {
      initiation: {
        regionId: currentFormData?.initiation?.regionId,
        postalCode: currentFormData?.initiation?.postalCode,
        province: currentFormData?.initiation?.province,
        city: currentFormData?.initiation?.city,
      },
      destination: {
        regionId: currentFormData?.destination?.regionId,
        postalCode: currentFormData?.destination?.postalCode,
        province: currentFormData?.destination?.province,
        city: currentFormData?.destination?.city,
      },
      package: {
        type: currentFormData?.package?.type,
        packages: [{
          weight: currentFormData?.package?.packages?.[0]?.weight,
          ...(currentFormData?.package?.packages?.[0]?.dimension && { dimension: currentFormData?.package?.packages?.[0]?.dimension }),
          ...(currentFormData?.package?.packages?.[0]?.insurance && { insurance: currentFormData?.package?.packages?.[0]?.insurance }),
        }]
      },
      option: {
        ...(currentFormData?.option?.memo && { memo: currentFormData?.option?.memo }),
        ...(currentFormData?.option?.packingFee && { packingFee: currentFormData?.option?.packingFee }),
      }
    }
    setQuoteFormInitialValues(quoteFormData);

    setQuoteFormData(undefined);
    setCurrentStep(0);


  }, [setQuoteFormData, setCurrentStep, setQuoteFormInitialValues, formRef]);

  const packagesProFormListRender = (params: Record<string, any>) => (meta: any, index: any, action: any, count: any) => {
    const weightInput = <ProFormDigit name='weight' label='Weight' rules={[{ required: true, message: 'Please enter weight' }]} fieldProps={{
      addonAfter: 'lb',
      precision: 2
    }} />

    const dimensionAndInsuranceInput = params?.package?.type === 'parcel' && (
      <>
        <ProForm.Item label='Dimensions' name='dimension' rules={[{
          validator: (_, value) => {
            if (!value?.length || !value?.width || !value?.height) {
              return Promise.reject(new Error('Please enter all dimensions'));
            }
            return Promise.resolve();
          }
        }]}>
          <DimensionInput />
        </ProForm.Item>

        <ProFormDigit name='insurance' label='Carrier Insurance' min={0} placeholder='Optional.'
          fieldProps={{
            addonAfter: '$',
            precision: 2
          }}
          extra={
            <Text type="secondary" >
              <QuestionCircleOutlined style={{ marginRight: 4 }} />
              Lost claims require receipt and other proof of value declared !
            </Text>
          } />
      </>
    )

    const DCInput = showPackageAdditionalDC(service, destinationRegion) && (
      <>
        <ProFormSelect
          name={['additional', 'DC', 'state']}
          label='Delivery Confirmation'
          options={YesNoOptions}
          allowClear={false}
          rules={[{ required: true, message: 'Please select Delivery Confirmation' }]}
          placeholder="Required."
          initialValue={No}
        />
        <ProFormDependency name={[['additional', 'DC', 'state']]}>
          {({ additional }) => {
            if (additional?.DC?.state === Yes) {
              return <ProFormSelect
                name={['additional', 'DC', 'type']}
                label='Confirmation Type'
                options={packageAdditionalDCTypeItems}
                allowClear={false}
                placeholder="Required."
                rules={[{ required: true, message: 'Please select Delivery Confirmation Type' }]}
              />
            }
          }}
        </ProFormDependency>
      </>
    )

    const CODInput = showPackageAdditionalCOD(service, destinationRegion, params?.package?.type) && (
      <>
        <ProFormSelect
          name={['additional', 'COD', 'state']}
          label='Collect on Delivery?'
          options={YesNoOptions}
          allowClear={false}
          placeholder="Required."
          initialValue={No}
          rules={[{ required: true, message: 'Please select Collect on Delivery' }]}
          extra={
            <Text type="secondary" >
              <QuestionCircleOutlined style={{ marginRight: 4 }} />
              CA to US COD is not allowed for package Letter/Envelope
            </Text>
          }
        />
        <ProFormDependency name={[['additional', 'COD', 'state']]}>
          {({ additional }) => {
            if (additional?.COD?.state === Yes) {
              return (
                <>
                  <ProFormDigit
                    name={['additional', 'COD', 'amount']}
                    label='COD Amount'
                    min={0}
                    placeholder="Required."
                    rules={[{ required: true, message: 'Please enter COD Amount' }]}
                    fieldProps={{
                      precision: 2
                    }} />
                  <ProFormSelect
                    name={['additional', 'COD', 'fund_type']}
                    label='Fund Type'
                    options={packageAdditionalCODFundTypeItems}
                    allowClear={false}
                    placeholder="Required."
                    rules={[{ required: true, message: 'Please select Fund Type' }]}
                  />
                </>
              )
            }
          }}
        </ProFormDependency>
      </>
    )

    const AHInput = showPackageAdditionalAH(service, params?.package?.type) && (
      <>
        <ProFormSelect
          name={['additional', 'AH', 'state']}
          label='Additional Handling?'
          options={YesNoOptions}
          initialValue={No}
          allowClear={false}
          placeholder="Required."
          rules={[{ required: true, message: 'Please select Additional Handling' }]}
        />
      </>
    )

    const ReferenceNumberInput = showPackageAdditionalReferenceNumber(service) && (
      <>
        <ProFormSelect
          name={['additional', 'ReferenceNumber', 'state']}
          label='Reference Number?'
          options={YesNoOptions}
          initialValue={No}
          allowClear={false}
          placeholder="Required."
          rules={[{ required: true, message: 'Please select Reference Number' }]}
        />
        <ProFormDependency name={[['additional', 'ReferenceNumber', 'state']]}>
          {({ additional }) => {
            if (additional?.ReferenceNumber?.state === Yes) {
              return <ProFormText
                name={['additional', 'ReferenceNumber', 'number']}
                label='Number'
                placeholder='Required.'
                rules={[{ required: true, message: 'Please enter Reference Number' }]}
              />
            }
          }}
        </ProFormDependency>
      </>
    )

    const UAEInput = (showPackageAdditionalUAE(service, destinationRegion)) && (
      <>
        <ProFormSelect
          name={['additional', 'info', 'state']}
          label='To the UAE?'
          options={[{ label: 'Yes', value: Yes }]}
          allowClear={false}
          placeholder="Required."

          rules={[{ required: true, message: 'Please select To the UAE' }]}
        />
        <ProFormText
          name={['additional', 'info', 'ItemDescriptionForClearance']}
          label='Description For Clearance'
          placeholder='Required.'
          rules={[{ required: true, message: 'Please enter Description For Clearance' }]}
        />
      </>
    )

    const IMInput = (showPackageAdditionalIM(service)) && (
      <>
        <ProFormSelect
          name={['additional', 'IM', 'state']}
          label='Description?'
          options={YesNoOptions}
          initialValue={No}
          allowClear={false}
          rules={[{ required: true, message: 'Please select UPS Description' }]}
          placeholder="Required."
          extra={
            <Text type="secondary" >
              <QuestionCircleOutlined style={{ marginRight: 4 }} />
              Destination is mandatory for Mexico.
            </Text>
          }
        />
        <ProFormDependency name={[['additional', 'IM', 'state']]}>
          {({ additional }) => {
            if (additional?.IM?.state === Yes) {
              return <ProFormText
                name={['additional', 'IM', 'description']}
                label='Text description'
                placeholder='Required.'
                rules={[{ required: true, message: 'Please enter UPS Description' }]}
              />
            }
          }}
        </ProFormDependency>
      </>
    )

    const packCodeInput = (showPackageAdditionalPackCode(service, destinationRegion)) && (
      <>
        <ProFormSelect
          name={['additional', 'packcode', 'state']}
          label='Package description?'
          options={packCodeStateItems}
          allowClear={false}
          rules={[{ required: true, message: 'Please select Pack Code' }]}
          placeholder="Required."
        />
      </>
    )

    return (<>

      {weightInput}

      {dimensionAndInsuranceInput}

      {DCInput}

      {CODInput}

      {AHInput}

      {ReferenceNumberInput}

      {UAEInput}

      {IMInput}

      {packCodeInput}

    </>)
  }

  const productsProFormListRender = (params: Record<string, any>) => (meta: any, index: any, action: any, count: any) => {

    const isFedexEnv = service?.carrier?.groupCode === 'fedex' && params?.package?.type === 'env';

    const nameInput = (
      <ProFormText
        name={['name']}
        label={service?.carrier?.groupCode === 'canadapost' ? 'Product' : 'Description'}
        placeholder="Required."
        rules={[{ required: true, message: 'Please enter a product name' }]}
        extra={
          (
            isFedexEnv &&
            <Text type="secondary">
              <QuestionCircleOutlined style={{ marginRight: 4 }} />
              &quot;Documents&quot;, &quot;Documentation&quot;, &quot;Document&quot; are incomplete descriptions and not accepted by Customs. An example of an acceptable description is &quot;Birth Certificate.&quot; Clearance delays may result if the contents are not completely and accurately described.
            </Text>
          )
        }
      />
    )

    if (isFedexEnv) {
      return (<>
        {nameInput}
      </>)
    }

    const qtyInput = (
      <ProFormDigit
        name={['qty']}
        label="Quantity"
        placeholder="Required."
        rules={[{ required: true, message: 'Please enter a quantity' }]}
        fieldProps={{
          precision: 0,
        }}
      />
    )

    const priceInput = (
      <ProFormDigit
        name={['price']}
        label="Unit Price(CAD)"
        placeholder="Required."
        rules={[{ required: true, message: 'Please enter a price' }]}
        fieldProps={{
          precision: 2,
        }}
      />
    )

    const unitInput = productUnitItems?.length > 0 && (
      <ProFormSelect
        name={['unit']}
        label="Unit"
        placeholder="Required."
        rules={[{ required: true, message: 'Please select a unit' }]}
        options={productUnitItems}
      />
    )

    const originInput = (
      showProductOrigin(service) &&
      <ProFormSelect
        fieldProps={{
          showSearch: true,
          allowClear: false,
          filterOption: (input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase()) ||
            (option?.value ?? '').toLowerCase().includes(input.toLowerCase()),
        }}
        placeholder="Required."
        name={['origin']}
        label="Origin"
        options={regions.map((region) => ({ label: region.name, value: region.id }))}
        rules={[{ required: true, message: 'Please select a origin' }]}
      />
    )

    const productHSCodeRequired = isProductHSCodeRequired(service);

    const HScodeInput = showProductHSCode(service) && (
      <ProFormText
        name={['HScode']}
        label="HS Code"
        placeholder={productHSCodeRequired ? "Required." : "Optional."}
        rules={productHSCodeRequired ? [{ required: true, message: 'Please enter a HS code' }] : undefined}
      />
    )
    return (<>
      {nameInput}
      {qtyInput}
      {priceInput}
      {unitInput}
      {originInput}
      {HScodeInput}
    </>)
  }




  return (
    <>
      {/* <ProCard loading={loading} ghost direction='row' wrap gutter={[16, 0]}> */}


      <ProCard
        bordered
        title="Carrier & Service"
        headerBordered
        type='inner'
        style={{ margin: '16px 8px 0' }}
        loading={loading}
        colSpan={24}

      >
        <ProList<VerykType.Service>
          dataSource={service ? [service] : []}
          rowKey="id"
          metas={{
            title: {
              render: (_, record) => (
                <Title level={5}>{record?.carrier?.name}</Title>
              ),
            },
            description: {
              render: (_, record) => (
                <Text type="secondary">{`${record?.name} (${record?.code})`} </Text>
              ),
            },
            avatar: {
              render: (_, record) => (
                <img src={record?.carrier?.logo} alt={record?.carrier?.name} style={{ width: '54px', height: '54px' }} />
              ),
            },
            actions: {
              render: (_, record) => (
                <Button onClick={handleReQuote}>Re-Quote</Button>
              ),
            }
          }}
        />
      </ProCard>

      {
        // shipmentFormInitialValues &&
        <ProForm
          layout="horizontal"
          labelAlign='right'
          style={{ width: '100%' }}
          labelCol={{ span: 6 }}
          labelWrap={true}
          formRef={formRef}
          onValuesChange={formOnValuesChange}
          onFinish={handleSave}
          //initialValues={shipmentFormInitialValues}
          preserve={false}
          submitter={{
            render: (_, dom) => {
              //console.log("dom", dom);
              return (
                loading ? null :
                  <FooterToolbar>
                    <Button type="default" loading={operationLoading} onClick={() => {
                      formRef.current?.setFieldsValue(testShipmentFormData);
                    }}>Set Test Data</Button>
                    {dom}
                    <Button type="primary" onClick={handleSubmit} loading={operationLoading}>Submit</Button>
                  </FooterToolbar>
              );
            },
            searchConfig: {
              submitText: 'Save',
            },
            submitButtonProps: {
              loading: operationLoading,
            },
            resetButtonProps: {
              loading: operationLoading,
            },
          }}

        >

          <ProFormText name="number" hidden />
          <ProFormText name="serviceId" hidden />

          <ProForm.Item name="destinationLocalized" hidden />
          <ProForm.Item name="price" hidden />


          <ProCard ghost gutter={[16, 16]} direction='row' type='inner'>




            <ProCard colSpan={12} ghost direction='column' gutter={[0, 16]} loading={loading}>
              <ProCard bordered title="SHIP FROM" headerBordered type='inner' extra={
                <Button type="primary" icon={<ContactsOutlined />} />
              }>
                <ProFormText
                  name={['initiation', 'name']}
                  label="Contact Name"
                  placeholder="Required."
                  rules={[{ required: true, message: 'Please enter a contact name' }]}
                />

                <ProFormText
                  name={['initiation', 'company']}
                  label="Company Name"
                  placeholder="Optional."
                />

                <ProFormText
                  name={['initiation', 'phone']}
                  label="Cellphone Number"
                  placeholder="Required."
                  rules={[{ required: true, message: 'Please enter a cellphone number' }]}
                  fieldProps={{
                    addonBefore: `+${initiationRegion?.phoneCode || ''}`,
                  }}
                />

                <ProFormText
                  name={['initiation', 'address']}
                  label="Address1"
                  placeholder="Required."
                  rules={[{ required: true, message: 'Please enter an address' }]}
                />

                <ProFormText
                  name={['initiation', 'address2']}
                  label="Address2"
                  placeholder="Optional."
                />

                {showAddress3(service) && (
                  <ProFormText
                    name={['initiation', 'address3']}
                    label="Address3"
                    placeholder="Optional."
                  />
                )}

                <ProFormSelect
                  fieldProps={{
                    showSearch: true,
                    allowClear: false,
                    filterOption: (input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase()) ||
                      (option?.value ?? '').toLowerCase().includes(input.toLowerCase()),
                  }}
                  placeholder="Required."
                  name={['initiation', 'regionId']}
                  label="Country"
                  readonly
                  options={regions.map((region) => ({ label: region.name, value: region.id }))}
                  rules={[{ required: true, message: 'Please select a country' }]}
                />
                <ProFormText name={['initiation', 'postalCode']} label="Postal Code" placeholder="Required."
                  rules={[{ required: true, message: 'Please enter a postal code' }]} />
                <ProFormDependency name={[['initiation', 'regionId']]}>
                  {({ initiation }) => {
                    // console.log("initiation", initiation);

                    const provinces = provinceRecord[initiation?.regionId || 'CA']

                    if (provinces?.length > 0) {
                      return <ProFormSelect
                        name={['initiation', 'province', 'code']}
                        label="Province/State"
                        placeholder="Required."
                        options={provinces.map((province) => ({ label: province.name, value: province.code }))}
                        rules={[{ required: true, message: 'Please select a province/state' }]}
                        transform={(value) => {
                          return {
                            initiation: {
                              province: {
                                id: provinces.find((p) => p.code === value)?.id,
                                name: provinces.find((p) => p.code === value)?.name,
                                code: value
                              }
                            }
                          }
                        }}
                      />

                    } else {
                      return <ProFormText name={['initiation', 'province', 'name']} label="Province/State" placeholder="Required."
                        rules={[{ required: true, message: 'Please enter a province/state' }]}
                        transform={(value) => {
                          // console.log("initiation text transform", value);
                          return {
                            initiation: {
                              province: {
                                id: '0',
                                name: value,
                                code: ''
                              }
                            }
                          }
                        }}
                      //convertValue={(value) => value?.name || ''}
                      />
                    }
                  }}
                </ProFormDependency>

                <ProFormText name={['initiation', 'city']} label="City" placeholder="Required." rules={[{ required: true, message: 'Please enter a city' }]} />



              </ProCard>

              <ProCard bordered title="Options" headerBordered type='inner'>
                <ProFormSelect
                  name={['option', 'labelFormat']}
                  label="Label Format"
                  options={labelFormatItems}
                />
                <ProFormDigit name={['option', 'packingFee']} label="Packing Fee" min={0} placeholder="Optional." fieldProps={{
                  addonBefore: '$',
                  precision: 2
                }} />
                <ProFormText name={['option', 'memo']} label="Remark" placeholder="Optional."
                  extra={
                    <Text type="secondary" >
                      <QuestionCircleOutlined style={{ marginRight: 4 }} />
                      The Remark is for operational reference only.
                    </Text>
                  }
                />
              </ProCard>

              <ProCard bordered title="Value-added Services" headerBordered type='inner'>
                {/* <ProForm.Group labelLayout='twoLine' > */}
                {showShipmentAdditionalDC(service, destinationRegion) && (
                  <>
                    <ProFormSelect
                      name={['sadditional', 'DC', 'state']}
                      label="Delivery confirmation?"
                      options={YesNoOptions}
                      placeholder="Required."
                      initialValue={No}
                      rules={[{ required: true, message: 'Please select a delivery confirmation' }]}

                    />
                    <ProFormDependency name={[['sadditional', 'DC', 'state'], ['sadditional', 'LAD', 'state']]}>
                      {({ sadditional }) => {
                        const dcState = sadditional?.DC?.state;
                        const ladState = sadditional?.LAD?.state;
                        const dcTypeInput = showShipmentAdditionalDCType(service, dcState) && (
                          <ProFormSelect
                            name={['sadditional', 'DC', 'type']}
                            label="Confirmation Type"
                            options={shipmentAdditionalDCTypeItems}
                            placeholder="Required."
                            rules={[{ required: true, message: 'Please select a delivery confirmation' }]}
                          />
                        );

                        const soInput = showShipmentAdditionalSO(service, dcState, ladState) && (
                          <>
                            <ProFormSelect
                              name={['sadditional', 'SO', 'state']}
                              label="Signature?"
                              options={YesNoOptions}
                              initialValue={No}
                              placeholder="Required."
                              rules={[{ required: true, message: 'Please select a signature' }]}

                            />
                            <ProFormDependency name={[['sadditional', 'SO', 'state']]}>
                              {({ sadditional }) => {
                                const soState = sadditional?.SO?.state;
                                const soTypeInput = showShipmentAdditionalSOType(soState) && (
                                  <ProFormSelect
                                    name={['sadditional', 'SO', 'type']}
                                    label="Signature Type"
                                    options={shipmentAdditionalSOTypeItems}
                                    placeholder="Required."
                                    rules={[{ required: true, message: 'Please select a signature type' }]}
                                  />
                                );
                                return (
                                  <>
                                    {soTypeInput}
                                  </>
                                );
                              }}
                            </ProFormDependency>
                          </>
                        );

                        return (
                          <>
                            {dcTypeInput}
                            {soInput}
                          </>
                        )
                      }}
                    </ProFormDependency>
                  </>
                )}

                {(showShipmentAdditionalSignature(service)) && (
                  <>
                    <ProFormSelect
                      name={['sadditional', 'signature', 'state']}
                      label="Signature?"
                      options={YesNoOptions}
                      initialValue={No}
                      placeholder="Required."
                      rules={[{ required: true, message: 'Please select a signature' }]}

                      extra={
                        (service?.carrier?.groupCode === 'fedex' &&
                          <Text type="secondary">
                            <QuestionCircleOutlined style={{ marginRight: 4 }} />
                            In Canada and the U.S., Indirect Signature Required is available for residential shipments only.
                          </Text>
                        )
                      }
                    />
                    <ProFormDependency name={[['sadditional', 'signature', 'state']]}>
                      {({ sadditional }) => {
                        const signatureState = sadditional?.signature?.state;
                        const signatureTypeInput = showShipmentAdditionalSignatureType(signatureState) && (
                          <ProFormSelect
                            name={['sadditional', 'signature', 'type']}
                            label="Confirmation Type"
                            options={
                              shipmentAdditionalSignatureTypeItemsByGroupCodeAndRegion(
                                service,
                                initiationRegion,
                                destinationRegion,
                                shipmentAdditionalSignatureTypeFedexItems,
                                shipmentAdditionalSignatureTypePurolatorItems,
                                shipmentAdditionalSignatureTypePurolatorInternationalItems
                              )}
                            placeholder="Required."
                            rules={[{ required: true, message: 'Please select a signature type' }]}
                          />
                        );
                        return (
                          <>
                            {signatureTypeInput}
                          </>
                        );
                      }}
                    </ProFormDependency>
                  </>
                )}

                <ProFormDependency name={[['sadditional', 'DNS', 'state'], ['sadditional', 'LAD', 'state']]}>
                  {({ sadditional }) => {
                    const dnsState = sadditional?.DNS?.state;
                    const ladState = sadditional?.LAD?.state;
                    const hfpInput = showShipmentAdditionalHFP(service, destinationRegion, dnsState, ladState) && (
                      <ProFormSelect
                        name={['sadditional', 'HFP', 'state']}
                        label="Card for pickup?"
                        options={YesNoOptions}
                        initialValue={No}
                        placeholder="Required."
                        rules={[{ required: true, message: 'Please select a card for pickup' }]}

                      />
                    );
                    return (
                      <>
                        {hfpInput}
                      </>
                    );
                  }}
                </ProFormDependency>

                <ProFormDependency name={[['sadditional', 'HFP', 'state'], ['sadditional', 'LAD', 'state']]}>
                  {({ sadditional }) => {
                    const hfpState = sadditional?.HFP?.state;
                    const ladState = sadditional?.LAD?.state;
                    const dnsInput = showShipmentAdditionalDNS(service, destinationRegion, hfpState, ladState) && (
                      <ProFormSelect
                        name={['sadditional', 'DNS', 'state']}
                        label="Do not safe drop?"
                        options={YesNoOptions}
                        initialValue={No}
                        placeholder="Required."
                        rules={[{ required: true, message: 'Please select a do not safe drop' }]}

                      />
                    );
                    return (
                      <>
                        {dnsInput}
                      </>
                    );
                  }}
                </ProFormDependency>

                <ProFormDependency name={[['sadditional', 'SO', 'state'], ['sadditional', 'DNS', 'state'], ['sadditional', 'HFP', 'state']]}>
                  {({ sadditional }) => {
                    const soState = sadditional?.SO?.state;
                    const hfpState = sadditional?.HFP?.state;
                    const dnsState = sadditional?.DNS?.state;

                    const ladInput = showShipmentAdditionalLAD(service, destinationRegion, soState, hfpState, dnsState) && (
                      <ProFormSelect
                        name={['sadditional', 'LAD', 'state']}
                        label="Leave at door - do not card?"
                        options={YesNoOptions}
                        initialValue={No}
                        placeholder="Required."
                        rules={[{ required: true, message: 'Please select a leave at door - do not card' }]}
                      />
                    );
                    return (
                      <>
                        {ladInput}
                      </>
                    );
                  }}
                </ProFormDependency>


                {showShipmentAdditionalDIT(service, destinationRegion) && (
                  <>
                    <ProFormSelect
                      name={['sadditional', 'DIT', 'state']}
                      label="Use DHL Invoice?"
                      options={YesNoOptions}
                      placeholder="Required."
                      initialValue={No}
                      rules={[{ required: true, message: 'Please select if use DHL official invoice' }]}
                    />
                    <ProFormDependency name={[['sadditional', 'DIT', 'state']]}>
                      {({ sadditional }) => {
                        const ditState = sadditional?.DIT?.state;
                        const ditTypeInput = showShipmentAdditionalDITType(ditState) && (
                          <ProFormSelect
                            name={['sadditional', 'DIT', 'type']}
                            label="Invoice Type"
                            options={shipmentAdditionalDITTypeItems}
                            placeholder="Required."
                            rules={[{ required: true, message: 'Please select a invoice type' }]}
                          />
                        );
                        return (
                          <>
                            {ditTypeInput}
                          </>
                        );
                      }}
                    </ProFormDependency>
                  </>
                )}


                <ProFormDependency name={[['package', 'type'], ['sadditional', 'DIT', 'state']]}>
                  {(params) => {
                    const ediInput = showShipmentAdditionalEDI(service, initiationRegion, destinationRegion, params?.package?.type, params?.sadditional?.DIT?.state) && (
                      <ProFormSelect
                        name={['sadditional', 'EDI', 'state']}
                        label="E-Commercial Invoice?"
                        options={YesNoOptions}
                        initialValue={No}
                        placeholder="Required."
                        rules={[{ required: true, message: 'Please select a e-commercial invoice' }]}
                        extra={
                          <Text type="secondary">
                            <QuestionCircleOutlined style={{ marginRight: 4 }} />
                            This option is for paperless shipment. Select &quot;No&quot; if you want to print commercial invoice.
                          </Text>
                        }
                      />
                    );
                    return (
                      <>
                        {ediInput}
                      </>
                    );
                  }}
                </ProFormDependency>

                <ProFormDependency name={[['package', 'type']]}>
                  {(params) => {
                    const dgInput = showShipmentAdditionalDG(service, destinationRegion, params?.package?.type) && (
                      <>
                        <ProFormSelect
                          name={['sadditional', 'DG', 'state']}
                          label="Dangerous Goods?"
                          options={YesNoOptions}
                          initialValue={No}
                          placeholder="Required."
                          rules={[{ required: true, message: 'Please select yes or no' }]}
                        />
                        <ProFormDependency name={[['sadditional', 'DG', 'state']]}>
                          {({ sadditional }) => {
                            const dgState = sadditional?.DG?.state;
                            const dgTypeInput = showShipmentAdditionalDGType(dgState) && (
                              <ProFormSelect
                                name={['sadditional', 'DG', 'type']}
                                label="Select type"
                                options={shipmentAdditionalDGTypeItems}
                                placeholder="Required."
                                rules={[{ required: true, message: 'Please select a dangerous goods type' }]}
                              />
                            );
                            return (
                              <>
                                {dgTypeInput}
                              </>
                            );
                          }}
                        </ProFormDependency>
                      </>
                    );
                    return (
                      <>
                        {dgInput}
                      </>
                    );
                  }}
                </ProFormDependency>


                {showShipmentAdditionalRS(service) && (
                  <>
                    <ProFormSelect
                      name={['sadditional', 'RS', 'state']}
                      label="Return Service?"
                      options={YesNoOptions}
                      initialValue={No}
                      placeholder="Required."
                      rules={[{ required: true, message: 'Please select a return service' }]}
                      extra={
                        <Text type="secondary">
                          <QuestionCircleOutlined style={{ marginRight: 4 }} />
                          When select this option the shipment is a return shipment.
                        </Text>
                      }
                    />
                    <ProFormDependency name={[['sadditional', 'RS', 'state']]}>
                      {({ sadditional }) => {
                        const rsState = sadditional?.RS?.state;
                        const rsCodeInput = showShipmentAdditionalRSCode(rsState) && (
                          <ProFormSelect
                            name={['sadditional', 'RS', 'code']}
                            label="Type"
                            options={shipmentAdditionalRSCodeItems}
                            placeholder="Required."
                            rules={[{ required: true, message: 'Please select a return service type' }]}
                          />
                        );
                        const rsDescriptionInput = showShipmentAdditionalRSDescription(rsState) && (
                          <ProFormText
                            name={['sadditional', 'RS', 'description']}
                            label="DESC"
                            placeholder="Required."
                            rules={[{ required: true, message: 'Please enter a return service description' }]}
                          />
                        );
                        return (
                          <>
                            {rsCodeInput}
                            {rsDescriptionInput}
                          </>
                        );
                      }}
                    </ProFormDependency>
                  </>
                )}

                {showShipmentAdditional_RFE(service, destinationRegion) && (
                  <>
                    <ProFormSelect
                      name={['sadditional', '_RFE', 'state']}
                      label="Reason For Export?"
                      options={shipmentAdditionalREFStateItems}
                      placeholder="Required."
                      rules={[{ required: true, message: 'Please select a reason for export' }]}
                    />
                    <ProFormDependency name={[['sadditional', '_RFE', 'state']]}>
                      {({ sadditional }) => {
                        const rfeState = sadditional?._RFE?.state;
                        const rfeOtherReasonInput = showShipmentAdditional_RFEOtherReason(service, rfeState) && (
                          <ProFormText
                            name={['sadditional', '_RFE', 'otherReason']}
                            label="Other Reason"
                            placeholder="Required."
                            rules={[{ required: true, message: 'Please enter other reason for export' }]}
                          />
                        );
                        return (
                          <>
                            {rfeOtherReasonInput}
                          </>
                        );
                      }}

                    </ProFormDependency>
                  </>
                )}

                <ProFormDependency name={[['package', 'type']]}>
                  {(params) => {
                    const termsOfTradeInput = showShipmentAdditionalTermsOfTrade(service, destinationRegion, params?.package?.type) && (
                      <ProFormSelect
                        name={['sadditional', 'TermsOfTrade', 'state']}
                        label="Terms of Trade?"
                        options={shipmentAdditionalTermsOfTradeStateItems}
                        placeholder="Required."
                        rules={[{ required: true, message: 'Please select a terms of trade' }]}
                        extra={
                          <Text type="secondary">
                            <QuestionCircleOutlined style={{ marginRight: 4 }} />
                            This option is only valid for accounts
                          </Text>
                        }
                      />
                    );
                    return (
                      <>
                        {termsOfTradeInput}
                      </>
                    );
                  }}
                </ProFormDependency>


                <ProFormDependency name={[['package', 'type']]}>
                  {(params) => {
                    const iossInput = showShipmentAdditionalIOSS(service, destinationRegion, params?.package?.type) && (
                      <>
                        <ProFormSelect
                          name={['sadditional', 'IOSS', 'state']}
                          label="IOSS?"
                          options={YesNoOptions}
                          initialValue={No}
                          placeholder="Required."
                          rules={[{ required: true, message: 'Please select a IOSS' }]}
                        />
                        <ProFormDependency name={[['sadditional', 'IOSS', 'state']]}>
                          {({ sadditional }) => {
                            const iossState = sadditional?.IOSS?.state;
                            const iossTypeInput = showShipmentAdditionalIOSSType(service, iossState) && (
                              <ProFormSelect
                                name={['sadditional', 'IOSS', 'type']}
                                label="IOSS ID"
                                options={shipmentAdditionalIOSSTypeItems}
                                placeholder="Required."
                                rules={[{ required: true, message: 'Please select a IOSS type' }]}
                              />
                            );
                            const iossIdInput = showShipmentAdditionalIOSSId(iossState) && (
                              <ProFormText
                                name={['sadditional', 'IOSS', 'id']}
                                label="IOSS ID"
                                placeholder="Required."
                                rules={[{ required: true, message: 'Please enter a IOSS ID' }]}
                                extra={(
                                  service?.carrier?.groupCode === 'canadapost' && (
                                    <Text type="secondary">
                                      <QuestionCircleOutlined style={{ marginRight: 4 }} />
                                      (Character String – up to 13 characters) Optional field to enter Tax Registration Numbers or IDs (e.g. Tax ID, IRS No., VAT, IOSS number) for electronic transmission to the receiving post. Note: IOSS should be entered as ‘IMxxxxxxxxxx’.
                                    </Text>
                                  )
                                )
                                }
                              />
                            );
                            return (
                              <>
                                {iossTypeInput}
                                {iossIdInput}
                              </>
                            );
                          }}
                        </ProFormDependency>
                      </>
                    );
                    return (
                      <>
                        {iossInput}
                      </>
                    );
                  }}
                </ProFormDependency>

                {/* </ProForm.Group> */}
              </ProCard>

            </ProCard>


            <ProCard colSpan={12} ghost direction='column' gutter={[0, 16]} loading={loading}>
              <ProCard bordered title="SHIP TO" headerBordered type='inner' extra={
                <Button type="primary" icon={<ContactsOutlined />} />
              }>

                <ProFormText
                  name={['destination', 'name']}
                  label="Contact Name"
                  placeholder="Required."
                  rules={[{ required: true, message: 'Please enter a contact name' }]}
                />

                <ProFormText
                  name={['destination', 'company']}
                  label="Company Name"
                  placeholder="Optional."
                />

                <ProFormText
                  name={['destination', 'phone']}
                  label="Cellphone Number"
                  placeholder="Required."
                  rules={[{ required: true, message: 'Please enter a cellphone number' }]}
                  fieldProps={{
                    addonBefore: `+${destinationRegion?.phoneCode || ''}`,
                  }}
                />

                <ProFormText
                  name={['destination', 'address']}
                  label="Address1"
                  placeholder="Required."
                  rules={[{ required: true, message: 'Please enter an address' }]}
                />

                <ProFormText
                  name={['destination', 'address2']}
                  label="Address2"
                  placeholder="Optional."
                />

                {showAddress3(service) && (
                  <ProFormText
                    name={['destination', 'address3']}
                    label="Address3"
                    placeholder="Optional."
                  />
                )}

                <ProFormSelect
                  fieldProps={{
                    showSearch: true,
                    allowClear: false,
                    filterOption: (input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase()) ||
                      (option?.value ?? '').toLowerCase().includes(input.toLowerCase()),
                  }}
                  placeholder="Required."
                  name={['destination', 'regionId']}
                  label="Country"
                  readonly
                  options={regions.map((region) => ({ label: region.name, value: region.id }))}
                  extra={
                    showDestinationLocalizedButton(destinationRegion) && (
                      <Text type="secondary" >
                        Do you want to enter Chinese address?
                        <Button type="link" color='primary' onClick={() => setLocalizedModalVisit(true)}>Edit</Button>
                      </Text>

                    )
                  }
                  rules={[{ required: true, message: 'Please select a country' }]}
                />
                <ProFormText name={['destination', 'postalCode']} label="Postal Code" placeholder="Required."
                  rules={[{ required: true, message: 'Please enter a postal code' }]} />
                <ProFormDependency name={[['destination', 'regionId']]}>
                  {({ destination }) => {
                    // console.log("destination", destination);
                    const provinces = provinceRecord[destination?.regionId || 'CA']

                    if (provinces?.length > 0) {
                      return <ProFormSelect
                        name={['destination', 'province', 'code']}
                        label="Province/State"
                        placeholder="Required."
                        options={provinces.map((province) => ({ label: province.name, value: province.code }))}
                        rules={[{ required: true, message: 'Please select a province/state' }]}
                        transform={(value) => {
                          // console.log("destination select transform", value);
                          return {
                            destination: {
                              province: {
                                id: provinces.find((p) => p.code === value)?.id,
                                name: provinces.find((p) => p.code === value)?.name,
                                code: value
                              }
                            }
                          }
                        }}
                      //convertValue={(value) => value.code}
                      />
                    } else {
                      return <ProFormText name={['destination', 'province', 'name']} label="Province/State" placeholder="Required."
                        rules={[{ required: true, message: 'Please enter a province/state' }]}
                        transform={(value) => {
                          // console.log("destination text transform", value);
                          return {
                            destination: {
                              province: {
                                id: '0',
                                name: value,
                                code: ''
                              }
                            }
                          }
                        }}
                      //convertValue={(value) => value?.name || ''}
                      />
                    }
                  }}
                </ProFormDependency>
                <ProFormText name={['destination', 'city']} label="City" placeholder="Required." rules={[{ required: true, message: 'Please enter a city' }]} />


                <ProFormSelect
                  name={['destination', 'type']}
                  label="Address Type"
                  // request={getDictItems('addressType')}
                  options={addressTypeItems}
                  placeholder="Required."
                  rules={[{ required: true, message: 'Please select an address type' }]}
                  extra={
                    <Text type="secondary" >
                      <QuestionCircleOutlined style={{ marginRight: 4 }} />
                      Residential Surcharge may apply.
                    </Text>
                  }
                />


              </ProCard>

              <ProCard bordered title="Packages" headerBordered type='inner'>
                <ProFormSelect
                  name={['package', 'type']}
                  label="Package Type"
                  // request={getDictItems('packageType')}
                  allowClear={false}
                  placeholder="Required."
                  options={packageTypeItems}
                  rules={[{ required: true, message: 'Please select a package type' }]}
                  extra={
                    <Text type="secondary" >
                      <QuestionCircleOutlined style={{ marginRight: 4 }} />
                      Select “Env” for courier brand envelope; “Pak” for courier brand box; “Parcel” for regular cardboard box. Plase NOTE that the type of “Pak” is not support for DHL.
                    </Text>
                  }
                />
                <ProFormDependency name={[['package', 'type']]}>
                  {(params) => {
                    const formListProps: ProFormListProps<any> = {
                      name: ['package', 'packages'],
                      label: 'Packages',
                      min: 1,
                      max: (singleParcelPackage(service) || params?.package?.type !== 'parcel') ? 1 : undefined,
                      itemRender: ({ listDom, action }, { record, index }) => {
                        return (
                          <ProCard
                            bordered
                            extra={action}
                            title={`Package #${index + 1}`}
                            headerBordered
                            type='default'
                          >
                            {listDom}
                          </ProCard>
                        );
                      }
                    }


                    return <ProFormList {...formListProps}>
                      {packagesProFormListRender(params)}
                    </ProFormList>;
                  }}
                </ProFormDependency>

              </ProCard>

              <ProFormDependency name={[['package', 'type']]}>
                {(params) => {
                  return (
                    showProductsCard(service, initiationRegion, destinationRegion, params?.package?.type) && (
                      <ProCard bordered title="Products" headerBordered>
                        <ProFormList
                          name={['product']}
                          // label="Product"
                          min={1}
                          itemRender={({ listDom, action }, { record, index }) => {
                            return (
                              <ProCard
                                bordered
                                extra={action}
                                title={`Product #${index + 1}`}
                                headerBordered
                              >
                                {listDom}
                              </ProCard>
                            );
                          }}
                        >
                          {productsProFormListRender(params)}
                        </ProFormList>
                      </ProCard>
                    )
                  )
                }}

              </ProFormDependency>

            </ProCard>
          </ProCard>
        </ProForm >
      }
      <DestinationLocalizedModalForm
        modalVisit={localizedModalVisit}
        setModalVisit={setLocalizedModalVisit}
        onFinish={localizedModalOnFinish}
        destinationRegion={destinationRegion}
      />

      {/* </ProCard> */}
    </>
  );
};

export default ShipmentForm;


