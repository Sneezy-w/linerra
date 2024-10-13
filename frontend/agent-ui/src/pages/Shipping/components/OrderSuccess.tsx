import React from 'react';
import { Result, Button, Typography } from 'antd';
import { Link } from 'umi';
import { useModel } from '@umijs/max';
import { ProCard } from '@ant-design/pro-components';

const { Paragraph, Text } = Typography;



const OrderSuccess: React.FC = () => {
  const { orderNumber } = useModel('Shipping.shipmentForm');
  return (
    <ProCard gutter={[16, 16]} ghost>
      <ProCard bordered>
        <Result
          status="success"
          title="Order Successfully Created!"
          subTitle={
            <Paragraph>
              Your shipment has been successfully created and processed.
              <br />
              Order Number: <Text strong>{orderNumber}</Text>
            </Paragraph>
          }
          extra={[
            <Button type="primary" key="viewShipments">
              <Link to="/shipments">View Shipments</Link>
            </Button>,
          ]}
        />
      </ProCard>
    </ProCard>
  );
};

export default OrderSuccess;
