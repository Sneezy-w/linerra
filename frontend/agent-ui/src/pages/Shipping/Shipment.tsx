import { ProCard, ProLayout } from '@ant-design/pro-components';
import { Spin, Steps } from 'antd';
import React, { useEffect, useState } from 'react';
import QuoteForm from './components/QuoteForm';
import SelectService from './components/SelectService';
import { useModel, useParams } from '@umijs/max';
import ShipmentForm from './components/ShipmentForm';
import OrderSuccess from './components/OrderSuccess';
import { LoadingOutlined } from '@ant-design/icons';
import Loading from '@/components/Loading';
import { getShipment } from '@/services/service/verykApi';
import { ShipmentStatus } from '@/constant/constant';

const { Step } = Steps;

const Shipment: React.FC = () => {
  const {
    currentStep,
    operationLoading,
    setCurrentStep,
    setDataLoading,
    setQuoteFormInitialValues,
    setShipmentFormInitialValues,
    setSelectedServiceId,
    fetchQuoteFormInitialValues,
    setOrderNumber,
  } = useModel('Shipping.shipmentForm');

  const { number } = useParams<{ number: string }>();

  useEffect(() => {
    setDataLoading(true);
    if (number) {
      setCurrentStep(2);
      getShipment(number).then((res) => {

        if (res.data?.status !== ShipmentStatus.Open) {
          setOrderNumber(res.data?.number || '');
          setCurrentStep(3);
        } else {
          setSelectedServiceId(res.data?.serviceId);


          setShipmentFormInitialValues(res.data);

        }
        setDataLoading(false);


      });
    } else {
      setCurrentStep(0);
      fetchQuoteFormInitialValues().then((initialValues) => {
        setQuoteFormInitialValues(initialValues);

        setDataLoading(false);
      });
    }

  }, [number]);

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <QuoteForm />;
      case 1:
        return (
          <SelectService />
        );
      case 2:
        return <ShipmentForm />;
      case 3:
        return <OrderSuccess />;
      default:
        return null;
    }
  };


  return (
    <>
      <Spin spinning={operationLoading}>
        <ProCard ghost gutter={[16, 0]} direction='row' type='inner' wrap>
          <ProCard bordered colSpan={24}>
            <Steps current={currentStep}>
              <Step title="Quote" />
              <Step title="Select Service" />
              <Step title="Fill Info" />
              <Step title="Complete" />
            </Steps>
          </ProCard>
          {renderStepContent()}

        </ProCard >
      </Spin>
    </>
  );
};

export default Shipment;
