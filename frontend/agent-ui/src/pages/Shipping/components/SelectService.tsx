import { getDictItem } from '@/models/dicts';
import { LeftOutlined } from '@ant-design/icons';
import { ProCard, ProList, ProTable } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Row, Space, Typography } from 'antd';
import { getDefaultCurrency } from '../utils/utils';

const { Title, Text } = Typography;

const getPrice = (record: any) => {
  const price: VerykType.Price = {};
  if (!record) return price;
  if (Number(record.msrp) > 0) {
    price.msrp = getDefaultCurrency(Number(record.msrp));
  }
  const charges = [];
  if (Number(record.freight) > 0) {
    charges.push({
      code: 'freight',
      description: 'Freight',
      price: getDefaultCurrency(Number(record.freight)),
    });
  }
  if (record.chargeDetails?.length > 0) {
    record.chargeDetails.forEach((chargeDetail: any) => {
      if (Number(chargeDetail.price) > 0) {
        charges.push({
          code: 'extra_fee',
          description: chargeDetail.name,
          price: getDefaultCurrency(Number(chargeDetail.price)),
        });
      }
    });
  }
  if (record.taxDetails?.length > 0) {
    record.taxDetails.forEach((taxDetail: any) => {
      if (Number(taxDetail.price) > 0) {
        charges.push({
          code: 'tax',
          description: taxDetail.name,
          price: getDefaultCurrency(Number(taxDetail.price)),
        });
      }
    });
  }
  if (charges.length > 0) {
    price.charges = charges;
  }
  return price;
};

