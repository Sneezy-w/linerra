import { getAllCarrierIds } from '@/models/carriers';
import { ContactsOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import {
  FooterToolbar,
  ProCard,
  ProFormDependency,
  ProFormInstance,
  ProFormList,
  ProFormListProps,
} from '@ant-design/pro-components';
import { ProForm, ProFormDigit, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { useModel } from '@umijs/max';
import { Button, Typography } from 'antd';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { testQuoteFormData } from '../models/shipmentForm';
import DimensionInput from './DimensionInput';

const { Text, Title } = Typography;

const QuoteForm: React.FC = () => {
  const {
    quoteFormData,
    setQuoteServices,
    setQuoteFormData,
    setCurrentStep,
    operationLoading,
    setOperationLoading,
    fetchQuoteForCarrier,
    quoteFormInitialValues,
    setQuoteFormInitialValues,
  } = useModel('Shipping.shipmentForm');
  const formRef = useRef<ProFormInstance>();

  const { regions, provinceRecord } = useModel('regions');
  const { addressTypeItems, packageTypeItems, dictsLoading } = useModel('dicts', (model) => ({
    addressTypeItems: model.dicts?.addressType,
    packageTypeItems: model.dicts?.packageType,
    dictsLoading: model.loading,
  }));
  const { allCarrierIds, allCarriers, carriersLoading } = useModel('carriers', (model) => ({
    allCarrierIds: getAllCarrierIds(model.carriers),
    allCarriers: model.carriers || [],
    carriersLoading: model.loading,
  }));

  const loading = useMemo(() => dictsLoading || carriersLoading, [dictsLoading, carriersLoading]);

  // const getInitialValues = async (params: Record<string, any>) => {
  //   console.log('getInitialValues');
  //   let initialValues = defaultInitialValues;
  //   if (quoteFormData) {
  //     initialValues = quoteFormData;
  //   }
  //   return initialValues;
  // }

  // useEffect(() => {
  //   formRef.current?.setFieldsValue(defaultInitialValues);
  // }, [quoteFormData]);

  useEffect(() => {
    // fetchDictsAsync();
    if (quoteFormInitialValues && formRef.current) {
      //formRef.current?.resetFields();
      //form.resetFields();
      //formRef.current?.setFieldsValue(quoteFormInitialValues);
      formRef.current?.setFieldsValue(quoteFormInitialValues);
    }
  }, [quoteFormInitialValues, formRef]);

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

  //const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const handleQuote = useCallback(async (formData: any) => {
    //await sleep(2000);

    //console.log(formData);
    // console.log(formRef.current?.getFieldsFormatValue?.());
    //console.log(formRef.current?.getFieldsValue?.());
    setOperationLoading(true);
    setQuoteFormData(formData);
    const carrierIds: string[] = allCarrierIds;
    const carriers: VerykType.Carrier[] = allCarriers;
    try {
      const quotePromises = carrierIds.map((carrierId) => fetchQuoteForCarrier(formData, carrierId));

      const quoteResults = await Promise.all(quotePromises);
      const aggregatedResults = quoteResults.flatMap((result) => result || []);
      const quoteServices: VerykType.QuoteService[] = aggregatedResults
        .flatMap((result) => {
          const carrier = carriers.find((c) => c.id === result.carrierId);
          return (
            result?.services?.map((service: VerykType.QuoteService) => {
              return {
                ...service,
                carrier: {
                  carrierId: result.carrierId,
                  carrierCode: result.carrierCode,
                  name: result.name,
                  currency: result.currency,
                  logo: carrier?.logo,
                },
              };
            }) || []
          );
        })
        .sort((a, b) => Number(a.charge) - Number(b.charge));
      setQuoteServices(quoteServices);
      setCurrentStep(1);
    } catch (error) {
      //console.error(error);
    } finally {
      setOperationLoading(false);
    }
  }, []);

  const packagesProFormListRender =
    (params: Record<string, any>) => (meta: any, index: any, action: any, count: any) => {
      const weightInput = (
        <ProFormDigit
          name="weight"
          label="Weight"
          rules={[{ required: true, message: 'Please enter weight' }]}
          initialValue={1.0}
          fieldProps={{
            addonAfter: 'lb',
            precision: 2,
          }}
        />
      );

      const dimensionAndInsuranceInput = params?.package?.type === 'parcel' && (
        <>
          <ProForm.Item
            label="Dimensions"
            name="dimension"
            initialValue={{ length: 1.0, width: 1.0, height: 1.0 }}
            rules={[
              {
                validator: (_, value) => {
                  if (!value?.length || !value?.width || !value?.height) {
                    return Promise.reject(new Error('Please enter all dimensions'));
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <DimensionInput />
          </ProForm.Item>

          <ProFormDigit
            name="insurance"
            label="Carrier Insurance"
            min={0}
            placeholder="Optional."
            initialValue={0.0}
            fieldProps={{
              addonAfter: '$',
              precision: 2,
            }}
            extra={
              <Text type="secondary">
                <QuestionCircleOutlined style={{ marginRight: 4 }} />
                Lost claims require receipt and other proof of value declared !
              </Text>
            }
          />
        </>
      );

      return (
        <>
          {weightInput}

          {dimensionAndInsuranceInput}
        </>
      );
    };

  return (
    <>
      {/* <ProCard ghost gutter={[16, 16]} loading={loading}> */}
      {
        // quoteFormInitialValues &&
        <ProForm
          layout="horizontal"
          labelAlign="right"
          style={{ width: '100%' }}
          labelCol={{ span: 5 }}
          formRef={formRef}
          onValuesChange={formOnValuesChange}
          onFinish={handleQuote}
          preserve={false}
          // request={getInitialValues}
          //initialValues={quoteFormInitialValues}

          submitter={{
            render: (_, dom) => {
              return loading ? null : (
                <FooterToolbar>
                  {/* <Spin spinning={operationLoading}> */}
                  <Button
                    type="default"
                    loading={operationLoading}
                    onClick={() => {
                      formRef.current?.setFieldsValue(testQuoteFormData);
                    }}
                  >
                    Set Test Data
                  </Button>
                  {dom}
                  {/* </Spin> */}
                </FooterToolbar>
              );
            },
            searchConfig: {
              submitText: 'Next',
            },
            submitButtonProps: {
              loading: operationLoading,
            },
            resetButtonProps: {
              loading: operationLoading,
            },
          }}
        >
          <ProCard ghost gutter={[16, 16]} direction="row" type="inner">
            <ProCard colSpan={12} ghost direction="column" gutter={[0, 16]} loading={loading}>
              <ProCard
                bordered
                title="SHIP FROM"
                headerBordered
                type="inner"
                loading={loading}
                extra={<Button type="primary" icon={<ContactsOutlined />} />}
              >
                {/* {quoteFieldSchema.initiation.map((field) => {
                const Component: any = ProFormComponents[field.component as keyof typeof ProFormComponents];
                return <Component
                  key={field.key}
                  name={field.name}
                  label={field.label}
                  {...(field.dependencies ? { dependencies: field.dependencies } : {})}
                  {...(field.request ? { request: field.request } : {})}
                  {...(field.placeholder ? { placeholder: field.placeholder } : {})}
                  {...(field.fieldProps ? { fieldProps: field.fieldProps } : {})}
                  {...(field.options ? { options: field.options } : {})}
                  rules={[
                    {
                      required:
                        typeof field.required === 'function'
                          ? field.required()
                          : field.required,
                      message: field.requiredMessage,
                    },
                  ]}

                />
              })} */}

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
                  options={regions.map((region) => ({ label: region.name, value: region.id }))}
                  rules={[{ required: true, message: 'Please select a country' }]}
                />
                <ProFormText
                  name={['initiation', 'postalCode']}
                  label="Postal Code"
                  placeholder="Required."
                  rules={[{ required: true, message: 'Please enter a postal code' }]}
                />
                <ProFormDependency name={[['initiation', 'regionId']]}>
                  {({ initiation }) => {
                    const provinces = provinceRecord[initiation?.regionId || 'CA'];

                    if (provinces?.length > 0) {
                      return (
                        <ProFormSelect
                          name={['initiation', 'province', 'code']}
                          label="Province/State"
                          placeholder="Required."
                          options={provinces.map((province) => ({
                            label: province.name,
                            value: province.code,
                          }))}
                          rules={[{ required: true, message: 'Please select a province/state' }]}
                          transform={(value) => {
                            return {
                              initiation: {
                                province: {
                                  id: provinces.find((p) => p.code === value)?.id,
                                  name: provinces.find((p) => p.code === value)?.name,
                                  code: value,
                                },
                              },
                            };
                          }}
                        //convertValue={(value) => value?.code}
                        />
                      );
                    } else {
                      return (
                        <ProFormText
                          name={['initiation', 'province', 'name']}
                          label="Province/State"
                          placeholder="Required."
                          rules={[{ required: true, message: 'Please enter a province/state' }]}
                          transform={(value) => {
                            return {
                              initiation: {
                                province: {
                                  id: '0',
                                  name: value,
                                  code: '',
                                },
                              },
                            };
                          }}
                        // convertValue={(value) => value?.name || ''}
                        />
                      );
                    }
                  }}
                </ProFormDependency>

                <ProFormText
                  name={['initiation', 'city']}
                  label="City"
                  placeholder="Required."
                  rules={[{ required: true, message: 'Please enter a city' }]}
                />
              </ProCard>

              <ProCard bordered title="Options" headerBordered type="inner" loading={loading}>
                <ProFormDigit
                  name={['option', 'packingFee']}
                  label="Packing Fee"
                  min={0}
                  placeholder="Optional."
                  initialValue={0.0}
                  fieldProps={{
                    addonBefore: '$',
                    precision: 2,
                  }}
                />
                <ProFormText
                  name={['option', 'memo']}
                  label="Remark"
                  placeholder="Optional."
                  extra={
                    <Text type="secondary">
                      <QuestionCircleOutlined style={{ marginRight: 4 }} />
                      The Remark is for operational reference only.
                    </Text>
                  }
                />
              </ProCard>
            </ProCard>

            <ProCard colSpan={12} ghost direction="column" gutter={[0, 16]} loading={loading}>
              <ProCard
                bordered
                title="SHIP TO"
                headerBordered
                type="inner"
                loading={loading}
                extra={<Button type="primary" icon={<ContactsOutlined />} />}
              >
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
                  options={regions.map((region) => ({ label: region.name, value: region.id }))}
                  rules={[{ required: true, message: 'Please select a country' }]}
                />
                <ProFormText
                  name={['destination', 'postalCode']}
                  label="Postal Code"
                  placeholder="Required."
                  rules={[{ required: true, message: 'Please enter a postal code' }]}
                />
                <ProFormDependency name={[['destination', 'regionId']]}>
                  {({ destination }) => {
                    const provinces = provinceRecord[destination?.regionId || 'CA'];

                    if (provinces?.length > 0) {
                      return (
                        <ProFormSelect
                          name={['destination', 'province', 'code']}
                          label="Province/State"
                          placeholder="Required."
                          options={provinces.map((province) => ({
                            label: province.name,
                            value: province.code,
                          }))}
                          rules={[{ required: true, message: 'Please select a province/state' }]}
                          transform={(value) => {
                            return {
                              destination: {
                                province: {
                                  id: provinces.find((p) => p.code === value)?.id,
                                  name: provinces.find((p) => p.code === value)?.name,
                                  code: value,
                                },
                              },
                            };
                          }}
                        //convertValue={(value) => value?.code}
                        />
                      );
                    } else {
                      return (
                        <ProFormText
                          name={['destination', 'province', 'name']}
                          label="Province/State"
                          placeholder="Required."
                          rules={[{ required: true, message: 'Please enter a province/state' }]}
                          transform={(value) => {
                            return {
                              destination: {
                                province: {
                                  id: '0',
                                  name: value,
                                  code: '',
                                },
                              },
                            };
                          }}
                        // convertValue={(value) => value?.name || ''}
                        />
                      );
                    }
                  }}
                </ProFormDependency>
                <ProFormText
                  name={['destination', 'city']}
                  label="City"
                  placeholder="Required."
                  rules={[{ required: true, message: 'Please enter a city' }]}
                />

                <ProFormSelect
                  name={['destination', 'type']}
                  label="Address Type"
                  // request={getDictItems('addressType')}
                  options={addressTypeItems}
                  initialValue="residential"
                  rules={[{ required: true, message: 'Please select an address type' }]}
                  extra={
                    <Text type="secondary">
                      <QuestionCircleOutlined style={{ marginRight: 4 }} />
                      Residential Surcharge may apply.
                    </Text>
                  }
                />
              </ProCard>

              <ProCard bordered title="Packages" headerBordered type="inner" loading={loading}>
                <ProFormSelect
                  name={['package', 'type']}
                  label="Package Type"
                  // request={getDictItems('packageType')}
                  allowClear={false}
                  options={packageTypeItems}
                  initialValue="parcel"
                  rules={[{ required: true, message: 'Please select a package type' }]}
                  extra={
                    <Text type="secondary">
                      <QuestionCircleOutlined style={{ marginRight: 4 }} />
                      Select “Env” for courier brand envelope; “Pak” for courier brand box; “Parcel”
                      for regular cardboard box. Plase NOTE that the type of “Pak” is not support
                      for DHL.
                    </Text>
                  }
                />
                <ProFormDependency name={[['package', 'type']]}>
                  {(params) => {
                    const formListProps: ProFormListProps<any> = {
                      name: ['package', 'packages'],
                      label: 'Packages',
                      min: 1,
                      max: params?.package?.type !== 'parcel' ? 1 : undefined, // initialValue: [{}],
                      itemRender: ({ listDom, action }, { record, index }) => {
                        return (
                          <ProCard
                            bordered
                            extra={action}
                            title={`Package #${index + 1}`}
                            headerBordered
                            type="default"
                          >
                            {listDom}
                          </ProCard>
                        );
                      },
                    };

                    return (
                      <ProFormList {...formListProps}>
                        {packagesProFormListRender(params)}
                      </ProFormList>
                    );
                  }}
                </ProFormDependency>
              </ProCard>
            </ProCard>
          </ProCard>
        </ProForm>
      }

      {/* </ProCard> */}
    </>
  );
};

export default QuoteForm;
