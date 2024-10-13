import { BaseDictEnum } from "./baseDictEnum";

export class ProductUnitUPS extends BaseDictEnum<string> {
  static readonly PIECES = new ProductUnitUPS('PIECES', 'productUnit.pieces', "PCS", 'Pieces');
  static readonly BARREL = new ProductUnitUPS('BARREL', 'productUnit.barrel', "BA", 'Barrel');
  static readonly BUNDLE = new ProductUnitUPS('BUNDLE', 'productUnit.bundle', "BE", 'Bundle');
  static readonly BAG = new ProductUnitUPS('BAG', 'productUnit.bag', "BG", 'Bag');
  static readonly BUNCH = new ProductUnitUPS('BUNCH', 'productUnit.bunch', "BH", 'Bunch');
  static readonly BOX = new ProductUnitUPS('BOX', 'productUnit.box', "BOX", 'Box');
  static readonly BOLT = new ProductUnitUPS('BOLT', 'productUnit.bolt', "BT", 'Bolt');
  static readonly BUTT = new ProductUnitUPS('BUTT', 'productUnit.butt', "BU", 'Butt');
  static readonly CANISTER = new ProductUnitUPS('CANISTER', 'productUnit.canister', "CI", 'Canister');
  static readonly CENTIMETER = new ProductUnitUPS('CENTIMETER', 'productUnit.centimeter', "CM", 'Centimeter');
  static readonly CONTAINER = new ProductUnitUPS('CONTAINER', 'productUnit.container', "CON", 'Container');
  static readonly CRATE = new ProductUnitUPS('CRATE', 'productUnit.crate', "CR", 'Crate');
  static readonly CASE = new ProductUnitUPS('CASE', 'productUnit.case', "CS", 'Case');
  static readonly CARTON = new ProductUnitUPS('CARTON', 'productUnit.carton', "CT", 'Carton');
  static readonly CYLINDER = new ProductUnitUPS('CYLINDER', 'productUnit.cylinder', "CY", 'Cylinder');
  static readonly DOZEN = new ProductUnitUPS('DOZEN', 'productUnit.dozen', "DOZ", 'Dozen');
  static readonly EACH = new ProductUnitUPS('EACH', 'productUnit.each', "EA", 'Each');
  static readonly ENVELOPE = new ProductUnitUPS('ENVELOPE', 'productUnit.envelope', "EN", 'Envelope');
  static readonly FEET = new ProductUnitUPS('FEET', 'productUnit.feet', "FT", 'Feet');
  static readonly KILOGRAM = new ProductUnitUPS('KILOGRAM', 'productUnit.kilogram', "KG", 'Kilogram');
  static readonly KILOGRAMS = new ProductUnitUPS('KILOGRAMS', 'productUnit.kilograms', "KGS", 'Kilograms');
  static readonly POUND = new ProductUnitUPS('POUND', 'productUnit.pound', "LB", 'Pound');
  static readonly POUNDS = new ProductUnitUPS('POUNDS', 'productUnit.pounds', "LBS", 'Pounds');
  static readonly LITER = new ProductUnitUPS('LITER', 'productUnit.liter', "L", 'Liter');
  static readonly METER = new ProductUnitUPS('METER', 'productUnit.meter', "M", 'Meter');
  static readonly NUMBER = new ProductUnitUPS('NUMBER', 'productUnit.number', "NMB", 'Number');
  static readonly PACKET = new ProductUnitUPS('PACKET', 'productUnit.packet', "PA", 'Packet');
  static readonly PALLET = new ProductUnitUPS('PALLET', 'productUnit.pallet', "PAL", 'Pallet');
  static readonly PIECE = new ProductUnitUPS('PIECE', 'productUnit.piece', "PC", 'Piece');
  static readonly PROOF_LITERS = new ProductUnitUPS('PROOF_LITERS', 'productUnit.proofLiters', "PF", 'Proof Liters');
  static readonly PACKAGE = new ProductUnitUPS('PACKAGE', 'productUnit.package', "PKG", 'Package');
  static readonly PAIR = new ProductUnitUPS('PAIR', 'productUnit.pair', "PR", 'Pair');
  static readonly PAIRS = new ProductUnitUPS('PAIRS', 'productUnit.pairs', "PRS", 'Pairs');
  static readonly ROLL = new ProductUnitUPS('ROLL', 'productUnit.roll', "RL", 'Roll');
  static readonly SET = new ProductUnitUPS('SET', 'productUnit.set', "SET", 'Set');
  static readonly SQUARE_METERS = new ProductUnitUPS('SQUARE_METERS', 'productUnit.squareMeters', "SME", 'Square Meters');
  static readonly SQUARE_YARDS = new ProductUnitUPS('SQUARE_YARDS', 'productUnit.squareYards', "SYD", 'Square Yards');
  static readonly TUBE = new ProductUnitUPS('TUBE', 'productUnit.tube', "TU", 'Tube');
  static readonly YARD = new ProductUnitUPS('YARD', 'productUnit.yard', "YD", 'Yard');

}

