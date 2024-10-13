import { BaseDictEnum } from "./baseDictEnum";

export class AddressType extends BaseDictEnum<string> {
  static readonly RESIDENTIAL = new AddressType('RESIDENTIAL', 'residentType.residential', "residential", 'Residential');
  static readonly COMMERCIAL = new AddressType('COMMERCIAL', 'residentType.commercial', "commercial", 'Commercial');
}
