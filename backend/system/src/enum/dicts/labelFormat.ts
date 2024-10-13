import { BaseDictEnum } from "./baseDictEnum";

export class LabelFormatCanadaPost extends BaseDictEnum<string> {
  static readonly A4_PDF_8_5X11 = new LabelFormatCanadaPost(
    "A4_PDF_8_5X11",
    "labelFormat.Canada_Post.A4_PDF_8_5X11",
    "8.5x11",
    "8.5x11_A4_PDF(Recommend)",
  );

  static readonly THERMAL_4X6 = new LabelFormatCanadaPost(
    "THERMAL_4X6",
    "labelFormat.Canada_Post.THERMAL_4X6",
    "4x6",
    "4x6 Thermal",
  );
}

export class LabelFormatFedex extends BaseDictEnum<string> {
  static readonly PAPER_4X8 = new LabelFormatFedex(
    "PAPER_4X8",
    "labelFormat.Fedex.PAPER_4X8",
    "PAPER_4X8",
    "PAPER_4X8"
  );
  static readonly STOCK_4X6 = new LabelFormatFedex(
    "STOCK_4X6",
    "labelFormat.Fedex.STOCK_4X6",
    "STOCK_4X6",
    "STOCK_4X6"
  );
  static readonly PAPER_7X4_75 = new LabelFormatFedex(
    "PAPER_7X4_75",
    "labelFormat.Fedex.PAPER_7X4_75",
    "PAPER_7X4.75",
    "PAPER_7X4.75"
  );
  static readonly PAPER_8_5X11_BOTTOM_HALF_LABEL = new LabelFormatFedex(
    "PAPER_8_5X11_BOTTOM_HALF_LABEL",
    "labelFormat.Fedex.PAPER_8_5X11_BOTTOM_HALF_LABEL",
    "PAPER_8.5X11_BOTTOM_HALF_LABEL",
    "PAPER_8.5X11_BOTTOM_HALF_LABEL"
  );

  static readonly PAPER_8_5X11_TOP_HALF_LABEL = new LabelFormatFedex(
    "PAPER_8_5X11_TOP_HALF_LABEL",
    "labelFormat.Fedex.PAPER_8_5X11_TOP_HALF_LABEL",
    "PAPER_8.5X11_TOP_HALF_LABEL",
    "PAPER_8.5X11_TOP_HALF_LABEL"
  );

  static readonly PAPER_LETTER = new LabelFormatFedex(
    "PAPER_LETTER",
    "labelFormat.Fedex.PAPER_LETTER",
    "PAPER_LETTER",
    "PAPER_LETTER(Recommend)"
  );
}

export class LabelFormatDHL extends BaseDictEnum<string> {
  static readonly A4_PDF_8X4 = new LabelFormatDHL(
    "A4_PDF_8X4",
    "labelFormat.DHL.A4_PDF_8X4",
    "8X4_A4_PDF",
    "8X4_A4_PDF",
  );

  static readonly THERMAL_8X4 = new LabelFormatDHL(
    "THERMAL_8X4",
    "labelFormat.DHL.THERMAL_8X4",
    "8X4_thermal",
    "8X4_thermal(Recommend)",
  );

  static readonly A4_TC_PDF_8X4 = new LabelFormatDHL(
    "A4_TC_PDF_8X4",
    "labelFormat.DHL.A4_TC_PDF_8X4",
    "8X4_A4_TC_PDF",
    "8X4_A4_TC_PDF",
  );

  static readonly CI_PDF_8X4 = new LabelFormatDHL(
    "CI_PDF_8X4",
    "labelFormat.DHL.CI_PDF_8X4",
    "8X4_CI_PDF",
    "8X4_CI_PDF",
  );

  static readonly CI_THERMAL_8X4 = new LabelFormatDHL(
    "CI_THERMAL_8X4",
    "labelFormat.DHL.CI_THERMAL_8X4",
    "8X4_CI_thermal",
    "8X4_CI_thermal",
  );

  static readonly CI_PDF_6X4 = new LabelFormatDHL(
    "CI_PDF_6X4",
    "labelFormat.DHL.CI_PDF_6X4",
    "6X4_A4_PDF",
    "6X4_A4_PDF",
  );

  static readonly THERMAL_6X4 = new LabelFormatDHL(
    "THERMAL_6X4",
    "labelFormat.DHL.THERMAL_6X4",
    "6X4_thermal",
    "6X4_thermal",
  );

  static readonly RU_A4_PDF_8X4 = new LabelFormatDHL(
    "RU_A4_PDF_8X4",
    "labelFormat.DHL.RU_A4_PDF_8X4",
    "8X4_RU_A4_PDF",
    "8X4_RU_A4_PDF",
  );
}

export class LabelFormatUPS extends BaseDictEnum<string> {
  static readonly THERMAL_PDF_6X4 = new LabelFormatUPS(
    "THERMAL_PDF_6X4",
    "labelFormat.UPS.THERMAL_PDF_6X4",
    "6X4_THERMAL_PDF",
    "6X4_thermal_PDF",
  );

  static readonly A4_PDF = new LabelFormatUPS(
    "A4_PDF",
    "labelFormat.UPS.A4_PDF",
    "A4_PDF",
    "A4_PDF",
  );
}

export class LabelFormatPurolator extends BaseDictEnum<string> {
  static readonly REGULAR = new LabelFormatPurolator(
    "REGULAR",
    "labelFormat.Purolator.REGULAR",
    "Regular",
    "Regular",
  );

  static readonly THERMAL = new LabelFormatPurolator(
    "THERMAL",
    "labelFormat.Purolator.THERMAL",
    "Thermal",
    "Thermal",
  );
}