export class ProductUnitFedex extends BaseDictEnum<string> {
  static readonly PIECES = new ProductUnitFedex('PIECES', 'productUnit.pieces', "PCS", 'Pieces');
  static readonly BARREL = new ProductUnitFedex('BARREL', 'productUnit.barrel', "BA", 'Barrel');
  static readonly BUNDLE = new ProductUnitFedex('BUNDLE', 'productUnit.bundle', "BE", 'Bundle');
  static readonly BAG = new ProductUnitFedex('BAG', 'productUnit.bag', "BG", 'Bag');
  static readonly BUNCH = new ProductUnitFedex('BUNCH', 'productUnit.bunch', "BH", 'Bunch');
  static readonly BOX = new ProductUnitFedex('BOX', 'productUnit.box', "BOX", 'Box');
  static readonly BOLT = new ProductUnitFedex('BOLT', 'productUnit.bolt', "BT", 'Bolt');
  static readonly BUTT = new ProductUnitFedex('BUTT', 'productUnit.butt', "BU", 'Butt');
  static readonly CANISTER = new ProductUnitFedex('CANISTER', 'productUnit.canister', "CI", 'Canister');
  static readonly CENTIMETER = new ProductUnitFedex('CENTIMETER', 'productUnit.centimeter', "CM", 'Centimeter');
  static readonly CONTAINER = new ProductUnitFedex('CONTAINER', 'productUnit.container', "CON", 'Container');
  static readonly CRATE = new ProductUnitFedex('CRATE', 'productUnit.crate', "CR", 'Crate');
  static readonly CASE = new ProductUnitFedex('CASE', 'productUnit.case', "CS", 'Case');
  static readonly CARTON = new ProductUnitFedex('CARTON', 'productUnit.carton', "CT", 'Carton');
  static readonly CYLINDER = new ProductUnitFedex('CYLINDER', 'productUnit.cylinder', "CY", 'Cylinder');
  static readonly DOZEN = new ProductUnitFedex('DOZEN', 'productUnit.dozen', "DOZ", 'Dozen');
  static readonly EACH = new ProductUnitFedex('EACH', 'productUnit.each', "EA", 'Each');
  static readonly ENVELOPE = new ProductUnitFedex('ENVELOPE', 'productUnit.envelope', "EN", 'Envelope');
  static readonly FEET = new ProductUnitFedex('FEET', 'productUnit.feet', "FT", 'Feet');
  static readonly KILOGRAM = new ProductUnitFedex('KILOGRAM', 'productUnit.kilogram', "KG", 'Kilogram');
  static readonly KILOGRAMS = new ProductUnitFedex('KILOGRAMS', 'productUnit.kilograms', "KGS", 'Kilograms');
  static readonly POUND = new ProductUnitFedex('POUND', 'productUnit.pound', "LB", 'Pound');
  static readonly POUNDS = new ProductUnitFedex('POUNDS', 'productUnit.pounds', "LBS", 'Pounds');
  static readonly LITER = new ProductUnitFedex('LITER', 'productUnit.liter', "L", 'Liter');
  static readonly METER = new ProductUnitFedex('METER', 'productUnit.meter', "M", 'Meter');
  static readonly NUMBER = new ProductUnitFedex('NUMBER', 'productUnit.number', "NMB", 'Number');
  static readonly PACKET = new ProductUnitFedex('PACKET', 'productUnit.packet', "PA", 'Packet');
  static readonly PALLET = new ProductUnitFedex('PALLET', 'productUnit.pallet', "PAL", 'Pallet');
  static readonly PIECE = new ProductUnitFedex('PIECE', 'productUnit.piece', "PC", 'Piece');
  static readonly PROOF_LITERS = new ProductUnitFedex('PROOF_LITERS', 'productUnit.proofLiters', "PF", 'Proof Liters');
  static readonly PACKAGE = new ProductUnitFedex('PACKAGE', 'productUnit.package', "PKG", 'Package');
  static readonly PAIR = new ProductUnitFedex('PAIR', 'productUnit.pair', "PR", 'Pair');
  static readonly PAIRS = new ProductUnitFedex('PAIRS', 'productUnit.pairs', "PRS", 'Pairs');
  static readonly ROLL = new ProductUnitFedex('ROLL', 'productUnit.roll', "RL", 'Roll');
  static readonly SET = new ProductUnitFedex('SET', 'productUnit.set', "SET", 'Set');
  static readonly SQUARE_METERS = new ProductUnitFedex('SQUARE_METERS', 'productUnit.squareMeters', "SME", 'Square Meters');
  static readonly SQUARE_YARDS = new ProductUnitFedex('SQUARE_YARDS', 'productUnit.squareYards', "SYD", 'Square Yards');
  static readonly TUBE = new ProductUnitFedex('TUBE', 'productUnit.tube', "TU", 'Tube');
  static readonly YARD = new ProductUnitFedex('YARD', 'productUnit.yard', "YD", 'Yard');
}