const ServiceTable: React.FC = () => {
  const {
    quoteServices,
    quoteFormData,
    shipmentFormInitialValues,
    setSelectedServiceId,
    setCurrentStep,
    setShipmentFormInitialValues,
  } = useModel('Shipping.shipmentForm');

  const handleSelectService = (record: any) => {
    setSelectedServiceId(record.id);

    const price = getPrice(record);

    setShipmentFormInitialValues({
      ...(shipmentFormInitialValues?.number && { number: shipmentFormInitialValues?.number }),
      serviceId: record.id,
      initiation: {
        ...(shipmentFormInitialValues?.initiation && {
          name: shipmentFormInitialValues?.initiation?.name,
          phone: shipmentFormInitialValues?.initiation?.phone,
          address: shipmentFormInitialValues?.initiation?.address,

          ...(quoteFormData?.initiation?.company && {
            company: quoteFormData?.initiation?.company,
          }),
          ...(quoteFormData?.initiation?.address2 && {
            address2: quoteFormData?.initiation?.address2,
          }),
          ...(quoteFormData?.initiation?.address3 && {
            postalCode: quoteFormData?.initiation?.address3,
          }),
        }),
        ...quoteFormData?.initiation,
      },
      destination: {
        ...(shipmentFormInitialValues?.destination && {
          name: shipmentFormInitialValues?.destination?.name,
          phone: shipmentFormInitialValues?.destination?.phone,
          address: shipmentFormInitialValues?.destination?.address,
          ...(quoteFormData?.destination?.company && {
            company: quoteFormData?.destination?.company,
          }),
          ...(quoteFormData?.destination?.address2 && {
            address2: quoteFormData?.destination?.address2,
          }),
          ...(quoteFormData?.destination?.address3 && {
            postalCode: quoteFormData?.destination?.address3,
          }),
        }),
        ...quoteFormData?.destination,
      },
      package: {
        ...quoteFormData?.package,
      },
      option: {
        ...quoteFormData?.option,
      },
      price: price,
    });
    setCurrentStep(2);
  };
  return (
    <ProList<VerykType.QuoteService>
      rowKey="id"
      dataSource={quoteServices}
      // showActions="hover
      split={true}
      rowHoverable={false}
      style={{ paddingLeft: 16, paddingRight: 16 }}
      // itemCardProps={{
      //   ghost: false,
      //   bodyStyle: { padding: 16 }
      // }}
      // grid={{ gutter: 16 }}
      metas={{
        avatar: {
          render: (_, record) => (
            <img
              src={record.carrier?.logo}
              alt={record.carrier?.name}
              style={{ width: '54px', height: '54px' }}
            />
          ),
        },
        title: {
          render: (_, record) => <Title level={4}>{record.name}</Title>,
        },
        description: {
          render: (_, record) => (
            <Space direction="vertical" align="start">
              <Text>
                <strong>Carrier:</strong> {record.carrier?.name}
              </Text>
              <Text>
                <strong>Code:</strong> {record.code}
              </Text>
              <Text>
                <strong>ETA:</strong> <span style={{ color: 'red' }}>{record.eta}</span>
              </Text>
              {record.zoneId && (
                <Text>
                  <strong>Zone:</strong> {record.zoneId}
                </Text>
              )}
            </Space>
          ),
        },
        content: {
          render: (_, record) => (
            <Space direction="vertical" align="end" style={{ width: '100%' }}>
              {record.msrp && Number(record.msrp) > 0 && (
                <Text>
                  <strong>MSRP(pre-tax):</strong> <del style={{ color: 'grey' }}>{record.msrp}</del>
                </Text>
              )}
              <Text>
                <strong>Estimated Rate:</strong>{' '}
                <span style={{ color: 'red' }}>{record.freight}</span>
              </Text>
              {record.chargeDetails.map(
                (chargeDetail: any, index: number) =>
                  chargeDetail?.price?.toFixed(2) > 0 && (
                    <Text key={index} style={{ color: 'grey' }}>
                      <strong>{chargeDetail.name}:</strong>{' '}
                      <span style={{ color: 'red' }}>{chargeDetail?.price?.toFixed(2)}</span>
                    </Text>
                  ),
              )}
              {record.taxDetails.map(
                (taxDetail: any, index: number) =>
                  taxDetail?.price &&
                  Number(taxDetail?.price) > 0 && (
                    <Text key={record.chargeDetails?.length || 0 + index} style={{ color: 'grey' }}>
                      <strong>{taxDetail.name}:</strong>{' '}
                      <span style={{ color: 'red' }}>
                        {taxDetail?.price?.toFixed
                          ? taxDetail?.price?.toFixed(2)
                          : taxDetail?.price}
                      </span>
                    </Text>
                  ),
              )}

              <Text>--------------------------</Text>

              {/* {record.fuelSurcharge && <Text>Fuel surcharge: {record.fuelSurcharge}</Text>}
              {record.gst && <Text>GST: {record.gst}</Text>} */}
              <Text strong>
                <b>Grand Total(CAD):</b> <span style={{ color: 'red' }}>{record.charge}</span>
              </Text>
            </Space>
          ),
        },

        actions: {
          render: (_, record, index) => (
            <Button
              type={index === 0 ? 'primary' : 'default'}
              style={{ width: '120px' }}
              onClick={() => handleSelectService(record)}
            >
              {index === 0 ? 'BEST PRICE' : 'Select'}
            </Button>
          ),
        },
      }}
    />
  );
};

