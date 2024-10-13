import { BaseDictEnum } from "./baseDictEnum";

export class PackageAdditionalDCType extends BaseDictEnum<String> {
  static readonly NO_SIGNATURE = new PackageAdditionalDCType('NO_SIGNATURE', 'packageAdditional.DC.noSignature', '0', 'No Signature');
  static readonly SIGNATURE_REQUIRED = new PackageAdditionalDCType('SIGNATURE_REQUIRED', 'packageAdditional.DC.signatureRequired', '1', 'Signature Required');
  static readonly ADULT_SIGNATURE_REQUIRED = new PackageAdditionalDCType('ADULT_SIGNATURE_REQUIRED', 'packageAdditional.DC.adultSignatureRequired', '2', 'Adult Signature Required');
}

export class PackageAdditionalCODFundType extends BaseDictEnum<String> {
  static readonly CHECK = new PackageAdditionalCODFundType('CHECK', 'packageAdditional.COD.check', '0', "0:Check, Cash Cashier's Check Money Order");
  static readonly CASHIER_CHECK = new PackageAdditionalCODFundType('CASHIER_CHECK', 'packageAdditional.COD.cashierCheck', '8', "8:Cashier's Check Money Order");
}

export class PackCodeState extends BaseDictEnum<string> {
  static readonly PIECE = new PackCodeState('PIECE', 'packCodeState.piece', "PIECE", 'Piece');
  static readonly BAG = new PackCodeState('BAG', 'packCodeState.bag', "BAG", 'Bag');
  static readonly BARREL = new PackCodeState('BARREL', 'packCodeState.barrel', "BARREL", 'Barrel');
  static readonly BASKET = new PackCodeState('BASKET', 'packCodeState.basket', "BASKET", 'Basket');
  static readonly BOX = new PackCodeState('BOX', 'packCodeState.box', "BOX", 'Box');
  static readonly BUCKET = new PackCodeState('BUCKET', 'packCodeState.bucket', "BUCKET", 'Bucket');
  static readonly BUNDLE = new PackCodeState('BUNDLE', 'packCodeState.bundle', "BUNDLE", 'Bundle');
  static readonly CARTON = new PackCodeState('CARTON', 'packCodeState.carton', "CARTON", 'Container');
  static readonly CASE = new PackCodeState('CASE', 'packCodeState.case', "CASE", 'Case');
  static readonly CRATE = new PackCodeState('CRATE', 'packCodeState.crate', "CRATE", 'Crate');
  static readonly CYLINDER = new PackCodeState('CYLINDER', 'packCodeState.cylinder', "CYLINDER", 'Cylinder');
  static readonly DRUM = new PackCodeState('DRUM', 'packCodeState.drum', "DRUM", 'Drum');
  static readonly ENVELOPE = new PackCodeState('ENVELOPE', 'packCodeState.envelope', "ENVELOPE", 'Envelope');
  static readonly OTHER = new PackCodeState('OTHER', 'packCodeState.other', "OTHER", 'Other');
  static readonly PAIL = new PackCodeState('PAIL', 'packCodeState.pail', "PAIL", 'Pail');
  static readonly PALLET = new PackCodeState('PALLET', 'packCodeState.pallet', "PALLET", 'Pallet');
  static readonly REEL = new PackCodeState('REEL', 'packCodeState.reel', "REEL", 'Reel');
  static readonly ROLL = new PackCodeState('ROLL', 'packCodeState.roll', "ROLL", 'Roll');
  static readonly SKID = new PackCodeState('SKID', 'packCodeState.skid', "SKID", 'Skid');
  static readonly TANK = new PackCodeState('TANK', 'packCodeState.tank', "TANK", 'Tank');
  static readonly TUBE = new PackCodeState('TUBE', 'packCodeState.tube', "TUBE", 'Tube');
}