export class ProductUnitDHL extends BaseDictEnum<string> {
  static readonly PIECES = new ProductUnitDHL('PIECES', 'productUnit.pieces', "PCS", 'Pieces');
  static readonly BOXES = new ProductUnitDHL('BOXES', 'productUnit.boxes', "BOX", 'Boxes');
  static readonly CENTIGRAM = new ProductUnitDHL('CENTIGRAM', 'productUnit.centigram', "2GM", 'Centigram');
  static readonly CENTIMETERS = new ProductUnitDHL('CENTIMETERS', 'productUnit.centimeters', "2M", 'Centimeters');
  static readonly CUBIC_CENTIMETERS = new ProductUnitDHL('CUBIC_CENTIMETERS', 'productUnit.cubicCentimeters', "2M3", 'Cubic Centimeters');
  static readonly CUBIC_FEET = new ProductUnitDHL('CUBIC_FEET', 'productUnit.cubicFeet', "3M3", 'Cubic Feet');
  static readonly CUBIC_METERS = new ProductUnitDHL('CUBIC_METERS', 'productUnit.cubicMeters', "M3", 'Cubic Meters');
  static readonly DOZEN_PAIRS = new ProductUnitDHL('DOZEN_PAIRS', 'productUnit.dozenPairs', "DPR", 'Dozen Pairs');
  static readonly DOZEN = new ProductUnitDHL('DOZEN', 'productUnit.dozen', "DOZ", 'Dozen');
  static readonly EACH = new ProductUnitDHL('EACH', 'productUnit.each', "NO", 'Each');
  static readonly GRAMS = new ProductUnitDHL('GRAMS', 'productUnit.grams', "GM", 'Grams');
  static readonly GROSS = new ProductUnitDHL('GROSS', 'productUnit.gross', "GRS", 'Gross');
  static readonly KILOGRAMS = new ProductUnitDHL('KILOGRAMS', 'productUnit.kilograms', "KG", 'Kilograms');
  static readonly LITERS = new ProductUnitDHL('LITERS', 'productUnit.liters', "L", 'Liters');
  static readonly METERS = new ProductUnitDHL('METERS', 'productUnit.meters', "M", 'Meters');
  static readonly MILLIGRAMS = new ProductUnitDHL('MILLIGRAMS', 'productUnit.milligrams', "3GM", 'Milligrams');
  static readonly MILLILITERS = new ProductUnitDHL('MILLILITERS', 'productUnit.milliliters', "3L", 'Milliliters');
  static readonly NO_UNIT_REQUIRED = new ProductUnitDHL('NO_UNIT_REQUIRED', 'productUnit.noUnitRequired', "X", 'No Unit Required');
  static readonly NUMBER = new ProductUnitDHL('NUMBER', 'productUnit.number', "NO", 'Number');
  static readonly OUNCES = new ProductUnitDHL('OUNCES', 'productUnit.ounces', "2KG", 'Ounces');
  static readonly PAIRS = new ProductUnitDHL('PAIRS', 'productUnit.pairs', "PRS", 'Pairs');
  static readonly GALLONS = new ProductUnitDHL('GALLONS', 'productUnit.gallons', "2L", 'Gallons');
  static readonly POUNDS = new ProductUnitDHL('POUNDS', 'productUnit.pounds', "3KG", 'Pounds');
  static readonly SQUARE_CENTIMETERS = new ProductUnitDHL('SQUARE_CENTIMETERS', 'productUnit.squareCentimeters', "CM2", 'Square Centimeters');
  static readonly SQUARE_FEET = new ProductUnitDHL('SQUARE_FEET', 'productUnit.squareFeet', "2M2", 'Square Feet');
  static readonly SQUARE_INCHES = new ProductUnitDHL('SQUARE_INCHES', 'productUnit.squareInches', "3M2", 'Square Inches');
  static readonly SQUARE_METERS = new ProductUnitDHL('SQUARE_METERS', 'productUnit.squareMeters', "M2", 'Square Meters');
  static readonly SQUARE_YARDS = new ProductUnitDHL('SQUARE_YARDS', 'productUnit.squareYards', "4M2", 'Square Yards');
  static readonly YARDS = new ProductUnitDHL('YARDS', 'productUnit.yards', "3M", 'Yards');
}
