import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { PageContainer, ProCard, ProCardProps, ProForm, ProFormDateRangePicker, ProFormDateTimeRangePicker, ProFormInstance, ProFormSelect, ProFormText, QueryFilter } from '@ant-design/pro-components';
import { Input, Select, DatePicker, Button, Space, Typography, Tag, Divider, List, Skeleton, TimeRangePickerProps, Row, Col, message, Spin, Flex } from 'antd';
import { BarcodeOutlined, CalendarOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { ReactBarcode } from 'react-jsbarcode';
import { Box, Package, MailOpen, Boxes } from 'lucide-react';
import dayjs from 'dayjs';
import { Link, useModel } from '@umijs/max';
import moment from 'moment';



import { getCarrierServiceById } from '@/models/carriers';
import { findDictItem, getDictItem } from '@/models/dicts';
import { extend } from 'lodash';
import { getRegionById } from '@/models/regions';
import { CountryCode, parsePhoneNumber } from 'libphonenumber-js';
import { deleteShipment, getShipmentPage } from '@/services/service/verykApi';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAsyncFn } from 'react-use';
import { getPriceDetails, getTotal } from './utils/utils';


const { RangePicker } = DatePicker;
const { Text, Title, Link: TLink } = Typography;

const mockShipment: VerykType.ShipmentDetailResVO = {
  "number": "SKLJDSTWVKNF",
  "externalId": "C010054896",
  "waybillNumber": "S66FA120315792",
  "serviceId": "180",
  "status": "submitted",
  "initiationRegionId": "CA",
  "destinationRegionId": "CA",
  "initiation": {
    "regionId": "CA",
    "postalCode": "R3T3L6",
    "name": "Sarah  YU",
    "phone": "2048993858",
    "province": {
      "id": "3",
      "name": "MANITOBA",
      "code": "MB"
    },
    "city": "Winnipeg",
    "address": "201-545 Hervo St."
  },
  "destination": {
    "regionId": "CA",
    "postalCode": "V7A1R5",
    "name": "Zheng Shuang",
    "phone": "2042952867",
    "province": {
      "id": "2",
      "name": "BRITISH COLUMBIA",
      "code": "BC"
    },
    "city": "Richmond",
    "address": "10131 thirlmere dr",
    "address2": "",
    "address3": "",
    "type": "residential"
  },
  "package": {
    "type": "parcel",
    "packages": [
      {
        "waybillNumber": "",
        "weight": 6,
        "dimension": {
          "length": 12,
          "width": 8,
          "height": 6
        },
        "insurance": {
          "code": "CAD",
          "symbol": "$",
          "value": "0.00"
        }
      },
      {
        "waybillNumber": "",
        "weight": 39,
        "dimension": {
          "length": 18,
          "width": 18,
          "height": 18
        },
        "insurance": {
          "code": "CAD",
          "symbol": "$",
          "value": "0.00"
        }
      },
      {
        "waybillNumber": "",
        "weight": 24,
        "dimension": {
          "length": 16,
          "width": 13,
          "height": 14
        },
        "insurance": {
          "code": "CAD",
          "symbol": "$",
          "value": "0.00"
        }
      }
    ]
  },
  "option": {
    "packingFee": 0
  },
  "price": {
    "msrp": {
      "code": "CAD",
      "symbol": "$",
      "value": "197.95"
    },
    "details": [
      {
        "code": "freight",
        "description": "Freight",
        "price": {
          "code": "CAD",
          "symbol": "$",
          "value": "17.39"
        }
      },
      {
        "code": "extra_fee",
        "description": "Fuel surcharge",
        "price": {
          "code": "CAD",
          "symbol": "$",
          "value": "3.28"
        }
      },
      {
        "code": "tax",
        "description": "GST",
        "price": {
          "code": "CAD",
          "symbol": "$",
          "value": "1.03"
        }
      }
    ],
    "charges": [
      {
        "code": "freight",
        "description": "Freight",
        "price": {
          "code": "CAD",
          "symbol": "$",
          "value": "17.39"
        }
      },
      {
        "code": "extra_fee",
        "description": "Fuel surcharge",
        "price": {
          "code": "CAD",
          "symbol": "$",
          "value": "3.28"
        }
      },
      {
        "code": "tax",
        "description": "GST",
        "price": {
          "code": "CAD",
          "symbol": "$",
          "value": "1.03"
        }
      }
    ]
  },
  "payments": [
    {
      "dateTime": "1727664641",
      "description": "Shipment#C010054896",
      "subtotal": {
        "code": "CAD",
        "symbol": "$",
        "value": "21.70"
      }
    }
  ],
  "total": {
    "code": "CAD",
    "symbol": "$",
    "value": "21.70"
  },
  "submittedAt": "1727664640",
  "created": "2024-09-29T18:35:28.775Z",
  "sadditional": {
    "DC": {
      "state": "0"
    },
    "HFP": {
      "state": "0"
    },
    "DNS": {
      "state": "0"
    },
    "LAD": {
      "state": "0"
    }
  }
}