const PackageSection: React.FC = () => {
  const { packages, packageType } = useModel('Shipping.shipmentForm', (model) => ({
    packages: model.quoteFormData?.package.packages.map((p: any, index: number) => ({
      ...p,
      index: index + 1,
    })),
    packageType: model.quoteFormData?.package.type,
  }));
  const { packageTypeItem, packageTypeLoading } = useModel('dicts', (model) => ({
    packageTypeItem: getDictItem(model.dicts, 'packageType', packageType!),
    packageTypeLoading: model.loading,
  }));
  // const { value: packageTypeData, loading } = useAsync(getDictItem("packageType", packageType!))

  const columns = [
    { title: '#', dataIndex: 'index', valueType: 'indexBorder' },
    { title: 'Weight', dataIndex: 'weight', render: (text: any) => `${text?.toFixed(2) || 0} lb` },
    {
      title: 'Dimensions',
      dataIndex: 'dimension',
      render: (text: any) =>
        `${text?.length?.toFixed(2) || 0}*${text?.width?.toFixed(2) || 0}*${
          text?.height?.toFixed(2) || 0
        } in`,
    },
    {
      title: 'Volume Weight',
      dataIndex: 'volumeWeight',
      render: (text: any, record: any) => {
        const { dimension } = record;
        if (!dimension) return '0.00 lb';
        const { length, width, height } = dimension;
        const volumeWeight = (length * width * height) / 139;
        return `${volumeWeight.toFixed(2)} lb`;
      },
    },
    {
      title: 'Insurance',
      dataIndex: 'insurance',
      valueType: 'money',
      render: (text: any) => {
        return <Text>{text}</Text>;
      },
    },
  ];

  return (
    <ProCard headerBordered loading={packageTypeLoading}>
      <Title level={4} style={{ textAlign: 'center' }}>
        Package <span style={{ color: '#b94a48' }}>({packageTypeItem?.label})</span>
      </Title>
      <ProTable
        columns={columns}
        dataSource={packages}
        pagination={false}
        search={false}
        options={false}
        toolBarRender={false}
        rowKey="index"
      />
    </ProCard>
  );
};

const AddressSection: React.FC = () => {
  const { quoteFormData } = useModel('Shipping.shipmentForm');
  const { regions } = useModel('regions');
  const { addressTypeItem, addressTypeLoading } = useModel('dicts', (model) => ({
    addressTypeItem: getDictItem(model.dicts, 'addressType', quoteFormData?.destination.type),
    addressTypeLoading: model.loading,
  }));

  // const { value: addressTypeData, loading } = useAsync(getDictItem("addressType", quoteFormData.destination.type!))

  return (
    <ProCard split="vertical" loading={addressTypeLoading}>
      <ProCard colSpan="50%" style={{ textAlign: 'right' }}>
        <Title level={4} style={{ color: 'red' }}>
          {regions.find((r) => r.id === quoteFormData?.initiation.regionId)?.name}
        </Title>
        <Text strong>{quoteFormData?.initiation.province?.name}</Text>
        <br />
        <Text>{`${quoteFormData?.initiation.city}, ${quoteFormData?.initiation.postalCode}`}</Text>
      </ProCard>
      <ProCard colSpan="50%">
        <Title level={4} style={{ color: 'red' }}>
          {regions.find((r) => r.id === quoteFormData?.destination.regionId)?.name}{' '}
          <Text type="secondary">{`(${addressTypeItem?.label})`}</Text>
        </Title>
        <Text strong>{quoteFormData?.destination.province?.name}</Text>
        <br />
        <Text>{`${quoteFormData?.destination.city}, ${quoteFormData?.destination.postalCode}`}</Text>
      </ProCard>
    </ProCard>
  );
};

const SelectService: React.FC = () => {
  const { setCurrentStep, setQuoteFormInitialValues, quoteFormData } =
    useModel('Shipping.shipmentForm');

  const handlePrevious = () => {
    setQuoteFormInitialValues(quoteFormData);
    setCurrentStep(0);
  };

  return (
    <ProCard direction="column" ghost gutter={[16, 16]} type="inner">
      <ProCard title="Shipment Overview" bordered headerBordered style={{ marginTop: '8px' }}>
        <AddressSection />
        <PackageSection />
        <Row justify="center">
          <Button type="link" icon={<LeftOutlined />} onClick={handlePrevious}>
            Previous
          </Button>
        </Row>
      </ProCard>
      <ProCard title="Select Service" bordered headerBordered split="horizontal">
        <ServiceTable />
      </ProCard>
    </ProCard>
  );
};

export default SelectService;
