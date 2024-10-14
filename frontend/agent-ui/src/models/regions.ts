// src/models/userModel.ts
// import { useRequest } from 'ahooks';
// import { getAccessToken } from '@/access';
// import { getRegions as getRegionsApi } from '@/services/service/verykApi';
// import { useCallback, useEffect } from 'react';

export default () => {
  // const { data: regions, loading: loading, runAsync: fetchRegionsAsync, run: fetchRegions } = useRequest(async () => {
  //   const response: API.R<VerykType.Region[]> = await getRegionsApi({
  //     skipErrorHandler: true,
  //   });
  //   return response.data;
  // }, {
  //   manual: true,
  // });

  // useEffect(() => {
  //   const accessToken = getAccessToken();
  //   if (accessToken) {
  //     fetchRegions();
  //     console.log("regions", regions);
  //   }
  // }, []);

  // const getRegions = useCallback(() => async () => {
  //   let loadedRegions: VerykType.Region[] | undefined = regions;
  //   if (!loadedRegions) {
  //     const accessToken = getAccessToken();
  //     if (accessToken) {
  //       loadedRegions = await fetchRegionsAsync();
  //     }
  //   }
  //   return loadedRegions || [];
  // }, []);

  // // // const getDictItemsAsync = useAsync(async (dictType: string) => {
  // // //   if (!dicts) {
  // // //     const accessToken = getAccessToken();
  // // //     if (accessToken) {
  // // //       const loadedDicts = await fetchDictsAsync();
  // // //       return loadedDicts?.[dictType] || [];
  // // //     }
  // // //   }
  // // //   return dicts?.[dictType] || [];
  // // // }, [dicts, fetchDictsAsync]);

  // // const getDictItem = (dictType: string, value: string) => async () => {
  // //   let loadedDicts: Record<string, API.Service.DictItem[]> | undefined = dicts;
  // //   if (!loadedDicts) {
  // //     const accessToken = getAccessToken();
  // //     if (accessToken) {
  // //       loadedDicts = await fetchDictsAsync();
  // //     }
  // //   }
  // //   return loadedDicts?.[dictType]?.find((item) => item.value === value) || null;
  // // };

  // // const getDictItemCode = (dictType: string, value: string) => async () => {
  // //   let loadedDicts: Record<string, API.Service.DictItem[]> | undefined = dicts;
  // //   if (!loadedDicts) {
  // //     const accessToken = getAccessToken();
  // //     if (accessToken) {
  // //       loadedDicts = await fetchDictsAsync();
  // //     }
  // //   }
  // //   const dictItem = loadedDicts?.[dictType]?.find((item) => item.value === value) || null;
  // //   return dictItem?.code || null;
  // // };

  const regions: VerykType.Region[] = [
    {
      id: 'AD',
      name: 'Andorra',
      phoneCode: '376',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'AF',
      name: 'Afghanistan',
      phoneCode: '93',
      type: 'C',
      provinces: [],
    },
    {
      id: 'AG',
      name: 'Antigua and Barbuda',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'AI',
      name: 'Anguilla',
      phoneCode: '1',
      type: 'S',
      provinces: [],
    },
    {
      id: 'AL',
      name: 'Albania',
      phoneCode: '355',
      type: 'C',
      provinces: [],
    },
    {
      id: 'AM',
      name: 'Armenia',
      phoneCode: '374',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'AO',
      name: 'Angola',
      phoneCode: '244',
      type: 'C',
      provinces: [],
    },
    {
      id: 'AQ',
      name: 'Antarctica',
      phoneCode: '672',
      type: '',
      provinces: [],
    },
    {
      id: 'AR',
      name: 'Argentina',
      phoneCode: '54',
      type: 'CP',
      provinces: [
        {
          id: '187',
          name: 'BUENOS AIRES',
          code: 'BA',
        },
        {
          id: '188',
          name: 'CHUBUT',
          code: 'CB',
        },
        {
          id: '189',
          name: 'CAPITAL FEDERAL',
          code: 'CF',
        },
        {
          id: '190',
          name: 'CHACO',
          code: 'CH',
        },
        {
          id: '191',
          name: 'CORDOBA',
          code: 'CO',
        },
        {
          id: '192',
          name: 'CORRIENTES',
          code: 'CR',
        },
        {
          id: '193',
          name: 'CATAMARCA',
          code: 'CT',
        },
        {
          id: '194',
          name: 'ENTRE RIOS',
          code: 'ER',
        },
        {
          id: '195',
          name: 'FORMOSA',
          code: 'FO',
        },
        {
          id: '196',
          name: 'JUJUY',
          code: 'JU',
        },
        {
          id: '197',
          name: 'LA PAMPA',
          code: 'LP',
        },
        {
          id: '198',
          name: 'LA RIOJA',
          code: 'LR',
        },
        {
          id: '199',
          name: 'MISIONES',
          code: 'MI',
        },
        {
          id: '200',
          name: 'MENDOZA',
          code: 'MZ',
        },
        {
          id: '201',
          name: 'NEUQUEN',
          code: 'NQ',
        },
        {
          id: '202',
          name: 'RIO NEGRO',
          code: 'RN',
        },
        {
          id: '203',
          name: 'SALTA',
          code: 'SA',
        },
        {
          id: '204',
          name: 'SANTA CRUZ',
          code: 'SC',
        },
        {
          id: '205',
          name: 'SANTIAGO DEL ESTERO',
          code: 'SE',
        },
        {
          id: '206',
          name: 'SANTA FE',
          code: 'SF',
        },
        {
          id: '207',
          name: 'SAN JUAN',
          code: 'SJ',
        },
        {
          id: '208',
          name: 'SAN LUIS',
          code: 'SL',
        },
        {
          id: '209',
          name: 'TIERRA DEL FUEGO',
          code: 'TF',
        },
        {
          id: '210',
          name: 'TUCUMAN',
          code: 'TU',
        },
      ],
    },
    {
      id: 'AS',
      name: 'American Samoa',
      phoneCode: '1',
      type: 'CP',
      provinces: [
        {
          id: '211',
          name: 'AUSTL. CAP. TERR.',
          code: 'ACT',
        },
        {
          id: '212',
          name: 'NEW SOUTH WALES',
          code: 'NSW',
        },
        {
          id: '213',
          name: 'NORTHERN TERRITORY',
          code: 'NT',
        },
        {
          id: '214',
          name: 'QUEENSLAND',
          code: 'QLD',
        },
        {
          id: '215',
          name: 'SOUTH AUSTRALIA',
          code: 'SA',
        },
        {
          id: '216',
          name: 'TASMANIA',
          code: 'TAS',
        },
        {
          id: '217',
          name: 'VICTORIA',
          code: 'VIC',
        },
        {
          id: '218',
          name: 'WESTERN AUSTRALIA',
          code: 'WA',
        },
      ],
    },
    {
      id: 'AT',
      name: 'Austria',
      phoneCode: '43',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'AU',
      name: 'Australia',
      phoneCode: '61',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'AW',
      name: 'Aruba',
      phoneCode: '297',
      type: 'C',
      provinces: [],
    },
    {
      id: 'AZ',
      name: 'Azerbaijan',
      phoneCode: '994',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'DZ',
      name: 'Algeria',
      phoneCode: '213',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'BA',
      name: 'Bosnia and Herzegovina',
      phoneCode: '387',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'BB',
      name: 'Barbados',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'BD',
      name: 'Bangladesh',
      phoneCode: '880',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'BE',
      name: 'Belgium',
      phoneCode: '32',
      type: 'CP',
      provinces: [
        {
          id: '219',
          name: 'ANTWERPEN',
          code: 'AN',
        },
        {
          id: '220',
          name: 'BRUSSELS-CAPITAL REGION',
          code: 'BC',
        },
        {
          id: '221',
          name: 'HENEGOUWEN',
          code: 'HE',
        },
        {
          id: '222',
          name: 'LIMBURG',
          code: 'LI',
        },
        {
          id: '223',
          name: 'LUIK',
          code: 'LU',
        },
        {
          id: '224',
          name: 'LUXEMBURG',
          code: 'LX',
        },
        {
          id: '225',
          name: 'NAMEN',
          code: 'NA',
        },
        {
          id: '226',
          name: 'OOST VLAANDEREN',
          code: 'OV',
        },
        {
          id: '227',
          name: 'VLAAMS BRABANT',
          code: 'VB',
        },
        {
          id: '228',
          name: 'WAALS BRABANT',
          code: 'WB',
        },
        {
          id: '229',
          name: 'WEST VLAANDEREN',
          code: 'WV',
        },
      ],
    },
    {
      id: 'BF',
      name: 'Burkina Faso',
      phoneCode: '226',
      type: 'C',
      provinces: [],
    },
    {
      id: 'BG',
      name: 'Bulgaria',
      phoneCode: '359',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'BH',
      name: 'Bahrain',
      phoneCode: '973',
      type: 'C',
      provinces: [],
    },
    {
      id: 'BI',
      name: 'Burundi',
      phoneCode: '257',
      type: 'C',
      provinces: [],
    },
    {
      id: 'BJ',
      name: 'Benin',
      phoneCode: '229',
      type: 'C',
      provinces: [],
    },
    {
      id: 'BM',
      name: 'Bermuda',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'BN',
      name: 'Brunei',
      phoneCode: '673',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'BO',
      name: 'Bolivia',
      phoneCode: '591',
      type: 'C',
      provinces: [],
    },
    // {
    //   "id": "BQ",
    //   "name": "British Antarctic Territory",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'BR',
      name: 'Brazil',
      phoneCode: '55',
      type: 'CP',
      provinces: [
        {
          id: '239',
          name: 'ACRE',
          code: 'AC',
        },
        {
          id: '240',
          name: 'ALAGOAS',
          code: 'AL',
        },
        {
          id: '241',
          name: 'AMAZONAS',
          code: 'AM',
        },
        {
          id: '242',
          name: 'AMAPA',
          code: 'AP',
        },
        {
          id: '243',
          name: 'BAHIA',
          code: 'BA',
        },
        {
          id: '244',
          name: 'CEARA',
          code: 'CE',
        },
        {
          id: '245',
          name: 'DISTRITO FEDERAL',
          code: 'DF',
        },
        {
          id: '246',
          name: 'ESPIRITO SANTO',
          code: 'ES',
        },
        {
          id: '247',
          name: 'FERNANDO DE NORONHA',
          code: 'FN',
        },
        {
          id: '248',
          name: 'GOIAS',
          code: 'GO',
        },
        {
          id: '249',
          name: 'MARANHAO',
          code: 'MA',
        },
        {
          id: '250',
          name: 'MINAS GERAIS',
          code: 'MG',
        },
        {
          id: '251',
          name: 'MATO GROSSO DO SUL',
          code: 'MS',
        },
        {
          id: '252',
          name: 'MATO GROSSO',
          code: 'MT',
        },
        {
          id: '253',
          name: 'PARA',
          code: 'PA',
        },
        {
          id: '254',
          name: 'PARAIBA',
          code: 'PB',
        },
        {
          id: '255',
          name: 'PERNAMBUCO',
          code: 'PE',
        },
        {
          id: '256',
          name: 'PIAUI',
          code: 'PI',
        },
        {
          id: '257',
          name: 'PARANA',
          code: 'PR',
        },
        {
          id: '258',
          name: 'RIO DO JANEIRO',
          code: 'RJ',
        },
        {
          id: '259',
          name: 'RONDONIA',
          code: 'RN',
        },
        {
          id: '260',
          name: 'RORAIMA',
          code: 'RO',
        },
        {
          id: '261',
          name: 'RIO GRANDE DO SUL',
          code: 'RR',
        },
        {
          id: '262',
          name: 'RIO GRANDE DO SUL',
          code: 'RS',
        },
        {
          id: '263',
          name: 'SANTA CATARINA',
          code: 'SC',
        },
        {
          id: '264',
          name: 'SERGIPE',
          code: 'SE',
        },
        {
          id: '265',
          name: 'SAO PAULO',
          code: 'SP',
        },
        {
          id: '266',
          name: 'TOCANTINS',
          code: 'TO',
        },
      ],
    },
    {
      id: 'BS',
      name: 'Bahamas',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'BT',
      name: 'Bhutan',
      phoneCode: '975',
      type: 'C',
      provinces: [],
    },
    // {
    //   "id": "BV",
    //   "name": "Bouvet Island",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'BW',
      name: 'Botswana',
      phoneCode: '267',
      type: 'C',
      provinces: [],
    },
    {
      id: 'BY',
      name: 'Belarus',
      phoneCode: '375',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'BZ',
      name: 'Belize',
      phoneCode: '501',
      type: 'C',
      provinces: [],
    },
    {
      id: 'IO',
      name: 'British Indian Ocean Territory',
      phoneCode: '246',
      type: '',
      provinces: [],
    },
    {
      id: 'VG',
      name: 'British Virgin Islands',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'CA',
      name: 'Canada',
      phoneCode: '1',
      type: 'CP',
      provinces: [
        {
          id: '1',
          name: 'ALBERTA',
          code: 'AB',
        },
        {
          id: '2',
          name: 'BRITISH COLUMBIA',
          code: 'BC',
        },
        {
          id: '3',
          name: 'MANITOBA',
          code: 'MB',
        },
        {
          id: '4',
          name: 'NEW BRUNSWICK',
          code: 'NB',
        },
        {
          id: '5',
          name: 'NEWFOUNDLAND AND LABRADOR',
          code: 'NL',
        },
        {
          id: '7',
          name: 'NOVA SCOTIA',
          code: 'NS',
        },
        {
          id: '6',
          name: 'NORTHWEST TERRITORIES',
          code: 'NT',
        },
        {
          id: '8',
          name: 'NUNAVUT',
          code: 'NU',
        },
        {
          id: '9',
          name: 'ONTARIO',
          code: 'ON',
        },
        {
          id: '10',
          name: 'PRINCE EDWARD ISLAND',
          code: 'PE',
        },
        {
          id: '86',
          name: 'QUEBEC',
          code: 'QC',
        },
        {
          id: '11',
          name: 'QUEBEC',
          code: 'QC',
        },
        {
          id: '12',
          name: 'SASKATCHEWAN',
          code: 'SK',
        },
        {
          id: '13',
          name: 'YUKON',
          code: 'YT',
        },
      ],
    },
    {
      id: 'CC',
      name: 'Cocos [Keeling] Islands',
      phoneCode: '61',
      type: '',
      provinces: [],
    },
    {
      id: 'CD',
      name: 'Congo - Kinshasa',
      phoneCode: '243',
      type: 'C',
      provinces: [],
    },
    {
      id: 'CF',
      name: 'Central African Republic',
      phoneCode: '236',
      type: 'C',
      provinces: [],
    },
    {
      id: 'CG',
      name: 'Congo - Brazzaville',
      phoneCode: '242',
      type: 'C',
      provinces: [],
    },
    {
      id: 'CI',
      name: 'Côte d’Ivoire',
      phoneCode: '225',
      type: 'C',
      provinces: [
        {
          id: '268',
          name: 'AISEN DEL GRAL. C.I. DEL CAMPO',
          code: 'AG',
        },
        {
          id: '269',
          name: 'ANTOFAGASTA',
          code: 'AN',
        },
        {
          id: '270',
          name: 'ARAUCANIA',
          code: 'AR',
        },
        {
          id: '271',
          name: 'ATACAMA',
          code: 'AT',
        },
        {
          id: '272',
          name: 'BIO-BIO',
          code: 'BB',
        },
        {
          id: '273',
          name: 'COQUIMBO',
          code: 'CO',
        },
        {
          id: '274',
          name: 'LOS LAGOS',
          code: 'LL',
        },
        {
          id: '275',
          name: "LIB. GRAL. BERNARDO O'HIGGINS",
          code: 'LO',
        },
        {
          id: '276',
          name: 'MAGALLANES Y ANTARTICA CHILENA',
          code: 'MA',
        },
        {
          id: '277',
          name: 'MAULE',
          code: 'MU',
        },
        {
          id: '278',
          name: 'REGION METROPOLITANA',
          code: 'RM',
        },
        {
          id: '279',
          name: 'TARAPACA',
          code: 'TA',
        },
        {
          id: '280',
          name: 'VALPARAISO',
          code: 'VA',
        },
      ],
    },
    {
      id: 'CK',
      name: 'Cook Islands',
      phoneCode: '682',
      type: 'C',
      provinces: [],
    },
    {
      id: 'CL',
      name: 'Chile',
      phoneCode: '56',
      type: 'C',
      provinces: [],
    },
    {
      id: 'CM',
      name: 'Cameroon',
      phoneCode: '237',
      type: 'C',
      provinces: [],
    },
    {
      id: 'CN',
      name: 'China',
      phoneCode: '86',
      type: 'CP',
      provinces: [
        {
          id: '121',
          name: 'Beijing',
          code: '11',
        },
        {
          id: '122',
          name: 'Tianjin',
          code: '12',
        },
        {
          id: '123',
          name: 'Hebei Province',
          code: '13',
        },
        {
          id: '124',
          name: 'Shanxi Province ',
          code: '14',
        },
        {
          id: '125',
          name: 'Inner Mongolia',
          code: '15',
        },
        {
          id: '126',
          name: 'Liaoning Province',
          code: '21',
        },
        {
          id: '127',
          name: 'Jilin Province',
          code: '22',
        },
        {
          id: '128',
          name: 'Heilongjiang',
          code: '23',
        },
        {
          id: '129',
          name: 'Shanghai',
          code: '31',
        },
        {
          id: '130',
          name: 'Jiangsu Province',
          code: '32',
        },
        {
          id: '131',
          name: 'Zhejiang Province',
          code: '33',
        },
        {
          id: '132',
          name: 'Anhui Province',
          code: '34',
        },
        {
          id: '133',
          name: 'Fujian Province',
          code: '35',
        },
        {
          id: '134',
          name: 'Jiangxi Province',
          code: '36',
        },
        {
          id: '135',
          name: 'Shandong Province',
          code: '37',
        },
        {
          id: '136',
          name: 'Henan Province',
          code: '41',
        },
        {
          id: '137',
          name: 'Hubei Province',
          code: '42',
        },
        {
          id: '138',
          name: 'Hunan Province',
          code: '43',
        },
        {
          id: '139',
          name: 'Guangdong Province',
          code: '44',
        },
        {
          id: '140',
          name: 'Guangxi Province',
          code: '45',
        },
        {
          id: '141',
          name: 'Hainan Province',
          code: '46',
        },
        {
          id: '142',
          name: 'Chongqing',
          code: '50',
        },
        {
          id: '143',
          name: 'Sichuan Province',
          code: '51',
        },
        {
          id: '144',
          name: 'Guizhou Province',
          code: '52',
        },
        {
          id: '145',
          name: 'Yunnan Province',
          code: '53',
        },
        {
          id: '146',
          name: 'Tibet',
          code: '54',
        },
        {
          id: '147',
          name: 'Shaanxi Province',
          code: '61',
        },
        {
          id: '148',
          name: 'Gansu Province',
          code: '62',
        },
        {
          id: '149',
          name: 'Qinghai Province',
          code: '63',
        },
        {
          id: '150',
          name: 'Ningxia Province',
          code: '64',
        },
        {
          id: '151',
          name: 'Sinkiang',
          code: '65',
        },
        {
          id: '152',
          name: 'Taiwan Province',
          code: '71',
        },
        {
          id: '153',
          name: 'HongKong',
          code: '81',
        },
        {
          id: '154',
          name: 'Macau',
          code: '82',
        },
      ],
    },
    {
      id: 'CO',
      name: 'Colombia',
      phoneCode: '57',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'CR',
      name: 'Costa Rica',
      phoneCode: '506',
      type: 'C',
      provinces: [],
    },
    // {
    //   "id": "CT",
    //   "name": "Canton and Enderbury Islands",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'CU',
      name: 'Cuba',
      phoneCode: '53',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'CV',
      name: 'Cape Verde',
      phoneCode: '238',
      type: 'C',
      provinces: [],
    },
    {
      id: 'CX',
      name: 'Christmas Island',
      phoneCode: '61',
      type: '',
      provinces: [],
    },
    {
      id: 'CY',
      name: 'Cyprus',
      phoneCode: '357',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'CZ',
      name: 'Czech Republic',
      phoneCode: '420',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'HR',
      name: 'Croatia',
      phoneCode: '385',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'KH',
      name: 'Cambodia',
      phoneCode: '855',
      type: 'C',
      provinces: [],
    },
    {
      id: 'KM',
      name: 'Comoros',
      phoneCode: '269',
      type: 'C',
      provinces: [],
    },
    {
      id: 'KY',
      name: 'Cayman Islands',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'TD',
      name: 'Chad',
      phoneCode: '235',
      type: 'C',
      provinces: [],
    },
    {
      id: 'DJ',
      name: 'Djibouti',
      phoneCode: '253',
      type: 'C',
      provinces: [],
    },
    {
      id: 'DK',
      name: 'Denmark',
      phoneCode: '45',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'DM',
      name: 'Dominica',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'DO',
      name: 'Dominican Republic',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    // {
    //   "id": "NQ",
    //   "name": "Dronning Maud Land",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    // {
    //   "id": "DD",
    //   "name": "East Germany",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'EC',
      name: 'Ecuador',
      phoneCode: '593',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'EE',
      name: 'Estonia',
      phoneCode: '372',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'EG',
      name: 'Egypt',
      phoneCode: '20',
      type: 'C',
      provinces: [],
    },
    {
      id: 'ER',
      name: 'Eritrea',
      phoneCode: '291',
      type: 'C',
      provinces: [],
    },
    {
      id: 'ET',
      name: 'Ethiopia',
      phoneCode: '251',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'GQ',
      name: 'Equatorial Guinea',
      phoneCode: '240',
      type: 'C',
      provinces: [],
    },
    {
      id: 'SV',
      name: 'El Salvador',
      phoneCode: '503',
      type: 'C',
      provinces: [
        {
          id: '1547',
          name: 'Ahuachapán',
          code: 'AH',
        },
        {
          id: '1548',
          name: 'Cabañas',
          code: 'CA',
        },
        {
          id: '1549',
          name: 'Chalatenango',
          code: 'CH',
        },
        {
          id: '1550',
          name: 'Cuscatlán',
          code: 'CU',
        },
        {
          id: '1551',
          name: 'La Libertad',
          code: 'LA',
        },
        {
          id: '1552',
          name: 'La Paz',
          code: 'LP',
        },
        {
          id: '1553',
          name: 'La Unión',
          code: 'LU',
        },
        {
          id: '1546',
          name: 'Morazán',
          code: 'MO',
        },
        {
          id: '1554',
          name: 'San Miguel',
          code: 'SA',
        },
        {
          id: '1557',
          name: 'Santa Ana',
          code: 'SN',
        },
        {
          id: '1558',
          name: 'Sonsonate',
          code: 'SO',
        },
        {
          id: '1555',
          name: 'San Salvador',
          code: 'SS',
        },
        {
          id: '1556',
          name: 'San Vicente',
          code: 'SV',
        },
        {
          id: '1559',
          name: 'Usulután',
          code: 'US',
        },
      ],
    },
    {
      id: 'FI',
      name: 'Finland',
      phoneCode: '358',
      type: 'P',
      provinces: [],
    },
    {
      id: 'FJ',
      name: 'Fiji',
      phoneCode: '679',
      type: 'C',
      provinces: [],
    },
    {
      id: 'FK',
      name: 'Falkland Islands',
      phoneCode: '500',
      type: 'C',
      provinces: [],
    },
    {
      id: 'FO',
      name: 'Faroe Islands',
      phoneCode: '298',
      type: 'CP',
      provinces: [],
    },
    // {
    //   "id": "FQ",
    //   "name": "French Southern and Antarctic Territories",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'FR',
      name: 'France',
      phoneCode: '33',
      type: 'CP',
      provinces: [
        {
          id: '313',
          name: 'AIN',
          code: '1',
        },
        {
          id: '322',
          name: 'AUBE',
          code: '10',
        },
        {
          id: '323',
          name: 'AUDE',
          code: '11',
        },
        {
          id: '324',
          name: 'AVEYRON',
          code: '12',
        },
        {
          id: '325',
          name: 'BOUCHES DU RHÔNE',
          code: '13',
        },
        {
          id: '326',
          name: 'CALVADOS',
          code: '14',
        },
        {
          id: '327',
          name: 'CANTAL',
          code: '15',
        },
        {
          id: '328',
          name: 'CHARENTE',
          code: '16',
        },
        {
          id: '329',
          name: 'CHARENTE MARITIME',
          code: '17',
        },
        {
          id: '330',
          name: 'CHER',
          code: '18',
        },
        {
          id: '331',
          name: 'CORREZE',
          code: '19',
        },
        {
          id: '314',
          name: 'AISNE',
          code: '2',
        },
        {
          id: '332',
          name: 'CORSE',
          code: '20',
        },
        {
          id: '333',
          name: 'COTE D´OR',
          code: '21',
        },
        {
          id: '334',
          name: "COTES D'ARMOR",
          code: '22',
        },
        {
          id: '335',
          name: 'CREUSE',
          code: '23',
        },
        {
          id: '336',
          name: 'DORDOGNE',
          code: '24',
        },
        {
          id: '337',
          name: 'DOUBS',
          code: '25',
        },
        {
          id: '338',
          name: 'DROME',
          code: '26',
        },
        {
          id: '339',
          name: 'EURE',
          code: '27',
        },
        {
          id: '340',
          name: 'EURE ET LOIR',
          code: '28',
        },
        {
          id: '341',
          name: 'FINISTERE',
          code: '29',
        },
        {
          id: '342',
          name: 'CORSE DU SUD',
          code: '2A',
        },
        {
          id: '343',
          name: 'HAUTE CORSE',
          code: '2B',
        },
        {
          id: '315',
          name: 'ALLIER',
          code: '3',
        },
        {
          id: '344',
          name: 'GARD',
          code: '30',
        },
        {
          id: '345',
          name: 'HAUTE GARONNE',
          code: '31',
        },
        {
          id: '346',
          name: 'GERS',
          code: '32',
        },
        {
          id: '347',
          name: 'GIRONDE',
          code: '33',
        },
        {
          id: '348',
          name: 'HERAULT',
          code: '34',
        },
        {
          id: '349',
          name: 'ILLE ET VILAINE',
          code: '35',
        },
        {
          id: '350',
          name: 'INDRE',
          code: '36',
        },
        {
          id: '351',
          name: 'INDRE ET LOIRE',
          code: '37',
        },
        {
          id: '352',
          name: 'ISERE',
          code: '38',
        },
        {
          id: '353',
          name: 'JURA',
          code: '39',
        },
        {
          id: '316',
          name: 'ALPES DE HAUTE PROVENCE',
          code: '4',
        },
        {
          id: '354',
          name: 'LANDES',
          code: '40',
        },
        {
          id: '355',
          name: 'LOIR ET CHER',
          code: '41',
        },
        {
          id: '356',
          name: 'LOIRE',
          code: '42',
        },
        {
          id: '357',
          name: 'HAUTE LOIRE',
          code: '43',
        },
        {
          id: '358',
          name: 'LOIRE ATLANTIQUE',
          code: '44',
        },
        {
          id: '359',
          name: 'LOIRET',
          code: '45',
        },
        {
          id: '360',
          name: 'LOT',
          code: '46',
        },
        {
          id: '361',
          name: 'LOT ET GARONNE',
          code: '47',
        },
        {
          id: '362',
          name: 'LOZERE',
          code: '48',
        },
        {
          id: '363',
          name: 'MAINE ET LOIRE',
          code: '49',
        },
        {
          id: '317',
          name: 'HAUTES ALPES',
          code: '5',
        },
        {
          id: '364',
          name: 'MANCHE',
          code: '50',
        },
        {
          id: '365',
          name: 'MARNE',
          code: '51',
        },
        {
          id: '366',
          name: 'HAUTE MARNE',
          code: '52',
        },
        {
          id: '367',
          name: 'MAYENNE',
          code: '53',
        },
        {
          id: '368',
          name: 'MEURTHE ET MOSELLE',
          code: '54',
        },
        {
          id: '369',
          name: 'MEUSE',
          code: '55',
        },
        {
          id: '370',
          name: 'MORBIHAN',
          code: '56',
        },
        {
          id: '371',
          name: 'MOSELLE',
          code: '57',
        },
        {
          id: '372',
          name: 'NIEVRE',
          code: '58',
        },
        {
          id: '373',
          name: 'NORD',
          code: '59',
        },
        {
          id: '318',
          name: 'ALPES MARITIMES',
          code: '6',
        },
        {
          id: '374',
          name: 'OISE',
          code: '60',
        },
        {
          id: '375',
          name: 'ORNE',
          code: '61',
        },
        {
          id: '376',
          name: 'PAS DE CALAIS',
          code: '62',
        },
        {
          id: '377',
          name: 'PUY DE DOME',
          code: '63',
        },
        {
          id: '378',
          name: 'PYRENEES ATLANTIQUES',
          code: '64',
        },
        {
          id: '379',
          name: 'HAUTE PYRENEES',
          code: '65',
        },
        {
          id: '380',
          name: 'PYRENEES ORIENTALES',
          code: '66',
        },
        {
          id: '381',
          name: 'BAS RHIN',
          code: '67',
        },
        {
          id: '382',
          name: 'HAUT RHIN',
          code: '68',
        },
        {
          id: '383',
          name: 'RHONE',
          code: '69',
        },
        {
          id: '319',
          name: 'ARDECHE',
          code: '7',
        },
        {
          id: '384',
          name: 'HAUTE SAONE',
          code: '70',
        },
        {
          id: '385',
          name: 'SAONE ET LOIRE',
          code: '71',
        },
        {
          id: '386',
          name: 'SARTHE',
          code: '72',
        },
        {
          id: '387',
          name: 'SAVOIE',
          code: '73',
        },
        {
          id: '388',
          name: 'HAUTE SAVOIE',
          code: '74',
        },
        {
          id: '389',
          name: 'PARIS',
          code: '75',
        },
        {
          id: '390',
          name: 'SEINE MARITIME',
          code: '76',
        },
        {
          id: '391',
          name: 'SEINE ET MARNE',
          code: '77',
        },
        {
          id: '392',
          name: 'YVELINES',
          code: '78',
        },
        {
          id: '393',
          name: 'DEUX SERVES',
          code: '79',
        },
        {
          id: '320',
          name: 'ARDENNES',
          code: '8',
        },
        {
          id: '394',
          name: 'SOMME',
          code: '80',
        },
        {
          id: '395',
          name: 'TARN',
          code: '81',
        },
        {
          id: '396',
          name: 'TARN ET GARONNE',
          code: '82',
        },
        {
          id: '397',
          name: 'VAR',
          code: '83',
        },
        {
          id: '398',
          name: 'VACULUSE',
          code: '84',
        },
        {
          id: '399',
          name: 'VENDEE',
          code: '85',
        },
        {
          id: '400',
          name: 'VIENNE',
          code: '86',
        },
        {
          id: '401',
          name: 'HAUTE VIENNE',
          code: '87',
        },
        {
          id: '402',
          name: 'VOSGES',
          code: '88',
        },
        {
          id: '403',
          name: 'YONNE',
          code: '89',
        },
        {
          id: '321',
          name: 'ARIEGE',
          code: '9',
        },
        {
          id: '404',
          name: 'TERRITOIRE DE BELFORT',
          code: '90',
        },
        {
          id: '405',
          name: 'ESSONNE',
          code: '91',
        },
        {
          id: '406',
          name: 'HAUTS DE SEINE',
          code: '92',
        },
        {
          id: '407',
          name: 'SEINE ST DENIS',
          code: '93',
        },
        {
          id: '408',
          name: 'VAL DE MARNE',
          code: '94',
        },
        {
          id: '409',
          name: "VAL D'OISE",
          code: '95',
        },
        {
          id: '410',
          name: 'GUADELOUPE',
          code: '971',
        },
        {
          id: '411',
          name: 'MARTINQUE',
          code: '972',
        },
        {
          id: '412',
          name: 'GUYANE',
          code: '973',
        },
        {
          id: '413',
          name: 'REUNION',
          code: '974',
        },
        {
          id: '414',
          name: 'SAINT PIERRE ET MIQUELON',
          code: '975',
        },
        {
          id: '415',
          name: 'TERRES AUSTRALES FRANCAISES',
          code: '984',
        },
        {
          id: '416',
          name: 'MAYOTTE',
          code: '985',
        },
        {
          id: '417',
          name: 'WALLIS ET FUTUNA',
          code: '986',
        },
        {
          id: '418',
          name: 'POLYNESIE FRANCAISE',
          code: '987',
        },
        {
          id: '419',
          name: 'NOUVELLE CALEDONIE',
          code: '988',
        },
        {
          id: '420',
          name: 'ETRANGER (HORS FRANCE)',
          code: '99',
        },
      ],
    },
    {
      id: 'GF',
      name: 'French Guiana',
      phoneCode: '594',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'PF',
      name: 'French Polynesia',
      phoneCode: '689',
      type: 'C',
      provinces: [],
    },
    {
      id: 'TF',
      name: 'French Southern Territories',
      phoneCode: '262',
      type: '',
      provinces: [],
    },
    {
      id: 'DE',
      name: 'Germany',
      phoneCode: '49',
      type: 'CP',
      provinces: [
        {
          id: '421',
          name: 'BERLIN',
          code: 'BE',
        },
        {
          id: '422',
          name: 'BRANDENBURG',
          code: 'BR',
        },
        {
          id: '423',
          name: 'BADEN WURTTEMBERG',
          code: 'BW',
        },
        {
          id: '424',
          name: 'BAYERN',
          code: 'BY',
        },
        {
          id: '425',
          name: 'BREMEN',
          code: 'HB',
        },
        {
          id: '426',
          name: 'HESSEN',
          code: 'HE',
        },
        {
          id: '427',
          name: 'HAMBURG',
          code: 'HH',
        },
        {
          id: '428',
          name: 'MECKLENBURG VORPOMMERN',
          code: 'MV',
        },
        {
          id: '429',
          name: 'NIEDERSACHSEN',
          code: 'NI',
        },
        {
          id: '430',
          name: 'NORDRHEIN WESTFALEN',
          code: 'NW',
        },
        {
          id: '431',
          name: 'RHEINLAND PFALZ',
          code: 'RP',
        },
        {
          id: '432',
          name: 'SCHLESWIG HOLSTEIN',
          code: 'SH',
        },
        {
          id: '433',
          name: 'SAARLAND',
          code: 'SL',
        },
        {
          id: '434',
          name: 'SACHSEN',
          code: 'SN',
        },
        {
          id: '435',
          name: 'SACHSEN ANHALT',
          code: 'ST',
        },
        {
          id: '436',
          name: 'THURINGEN',
          code: 'TH',
        },
      ],
    },
    {
      id: 'GA',
      name: 'Gabon',
      phoneCode: '241',
      type: 'C',
      provinces: [],
    },
    {
      id: 'GD',
      name: 'Grenada',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'GE',
      name: 'Georgia',
      phoneCode: '995',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'GG',
      name: 'Guernsey',
      phoneCode: '44',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'GH',
      name: 'Ghana',
      phoneCode: '233',
      type: 'C',
      provinces: [],
    },
    {
      id: 'GI',
      name: 'Gibraltar',
      phoneCode: '350',
      type: 'C',
      provinces: [],
    },
    {
      id: 'GL',
      name: 'Greenland',
      phoneCode: '299',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'GM',
      name: 'Gambia',
      phoneCode: '220',
      type: 'C',
      provinces: [],
    },
    {
      id: 'GN',
      name: 'Guinea',
      phoneCode: '224',
      type: 'C',
      provinces: [],
    },
    {
      id: 'GP',
      name: 'Guadeloupe',
      phoneCode: '590',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'GR',
      name: 'Greece',
      phoneCode: '30',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'GT',
      name: 'Guatemala',
      phoneCode: '502',
      type: 'C',
      provinces: [],
    },
    {
      id: 'GU',
      name: 'Guam',
      phoneCode: '1',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'GW',
      name: 'Guinea-Bissau',
      phoneCode: '245',
      type: 'C',
      provinces: [],
    },
    {
      id: 'GY',
      name: 'Guyana',
      phoneCode: '592',
      type: 'C',
      provinces: [],
    },
    {
      id: 'HK',
      name: 'Hong Kong SAR China',
      phoneCode: '852',
      type: 'C',
      provinces: [
        {
          id: '155',
          name: 'HongKong',
          code: '81',
        },
        {
          id: '437',
          name: 'HONG KONG ISLAND',
          code: 'H',
        },
        {
          id: '438',
          name: 'KOWLOON',
          code: 'K',
        },
        {
          id: '439',
          name: 'NEW TERRITORIES',
          code: 'N',
        },
      ],
    },
    // {
    //   "id": "HM",
    //   "name": "Heard Island and McDonald Islands",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'HN',
      name: 'Honduras',
      phoneCode: '504',
      type: 'C',
      provinces: [],
    },
    {
      id: 'HT',
      name: 'Haiti',
      phoneCode: '509',
      type: 'C',
      provinces: [],
    },
    {
      id: 'HU',
      name: 'Hungary',
      phoneCode: '36',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'ID',
      name: 'Indonesia',
      phoneCode: '62',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'IE',
      name: 'Ireland',
      phoneCode: '353',
      type: 'S',
      provinces: [
        {
          id: '184',
          name: 'Westmeath',
          code: '10',
        },
        {
          id: '185',
          name: 'Wexford',
          code: '11',
        },
        {
          id: '186',
          name: 'Wicklow',
          code: '12',
        },
        {
          id: '160',
          name: 'Carlow',
          code: 'N0',
        },
        {
          id: '161',
          name: 'Cavan',
          code: 'N1',
        },
        {
          id: '162',
          name: 'Clare',
          code: 'N2',
        },
        {
          id: '163',
          name: 'Cork',
          code: 'N3',
        },
        {
          id: '164',
          name: 'Donegal',
          code: 'N4',
        },
        {
          id: '165',
          name: 'Dublin',
          code: 'N5',
        },
        {
          id: '166',
          name: 'Galway',
          code: 'N6',
        },
        {
          id: '167',
          name: 'Kerry',
          code: 'N7',
        },
        {
          id: '168',
          name: 'Kildare',
          code: 'N8',
        },
        {
          id: '169',
          name: 'Kilkenny',
          code: 'N9',
        },
        {
          id: '170',
          name: 'Laois',
          code: 'NA',
        },
        {
          id: '171',
          name: 'Leitrim',
          code: 'NG',
        },
        {
          id: '172',
          name: 'Limerick',
          code: 'NI',
        },
        {
          id: '173',
          name: 'Longford',
          code: 'NK',
        },
        {
          id: '174',
          name: 'Louth',
          code: 'NL',
        },
        {
          id: '175',
          name: 'Mayo',
          code: 'NN',
        },
        {
          id: '176',
          name: 'Meath',
          code: 'NO',
        },
        {
          id: '177',
          name: 'Monaghan',
          code: 'NP',
        },
        {
          id: '178',
          name: 'Offaly',
          code: 'NQ',
        },
        {
          id: '179',
          name: 'Roscommon',
          code: 'NR',
        },
        {
          id: '180',
          name: 'Sligo',
          code: 'NW',
        },
        {
          id: '181',
          name: 'Tipperary NR',
          code: 'NX',
        },
        {
          id: '182',
          name: 'Tipperary SR',
          code: 'NY',
        },
        {
          id: '183',
          name: 'Waterford',
          code: 'NZ',
        },
      ],
    },
    {
      id: 'IL',
      name: 'Israel',
      phoneCode: '972',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'IM',
      name: 'Isle of Man',
      phoneCode: '44',
      type: '',
      provinces: [],
    },
    {
      id: 'IN',
      name: 'India',
      phoneCode: '91',
      type: 'CP',
      provinces: [
        {
          id: '440',
          name: 'ANDAMAN AND NICOBAR ISLANDS',
          code: 'AN',
        },
        {
          id: '441',
          name: 'ANDHRA PRADESH',
          code: 'AP',
        },
        {
          id: '442',
          name: 'ARUNACHAL PRADESH',
          code: 'AR',
        },
        {
          id: '443',
          name: 'ASSAM',
          code: 'AS',
        },
        {
          id: '444',
          name: 'BIHAR',
          code: 'BR',
        },
        {
          id: '445',
          name: 'CHANDIGARH (UT)',
          code: 'CH',
        },
        {
          id: '446',
          name: 'CHHATTISGARH',
          code: 'CT',
        },
        {
          id: '447',
          name: 'DAMAN AND DIU (UT)',
          code: 'DD',
        },
        {
          id: '448',
          name: 'DELHI (UT)',
          code: 'DL',
        },
        {
          id: '449',
          name: 'DADRA AND NAGAR HAVELI (UT)',
          code: 'DN',
        },
        {
          id: '450',
          name: 'GOA',
          code: 'GA',
        },
        {
          id: '451',
          name: 'GUJARAT',
          code: 'GJ',
        },
        {
          id: '452',
          name: 'HIMACHAL PRADESH',
          code: 'HP',
        },
        {
          id: '453',
          name: 'HARYANA',
          code: 'HR',
        },
        {
          id: '454',
          name: 'JHARKHAND',
          code: 'JH',
        },
        {
          id: '455',
          name: 'JAMMU AND KASHMIR',
          code: 'JK',
        },
        {
          id: '456',
          name: 'KARNATAKA',
          code: 'KA',
        },
        {
          id: '457',
          name: 'KERALA',
          code: 'KL',
        },
        {
          id: '458',
          name: 'LASHWADEEP(UT)',
          code: 'LA',
        },
        {
          id: '459',
          name: 'MAHARASHTRA',
          code: 'MH',
        },
        {
          id: '460',
          name: 'MEGHALAYA',
          code: 'ML',
        },
        {
          id: '461',
          name: 'MANIPUR',
          code: 'MN',
        },
        {
          id: '462',
          name: 'MADHYA PRADESH',
          code: 'MP',
        },
        {
          id: '463',
          name: 'MIZORAM',
          code: 'MZ',
        },
        {
          id: '464',
          name: 'NAGALAND',
          code: 'NG',
        },
        {
          id: '465',
          name: 'ORISSA',
          code: 'OR',
        },
        {
          id: '466',
          name: 'PUNJAB',
          code: 'PB',
        },
        {
          id: '467',
          name: 'PONDICHERRY (UT)',
          code: 'PY',
        },
        {
          id: '468',
          name: 'RAJASTHAN',
          code: 'RJ',
        },
        {
          id: '469',
          name: 'SIKKIM',
          code: 'SK',
        },
        {
          id: '470',
          name: 'TAMIL NADU',
          code: 'TN',
        },
        {
          id: '471',
          name: 'TRIPURA',
          code: 'TR',
        },
        {
          id: '472',
          name: 'UTTAR PRADESH',
          code: 'UP',
        },
        {
          id: '473',
          name: 'UTTARANCHAL',
          code: 'UT',
        },
        {
          id: '474',
          name: 'WEST BENGAL',
          code: 'WB',
        },
      ],
    },
    {
      id: 'IQ',
      name: 'Iraq',
      phoneCode: '964',
      type: 'C',
      provinces: [],
    },
    {
      id: 'IR',
      name: 'Iran',
      phoneCode: '98',
      type: 'C',
      provinces: [],
    },
    {
      id: 'IS',
      name: 'Iceland',
      phoneCode: '354',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'IT',
      name: 'Italy',
      phoneCode: '39',
      type: 'CP',
      provinces: [
        {
          id: '1526',
          name: 'Abruzzi',
          code: 'AB',
        },
        {
          id: '1527',
          name: 'Basilicata',
          code: 'BC',
        },
        {
          id: '1528',
          name: 'Calabria',
          code: 'CI',
        },
        {
          id: '1529',
          name: 'Campania',
          code: 'CM',
        },
        {
          id: '1540',
          name: 'Sicilia',
          code: 'CS',
        },
        {
          id: '1530',
          name: 'Emilia-Romagna',
          code: 'ER',
        },
        {
          id: '1531',
          name: 'Friuli-Venezia Giulia',
          code: 'FV',
        },
        {
          id: '1533',
          name: 'Liguria',
          code: 'LG',
        },
        {
          id: '1534',
          name: 'Lombardia',
          code: 'LM',
        },
        {
          id: '1532',
          name: 'Lazio',
          code: 'LZ',
        },
        {
          id: '1535',
          name: 'Marche',
          code: 'MH',
        },
        {
          id: '1536',
          name: 'Molise',
          code: 'ML',
        },
        {
          id: '1537',
          name: 'Piemonte',
          code: 'PM',
        },
        {
          id: '1538',
          name: 'Puglia',
          code: 'PU',
        },
        {
          id: '1539',
          name: 'Sardegna',
          code: 'SD',
        },
        {
          id: '1541',
          name: 'Toscana',
          code: 'TC',
        },
        {
          id: '1542',
          name: 'Trentino-Alto Adige',
          code: 'TT',
        },
        {
          id: '1543',
          name: 'Umbria',
          code: 'UM',
        },
        {
          id: '1544',
          name: "Valle D'Aosta",
          code: 'VD',
        },
        {
          id: '1545',
          name: 'Veneto',
          code: 'VN',
        },
      ],
    },
    {
      id: 'JE',
      name: 'Jersey',
      phoneCode: '44',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'JM',
      name: 'Jamaica',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'JO',
      name: 'Jordan',
      phoneCode: '962',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'JP',
      name: 'Japan',
      phoneCode: '81',
      type: 'CP',
      provinces: [
        {
          id: '578',
          name: 'HOKKAIDO',
          code: '1',
        },
        {
          id: '587',
          name: 'GUNMA-KEN',
          code: '10',
        },
        {
          id: '588',
          name: 'SAITAMA-KEN',
          code: '11',
        },
        {
          id: '589',
          name: 'CHIBA-KEN',
          code: '12',
        },
        {
          id: '590',
          name: 'TOKYO-TO',
          code: '13',
        },
        {
          id: '591',
          name: 'KANAGAWA-KEN',
          code: '14',
        },
        {
          id: '592',
          name: 'NIIGATA-KEN',
          code: '15',
        },
        {
          id: '593',
          name: 'TOYAMA-KEN',
          code: '16',
        },
        {
          id: '594',
          name: 'ISHIKAWA-KEN',
          code: '17',
        },
        {
          id: '595',
          name: 'FUKUI-KEN',
          code: '18',
        },
        {
          id: '596',
          name: 'YAMANASHI-KEN',
          code: '19',
        },
        {
          id: '579',
          name: 'AOMORI-KEN',
          code: '2',
        },
        {
          id: '597',
          name: 'NAGANO-KEN',
          code: '20',
        },
        {
          id: '598',
          name: 'GIFU-KEN',
          code: '21',
        },
        {
          id: '599',
          name: 'SHIZUOKA-KEN',
          code: '22',
        },
        {
          id: '600',
          name: 'AICHI-KEN',
          code: '23',
        },
        {
          id: '601',
          name: 'MIE-KEN',
          code: '24',
        },
        {
          id: '602',
          name: 'SHIGA-KEN',
          code: '25',
        },
        {
          id: '603',
          name: 'KYOTO-FU',
          code: '26',
        },
        {
          id: '604',
          name: 'OSAKA-FU',
          code: '27',
        },
        {
          id: '605',
          name: 'HYOGO-KEN',
          code: '28',
        },
        {
          id: '606',
          name: 'NARA-KEN',
          code: '29',
        },
        {
          id: '580',
          name: 'IWATE-KEN',
          code: '3',
        },
        {
          id: '607',
          name: 'WAKAYAMA-KEN',
          code: '30',
        },
        {
          id: '608',
          name: 'TOTTORI-KEN',
          code: '31',
        },
        {
          id: '609',
          name: 'SHIMANE-KEN',
          code: '32',
        },
        {
          id: '610',
          name: 'OKAYAMA-KEN',
          code: '33',
        },
        {
          id: '611',
          name: 'HIROSHIMA-KEN',
          code: '34',
        },
        {
          id: '612',
          name: 'YAMAGUCHI-KEN',
          code: '35',
        },
        {
          id: '613',
          name: 'TOKUSHIMA-KEN',
          code: '36',
        },
        {
          id: '614',
          name: 'KAGAWA-KEN',
          code: '37',
        },
        {
          id: '615',
          name: 'EHIME-KEN',
          code: '38',
        },
        {
          id: '616',
          name: 'KOCHI-KEN',
          code: '39',
        },
        {
          id: '581',
          name: 'MIYAGI-KEN',
          code: '4',
        },
        {
          id: '617',
          name: 'FUKUOKA-KEN',
          code: '40',
        },
        {
          id: '618',
          name: 'SAGA-KEN',
          code: '41',
        },
        {
          id: '619',
          name: 'NAGASAKI-KEN',
          code: '42',
        },
        {
          id: '620',
          name: 'KUMAMOTO-KEN',
          code: '43',
        },
        {
          id: '621',
          name: 'OITA-KEN',
          code: '44',
        },
        {
          id: '622',
          name: 'MIYAZAKI-KEN',
          code: '45',
        },
        {
          id: '623',
          name: 'KAGOSHIMA-KEN',
          code: '46',
        },
        {
          id: '624',
          name: 'OKINAWA-KEN',
          code: '47',
        },
        {
          id: '582',
          name: 'AKITA-KEN',
          code: '5',
        },
        {
          id: '583',
          name: 'YAMAGATA-KEN',
          code: '6',
        },
        {
          id: '584',
          name: 'FUKUSHIMA-KEN',
          code: '7',
        },
        {
          id: '585',
          name: 'IBARAKI-KEN',
          code: '8',
        },
        {
          id: '586',
          name: 'TOCHIGI-KEN',
          code: '9',
        },
      ],
    },
    // {
    //   "id": "JT",
    //   "name": "Johnston Island",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'KE',
      name: 'Kenya',
      phoneCode: '254',
      type: 'C',
      provinces: [],
    },
    {
      id: 'KG',
      name: 'Kyrgyzstan',
      phoneCode: '996',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'KI',
      name: 'Kiribati',
      phoneCode: '686',
      type: 'C',
      provinces: [],
    },
    {
      id: 'KW',
      name: 'Kuwait',
      phoneCode: '965',
      type: 'C',
      provinces: [],
    },
    {
      id: 'KZ',
      name: 'Kazakhstan',
      phoneCode: '7',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'LA',
      name: 'Laos',
      phoneCode: '856',
      type: 'C',
      provinces: [],
    },
    {
      id: 'LB',
      name: 'Lebanon',
      phoneCode: '961',
      type: 'C',
      provinces: [],
    },
    {
      id: 'LI',
      name: 'Liechtenstein',
      phoneCode: '423',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'LR',
      name: 'Liberia',
      phoneCode: '231',
      type: 'C',
      provinces: [],
    },
    {
      id: 'LS',
      name: 'Lesotho',
      phoneCode: '266',
      type: 'C',
      provinces: [],
    },
    {
      id: 'LT',
      name: 'Lithuania',
      phoneCode: '370',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'LU',
      name: 'Luxembourg',
      phoneCode: '352',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'LV',
      name: 'Latvia',
      phoneCode: '371',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'LY',
      name: 'Libya',
      phoneCode: '218',
      type: 'C',
      provinces: [],
    },
    {
      id: 'FM',
      name: 'Micronesia',
      phoneCode: '691',
      type: 'CP',
      provinces: [],
    },
    // {
    //   "id": "FX",
    //   "name": "Metropolitan France",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'MA',
      name: 'Morocco',
      phoneCode: '212',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'MC',
      name: 'Monaco',
      phoneCode: '377',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'MD',
      name: 'Moldova',
      phoneCode: '373',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'ME',
      name: 'Montenegro',
      phoneCode: '382',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'MG',
      name: 'Madagascar',
      phoneCode: '261',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'MH',
      name: 'Marshall Islands',
      phoneCode: '692',
      type: 'CP',
      provinces: [],
    },
    // {
    //   "id": "MI",
    //   "name": "Midway Islands",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'MK',
      name: 'Macedonia',
      phoneCode: '389',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'ML',
      name: 'Mali',
      phoneCode: '223',
      type: 'C',
      provinces: [],
    },
    {
      id: 'MM',
      name: 'Myanmar [Burma]',
      phoneCode: '95',
      type: 'C',
      provinces: [],
    },
    {
      id: 'MN',
      name: 'Mongolia',
      phoneCode: '976',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'MO',
      name: 'Macau SAR China',
      phoneCode: '853',
      type: 'C',
      provinces: [],
    },
    {
      id: 'MQ',
      name: 'Martinique',
      phoneCode: '596',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'MR',
      name: 'Mauritania',
      phoneCode: '222',
      type: 'C',
      provinces: [],
    },
    {
      id: 'MS',
      name: 'Montserrat',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'MT',
      name: 'Malta',
      phoneCode: '356',
      type: 'C',
      provinces: [],
    },
    {
      id: 'MU',
      name: 'Mauritius',
      phoneCode: '230',
      type: 'C',
      provinces: [],
    },
    {
      id: 'MV',
      name: 'Maldives',
      phoneCode: '960',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'MW',
      name: 'Malawi',
      phoneCode: '265',
      type: 'C',
      provinces: [],
    },
    {
      id: 'MX',
      name: 'Mexico',
      phoneCode: '52',
      type: 'CP',
      provinces: [
        {
          id: '625',
          name: 'AGUASCALIENTES',
          code: 'AGS',
        },
        {
          id: '626',
          name: 'BAJA CALIFORNIA NORTE',
          code: 'BCN',
        },
        {
          id: '627',
          name: 'BAJA CALIFORNIA SUR',
          code: 'BCS',
        },
        {
          id: '628',
          name: 'CAMPECHE',
          code: 'CAMP',
        },
        {
          id: '633',
          name: 'CIUDAD DE MÉXICO',
          code: 'CDMX',
        },
        {
          id: '629',
          name: 'CHIHUAHUA',
          code: 'CHIH',
        },
        {
          id: '630',
          name: 'CHIAPAS',
          code: 'CHPS',
        },
        {
          id: '631',
          name: 'COAHUILA',
          code: 'COAH',
        },
        {
          id: '632',
          name: 'COLIMA',
          code: 'COLI',
        },
        {
          id: '634',
          name: 'DURANGO',
          code: 'DGO',
        },
        {
          id: '635',
          name: 'ESTADO DE MÉXICO',
          code: 'EMEX',
        },
        {
          id: '636',
          name: 'GUERRERO',
          code: 'GRO',
        },
        {
          id: '637',
          name: 'GUANAJUATO',
          code: 'GTO',
        },
        {
          id: '638',
          name: 'HIDALGO',
          code: 'HGO',
        },
        {
          id: '639',
          name: 'JALISCO',
          code: 'JAL',
        },
        {
          id: '640',
          name: 'MICHOACÁN',
          code: 'MICH',
        },
        {
          id: '641',
          name: 'MORELOS',
          code: 'MOR',
        },
        {
          id: '642',
          name: 'NAYARIT',
          code: 'NAY',
        },
        {
          id: '643',
          name: 'NUEVO LEÓN',
          code: 'NL',
        },
        {
          id: '644',
          name: 'OAXACA',
          code: 'OAX',
        },
        {
          id: '645',
          name: 'PUEBLA',
          code: 'PUE',
        },
        {
          id: '646',
          name: 'QUERETARO',
          code: 'QRO',
        },
        {
          id: '647',
          name: 'QUINTANA ROO',
          code: 'QROO',
        },
        {
          id: '648',
          name: 'SINALOA',
          code: 'SIN',
        },
        {
          id: '649',
          name: 'SAN LUIS POTOS',
          code: 'SLP',
        },
        {
          id: '650',
          name: 'SONORA',
          code: 'SON',
        },
        {
          id: '651',
          name: 'TABASCO',
          code: 'TAB',
        },
        {
          id: '652',
          name: 'TAMAULIPAS',
          code: 'TAMP',
        },
        {
          id: '653',
          name: 'TLAXCALA',
          code: 'TLAX',
        },
        {
          id: '654',
          name: 'VERACRUZ',
          code: 'VER',
        },
        {
          id: '655',
          name: 'YUCATÁN',
          code: 'YUC',
        },
        {
          id: '656',
          name: 'ZACATECAS',
          code: 'ZAC',
        },
      ],
    },
    {
      id: 'MY',
      name: 'Malaysia',
      phoneCode: '60',
      type: 'CP',
      provinces: [
        {
          id: '657',
          name: 'JOHOR',
          code: 'JH',
        },
        {
          id: '658',
          name: 'KEDAH',
          code: 'KD',
        },
        {
          id: '659',
          name: 'KELANTAN',
          code: 'KT',
        },
        {
          id: '660',
          name: 'LABUAN',
          code: 'LB',
        },
        {
          id: '661',
          name: 'MELAKA',
          code: 'ML',
        },
        {
          id: '662',
          name: 'NEGERI SEMBILAN',
          code: 'NS',
        },
        {
          id: '663',
          name: 'PULAU PINANG',
          code: 'PG',
        },
        {
          id: '664',
          name: 'PAHANG',
          code: 'PH',
        },
        {
          id: '665',
          name: 'PERLIS',
          code: 'PL',
        },
        {
          id: '666',
          name: 'PERAK',
          code: 'PR',
        },
        {
          id: '667',
          name: 'SABAH',
          code: 'SB',
        },
        {
          id: '668',
          name: 'SELANGOR',
          code: 'SL',
        },
        {
          id: '669',
          name: 'SARAWAK',
          code: 'SR',
        },
        {
          id: '670',
          name: 'TRENGGANU',
          code: 'TR',
        },
        {
          id: '671',
          name: 'WILAYAH PERSEKUTUAN',
          code: 'WP',
        },
      ],
    },
    {
      id: 'MZ',
      name: 'Mozambique',
      phoneCode: '258',
      type: 'C',
      provinces: [],
    },
    {
      id: 'YT',
      name: 'Mayotte',
      phoneCode: '262',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'AN',
      name: 'Netherlands Antilles',
      phoneCode: '599',
      type: 'C',
      provinces: [],
    },
    {
      id: 'KP',
      name: 'North Korea',
      phoneCode: '850',
      type: 'C',
      provinces: [],
    },
    {
      id: 'MP',
      name: 'Northern Mariana Islands',
      phoneCode: '1',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'NA',
      name: 'Namibia',
      phoneCode: '264',
      type: 'C',
      provinces: [],
    },
    {
      id: 'NC',
      name: 'New Caledonia',
      phoneCode: '687',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'NE',
      name: 'Niger',
      phoneCode: '227',
      type: 'C',
      provinces: [],
    },
    {
      id: 'NF',
      name: 'Norfolk Island',
      phoneCode: '672',
      type: '',
      provinces: [],
    },
    {
      id: 'NG',
      name: 'Nigeria',
      phoneCode: '234',
      type: 'C',
      provinces: [],
    },
    {
      id: 'NI',
      name: 'Nicaragua',
      phoneCode: '505',
      type: 'C',
      provinces: [],
    },
    {
      id: 'NL',
      name: 'Netherlands',
      phoneCode: '31',
      type: 'CP',
      provinces: [
        {
          id: '676',
          name: 'DELFZIJL',
          code: '10',
        },
        {
          id: '719',
          name: 'NIJEFURD',
          code: '104',
        },
        {
          id: '720',
          name: 'ANLOO',
          code: '105',
        },
        {
          id: '721',
          name: 'ASSEN',
          code: '106',
        },
        {
          id: '722',
          name: 'BEILEN',
          code: '107',
        },
        {
          id: '723',
          name: 'BORGER',
          code: '108',
        },
        {
          id: '724',
          name: 'COEVORDEN',
          code: '109',
        },
        {
          id: '725',
          name: 'DALEN',
          code: '110',
        },
        {
          id: '726',
          name: 'DIEVER',
          code: '111',
        },
        {
          id: '727',
          name: 'DWINGELOO',
          code: '112',
        },
        {
          id: '728',
          name: 'EELDE',
          code: '113',
        },
        {
          id: '729',
          name: 'EMMEN',
          code: '114',
        },
        {
          id: '730',
          name: 'GASSELTE',
          code: '115',
        },
        {
          id: '731',
          name: 'GIETEN',
          code: '116',
        },
        {
          id: '732',
          name: 'HAVELTE',
          code: '117',
        },
        {
          id: '733',
          name: 'HOOGEVEEN',
          code: '118',
        },
        {
          id: '734',
          name: 'MEPPEL',
          code: '119',
        },
        {
          id: '735',
          name: 'NORG',
          code: '120',
        },
        {
          id: '736',
          name: 'NIJEVEEN',
          code: '121',
        },
        {
          id: '737',
          name: 'ODOORN',
          code: '122',
        },
        {
          id: '738',
          name: 'OOSTERHESSELEN',
          code: '123',
        },
        {
          id: '739',
          name: 'PEIZE',
          code: '124',
        },
        {
          id: '740',
          name: 'RODEN',
          code: '125',
        },
        {
          id: '741',
          name: 'ROLDE',
          code: '126',
        },
        {
          id: '742',
          name: 'RUINEN',
          code: '127',
        },
        {
          id: '743',
          name: 'RUINERWOLD',
          code: '128',
        },
        {
          id: '744',
          name: 'SCHOONEBEEK',
          code: '129',
        },
        {
          id: '745',
          name: 'SLEEN',
          code: '130',
        },
        {
          id: '746',
          name: 'SMILDE',
          code: '131',
        },
        {
          id: '747',
          name: 'VLEDDER',
          code: '132',
        },
        {
          id: '748',
          name: 'VRIES',
          code: '133',
        },
        {
          id: '749',
          name: 'WESTERBORK',
          code: '134',
        },
        {
          id: '750',
          name: 'DE WIJK',
          code: '135',
        },
        {
          id: '751',
          name: 'ZUIDLAREN',
          code: '136',
        },
        {
          id: '752',
          name: 'ZUIDWOLDE',
          code: '137',
        },
        {
          id: '753',
          name: 'ZWEELOO',
          code: '138',
        },
        {
          id: '677',
          name: 'GRONINGEN',
          code: '14',
        },
        {
          id: '754',
          name: 'LITTENSERADIEL',
          code: '140',
        },
        {
          id: '755',
          name: 'ALMELO',
          code: '141',
        },
        {
          id: '756',
          name: 'AMBT DELDEN',
          code: '142',
        },
        {
          id: '757',
          name: 'AVEREEST',
          code: '143',
        },
        {
          id: '758',
          name: 'BATHMEN',
          code: '144',
        },
        {
          id: '759',
          name: 'BORNE',
          code: '147',
        },
        {
          id: '760',
          name: 'DALFSEN',
          code: '148',
        },
        {
          id: '761',
          name: 'DENEKAMP',
          code: '149',
        },
        {
          id: '678',
          name: 'GROOTEGAST',
          code: '15',
        },
        {
          id: '762',
          name: 'DEVENTER',
          code: '150',
        },
        {
          id: '763',
          name: 'DIEPENHEIM',
          code: '151',
        },
        {
          id: '764',
          name: 'DIEPENVEEN',
          code: '152',
        },
        {
          id: '765',
          name: 'ENSCHEDE',
          code: '153',
        },
        {
          id: '766',
          name: 'GENEMUIDEN',
          code: '154',
        },
        {
          id: '767',
          name: 'GOOR',
          code: '156',
        },
        {
          id: '768',
          name: 'GRAMSBERGEN',
          code: '157',
        },
        {
          id: '769',
          name: 'HAAKSBERGEN',
          code: '158',
        },
        {
          id: '770',
          name: 'DEN HAM',
          code: '159',
        },
        {
          id: '771',
          name: 'HARDENBERG',
          code: '160',
        },
        {
          id: '772',
          name: 'HASSELT',
          code: '161',
        },
        {
          id: '773',
          name: 'HEINO',
          code: '162',
        },
        {
          id: '774',
          name: 'HELLENDOORN',
          code: '163',
        },
        {
          id: '775',
          name: 'HENGELO (OV)',
          code: '164',
        },
        {
          id: '776',
          name: 'HOLTEN',
          code: '165',
        },
        {
          id: '1294',
          name: 'EEMSMOND',
          code: '1651',
        },
        {
          id: '777',
          name: 'KAMPEN',
          code: '166',
        },
        {
          id: '1295',
          name: 'REIDERLAND',
          code: '1661',
        },
        {
          id: '1296',
          name: 'DE MARNE',
          code: '1663',
        },
        {
          id: '1297',
          name: 'ZEVENHUIZEN-MOERKAPELLE',
          code: '1666',
        },
        {
          id: '1298',
          name: 'ROERDALEN',
          code: '1669',
        },
        {
          id: '1299',
          name: 'ROGGEL EN NEER',
          code: '1670',
        },
        {
          id: '1300',
          name: 'MAASDONK',
          code: '1671',
        },
        {
          id: '1301',
          name: 'RIJNWOUDE',
          code: '1672',
        },
        {
          id: '1302',
          name: 'LIEMEER',
          code: '1673',
        },
        {
          id: '1303',
          name: 'AMBT MONTFORT',
          code: '1679',
        },
        {
          id: '778',
          name: 'LOSSER',
          code: '168',
        },
        {
          id: '1304',
          name: 'CUIJK',
          code: '1684',
        },
        {
          id: '1305',
          name: 'LANDERD',
          code: '1685',
        },
        {
          id: '779',
          name: 'MARKELO',
          code: '169',
        },
        {
          id: '1306',
          name: 'SINT ANTHONIS',
          code: '1691',
        },
        {
          id: '679',
          name: 'HAREN (GR.)',
          code: '17',
        },
        {
          id: '780',
          name: 'NIEUWLEUSEN',
          code: '170',
        },
        {
          id: '781',
          name: 'NOORDOOSTPOLDER',
          code: '171',
        },
        {
          id: '782',
          name: 'OLDENZAAL',
          code: '173',
        },
        {
          id: '783',
          name: 'OLST',
          code: '174',
        },
        {
          id: '784',
          name: 'OMMEN',
          code: '175',
        },
        {
          id: '785',
          name: 'OOTMARSUM',
          code: '176',
        },
        {
          id: '786',
          name: 'RAALTE',
          code: '177',
        },
        {
          id: '787',
          name: 'RIJSSEN',
          code: '178',
        },
        {
          id: '788',
          name: 'STAD DELDEN',
          code: '179',
        },
        {
          id: '680',
          name: 'HOOGEZAND-SAPPEMEER',
          code: '18',
        },
        {
          id: '789',
          name: 'STAPHORST',
          code: '180',
        },
        {
          id: '790',
          name: 'STEENWIJK',
          code: '181',
        },
        {
          id: '791',
          name: 'TUBBERGEN',
          code: '183',
        },
        {
          id: '792',
          name: 'URK',
          code: '184',
        },
        {
          id: '793',
          name: 'VRIEZENVEEN',
          code: '186',
        },
        {
          id: '794',
          name: 'WEERSELO',
          code: '188',
        },
        {
          id: '795',
          name: 'WIERDEN',
          code: '189',
        },
        {
          id: '796',
          name: 'WIJHE',
          code: '190',
        },
        {
          id: '797',
          name: 'IJSSELMUIDEN',
          code: '191',
        },
        {
          id: '798',
          name: 'ZWARTSLUIS',
          code: '192',
        },
        {
          id: '799',
          name: 'ZWOLLE',
          code: '193',
        },
        {
          id: '1307',
          name: 'HEEL',
          code: '1937',
        },
        {
          id: '800',
          name: 'BREDERWIEDE',
          code: '194',
        },
        {
          id: '801',
          name: 'IJSSELHAM',
          code: '195',
        },
        {
          id: '802',
          name: 'RIJNWAARDEN',
          code: '196',
        },
        {
          id: '803',
          name: 'AALTEN',
          code: '197',
        },
        {
          id: '804',
          name: 'AMMERZODEN',
          code: '198',
        },
        {
          id: '1308',
          name: 'MENTERWOLDE',
          code: '1987',
        },
        {
          id: '805',
          name: 'ANGERLO',
          code: '199',
        },
        {
          id: '806',
          name: 'APELDOORN',
          code: '200',
        },
        {
          id: '807',
          name: 'ARNHEM',
          code: '202',
        },
        {
          id: '808',
          name: 'BARNEVELD',
          code: '203',
        },
        {
          id: '809',
          name: 'BEMMEL',
          code: '206',
        },
        {
          id: '810',
          name: 'BERGH',
          code: '207',
        },
        {
          id: '811',
          name: 'BEUNINGEN',
          code: '209',
        },
        {
          id: '812',
          name: 'BORCULO',
          code: '211',
        },
        {
          id: '813',
          name: 'BRAKEL',
          code: '212',
        },
        {
          id: '814',
          name: 'BRUMMEN',
          code: '213',
        },
        {
          id: '815',
          name: 'BUREN',
          code: '214',
        },
        {
          id: '816',
          name: 'CULEMBORG',
          code: '216',
        },
        {
          id: '817',
          name: 'DIDAM',
          code: '218',
        },
        {
          id: '818',
          name: 'DINXPERLO',
          code: '219',
        },
        {
          id: '681',
          name: 'LEEK',
          code: '22',
        },
        {
          id: '819',
          name: 'DODEWAARD',
          code: '220',
        },
        {
          id: '820',
          name: 'DOESBURG',
          code: '221',
        },
        {
          id: '821',
          name: 'DOETINCHEM',
          code: '222',
        },
        {
          id: '822',
          name: 'DRUTEN',
          code: '225',
        },
        {
          id: '823',
          name: 'DUIVEN',
          code: '226',
        },
        {
          id: '824',
          name: 'ECHTELD',
          code: '227',
        },
        {
          id: '825',
          name: 'EDE',
          code: '228',
        },
        {
          id: '826',
          name: 'EIBERGEN',
          code: '229',
        },
        {
          id: '827',
          name: 'ELBURG',
          code: '230',
        },
        {
          id: '828',
          name: 'ELST',
          code: '231',
        },
        {
          id: '829',
          name: 'EPE',
          code: '232',
        },
        {
          id: '830',
          name: 'ERMELO',
          code: '233',
        },
        {
          id: '831',
          name: 'GELDERMALSEN',
          code: '236',
        },
        {
          id: '832',
          name: 'GENDRINGEN',
          code: '237',
        },
        {
          id: '833',
          name: 'GENDT',
          code: '238',
        },
        {
          id: '834',
          name: 'GORSSEL',
          code: '239',
        },
        {
          id: '682',
          name: 'LOPPERSUM',
          code: '24',
        },
        {
          id: '835',
          name: 'GROENLO',
          code: '240',
        },
        {
          id: '836',
          name: 'GROESBEEK',
          code: '241',
        },
        {
          id: '837',
          name: 'HARDERWIJK',
          code: '243',
        },
        {
          id: '838',
          name: 'HATTEM',
          code: '244',
        },
        {
          id: '839',
          name: 'HEDEL',
          code: '245',
        },
        {
          id: '840',
          name: 'HEERDE',
          code: '246',
        },
        {
          id: '841',
          name: 'HEEREWAARDEN',
          code: '247',
        },
        {
          id: '842',
          name: 'HENGELO (GLD)',
          code: '248',
        },
        {
          id: '683',
          name: 'MARUM',
          code: '25',
        },
        {
          id: '843',
          name: 'HETEREN',
          code: '251',
        },
        {
          id: '844',
          name: 'HEUMEN',
          code: '252',
        },
        {
          id: '845',
          name: 'HOEVELAKEN',
          code: '253',
        },
        {
          id: '846',
          name: 'HUISSEN',
          code: '255',
        },
        {
          id: '847',
          name: 'HUMMELO EN KEPPEL',
          code: '256',
        },
        {
          id: '848',
          name: 'KERKWIJK',
          code: '257',
        },
        {
          id: '849',
          name: 'KESTEREN',
          code: '258',
        },
        {
          id: '850',
          name: 'LICHTENVOORDE',
          code: '260',
        },
        {
          id: '851',
          name: 'LIENDEN',
          code: '261',
        },
        {
          id: '852',
          name: 'LOCHEM',
          code: '262',
        },
        {
          id: '853',
          name: 'MAASDRIEL',
          code: '263',
        },
        {
          id: '854',
          name: 'MAURIK',
          code: '264',
        },
        {
          id: '855',
          name: 'MILLINGEN AAN DE RIJN',
          code: '265',
        },
        {
          id: '856',
          name: 'NEEDE',
          code: '266',
        },
        {
          id: '857',
          name: 'NIJKERK',
          code: '267',
        },
        {
          id: '858',
          name: 'NIJMEGEN',
          code: '268',
        },
        {
          id: '859',
          name: 'OLDEBROEK',
          code: '269',
        },
        {
          id: '860',
          name: 'PUTTEN',
          code: '273',
        },
        {
          id: '861',
          name: 'RENKUM',
          code: '274',
        },
        {
          id: '862',
          name: 'RHEDEN',
          code: '275',
        },
        {
          id: '863',
          name: 'ROSSUM',
          code: '276',
        },
        {
          id: '864',
          name: 'ROZENDAAL',
          code: '277',
        },
        {
          id: '865',
          name: 'RUURLO',
          code: '278',
        },
        {
          id: '866',
          name: 'SCHERPENZEEL',
          code: '279',
        },
        {
          id: '867',
          name: 'STEENDEREN',
          code: '280',
        },
        {
          id: '868',
          name: 'TIEL',
          code: '281',
        },
        {
          id: '869',
          name: 'UBBERGEN',
          code: '282',
        },
        {
          id: '870',
          name: 'VALBURG',
          code: '283',
        },
        {
          id: '871',
          name: 'VOORST',
          code: '285',
        },
        {
          id: '872',
          name: 'VORDEN',
          code: '286',
        },
        {
          id: '873',
          name: 'WAGENINGEN',
          code: '289',
        },
        {
          id: '874',
          name: 'WARNSVELD',
          code: '291',
        },
        {
          id: '875',
          name: 'WEHL',
          code: '292',
        },
        {
          id: '876',
          name: 'WESTERVOORT',
          code: '293',
        },
        {
          id: '877',
          name: 'WINTERSWIJK',
          code: '294',
        },
        {
          id: '878',
          name: 'WISCH',
          code: '295',
        },
        {
          id: '879',
          name: 'WIJCHEN',
          code: '296',
        },
        {
          id: '880',
          name: 'ZALTBOMMEL',
          code: '297',
        },
        {
          id: '881',
          name: 'ZELHEM',
          code: '298',
        },
        {
          id: '882',
          name: 'ZEVENAAR',
          code: '299',
        },
        {
          id: '672',
          name: 'APPINGEDAM',
          code: '3',
        },
        {
          id: '883',
          name: 'ZUTPHEN',
          code: '301',
        },
        {
          id: '884',
          name: 'NUNSPEET',
          code: '302',
        },
        {
          id: '885',
          name: 'DRONTEN',
          code: '303',
        },
        {
          id: '886',
          name: 'NEERIJNEN',
          code: '304',
        },
        {
          id: '887',
          name: 'ABCOUDE',
          code: '305',
        },
        {
          id: '888',
          name: 'AMERONGEN',
          code: '306',
        },
        {
          id: '889',
          name: 'AMERSFOORT',
          code: '307',
        },
        {
          id: '890',
          name: 'BAARN',
          code: '308',
        },
        {
          id: '891',
          name: 'DE BILT',
          code: '310',
        },
        {
          id: '892',
          name: 'BREUKELEN',
          code: '311',
        },
        {
          id: '893',
          name: 'BUNNIK',
          code: '312',
        },
        {
          id: '894',
          name: 'BUNSCHOTEN',
          code: '313',
        },
        {
          id: '895',
          name: 'COTHEN',
          code: '314',
        },
        {
          id: '896',
          name: 'DOORN',
          code: '315',
        },
        {
          id: '897',
          name: 'DRIEBERGEN-RIJSENBURG',
          code: '316',
        },
        {
          id: '898',
          name: 'EEMNES',
          code: '317',
        },
        {
          id: '899',
          name: 'HARMELEN',
          code: '318',
        },
        {
          id: '900',
          name: 'HOUTEN',
          code: '321',
        },
        {
          id: '901',
          name: 'LANGBROEK',
          code: '325',
        },
        {
          id: '902',
          name: 'LEERSUM',
          code: '326',
        },
        {
          id: '903',
          name: 'LEUSDEN',
          code: '327',
        },
        {
          id: '904',
          name: 'LOENEN',
          code: '329',
        },
        {
          id: '905',
          name: 'LOOSDRECHT',
          code: '330',
        },
        {
          id: '906',
          name: 'LOPIK',
          code: '331',
        },
        {
          id: '907',
          name: 'MAARN',
          code: '332',
        },
        {
          id: '908',
          name: 'MAARSSEN',
          code: '333',
        },
        {
          id: '909',
          name: 'MAARTENSDIJK',
          code: '334',
        },
        {
          id: '910',
          name: 'MONTFOORT',
          code: '335',
        },
        {
          id: '911',
          name: 'RENSWOUDE',
          code: '339',
        },
        {
          id: '684',
          name: 'ALMERE',
          code: '34',
        },
        {
          id: '912',
          name: 'RHENEN',
          code: '340',
        },
        {
          id: '913',
          name: 'SOEST',
          code: '342',
        },
        {
          id: '914',
          name: 'UTRECHT',
          code: '344',
        },
        {
          id: '915',
          name: 'VEENENDAAL',
          code: '345',
        },
        {
          id: '916',
          name: 'VLEUTEN-DE MEERN',
          code: '347',
        },
        {
          id: '917',
          name: 'WOUDENBERG',
          code: '351',
        },
        {
          id: '918',
          name: 'WIJK BIJ DUURSTEDE',
          code: '352',
        },
        {
          id: '919',
          name: 'IJSSELSTEIN',
          code: '353',
        },
        {
          id: '920',
          name: 'ZEIST',
          code: '355',
        },
        {
          id: '921',
          name: 'NIEUWEGEIN',
          code: '356',
        },
        {
          id: '922',
          name: 'EGMOND',
          code: '357',
        },
        {
          id: '923',
          name: 'AALSMEER',
          code: '358',
        },
        {
          id: '924',
          name: 'AKERSLOOT',
          code: '360',
        },
        {
          id: '925',
          name: 'ALKMAAR',
          code: '361',
        },
        {
          id: '926',
          name: 'AMSTELVEEN',
          code: '362',
        },
        {
          id: '927',
          name: 'AMSTERDAM',
          code: '363',
        },
        {
          id: '928',
          name: 'ANDIJK',
          code: '364',
        },
        {
          id: '929',
          name: 'GRAFT-DE RIJP',
          code: '365',
        },
        {
          id: '930',
          name: 'ANNA PAULOWNA',
          code: '366',
        },
        {
          id: '685',
          name: 'STADSKANAAL',
          code: '37',
        },
        {
          id: '931',
          name: 'BEEMSTER',
          code: '370',
        },
        {
          id: '932',
          name: 'BENNEBROEK',
          code: '372',
        },
        {
          id: '933',
          name: 'BERGEN NH',
          code: '373',
        },
        {
          id: '934',
          name: 'BEVERWIJK',
          code: '375',
        },
        {
          id: '935',
          name: 'BLARICUM',
          code: '376',
        },
        {
          id: '936',
          name: 'BLOEMENDAAL',
          code: '377',
        },
        {
          id: '937',
          name: 'BUSSUM',
          code: '381',
        },
        {
          id: '938',
          name: 'CASTRICUM',
          code: '383',
        },
        {
          id: '939',
          name: 'DIEMEN',
          code: '384',
        },
        {
          id: '940',
          name: 'EDAM-VOLENDAM',
          code: '385',
        },
        {
          id: '941',
          name: 'ENKHUIZEN',
          code: '388',
        },
        {
          id: '686',
          name: 'SCHEEMDA',
          code: '39',
        },
        {
          id: '942',
          name: "'S-GRAVELAND",
          code: '390',
        },
        {
          id: '943',
          name: 'HAARLEM',
          code: '392',
        },
        {
          id: '944',
          name: 'HAARLEMMERLIEDE EN SPAAR',
          code: '393',
        },
        {
          id: '945',
          name: 'HAARLEMMERMEER',
          code: '394',
        },
        {
          id: '946',
          name: 'HARENKARSPEL',
          code: '395',
        },
        {
          id: '947',
          name: 'HEEMSKERK',
          code: '396',
        },
        {
          id: '948',
          name: 'HEEMSTEDE',
          code: '397',
        },
        {
          id: '949',
          name: 'HEERHUGOWAARD',
          code: '398',
        },
        {
          id: '950',
          name: 'HEILOO',
          code: '399',
        },
        {
          id: '687',
          name: 'SLOCHTEREN',
          code: '40',
        },
        {
          id: '951',
          name: 'DEN HELDER',
          code: '400',
        },
        {
          id: '952',
          name: 'HILVERSUM',
          code: '402',
        },
        {
          id: '953',
          name: 'HOORN',
          code: '405',
        },
        {
          id: '954',
          name: 'HUIZEN',
          code: '406',
        },
        {
          id: '955',
          name: 'NIEDORP',
          code: '412',
        },
        {
          id: '956',
          name: 'LANDSMEER',
          code: '415',
        },
        {
          id: '957',
          name: 'LANGEDIJK',
          code: '416',
        },
        {
          id: '958',
          name: 'LAREN NH',
          code: '417',
        },
        {
          id: '959',
          name: 'LIMMEN',
          code: '418',
        },
        {
          id: '960',
          name: 'MEDEMBLIK',
          code: '420',
        },
        {
          id: '961',
          name: 'MUIDEN',
          code: '424',
        },
        {
          id: '962',
          name: 'NAARDEN',
          code: '425',
        },
        {
          id: '963',
          name: 'NEDERHORST DEN BERG',
          code: '426',
        },
        {
          id: '964',
          name: 'OBDAM',
          code: '429',
        },
        {
          id: '965',
          name: 'OOSTZAAN',
          code: '431',
        },
        {
          id: '966',
          name: 'OPMEER',
          code: '432',
        },
        {
          id: '967',
          name: 'OUDER-AMSTEL',
          code: '437',
        },
        {
          id: '968',
          name: 'PURMEREND',
          code: '439',
        },
        {
          id: '969',
          name: 'SCHAGEN',
          code: '441',
        },
        {
          id: '970',
          name: 'SCHOORL',
          code: '444',
        },
        {
          id: '971',
          name: 'TEXEL',
          code: '448',
        },
        {
          id: '972',
          name: 'UITGEEST',
          code: '450',
        },
        {
          id: '973',
          name: 'UITHOORN',
          code: '451',
        },
        {
          id: '974',
          name: 'VELSEN',
          code: '453',
        },
        {
          id: '975',
          name: 'VENHUIZEN',
          code: '454',
        },
        {
          id: '976',
          name: 'WEESP',
          code: '457',
        },
        {
          id: '977',
          name: 'SCHERMER',
          code: '458',
        },
        {
          id: '978',
          name: 'WERVERSHOOF',
          code: '459',
        },
        {
          id: '979',
          name: 'WIERINGEN',
          code: '462',
        },
        {
          id: '980',
          name: 'WIERINGERMEER',
          code: '463',
        },
        {
          id: '981',
          name: 'WOGNUM',
          code: '466',
        },
        {
          id: '688',
          name: 'VEENDAM',
          code: '47',
        },
        {
          id: '982',
          name: 'ZANDVOORT',
          code: '473',
        },
        {
          id: '983',
          name: 'ZIJPE',
          code: '476',
        },
        {
          id: '984',
          name: 'ZEEVANG',
          code: '478',
        },
        {
          id: '985',
          name: 'ZAANSTAD',
          code: '479',
        },
        {
          id: '689',
          name: 'VLAGTWEDDE',
          code: '48',
        },
        {
          id: '986',
          name: 'TER AAR',
          code: '480',
        },
        {
          id: '987',
          name: 'ALBLASSERDAM',
          code: '482',
        },
        {
          id: '988',
          name: 'ALKEMADE',
          code: '483',
        },
        {
          id: '989',
          name: 'ALPHEN AAN DEN RIJN',
          code: '484',
        },
        {
          id: '990',
          name: 'BARENDRECHT',
          code: '489',
        },
        {
          id: '991',
          name: 'BERGAMBACHT',
          code: '491',
        },
        {
          id: '992',
          name: 'BERGSCHENHOEK',
          code: '492',
        },
        {
          id: '993',
          name: 'BERKEL EN RODENRIJS',
          code: '493',
        },
        {
          id: '994',
          name: 'BLEISWIJK',
          code: '495',
        },
        {
          id: '995',
          name: 'BODEGRAVEN',
          code: '497',
        },
        {
          id: '996',
          name: 'DRECHTERLAND',
          code: '498',
        },
        {
          id: '997',
          name: 'BOSKOOP',
          code: '499',
        },
        {
          id: '673',
          name: 'BEDUM',
          code: '5',
        },
        {
          id: '690',
          name: 'ZEEWOLDE',
          code: '50',
        },
        {
          id: '998',
          name: 'BRIELLE',
          code: '501',
        },
        {
          id: '999',
          name: 'CAPELLE AAN DEN IJSSEL',
          code: '502',
        },
        {
          id: '1000',
          name: 'DELFT',
          code: '503',
        },
        {
          id: '1001',
          name: 'DIRKSLAND',
          code: '504',
        },
        {
          id: '1002',
          name: 'DORDRECHT',
          code: '505',
        },
        {
          id: '691',
          name: 'SKARSTERLAN',
          code: '51',
        },
        {
          id: '1003',
          name: 'GOEDEREEDE',
          code: '511',
        },
        {
          id: '1004',
          name: 'GORINCHEM',
          code: '512',
        },
        {
          id: '1005',
          name: 'GOUDA',
          code: '513',
        },
        {
          id: '1006',
          name: "'S-GRAVENDEEL",
          code: '517',
        },
        {
          id: '1007',
          name: "'S-GRAVENHAGE",
          code: '518',
        },
        {
          id: '1008',
          name: "'S-GRAVENZANDE",
          code: '519',
        },
        {
          id: '692',
          name: 'WINSCHOTEN',
          code: '52',
        },
        {
          id: '1009',
          name: 'HARDINXVELD-GIESSENDAM',
          code: '523',
        },
        {
          id: '1010',
          name: 'HEERJANSDAM',
          code: '526',
        },
        {
          id: '1011',
          name: 'NOORDER-KOGGENLAND',
          code: '529',
        },
        {
          id: '693',
          name: 'WINSUM',
          code: '53',
        },
        {
          id: '1012',
          name: 'HELLEVOETSLUIS',
          code: '530',
        },
        {
          id: '1013',
          name: 'HENDRIK-IDO-AMBACHT',
          code: '531',
        },
        {
          id: '1014',
          name: 'STEDE BROEC',
          code: '532',
        },
        {
          id: '1015',
          name: 'HILLEGOM',
          code: '534',
        },
        {
          id: '1016',
          name: 'KATWIJK',
          code: '537',
        },
        {
          id: '1017',
          name: 'KRIMPEN AAN DEN IJSSEL',
          code: '542',
        },
        {
          id: '1018',
          name: 'LEERDAM',
          code: '545',
        },
        {
          id: '1019',
          name: 'LEIDEN',
          code: '546',
        },
        {
          id: '1020',
          name: 'LEIDERDORP',
          code: '547',
        },
        {
          id: '1021',
          name: 'LEIDSCHENDAM',
          code: '548',
        },
        {
          id: '694',
          name: 'BOARNSTERHIM',
          code: '55',
        },
        {
          id: '1022',
          name: 'DE LIER',
          code: '552',
        },
        {
          id: '1023',
          name: 'LISSE',
          code: '553',
        },
        {
          id: '1024',
          name: 'MAASLAND',
          code: '555',
        },
        {
          id: '1025',
          name: 'MAASSLUIS',
          code: '556',
        },
        {
          id: '1026',
          name: 'WESTER-KOGGENLAND',
          code: '558',
        },
        {
          id: '1027',
          name: 'MIDDELHARNIS',
          code: '559',
        },
        {
          id: '695',
          name: 'ZUIDHORN',
          code: '56',
        },
        {
          id: '1028',
          name: 'MONSTER',
          code: '562',
        },
        {
          id: '1029',
          name: 'MOORDRECHT',
          code: '563',
        },
        {
          id: '1030',
          name: 'NAALDWIJK',
          code: '565',
        },
        {
          id: '1031',
          name: 'NIEUWERKERK AAN DEN IJSS',
          code: '567',
        },
        {
          id: '1032',
          name: 'BERNISSE',
          code: '568',
        },
        {
          id: '1033',
          name: 'NIEUWKOOP',
          code: '569',
        },
        {
          id: '1034',
          name: 'NIEUW-LEKKERLAND',
          code: '571',
        },
        {
          id: '1035',
          name: 'NOORDWIJK',
          code: '575',
        },
        {
          id: '1036',
          name: 'NOORDWIJKERHOUT',
          code: '576',
        },
        {
          id: '1037',
          name: 'NOOTDORP',
          code: '577',
        },
        {
          id: '1038',
          name: 'OEGSTGEEST',
          code: '579',
        },
        {
          id: '696',
          name: 'DONGERADEEL',
          code: '58',
        },
        {
          id: '1039',
          name: 'OOSTFLAKKEE',
          code: '580',
        },
        {
          id: '1040',
          name: 'OUD-BEIJERLAND',
          code: '584',
        },
        {
          id: '1041',
          name: 'BINNENMAAS',
          code: '585',
        },
        {
          id: '1042',
          name: 'KORENDIJK',
          code: '588',
        },
        {
          id: '1043',
          name: 'OUDEWATER',
          code: '589',
        },
        {
          id: '697',
          name: 'ACHTKARSPELEN',
          code: '59',
        },
        {
          id: '1044',
          name: 'PAPENDRECHT',
          code: '590',
        },
        {
          id: '1045',
          name: 'PIJNACKER',
          code: '594',
        },
        {
          id: '1046',
          name: 'REEUWIJK',
          code: '595',
        },
        {
          id: '1047',
          name: 'RIDDERKERK',
          code: '597',
        },
        {
          id: '1048',
          name: 'ROTTERDAM',
          code: '599',
        },
        {
          id: '698',
          name: 'AMELAND',
          code: '60',
        },
        {
          id: '1049',
          name: 'ROZENBURG',
          code: '600',
        },
        {
          id: '1050',
          name: 'RIJNSBURG',
          code: '602',
        },
        {
          id: '1051',
          name: 'RIJSWIJK (Z.H.)',
          code: '603',
        },
        {
          id: '1052',
          name: 'SASSENHEIM',
          code: '604',
        },
        {
          id: '1053',
          name: 'SCHIEDAM',
          code: '606',
        },
        {
          id: '1054',
          name: 'SCHIPLUIDEN',
          code: '607',
        },
        {
          id: '1055',
          name: 'SCHOONHOVEN',
          code: '608',
        },
        {
          id: '1056',
          name: 'SLIEDRECHT',
          code: '610',
        },
        {
          id: '1057',
          name: 'CROMSTRIJEN',
          code: '611',
        },
        {
          id: '1058',
          name: 'SPIJKENISSE',
          code: '612',
        },
        {
          id: '1059',
          name: 'ALBRANDSWAARD',
          code: '613',
        },
        {
          id: '1060',
          name: 'WESTVOORNE',
          code: '614',
        },
        {
          id: '1061',
          name: 'STRIJEN',
          code: '617',
        },
        {
          id: '1062',
          name: 'VALKENBURG (Z.H.)',
          code: '619',
        },
        {
          id: '1063',
          name: 'VIANEN',
          code: '620',
        },
        {
          id: '1064',
          name: 'VLAARDINGEN',
          code: '622',
        },
        {
          id: '1065',
          name: 'VLIST',
          code: '623',
        },
        {
          id: '1066',
          name: 'VOORBURG',
          code: '624',
        },
        {
          id: '1067',
          name: 'VOORHOUT',
          code: '625',
        },
        {
          id: '1068',
          name: 'VOORSCHOTEN',
          code: '626',
        },
        {
          id: '1069',
          name: 'WADDINXVEEN',
          code: '627',
        },
        {
          id: '1070',
          name: 'WARMOND',
          code: '628',
        },
        {
          id: '1071',
          name: 'WASSENAAR',
          code: '629',
        },
        {
          id: '699',
          name: 'HET BILDT',
          code: '63',
        },
        {
          id: '1072',
          name: 'WATERINGEN',
          code: '630',
        },
        {
          id: '1073',
          name: 'WOERDEN',
          code: '632',
        },
        {
          id: '1074',
          name: 'ZOETERMEER',
          code: '637',
        },
        {
          id: '1075',
          name: 'ZOETERWOUDE',
          code: '638',
        },
        {
          id: '700',
          name: 'BOLSWARD',
          code: '64',
        },
        {
          id: '1076',
          name: 'ZWIJNDRECHT',
          code: '642',
        },
        {
          id: '1077',
          name: 'NEDERLEK',
          code: '643',
        },
        {
          id: '1078',
          name: 'OUDERKERK',
          code: '644',
        },
        {
          id: '1079',
          name: 'JACOBSWOUDE',
          code: '645',
        },
        {
          id: '1080',
          name: 'AARDENBURG',
          code: '648',
        },
        {
          id: '1081',
          name: 'ARNEMUIDEN',
          code: '649',
        },
        {
          id: '701',
          name: 'DANTUMADEEL',
          code: '65',
        },
        {
          id: '1082',
          name: 'AXEL',
          code: '650',
        },
        {
          id: '1083',
          name: 'GAASTERLAN-SLEAT',
          code: '653',
        },
        {
          id: '1084',
          name: 'BORSELE',
          code: '654',
        },
        {
          id: '1085',
          name: 'BROUWERSHAVEN',
          code: '656',
        },
        {
          id: '1086',
          name: 'BRUINISSE',
          code: '657',
        },
        {
          id: '1087',
          name: 'DOMBURG',
          code: '660',
        },
        {
          id: '1088',
          name: 'DUIVELAND',
          code: '662',
        },
        {
          id: '1089',
          name: 'GOES',
          code: '664',
        },
        {
          id: '1090',
          name: 'WEST MAAS EN WAAL',
          code: '668',
        },
        {
          id: '1091',
          name: 'HONTENISSE',
          code: '675',
        },
        {
          id: '1092',
          name: 'HULST',
          code: '677',
        },
        {
          id: '1093',
          name: 'KAPELLE',
          code: '678',
        },
        {
          id: '702',
          name: 'FERWERDERADEEL',
          code: '68',
        },
        {
          id: '1094',
          name: 'KORTGENE',
          code: '682',
        },
        {
          id: '1095',
          name: 'WYMBRITSERADIEL',
          code: '683',
        },
        {
          id: '1096',
          name: 'MARIEKERKE',
          code: '686',
        },
        {
          id: '1097',
          name: 'MIDDELBURG',
          code: '687',
        },
        {
          id: '1098',
          name: 'MIDDENSCHOUWEN',
          code: '688',
        },
        {
          id: '1099',
          name: 'GIESSENLANDEN',
          code: '689',
        },
        {
          id: '1100',
          name: 'OOSTBURG',
          code: '692',
        },
        {
          id: '1101',
          name: 'GRAAFSTROOM',
          code: '693',
        },
        {
          id: '1102',
          name: 'LIESVELD',
          code: '694',
        },
        {
          id: '674',
          name: 'BELLINGWEDDE',
          code: '7',
        },
        {
          id: '703',
          name: 'FRANEKERADEEL',
          code: '70',
        },
        {
          id: '1103',
          name: 'REIMERSWAAL',
          code: '703',
        },
        {
          id: '1104',
          name: 'SAS VAN GENT',
          code: '704',
        },
        {
          id: '1105',
          name: 'ZEDERIK',
          code: '707',
        },
        {
          id: '1106',
          name: 'WUNSERADIEL',
          code: '710',
        },
        {
          id: '1107',
          name: 'SINT PHILIPSLAND',
          code: '712',
        },
        {
          id: '1108',
          name: 'SLUIS',
          code: '713',
        },
        {
          id: '1109',
          name: 'TERNEUZEN',
          code: '715',
        },
        {
          id: '1110',
          name: 'THOLEN',
          code: '716',
        },
        {
          id: '1111',
          name: 'VEERE',
          code: '717',
        },
        {
          id: '1112',
          name: 'VLISSINGEN',
          code: '718',
        },
        {
          id: '704',
          name: 'HARLINGEN',
          code: '72',
        },
        {
          id: '1113',
          name: 'VALKENISSE',
          code: '720',
        },
        {
          id: '1114',
          name: 'WESTERSCHOUWEN',
          code: '725',
        },
        {
          id: '1115',
          name: 'WESTKAPELLE',
          code: '726',
        },
        {
          id: '1116',
          name: 'WISSENKERKE',
          code: '727',
        },
        {
          id: '1117',
          name: 'ZIERIKZEE',
          code: '732',
        },
        {
          id: '1118',
          name: 'LINGEWAAL',
          code: '733',
        },
        {
          id: '1119',
          name: 'DE RONDE VENEN',
          code: '736',
        },
        {
          id: '1120',
          name: 'TYTSJERKSTERADIEL',
          code: '737',
        },
        {
          id: '1121',
          name: 'AALBURG',
          code: '738',
        },
        {
          id: '1122',
          name: 'AARLE-RIXTEL',
          code: '739',
        },
        {
          id: '705',
          name: 'HEERENVEEN',
          code: '74',
        },
        {
          id: '1123',
          name: 'ALPHEN EN RIEL',
          code: '741',
        },
        {
          id: '1124',
          name: 'ASTEN',
          code: '743',
        },
        {
          id: '1125',
          name: 'BAARLE-NASSAU',
          code: '744',
        },
        {
          id: '1126',
          name: 'BAKEL EN MILHEEZE',
          code: '745',
        },
        {
          id: '1127',
          name: 'BEEK EN DONK',
          code: '746',
        },
        {
          id: '1128',
          name: 'BERGEN OP ZOOM',
          code: '748',
        },
        {
          id: '1129',
          name: 'BERGEYK',
          code: '749',
        },
        {
          id: '1130',
          name: 'BERKEL-ENSCHOT',
          code: '751',
        },
        {
          id: '1131',
          name: 'BERLICUM',
          code: '752',
        },
        {
          id: '1132',
          name: 'BEST',
          code: '753',
        },
        {
          id: '1133',
          name: 'BLADEL EN NETERSEL',
          code: '754',
        },
        {
          id: '1134',
          name: 'BOEKEL',
          code: '755',
        },
        {
          id: '1135',
          name: 'BOXMEER',
          code: '756',
        },
        {
          id: '1136',
          name: 'BOXTEL',
          code: '757',
        },
        {
          id: '1137',
          name: 'BREDA',
          code: '758',
        },
        {
          id: '1138',
          name: 'BUDEL',
          code: '759',
        },
        {
          id: '1139',
          name: 'CHAAM',
          code: '760',
        },
        {
          id: '1140',
          name: 'DEURNE',
          code: '762',
        },
        {
          id: '1141',
          name: 'DIESSEN',
          code: '763',
        },
        {
          id: '1142',
          name: 'DINTELOORD EN PRINSENLAN',
          code: '764',
        },
        {
          id: '1143',
          name: 'PEKELA',
          code: '765',
        },
        {
          id: '1144',
          name: 'DONGEN',
          code: '766',
        },
        {
          id: '1145',
          name: 'DRUNEN',
          code: '767',
        },
        {
          id: '1146',
          name: 'DEN DUNGEN',
          code: '768',
        },
        {
          id: '1147',
          name: 'DUSSEN',
          code: '769',
        },
        {
          id: '1148',
          name: 'EERSEL',
          code: '770',
        },
        {
          id: '1149',
          name: 'EINDHOVEN',
          code: '772',
        },
        {
          id: '1150',
          name: 'ESCH',
          code: '776',
        },
        {
          id: '1151',
          name: 'ETTEN-LEUR',
          code: '777',
        },
        {
          id: '1152',
          name: 'FIJNAART EN HEIJNINGEN',
          code: '778',
        },
        {
          id: '1153',
          name: 'GEERTRUIDENBERG',
          code: '779',
        },
        {
          id: '1154',
          name: 'GELDROP',
          code: '781',
        },
        {
          id: '1155',
          name: 'GEMERT',
          code: '782',
        },
        {
          id: '1156',
          name: 'GILZE EN RIJEN',
          code: '784',
        },
        {
          id: '1157',
          name: 'GOIRLE',
          code: '785',
        },
        {
          id: '1158',
          name: 'GRAVE',
          code: '786',
        },
        {
          id: '1159',
          name: "'S-GRAVENMOER",
          code: '787',
        },
        {
          id: '1160',
          name: 'HAAREN',
          code: '788',
        },
        {
          id: '1161',
          name: 'HALSTEREN',
          code: '789',
        },
        {
          id: '706',
          name: 'KOLLUMERLAND C.A.',
          code: '79',
        },
        {
          id: '1162',
          name: 'HEESCH',
          code: '791',
        },
        {
          id: '1163',
          name: 'HEEZE',
          code: '793',
        },
        {
          id: '1164',
          name: 'HELMOND',
          code: '794',
        },
        {
          id: '1165',
          name: 'HELVOIRT',
          code: '795',
        },
        {
          id: '1166',
          name: "'S-HERTOGENBOSCH",
          code: '796',
        },
        {
          id: '1167',
          name: 'HEUSDEN',
          code: '797',
        },
        {
          id: '1168',
          name: 'HILVARENBEEK',
          code: '798',
        },
        {
          id: '1169',
          name: 'HOEVEN',
          code: '799',
        },
        {
          id: '707',
          name: 'LEEUWARDEN',
          code: '80',
        },
        {
          id: '1170',
          name: 'HOOGELOON',
          code: '800',
        },
        {
          id: '1171',
          name: 'HOOGE EN LAGE MIERDE',
          code: '801',
        },
        {
          id: '1172',
          name: 'HOOGE EN LAGE ZWALUWE',
          code: '802',
        },
        {
          id: '1173',
          name: 'HUIJBERGEN',
          code: '803',
        },
        {
          id: '1174',
          name: 'KLUNDERT',
          code: '804',
        },
        {
          id: '1175',
          name: 'LEENDE',
          code: '805',
        },
        {
          id: '1176',
          name: 'LIEMPDE',
          code: '806',
        },
        {
          id: '1177',
          name: 'LIESHOUT',
          code: '807',
        },
        {
          id: '1178',
          name: 'LITH',
          code: '808',
        },
        {
          id: '1179',
          name: 'LOON OP ZAND',
          code: '809',
        },
        {
          id: '708',
          name: 'LEEUWARDERADEEL',
          code: '81',
        },
        {
          id: '1180',
          name: 'LUYKSGESTEL',
          code: '810',
        },
        {
          id: '1181',
          name: 'MAARHEEZE',
          code: '811',
        },
        {
          id: '1182',
          name: 'MADE EN DRIMMELEN',
          code: '812',
        },
        {
          id: '1183',
          name: 'MIERLO',
          code: '814',
        },
        {
          id: '1184',
          name: 'MILL EN SINT HUBERT',
          code: '815',
        },
        {
          id: '1185',
          name: 'MOERGESTEL',
          code: '816',
        },
        {
          id: '1186',
          name: 'NIEUW-GINNEKEN',
          code: '817',
        },
        {
          id: '1187',
          name: 'NIEUW-VOSSEMEER',
          code: '818',
        },
        {
          id: '709',
          name: 'LEMSTERLAND',
          code: '82',
        },
        {
          id: '1188',
          name: 'NUENEN',
          code: '820',
        },
        {
          id: '1189',
          name: 'OIRSCHOT',
          code: '823',
        },
        {
          id: '1190',
          name: 'OISTERWIJK',
          code: '824',
        },
        {
          id: '1191',
          name: 'OOST-',
          code: '825',
        },
        {
          id: '1192',
          name: 'OOSTERHOUT',
          code: '826',
        },
        {
          id: '1193',
          name: 'OSS',
          code: '828',
        },
        {
          id: '1194',
          name: 'OSSENDRECHT',
          code: '829',
        },
        {
          id: '710',
          name: 'MENALDUMADEEL',
          code: '83',
        },
        {
          id: '1195',
          name: 'OUDENBOSCH',
          code: '830',
        },
        {
          id: '1196',
          name: 'OUD EN NIEUW GASTEL',
          code: '831',
        },
        {
          id: '1197',
          name: 'PRINSENBEEK',
          code: '832',
        },
        {
          id: '1198',
          name: 'PUTTE',
          code: '833',
        },
        {
          id: '1199',
          name: 'RAAMSDONK',
          code: '834',
        },
        {
          id: '1200',
          name: 'RAVENSTEIN',
          code: '835',
        },
        {
          id: '1201',
          name: 'REUSEL',
          code: '836',
        },
        {
          id: '1202',
          name: 'RIETHOVEN',
          code: '837',
        },
        {
          id: '1203',
          name: 'ROOSENDAAL EN NISPEN',
          code: '838',
        },
        {
          id: '1204',
          name: 'ROSMALEN',
          code: '839',
        },
        {
          id: '1205',
          name: 'RUCPHEN',
          code: '840',
        },
        {
          id: '1206',
          name: 'RIJSBERGEN',
          code: '841',
        },
        {
          id: '1207',
          name: 'SCHIJNDEL',
          code: '844',
        },
        {
          id: '1208',
          name: 'SINT MICHIELSGESTEL',
          code: '845',
        },
        {
          id: '1209',
          name: 'SINT OEDENRODE',
          code: '846',
        },
        {
          id: '1210',
          name: 'SOMEREN',
          code: '847',
        },
        {
          id: '1211',
          name: 'SON EN BREUGEL',
          code: '848',
        },
        {
          id: '1212',
          name: 'SPRANG-CAPELLE',
          code: '849',
        },
        {
          id: '711',
          name: 'OOSTSTELLINGWERF',
          code: '85',
        },
        {
          id: '1213',
          name: 'STANDDAARBUITEN',
          code: '850',
        },
        {
          id: '1214',
          name: 'STEENBERGEN',
          code: '851',
        },
        {
          id: '1215',
          name: 'WATERLAND',
          code: '852',
        },
        {
          id: '1216',
          name: 'TERHEIJDEN',
          code: '853',
        },
        {
          id: '1217',
          name: 'TETERINGEN',
          code: '854',
        },
        {
          id: '1218',
          name: 'TILBURG',
          code: '855',
        },
        {
          id: '1219',
          name: 'UDEN',
          code: '856',
        },
        {
          id: '1220',
          name: 'UDENHOUT',
          code: '857',
        },
        {
          id: '1221',
          name: 'VALKENSWAARD',
          code: '858',
        },
        {
          id: '712',
          name: 'OPSTERLAND',
          code: '86',
        },
        {
          id: '1222',
          name: 'VEGHEL',
          code: '860',
        },
        {
          id: '1223',
          name: 'VELDHOVEN',
          code: '861',
        },
        {
          id: '1224',
          name: 'VESSEM',
          code: '862',
        },
        {
          id: '1225',
          name: 'VIERLINGSBEEK',
          code: '863',
        },
        {
          id: '1226',
          name: 'VLIJMEN',
          code: '864',
        },
        {
          id: '1227',
          name: 'VUGHT',
          code: '865',
        },
        {
          id: '1228',
          name: 'WAALRE',
          code: '866',
        },
        {
          id: '1229',
          name: 'WAALWIJK',
          code: '867',
        },
        {
          id: '1230',
          name: 'WASPIK',
          code: '869',
        },
        {
          id: '1231',
          name: 'WERKENDAM',
          code: '870',
        },
        {
          id: '1232',
          name: 'WESTERHOVEN',
          code: '871',
        },
        {
          id: '1233',
          name: 'WILLEMSTAD',
          code: '872',
        },
        {
          id: '1234',
          name: 'WOENSDRECHT',
          code: '873',
        },
        {
          id: '1309',
          name: 'BEERNEM',
          code: '8730',
        },
        {
          id: '1235',
          name: 'WOUDRICHEM',
          code: '874',
        },
        {
          id: '1236',
          name: 'WOUW',
          code: '875',
        },
        {
          id: '1237',
          name: 'ZEVENBERGEN',
          code: '878',
        },
        {
          id: '1238',
          name: 'ZUNDERT',
          code: '879',
        },
        {
          id: '713',
          name: 'SCHIERMONNIKOOG',
          code: '88',
        },
        {
          id: '1239',
          name: 'WORMERLAND',
          code: '880',
        },
        {
          id: '1240',
          name: 'ONDERBANKEN',
          code: '881',
        },
        {
          id: '1241',
          name: 'LANDGRAAF',
          code: '882',
        },
        {
          id: '1242',
          name: 'ARCEN EN VELDEN',
          code: '885',
        },
        {
          id: '1243',
          name: 'BEEK (L)',
          code: '888',
        },
        {
          id: '1244',
          name: 'BEESEL',
          code: '889',
        },
        {
          id: '1245',
          name: 'BELFELD',
          code: '890',
        },
        {
          id: '1246',
          name: 'BERGEN (L)',
          code: '893',
        },
        {
          id: '1247',
          name: 'BORN',
          code: '897',
        },
        {
          id: '1248',
          name: 'BROEKHUIZEN',
          code: '898',
        },
        {
          id: '1249',
          name: 'BRUNSSUM',
          code: '899',
        },
        {
          id: '675',
          name: 'TEN BOER',
          code: '9',
        },
        {
          id: '714',
          name: 'SMALLINGERLAND',
          code: '90',
        },
        {
          id: '1250',
          name: 'ECHT',
          code: '902',
        },
        {
          id: '1251',
          name: 'EIJSDEN',
          code: '905',
        },
        {
          id: '1252',
          name: 'GELEEN',
          code: '906',
        },
        {
          id: '1253',
          name: 'GENNEP',
          code: '907',
        },
        {
          id: '715',
          name: 'SNEEK',
          code: '91',
        },
        {
          id: '1254',
          name: 'GRUBBENVORST',
          code: '912',
        },
        {
          id: '1255',
          name: 'GULPEN',
          code: '913',
        },
        {
          id: '1256',
          name: 'HAELEN',
          code: '914',
        },
        {
          id: '1257',
          name: 'HEERLEN',
          code: '917',
        },
        {
          id: '1258',
          name: 'HELDEN',
          code: '918',
        },
        {
          id: '1259',
          name: 'HEYTHUYSEN',
          code: '920',
        },
        {
          id: '1260',
          name: 'HORST',
          code: '923',
        },
        {
          id: '1261',
          name: 'HUNSEL',
          code: '925',
        },
        {
          id: '1262',
          name: 'KERKRADE',
          code: '928',
        },
        {
          id: '1263',
          name: 'KESSEL',
          code: '929',
        },
        {
          id: '716',
          name: 'TERSCHELLING',
          code: '93',
        },
        {
          id: '1264',
          name: 'MAASBRACHT',
          code: '933',
        },
        {
          id: '1265',
          name: 'MAASBREE',
          code: '934',
        },
        {
          id: '1266',
          name: 'MAASTRICHT',
          code: '935',
        },
        {
          id: '1267',
          name: 'MARGRATEN',
          code: '936',
        },
        {
          id: '1268',
          name: 'MEERSSEN',
          code: '938',
        },
        {
          id: '1269',
          name: 'MEIJEL',
          code: '941',
        },
        {
          id: '1270',
          name: 'MOOK EN MIDDELAAR',
          code: '944',
        },
        {
          id: '1271',
          name: 'NEDERWEERT',
          code: '946',
        },
        {
          id: '1272',
          name: 'NUTH',
          code: '951',
        },
        {
          id: '1273',
          name: 'ROERMOND',
          code: '957',
        },
        {
          id: '717',
          name: 'VLIELAND',
          code: '96',
        },
        {
          id: '1274',
          name: 'SCHINNEN',
          code: '962',
        },
        {
          id: '1275',
          name: 'SEVENUM',
          code: '964',
        },
        {
          id: '1276',
          name: 'SIMPELVELD',
          code: '965',
        },
        {
          id: '1277',
          name: 'SITTARD',
          code: '968',
        },
        {
          id: '1278',
          name: 'STEIN',
          code: '971',
        },
        {
          id: '1279',
          name: 'STRAMPROY',
          code: '973',
        },
        {
          id: '1280',
          name: 'SUSTEREN',
          code: '974',
        },
        {
          id: '1281',
          name: 'SWALMEN',
          code: '975',
        },
        {
          id: '1282',
          name: 'TEGELEN',
          code: '976',
        },
        {
          id: '1283',
          name: 'THORN',
          code: '977',
        },
        {
          id: '718',
          name: 'WESTSTELLINGWERF',
          code: '98',
        },
        {
          id: '1284',
          name: 'VAALS',
          code: '981',
        },
        {
          id: '1285',
          name: 'VENLO',
          code: '983',
        },
        {
          id: '1286',
          name: 'VENRAY',
          code: '984',
        },
        {
          id: '1287',
          name: 'VOERENDAAL',
          code: '986',
        },
        {
          id: '1288',
          name: 'WEERT',
          code: '988',
        },
        {
          id: '1289',
          name: 'WITTEM',
          code: '990',
        },
        {
          id: '1290',
          name: 'MEERLO-WANSSUM',
          code: '993',
        },
        {
          id: '1291',
          name: 'VALKENBURG A/D GEUL',
          code: '994',
        },
        {
          id: '1292',
          name: 'LELYSTAD',
          code: '995',
        },
        {
          id: '1293',
          name: 'ZUIDELIJKE IJSSELMEERPOL',
          code: '996',
        },
        {
          id: '1310',
          name: 'DRENTHE',
          code: 'DR',
        },
        {
          id: '1311',
          name: 'FLEVOLAND',
          code: 'FL',
        },
        {
          id: '1312',
          name: 'FRYSLAN',
          code: 'FR',
        },
        {
          id: '1313',
          name: 'GELDERLAND',
          code: 'GE',
        },
        {
          id: '1314',
          name: 'GRONINGEN',
          code: 'GR',
        },
        {
          id: '1315',
          name: 'LIMBURG',
          code: 'LI',
        },
        {
          id: '1316',
          name: 'NOORD-BRABANT',
          code: 'NB',
        },
        {
          id: '1317',
          name: 'NOORD-HOLLAND',
          code: 'NH',
        },
        {
          id: '1318',
          name: 'OVERIJSSEL',
          code: 'OV',
        },
        {
          id: '1319',
          name: 'UTRECHT',
          code: 'UT',
        },
        {
          id: '1320',
          name: 'ZEELAND',
          code: 'ZE',
        },
        {
          id: '1321',
          name: 'ZUID-HOLLAND',
          code: 'ZH',
        },
      ],
    },
    {
      id: 'NO',
      name: 'Norway',
      phoneCode: '47',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'NP',
      name: 'Nepal',
      phoneCode: '977',
      type: 'C',
      provinces: [],
    },
    {
      id: 'NR',
      name: 'Nauru',
      phoneCode: '674',
      type: 'C',
      provinces: [],
    },
    // {
    //   "id": "NT",
    //   "name": "Neutral Zone",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'NU',
      name: 'Niue',
      phoneCode: '683',
      type: 'C',
      provinces: [],
    },
    {
      id: 'NZ',
      name: 'New Zealand',
      phoneCode: '64',
      type: 'CP',
      provinces: [],
    },
    // {
    //   "id": "VD",
    //   "name": "North Vietnam",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'OM',
      name: 'Oman',
      phoneCode: '968',
      type: 'C',
      provinces: [],
    },
    {
      id: 'PA',
      name: 'Panama',
      phoneCode: '507',
      type: 'C',
      provinces: [],
    },
    // {
    //   "id": "PC",
    //   "name": "Pacific Islands Trust Territory",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'PE',
      name: 'Peru',
      phoneCode: '51',
      type: 'C',
      provinces: [],
    },
    {
      id: 'PG',
      name: 'Papua New Guinea',
      phoneCode: '675',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'PH',
      name: 'Philippines',
      phoneCode: '63',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'PK',
      name: 'Pakistan',
      phoneCode: '92',
      type: 'P',
      provinces: [],
    },
    {
      id: 'PL',
      name: 'Poland',
      phoneCode: '48',
      type: 'CP',
      provinces: [],
    },
    // {
    //   "id": "PN",
    //   "name": "Pitcairn Islands",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'PR',
      name: 'Puerto Rico',
      phoneCode: '1',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'PS',
      name: 'Palestinian Territories',
      phoneCode: '972',
      type: '',
      provinces: [],
    },
    {
      id: 'PT',
      name: 'Portugal',
      phoneCode: '351',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'PW',
      name: 'Palau',
      phoneCode: '680',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'PY',
      name: 'Paraguay',
      phoneCode: '595',
      type: 'C',
      provinces: [],
    },
    // {
    //   "id": "PZ",
    //   "name": "Panama Canal Zone",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    // {
    //   "id": "YD",
    //   "name": "People's Democratic Republic of Yemen",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'QA',
      name: 'Qatar',
      phoneCode: '974',
      type: 'C',
      provinces: [],
    },
    {
      id: 'RE',
      name: 'Réunion',
      phoneCode: '262',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'RO',
      name: 'Romania',
      phoneCode: '40',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'RU',
      name: 'Russia',
      phoneCode: '7',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'RW',
      name: 'Rwanda',
      phoneCode: '250',
      type: 'C',
      provinces: [],
    },
    {
      id: 'BL',
      name: 'Saint Barthélemy',
      phoneCode: '590',
      type: '',
      provinces: [
        {
          id: '230',
          name: 'BENI',
          code: 'BE',
        },
        {
          id: '231',
          name: 'CHUQUISACA',
          code: 'CH',
        },
        {
          id: '232',
          name: 'COCHABAMBA',
          code: 'CO',
        },
        {
          id: '233',
          name: 'LA PAZ',
          code: 'LP',
        },
        {
          id: '234',
          name: 'ORURO',
          code: 'OR',
        },
        {
          id: '235',
          name: 'PANDO',
          code: 'PA',
        },
        {
          id: '236',
          name: 'POTOSI',
          code: 'PO',
        },
        {
          id: '237',
          name: 'SANTA CRUZ',
          code: 'SC',
        },
        {
          id: '238',
          name: 'TARIJA',
          code: 'TA',
        },
      ],
    },
    {
      id: 'CH',
      name: 'Switzerland',
      phoneCode: '41',
      type: 'CP',
      provinces: [],
    },
    // {
    //   "id": "CS",
    //   "name": "Serbia and Montenegro",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'ES',
      name: 'Spain',
      phoneCode: '34',
      type: 'CP',
      provinces: [
        {
          id: '1322',
          name: 'ALAVA',
          code: '1',
        },
        {
          id: '1331',
          name: 'CACERES',
          code: '10',
        },
        {
          id: '1332',
          name: 'CADIZ',
          code: '11',
        },
        {
          id: '1333',
          name: 'CASTELLON',
          code: '12',
        },
        {
          id: '1334',
          name: 'CIUDAD REAL',
          code: '13',
        },
        {
          id: '1335',
          name: 'CORDOBA',
          code: '14',
        },
        {
          id: '1336',
          name: 'LA CORUNA',
          code: '15',
        },
        {
          id: '1337',
          name: 'CUENCA',
          code: '16',
        },
        {
          id: '1338',
          name: 'GERONA',
          code: '17',
        },
        {
          id: '1339',
          name: 'GRANADA',
          code: '18',
        },
        {
          id: '1340',
          name: 'GUADALAJARA',
          code: '19',
        },
        {
          id: '1323',
          name: 'ALBACETE',
          code: '2',
        },
        {
          id: '1341',
          name: 'GUIPUZCOA',
          code: '20',
        },
        {
          id: '1342',
          name: 'HUELVA',
          code: '21',
        },
        {
          id: '1343',
          name: 'HUESCA',
          code: '22',
        },
        {
          id: '1344',
          name: 'JAEN',
          code: '23',
        },
        {
          id: '1345',
          name: 'LEON',
          code: '24',
        },
        {
          id: '1346',
          name: 'LERIDA',
          code: '25',
        },
        {
          id: '1347',
          name: 'LA RIOJA',
          code: '26',
        },
        {
          id: '1348',
          name: 'LUGO',
          code: '27',
        },
        {
          id: '1349',
          name: 'MADRID',
          code: '28',
        },
        {
          id: '1350',
          name: 'MALAGA',
          code: '29',
        },
        {
          id: '1324',
          name: 'ALICANTE',
          code: '3',
        },
        {
          id: '1351',
          name: 'MURCIA',
          code: '30',
        },
        {
          id: '1352',
          name: 'NAVARRA',
          code: '31',
        },
        {
          id: '1353',
          name: 'ORENSE',
          code: '32',
        },
        {
          id: '1354',
          name: 'ASTURIAS',
          code: '33',
        },
        {
          id: '1355',
          name: 'PALENCIA',
          code: '34',
        },
        {
          id: '1356',
          name: 'LAS PALMAS',
          code: '35',
        },
        {
          id: '1357',
          name: 'PONTEVEDRA',
          code: '36',
        },
        {
          id: '1358',
          name: 'SALAMANCA',
          code: '37',
        },
        {
          id: '1359',
          name: 'STA.CRUZ DE TENERIFE',
          code: '38',
        },
        {
          id: '1360',
          name: 'CANTABRIA',
          code: '39',
        },
        {
          id: '1325',
          name: 'ALMERIA',
          code: '4',
        },
        {
          id: '1361',
          name: 'SEGOVIA',
          code: '40',
        },
        {
          id: '1362',
          name: 'SEVILLA',
          code: '41',
        },
        {
          id: '1363',
          name: 'SORIA',
          code: '42',
        },
        {
          id: '1364',
          name: 'TARRAGONA',
          code: '43',
        },
        {
          id: '1365',
          name: 'TERUEL',
          code: '44',
        },
        {
          id: '1366',
          name: 'TOLEDO',
          code: '45',
        },
        {
          id: '1367',
          name: 'VALENCIA',
          code: '46',
        },
        {
          id: '1368',
          name: 'VALLADOLID',
          code: '47',
        },
        {
          id: '1369',
          name: 'VIZCAYA',
          code: '48',
        },
        {
          id: '1370',
          name: 'ZAMORA',
          code: '49',
        },
        {
          id: '1326',
          name: 'AVILA',
          code: '5',
        },
        {
          id: '1371',
          name: 'ZARAGOZA',
          code: '50',
        },
        {
          id: '1372',
          name: 'CEUTA',
          code: '51',
        },
        {
          id: '1373',
          name: 'MELILLA',
          code: '52',
        },
        {
          id: '1327',
          name: 'BADAJOZ',
          code: '6',
        },
        {
          id: '1328',
          name: 'BALEARES',
          code: '7',
        },
        {
          id: '1329',
          name: 'BARCELONA',
          code: '8',
        },
        {
          id: '1330',
          name: 'BURGOS',
          code: '9',
        },
      ],
    },
    // {
    //   "id": "GS",
    //   "name": "South Georgia and the South Sandwich Islands",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'KN',
      name: 'Saint Kitts and Nevis',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'KR',
      name: 'South Korea',
      phoneCode: '82',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'LC',
      name: 'Saint Lucia',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'LK',
      name: 'Sri Lanka',
      phoneCode: '94',
      type: 'CP',
      provinces: [],
    },
    // {
    //   "id": "MF",
    //   "name": "Saint Martin",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'PM',
      name: 'Saint Pierre and Miquelon',
      phoneCode: '508',
      type: '',
      provinces: [],
    },
    {
      id: 'RS',
      name: 'Serbia',
      phoneCode: '381',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'SA',
      name: 'Saudi Arabia',
      phoneCode: '966',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'SB',
      name: 'Solomon Islands',
      phoneCode: '677',
      type: 'C',
      provinces: [],
    },
    {
      id: 'SC',
      name: 'Seychelles',
      phoneCode: '248',
      type: 'C',
      provinces: [],
    },
    {
      id: 'SD',
      name: 'Sudan',
      phoneCode: '249',
      type: 'C',
      provinces: [],
    },
    {
      id: 'SE',
      name: 'Sweden',
      phoneCode: '46',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'SG',
      name: 'Singapore',
      phoneCode: '65',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'SH',
      name: 'Saint Helena',
      phoneCode: '290',
      type: 'S',
      provinces: [],
    },
    {
      id: 'SI',
      name: 'Slovenia',
      phoneCode: '386',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'SJ',
      name: 'Svalbard and Jan Mayen',
      phoneCode: '47',
      type: '',
      provinces: [],
    },
    {
      id: 'SK',
      name: 'Slovakia',
      phoneCode: '421',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'SL',
      name: 'Sierra Leone',
      phoneCode: '232',
      type: 'C',
      provinces: [],
    },
    {
      id: 'SM',
      name: 'San Marino',
      phoneCode: '378',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'SN',
      name: 'Senegal',
      phoneCode: '221',
      type: 'C',
      provinces: [],
    },
    {
      id: 'SO',
      name: 'Somalia',
      phoneCode: '252',
      type: 'C',
      provinces: [],
    },
    {
      id: 'SR',
      name: 'Suriname',
      phoneCode: '597',
      type: 'C',
      provinces: [],
    },
    {
      id: 'ST',
      name: 'São Tomé and Príncipe',
      phoneCode: '239',
      type: 'C',
      provinces: [],
    },
    {
      id: 'SY',
      name: 'Syria',
      phoneCode: '963',
      type: 'C',
      provinces: [],
    },
    {
      id: 'SZ',
      name: 'Swaziland',
      phoneCode: '268',
      type: 'CP',
      provinces: [
        {
          id: '1374',
          name: 'AARGAU',
          code: 'AG',
        },
        {
          id: '1375',
          name: 'APPENZELL I.R.',
          code: 'AI',
        },
        {
          id: '1376',
          name: 'APPENZELL A.R.',
          code: 'AR',
        },
        {
          id: '1377',
          name: 'BERN',
          code: 'BE',
        },
        {
          id: '1378',
          name: 'BASEL-LAND',
          code: 'BL',
        },
        {
          id: '1379',
          name: 'BASEL-STADT',
          code: 'BS',
        },
        {
          id: '1380',
          name: 'FREIBURG',
          code: 'FR',
        },
        {
          id: '1381',
          name: 'GENF',
          code: 'GE',
        },
        {
          id: '1382',
          name: 'GLARUS',
          code: 'GL',
        },
        {
          id: '1383',
          name: 'GRAUBUNDEN',
          code: 'GR',
        },
        {
          id: '1384',
          name: 'JURA',
          code: 'JU',
        },
        {
          id: '1385',
          name: 'LUZERN',
          code: 'LU',
        },
        {
          id: '1386',
          name: 'NEUENBURG',
          code: 'NE',
        },
        {
          id: '1387',
          name: 'NIDWALDEN',
          code: 'NW',
        },
        {
          id: '1388',
          name: 'OBWALDEN',
          code: 'OW',
        },
        {
          id: '1389',
          name: 'ST. GALLEN',
          code: 'SG',
        },
        {
          id: '1390',
          name: 'SHAFFHAUSEN',
          code: 'SH',
        },
        {
          id: '1391',
          name: 'SOLOTHURN',
          code: 'SO',
        },
        {
          id: '1392',
          name: 'SCHWYZ',
          code: 'SZ',
        },
        {
          id: '1393',
          name: 'THURGAU',
          code: 'TG',
        },
        {
          id: '1394',
          name: 'TESSIN',
          code: 'TI',
        },
        {
          id: '1395',
          name: 'URI',
          code: 'UR',
        },
        {
          id: '1396',
          name: 'WAADT',
          code: 'VD',
        },
        {
          id: '1397',
          name: 'WALLIS',
          code: 'VS',
        },
        {
          id: '1398',
          name: 'ZUG',
          code: 'ZG',
        },
        {
          id: '1399',
          name: 'ZURICH',
          code: 'ZH',
        },
      ],
    },
    {
      id: 'VC',
      name: 'Saint Vincent and the Grenadines',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'WS',
      name: 'Samoa',
      phoneCode: '685',
      type: 'C',
      provinces: [],
    },
    {
      id: 'ZA',
      name: 'South Africa',
      phoneCode: '27',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'TC',
      name: 'Turks and Caicos Islands',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'TG',
      name: 'Togo',
      phoneCode: '228',
      type: 'C',
      provinces: [],
    },
    {
      id: 'TH',
      name: 'Thailand',
      phoneCode: '66',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'TJ',
      name: 'Tajikistan',
      phoneCode: '992',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'TK',
      name: 'Tokelau',
      phoneCode: '690',
      type: '',
      provinces: [],
    },
    {
      id: 'TL',
      name: 'Timor-Leste',
      phoneCode: '670',
      type: 'C',
      provinces: [],
    },
    {
      id: 'TM',
      name: 'Turkmenistan',
      phoneCode: '993',
      type: '',
      provinces: [],
    },
    {
      id: 'TN',
      name: 'Tunisia',
      phoneCode: '216',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'TO',
      name: 'Tonga',
      phoneCode: '676',
      type: 'C',
      provinces: [],
    },
    {
      id: 'TR',
      name: 'Turkey',
      phoneCode: '90',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'TT',
      name: 'Trinidad and Tobago',
      phoneCode: '1',
      type: 'C',
      provinces: [],
    },
    {
      id: 'TV',
      name: 'Tuvalu',
      phoneCode: '688',
      type: 'C',
      provinces: [],
    },
    {
      id: 'TW',
      name: 'Taiwan',
      phoneCode: '886',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'TZ',
      name: 'Tanzania',
      phoneCode: '255',
      type: 'C',
      provinces: [],
    },
    {
      id: 'AE',
      name: 'United Arab Emirates',
      phoneCode: '971',
      type: 'C',
      provinces: [],
    },
    {
      id: 'GB',
      name: 'United Kingdom',
      phoneCode: '44',
      type: 'CP',
      provinces: [],
    },
    // {
    //   "id": "PU",
    //   "name": "U.S. Miscellaneous Pacific Islands",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    // {
    //   "id": "SU",
    //   "name": "Union of Soviet Socialist Republics",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'UA',
      name: 'Ukraine',
      phoneCode: '380',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'UG',
      name: 'Uganda',
      phoneCode: '256',
      type: 'C',
      provinces: [],
    },
    // {
    //   "id": "UM",
    //   "name": "U.S. Minor Outlying Islands",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'US',
      name: 'United States',
      phoneCode: '1',
      type: 'CP',
      provinces: [
        {
          id: '156',
          name: 'Armed Forces America',
          code: 'AA',
        },
        {
          id: '157',
          name: 'Armed Forces Europe',
          code: 'AE',
        },
        {
          id: '16',
          name: 'Alaska',
          code: 'AK',
        },
        {
          id: '21',
          name: 'Alabama',
          code: 'AL',
        },
        {
          id: '158',
          name: 'Armed Forces Pacific',
          code: 'AP',
        },
        {
          id: '23',
          name: 'Arkansas',
          code: 'AR',
        },
        {
          id: '1498',
          name: 'AMERICAN SAMOA',
          code: 'AS',
        },
        {
          id: '25',
          name: 'Arizona',
          code: 'AZ',
        },
        {
          id: '26',
          name: 'California',
          code: 'CA',
        },
        {
          id: '27',
          name: 'Colorado',
          code: 'CO',
        },
        {
          id: '28',
          name: 'Connecticut',
          code: 'CT',
        },
        {
          id: '29',
          name: 'District of Columbia',
          code: 'DC',
        },
        {
          id: '30',
          name: 'Delaware',
          code: 'DE',
        },
        {
          id: '31',
          name: 'Florida',
          code: 'FL',
        },
        {
          id: '1499',
          name: 'FEDERATED STATES OF MICRONESIA',
          code: 'FM',
        },
        {
          id: '33',
          name: 'Georgia',
          code: 'GA',
        },
        {
          id: '1500',
          name: 'GUAM',
          code: 'GU',
        },
        {
          id: '35',
          name: 'Hawaii',
          code: 'HI',
        },
        {
          id: '36',
          name: 'Iowa',
          code: 'IA',
        },
        {
          id: '37',
          name: 'Idaho',
          code: 'ID',
        },
        {
          id: '38',
          name: 'Illinois',
          code: 'IL',
        },
        {
          id: '39',
          name: 'Indiana',
          code: 'IN',
        },
        {
          id: '40',
          name: 'Kansas',
          code: 'KS',
        },
        {
          id: '41',
          name: 'Kentucky',
          code: 'KY',
        },
        {
          id: '42',
          name: 'Louisiana',
          code: 'LA',
        },
        {
          id: '43',
          name: 'Massachusetts',
          code: 'MA',
        },
        {
          id: '44',
          name: 'Maryland',
          code: 'MD',
        },
        {
          id: '45',
          name: 'Maine',
          code: 'ME',
        },
        {
          id: '1501',
          name: 'MARSHALL ISLANDS',
          code: 'MH',
        },
        {
          id: '47',
          name: 'Michigan',
          code: 'MI',
        },
        {
          id: '48',
          name: 'Minnesota',
          code: 'MN',
        },
        {
          id: '49',
          name: 'Missouri',
          code: 'MO',
        },
        {
          id: '1502',
          name: 'NORTHERN MARIANA ISLANDS',
          code: 'MP',
        },
        {
          id: '51',
          name: 'Mississippi',
          code: 'MS',
        },
        {
          id: '52',
          name: 'Montana',
          code: 'MT',
        },
        {
          id: '53',
          name: 'North Carolina',
          code: 'NC',
        },
        {
          id: '54',
          name: 'North Dakota',
          code: 'ND',
        },
        {
          id: '55',
          name: 'Nebraska',
          code: 'NE',
        },
        {
          id: '56',
          name: 'New Hampshire',
          code: 'NH',
        },
        {
          id: '57',
          name: 'New Jersey',
          code: 'NJ',
        },
        {
          id: '58',
          name: 'New Mexico',
          code: 'NM',
        },
        {
          id: '59',
          name: 'Nevada',
          code: 'NV',
        },
        {
          id: '60',
          name: 'New York',
          code: 'NY',
        },
        {
          id: '61',
          name: 'Ohio',
          code: 'OH',
        },
        {
          id: '62',
          name: 'Oklahoma',
          code: 'OK',
        },
        {
          id: '63',
          name: 'Oregon',
          code: 'OR',
        },
        {
          id: '64',
          name: 'Pennsylvania',
          code: 'PA',
        },
        {
          id: '65',
          name: 'Puerto Rico',
          code: 'PR',
        },
        {
          id: '1503',
          name: 'PALAU',
          code: 'PW',
        },
        {
          id: '67',
          name: 'Rhode Island',
          code: 'RI',
        },
        {
          id: '68',
          name: 'South Carolina',
          code: 'SC',
        },
        {
          id: '69',
          name: 'South Dakota',
          code: 'SD',
        },
        {
          id: '70',
          name: 'Tennessee',
          code: 'TN',
        },
        {
          id: '71',
          name: 'Texas',
          code: 'TX',
        },
        {
          id: '72',
          name: 'Utah',
          code: 'UT',
        },
        {
          id: '73',
          name: 'Virginia',
          code: 'VA',
        },
        {
          id: '159',
          name: 'Virgin Islands',
          code: 'VI',
        },
        {
          id: '75',
          name: 'Vermont',
          code: 'VT',
        },
        {
          id: '76',
          name: 'Washington',
          code: 'WA',
        },
        {
          id: '77',
          name: 'Wisconsin',
          code: 'WI',
        },
        {
          id: '78',
          name: 'West Virginia',
          code: 'WV',
        },
        {
          id: '79',
          name: 'Wyoming',
          code: 'WY',
        },
      ],
    },
    {
      id: 'UY',
      name: 'Uruguay',
      phoneCode: '598',
      type: 'C',
      provinces: [],
    },
    {
      id: 'UZ',
      name: 'Uzbekistan',
      phoneCode: '998',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'VI',
      name: 'U.S. Virgin Islands',
      phoneCode: '1',
      type: 'CP',
      provinces: [
        {
          id: '1525',
          name: 'ST. CROIX',
          code: 'STCROU',
        },
      ],
    },
    // {
    //   "id": "ZZ",
    //   "name": "Unknown or Invalid Region",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'VA',
      name: 'Vatican City',
      phoneCode: '39',
      type: '',
      provinces: [],
    },
    {
      id: 'VE',
      name: 'Venezuela',
      phoneCode: '58',
      type: 'C',
      provinces: [
        {
          id: '1504',
          name: 'ANZOATEGUI',
          code: 'AN',
        },
        {
          id: '1505',
          name: 'APURE',
          code: 'AP',
        },
        {
          id: '1506',
          name: 'ARAGUA',
          code: 'AR',
        },
        {
          id: '1507',
          name: 'BARINAS',
          code: 'BA',
        },
        {
          id: '1508',
          name: 'BOLIVAR',
          code: 'BO',
        },
        {
          id: '1509',
          name: 'CARABOBO',
          code: 'CA',
        },
        {
          id: '1510',
          name: 'COJEDES',
          code: 'CO',
        },
        {
          id: '1511',
          name: 'DELTA AMACURO',
          code: 'DA',
        },
        {
          id: '1512',
          name: 'FALCON',
          code: 'FA',
        },
        {
          id: '1513',
          name: 'GUARICO',
          code: 'GU',
        },
        {
          id: '1514',
          name: 'LARA',
          code: 'LA',
        },
        {
          id: '1515',
          name: 'MERIDA',
          code: 'ME',
        },
        {
          id: '1516',
          name: 'MIRANDA',
          code: 'MI',
        },
        {
          id: '1517',
          name: 'MONAGAS',
          code: 'MO',
        },
        {
          id: '1518',
          name: 'NUEVA ESPARTA',
          code: 'NE',
        },
        {
          id: '1519',
          name: 'PORTUGUESA',
          code: 'PO',
        },
        {
          id: '1520',
          name: 'SUCRE',
          code: 'SU',
        },
        {
          id: '1521',
          name: 'TACHIRA',
          code: 'TA',
        },
        {
          id: '1522',
          name: 'TRUJILLO',
          code: 'TR',
        },
        {
          id: '1523',
          name: 'YARACUY',
          code: 'YA',
        },
        {
          id: '1524',
          name: 'ZULIA',
          code: 'ZU',
        },
      ],
    },
    {
      id: 'VN',
      name: 'Vietnam',
      phoneCode: '84',
      type: 'CP',
      provinces: [],
    },
    {
      id: 'VU',
      name: 'Vanuatu',
      phoneCode: '678',
      type: 'C',
      provinces: [],
    },
    // {
    //   "id": "EH",
    //   "name": "Western Sahara",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'WF',
      name: 'Wallis and Futuna',
      phoneCode: '681',
      type: '',
      provinces: [],
    },
    // {
    //   "id": "WK",
    //   "name": "Wake Island",
    //   "phoneCode": null,
    //   "type": "",
    //   "provinces": []
    // },
    {
      id: 'YE',
      name: 'Yemen',
      phoneCode: '967',
      type: 'C',
      provinces: [],
    },
    {
      id: 'ZM',
      name: 'Zambia',
      phoneCode: '260',
      type: 'C',
      provinces: [],
    },
    {
      id: 'ZW',
      name: 'Zimbabwe',
      phoneCode: '263',
      type: 'C',
      provinces: [],
    },
    {
      id: 'AX',
      name: 'Åland Islands',
      phoneCode: '358',
      type: '',
      provinces: [],
    },
  ];

  const provinceRecord: Record<string, VerykType.Province[]> = regions.reduce((acc, region) => {
    acc[region.id] = region.provinces;
    return acc;
  }, {} as Record<string, VerykType.Province[]>);

  return {
    regions,
    provinceRecord,
    // getDictItems,
    // getDictItem,
    // getDictItemCode,
  };
};

export const getRegionById = (regions: VerykType.Region[], id: string | undefined) => {
  return regions.find((region) => region.id === id);
};