const getPackageIcon = (type: string) => {
  switch (type) {
    case 'env':
      return <MailOpen style={{ verticalAlign: 'middle' }} />;
    case 'parcel':
      return <Boxes style={{ verticalAlign: 'middle' }} />;
    case 'pak':
      return <Package style={{ verticalAlign: 'middle' }} />;
    default:
      return <Box style={{ verticalAlign: 'middle' }} />;
  }
};

const ShipmentCard: React.FC<{ shipment: typeof mockShipment & { service: ReturnType<typeof getCarrierServiceById> } }> = ({ shipment }) => {

  const { dicts, loading: dictsLoading } = useModel('dicts', (model) => ({
    dicts: model.dicts,
    loading: model.loading
  }))
  const { regions } = useModel('regions')

  const { searchShipments, formRef } = useModel('Shipping.shipmentList')


  const priceDetails = useMemo(() => getPriceDetails(shipment.price), [shipment.price]);
  const totalPrice = useMemo(() => getTotal(shipment.price), [shipment.price]);

  const [operationLoading, setOperationLoading] = useState(false);

  const handleDelete = () => {
    setOperationLoading(true);
    deleteShipment(shipment.number).then(() => {
      message.success("Shipment deleted successfully");
      searchShipments(formRef.current?.getFieldsValue()).then(() => {
        setOperationLoading(false);
      })
    })
  }




  //const shipment = mockShipment[0]
  return (
    <>
      {!dictsLoading &&
        <Spin spinning={operationLoading} wrapperClassName='w-full'>
          <ProCard
            key={shipment.number}
            style={{ width: '100%' }}
            title={<>
              <Space align='center'>

                {/* <Space align='center'>
              <Box style={
                {
                  verticalAlign: 'middle',
                }
              } />
              <TLink copyable style={{ fontSize: '1em' }}>
                <Link to={`/shipping/shipment/${shipment.number}`}>
                  {shipment.number}
                </Link>
              </TLink>
            </Space> */}
                <Text copyable={{ text: shipment.number }} style={{ fontSize: '1em' }}>
                  <Link to={`/shipping/shipment/${shipment.number}`}>
                    <Button
                      color="primary"
                      type="link"
                      icon={
                        <Box style={
                          {
                            verticalAlign: 'middle',
                          }
                        }
                        />
                      }
                      style={{

                        fontSize: '1em',
                        padding: 0,
                      }}
                    >
                      {shipment.number}
                    </Button>
                  </Link>
                </Text>
                {shipment.externalId && <Text copyable type="secondary">{shipment.externalId}</Text>}
              </Space>
            </>}
            extra={
              <Text strong style={{ fontSize: '1.25em', color: '#b94a48' }}>
                {getDictItem(dicts, "shipmentStatus", shipment.status)?.label}
              </Text>
            }
            headerBordered
            bordered
            split='horizontal'
          >
            <ProCard direction='row' ghost>
              <ProCard>
                <Space align='center'>
                  <img src={shipment.service?.carrier?.logo} alt={shipment.service?.carrier?.name} style={{ width: '54px', height: '54px' }} />
                  <Space direction="vertical" size={0}>
                    <Title level={5} style={{ margin: 0 }}>{shipment.service?.carrier?.name}</Title>
                    <Text type="secondary">{shipment.service?.name} ({shipment.service?.code})</Text>
                  </Space>
                </Space>
              </ProCard>
              <ProCard style={{ height: '100%' }}>
                <Space
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-end',
                  }}
                  align="center"
                >
                  {shipment.waybillNumber && <Text copyable>{shipment.waybillNumber}</Text>}
                </Space>



              </ProCard>
            </ProCard>
            <ProCard direction='row' ghost>
              {/* <ProCard split="vertical" bordered headerBordered> */}
              <ProCard colSpan="8" title={
                <Space align='center'>
                  {getPackageIcon(shipment.package.type)}

                  <Text strong style={{ fontSize: '1em' }}>
                    {getDictItem(dicts, "packageType", shipment.package.type)?.label}
                  </Text>
                </Space>
              }>


                <ProCard.Group direction='column' ghost gutter={[0, 16]}>

                  {shipment.package.packages.map((packageItem, index) => (
                    <ProCard ghost key={index}>
                      <Space direction='vertical' size={0}>
                        <Text strong style={{ fontSize: '1.25em', color: '#c09853' }}>Package #{index + 1}</Text>
                        <Text type='secondary'>Weight: <strong>{Number(packageItem.weight)?.toFixed(2) || '0.00'}</strong> <sup>lb</sup></Text>
                        <Text type='secondary'>Dimensions: <strong>{Number(packageItem.dimension?.length)?.toFixed(2) || '0.00'}*{Number(packageItem.dimension?.width)?.toFixed(2) || '0.00'}*{Number(packageItem.dimension?.height)?.toFixed(2) || '0.00'}</strong> <sup>in</sup></Text>
                        <Text type='secondary'>Insurance: <span>{packageItem.insurance?.symbol || '$'}</span> <span>{Number(packageItem.insurance?.value).toFixed(2) || '0.00'}</span></Text>
                      </Space>

                    </ProCard>
                  ))}
                </ProCard.Group>


              </ProCard>
              <ProCard
                bodyStyle={
                  {

                  }
                }
                colSpan="8"
                title={
                  <Space align='start' direction='vertical' size={0}>
                    <Text strong style={{ fontSize: '1.125em' }}>
                      {shipment.destination.name}
                    </Text>
                    <Text style={{ fontSize: '0.75em' }}>
                      {`P: +${getRegionById(regions, shipment.destination.regionId)?.phoneCode} ${parsePhoneNumber(shipment.destination.phone || '', shipment.destination.regionId.toLocaleUpperCase() as CountryCode).formatNational()}`}
                    </Text>
                  </Space>

                }
              >
                <Space direction="vertical" style={{ width: '100%' }} size={0}>
                  <Text>{shipment.destination.address}</Text>
                  {shipment.destination?.address2 && <Text>{shipment.destination?.address2}</Text>}
                  {shipment.destination?.address3 && <Text>{shipment.destination?.address3}</Text>}
                  <Text>{shipment.destination.city}, {shipment.destination.province?.name} {shipment.destination.postalCode}, {getRegionById(regions, shipment.destination.regionId)?.name}</Text>
                </Space>
              </ProCard>
              <ProCard colSpan="8">
                <Space direction="vertical" style={{ width: '100%' }} align='end'>
                  {shipment.price?.msrp?.value && Number(shipment.price?.msrp?.value) > 0 &&
                    <Text><strong>MSRP(pre-tax): </strong><span style={{ color: '#a27676' }}>{shipment.price?.msrp?.symbol} </span><del style={{ color: 'grey' }}>{shipment.price?.msrp?.value}</del>
                    </Text>}

                  {priceDetails.map((chargeDetail: VerykType.PriceDetail, index: number) => (
                    (Number(chargeDetail?.price?.value) && <Text key={index} style={{ color: chargeDetail.code === 'freight' ? 'black' : 'grey' }}><strong>{chargeDetail.description}: </strong><span style={{ color: '#a27676' }}>{shipment.price?.msrp?.symbol} </span><span style={{ color: 'red' }}>{chargeDetail?.price?.value}</span></Text>)
                  ))}

                </Space>
                <Divider dashed style={{ borderColor: 'grey' }} />
                <Space direction="vertical" style={{ width: '100%' }} align='end'>
                  <Text strong><b>Grand Total(CAD): </b><span style={{ color: '#a27676' }}>{totalPrice.symbol || '$'} </span><span style={{ color: 'red' }}>{totalPrice.value || '0.00'}</span></Text>
                </Space>


              </ProCard>
              {/* </ProCard> */}
            </ProCard>
            <ProCard direction='row' ghost>
              <ProCard style={{ height: '100%' }}>
                <Space align='center' style={{ width: '100%', height: '100%' }}>
                  <CalendarOutlined />
                  <Text type="secondary">{moment(shipment.created).format('YYYY-MM-DD HH:mm:ss')}</Text>
                </Space>
              </ProCard>
              <ProCard style={{ height: '100%' }}>
                <Space
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-end',
                  }}
                  align="center"
                >
                  {shipment.status === 'open' && <>
                    <Button color="primary" type="link">
                      <Link to={`/shipping/shipment/${shipment.number}`}>Edit</Link>
                    </Button>
                    <Button color="danger" variant="link" onClick={handleDelete}>Delete</Button>

                  </>}

                  {shipment.status === 'submitted' && <Button color="primary" type="link">
                    Print Label
                  </Button>}

                </Space>



              </ProCard>
            </ProCard>
          </ProCard>
        </Spin>
      }
    </>
  );
};

