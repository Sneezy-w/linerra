import { ProForm, ProFormDigit, useControlModel, WithControlPropsType } from "@ant-design/pro-components";
import { InputNumber, Space } from "antd";

const DimensionInput: React.FC = (props: WithControlPropsType<{
  // other props...
}>) => {
  const model = useControlModel(props, ['length', 'width', 'height']);

  return (

    <Space.Compact>
      {/* <ProFormDigit name='length' noStyle fieldProps={{
        suffix: 'in',
        precision: 2,
        // style: { width: '100%' },
        placeholder: 'Length',
      }} />

      <ProFormDigit name='width' noStyle fieldProps={{
        suffix: 'in',
        precision: 2,
        // style: { width: '100%' },
        placeholder: 'Width',
      }} />

      <ProFormDigit name='height' noStyle fieldProps={{
        suffix: 'in',
        precision: 2,
        // style: { width: '100%' },
        placeholder: 'Height',
      }} /> */}

      {/* <ProForm.Item name='length' noStyle> */}
      <InputNumber  {...{
        suffix: 'in',
        precision: 2,
        style: { width: '100%' },
        min: 0,
        placeholder: 'Length',
      }} {...model.length} />
      {/* </ProForm.Item>
      <ProForm.Item name='width' noStyle> */}
      <InputNumber  {...{
        suffix: 'in',
        precision: 2,
        style: { width: '100%' },
        min: 0,
        placeholder: 'Width',
      }} {...model.width} />
      {/* </ProForm.Item>
      <ProForm.Item name='height' noStyle> */}
      <InputNumber  {...{
        suffix: 'in',
        precision: 2,
        style: { width: '100%' },
        min: 0,
        placeholder: 'Height',
      }} {...model.height} />
      {/* </ProForm.Item> */}
    </Space.Compact>
  );
};

export default DimensionInput;
