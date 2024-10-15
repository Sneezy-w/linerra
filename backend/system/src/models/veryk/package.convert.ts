import { getDefaultCurrency } from "../../constant/verykConstant";
import { PackageApiReq, PackageApiRes, PackageDO, PackageEditResVO, PackageItem, PackageItemApiRes, PackageItemDO, PackageItemVO, PackageReqVO } from "./package.entity";

// export const packageItemReqVOToApiReq = (packageItemReqVO: PackageItemReqVO): PackageItemApiReq => {
//   return {
//     ...packageItemReqVO
//   }
// };

export const packageReqVOToApiReq = (packageReqVO: PackageReqVO): PackageApiReq => {
  return {
    type: packageReqVO.type,
    packages: packageReqVO.packages.map(packageItemVOToPackageItem),
  };
};

export const packageItemVOToPackageItem = (packageItemVO: PackageItemVO): PackageItem => {
  const { weight, dimension, insurance } = packageItemVO;
  return {
    weight,
    insurance,
    ...(dimension ? {
      dimension: dimension
    } : {}),
  };
};


export const packageReqVOToDO = (packageReqVO: PackageReqVO): PackageDO => {
  const { type, packages } = packageReqVO;
  return {
    type,
    packages: packages.map(packageItemToDO),
  };
};

export const packageItemToDO = (packageItem: PackageItemVO): PackageItemDO => {
  const { weight, dimension, insurance, additional, sinsured } = packageItem;
  return {
    weight,
    ...(dimension ? {
      dimension: dimension
    } : {}),
    ...(typeof insurance === 'number' ? { insurance: getDefaultCurrency(insurance) } : {}),
    ...(additional ? {
      additional: additional
    } : {}),
    ...(typeof sinsured === 'number' ? { sinsured: sinsured } : {}),
  };
};

export const packageDOToEditResVO = (packageDO: PackageDO): PackageEditResVO => {
  return {
    type: packageDO.type,
    packages: packageDO.packages.map(packageItemDOToVO),
  };
};

export const packageItemDOToVO = (packageItem: PackageItemDO): PackageItemVO => {
  const { weight, dimension, insurance, additional, sinsured } = packageItem;
  return {
    weight,
    ...(dimension ? { dimension: dimension } : {}),
    ...(!isNaN(Number(insurance?.value)) ? { insurance: Number(insurance?.value) } : {}),
    ...(additional ? { additional: additional } : {}),
    ...(typeof sinsured === 'number' ? { sinsured: sinsured } : {}),
  };
};

export const packageApiResToDO = (packageApiRes: PackageApiRes): PackageDO => {
  const { type, packages } = packageApiRes;
  return {
    type,
    packages: packages.map(packageItemApiResToDO),
  };
};

export const packageItemApiResToDO = (packageItemApiRes: PackageItemApiRes): PackageItemDO => {
  const { waybill_number, weight, dimension, insurance } = packageItemApiRes;
  return {
    waybillNumber: waybill_number,
    weight: Number(weight),
    dimension: {
      length: Number(dimension.length),
      width: Number(dimension.width),
      height: Number(dimension.height),
    },
    insurance: insurance,
  };
};
