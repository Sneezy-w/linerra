import { Carrier } from "../../models/veryk/general.entity";
import { verykCarriers } from "../../constant/verykConstant";
import { getProvince } from "../../utils/verykUtils";
import { regions } from "../../constant/regionConstant";
import { provinceRecord } from "../../constant/provinceConstant";

export class VerykGeneralService {
  public static instance: VerykGeneralService = new VerykGeneralService();

  getCarriers(): Carrier[] {
    return verykCarriers;
  }

  async getRegions(acceptLanguage?: string) {
    //const regions = await getRegion({}, acceptLanguage);
    //return regions;
    return regions.map(region => ({
      id: region.id,
      name: region.name,
      phoneCode: region.phoneCode,
      type: region.type,
      provinces: provinceRecord[region.id]
    }));
  }

  async getProvinces(regionId: string, acceptLanguage?: string) {
    const provinces = await getProvince({ region_id: regionId }, acceptLanguage);
    return provinces;
  }

}