const rangePresets: TimeRangePickerProps['presets'] = [
  {
    label: <span aria-label="Current Time to End of Day">Now ~ EOD</span>,
    value: () => [dayjs().startOf('day'), dayjs().endOf('day')], // 5.8.0+ support function
  },
  { label: 'Last 7 Days', value: [dayjs().add(-7, 'd').startOf('day'), dayjs().endOf('day')] },
  { label: 'Last 14 Days', value: [dayjs().add(-14, 'd').startOf('day'), dayjs().endOf('day')] },
  { label: 'Last 30 Days', value: [dayjs().add(-30, 'd').startOf('day'), dayjs().endOf('day')] },
  { label: 'Last 90 Days', value: [dayjs().add(-90, 'd').startOf('day'), dayjs().endOf('day')] },
];

const ShipmentList = () => {
  const { carriers, loading: carriersLoading } = useModel('carriers')
  const { shipmentStatusItems, loading: dictsLoading } = useModel('dicts', (model) => ({
    dicts: model.dicts,
    shipmentStatusItems: model.dicts?.shipmentStatus,
    loading: model.loading
  }))
  // const { regions } = useModel('regions')
  const { shipmentList, searchShipments, loadMoreShipments, formRef, lastEvaluatedKey } = useModel('Shipping.shipmentList')

  const loading = useMemo(() => carriersLoading || dictsLoading, [carriersLoading, dictsLoading])
  const shipments = useMemo(() => shipmentList.map(
    (shipment) => {
      return {
        ...shipment,
        service: getCarrierServiceById(carriers, shipment.serviceId)
      }
    }
  ), [carriers, shipmentList])

  const [initialSearchLoading, setInitialSearchLoading] = useState(false)

  useEffect(() => {
    if (formRef.current && !loading) {
      setInitialSearchLoading(true)
      searchShipments(formRef.current.getFieldsValue()).then(() => {
        setInitialSearchLoading(false)
      })
    }
  }, [formRef, loading])

  return (
    <>
      <PageContainer loading={loading}>

        <ProCard bordered>
          <ProForm
            formRef={formRef}
            layout="horizontal"
            grid={true}
            onFinish={searchShipments}
            submitter={{
              searchConfig: {
                submitText: 'Search',
              },
              render: (props, doms) => {
                return (
                  <Row justify="end">
                    <Col>
                      <Space>{doms}</Space>
                    </Col>
                  </Row>
                )
              },

            }}
          >
            <ProFormText
              name="keyword"
              label="Keyword"
              placeholder="Enter Shipment's keyword"
              colProps={{ span: 8 }}
            />
            <ProFormDateTimeRangePicker
              name="dateRange"
              label="Date Range"
              allowClear={false}
              rules={[{ required: true, message: 'Please select a date range' }]}
              colProps={{ span: 10 }}
              initialValue={[dayjs().add(-14, 'd').startOf('day'), dayjs().endOf('day')]}
              fieldProps={{
                showTime: {
                  defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('23:59:59', 'HH:mm:ss')],
                },
                presets: rangePresets,
                format: 'YYYY-MM-DD HH:mm:ss'
              }} />

            <ProFormSelect
              name="status"
              label="Shipment Status"
              colProps={{ span: 6 }}
              options={shipmentStatusItems}
            />
          </ProForm>
        </ProCard>
        <Skeleton avatar paragraph={{ rows: 1 }} loading={initialSearchLoading} active >
          {shipments.length > 0 &&
            <InfiniteScroll
              dataLength={shipments.length}
              next={loadMoreShipments}
              hasMore={!!lastEvaluatedKey}
              loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
              endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            >
              <List
                dataSource={shipments}
                renderItem={(shipment, index) => (
                  <List.Item key={index} >
                    <ShipmentCard key={index} shipment={shipment} />
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          }
        </Skeleton>

      </PageContainer>
    </>
  );
};

export default ShipmentList;
