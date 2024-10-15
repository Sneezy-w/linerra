import { Table, Entity, schema, string, number, prefix, map, list } from 'dynamodb-toolbox';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import Dicts from '../enum/dicts';
//import { InitiationDO, DestinationDO } from '../models/veryk/address.entity';
//import { PackageDO } from '../models/veryk/package.entity';
//import { now } from '../utils/utils';

const dynamoClient = process.env.IS_OFFLINE ? new DynamoDBClient({
  region: 'localhost',
  endpoint: `http://localhost:${process.env.LOCAL_DYNAMO_DB_PORT}`,
  credentials: {
    accessKeyId: 'MockAccessKeyId',
    secretAccessKey: 'MockSecretAccessKey'
  },
}) : new DynamoDBClient();
const documentClient = DynamoDBDocumentClient.from(dynamoClient, {
  marshallOptions: {
    removeUndefinedValues: true,
    convertEmptyValues: false
  },
});


export const MainTable = new Table({
  name: process.env.MAIN_TABLE!,
  partitionKey: { name: 'PK', type: 'string' },
  sortKey: { name: 'SK', type: 'string' },
  indexes: {
    GSI1: {
      type: 'global',
      partitionKey: { name: 'GSI1PK', type: 'string' },
      sortKey: { name: 'GSI1SK', type: 'string' },
    },
    GSI2: {
      type: 'global',
      partitionKey: { name: 'GSI2PK', type: 'string' },
      sortKey: { name: 'GSI2SK', type: 'string' },
    },
  },
  documentClient
});

export const AgentSession = new Entity({
  name: 'AgentSession',
  table: MainTable,
  schema: schema({
    userId: string().required().transform(prefix('AGENT')).savedAs('PK').key(),
    sessionId: string().required().transform(prefix('SESSION')).savedAs('SK').key(),
    refreshToken: string().required(),
    expirationTime: number().required(),
  }),
  // computeKey: ({ userId, sessionId }) => ({
  //   PK: userId,
  //   SK: sessionId,
  // }),
});

export const Shipment = new Entity({
  name: 'Shipment',
  table: MainTable,
  // computeKey: ({ stationId }) => ({
  //   PK: 'STATION#' + stationId,
  //   SK: 'SHIPMENT#' + now(),
  //   //GSI1PK: "SHIPMENT_NO",
  //   //GSI1SK: number,
  // }),

  schema: schema({
    number: string().required().transform(prefix('SHIPMENT')).savedAs('PK').key(),
    SK: string().const("SHIPMENT").key().default("SHIPMENT"),
    stationId: string().required().transform(prefix('STATION')).savedAs('GSI1PK'),
    sortTimestamp: string().required().transform(prefix('SHIPMENT')).savedAs('GSI1SK'),
    //SK: string().transform(prefix('SHIPMENT')).savedAs('SK').key().default(now()),
    //created: string().default(now).key(),
    //aa: string().const("SHIPMENT_NO").key().savedAs('GSI1PK').required(),

    //GSI1PK: string().const("SHIPMENT_NO").key().default("SHIPMENT_NO"),


    GSI2PK: string().const("SHIPMENT").default("SHIPMENT"),
    //GSI2SK: string().required().transform(prefix('SHIPMENT')).savedAs('GSI2SK').key(),

    externalId: string().optional(),
    waybillNumber: string().optional(),
    serviceId: string().required(),
    status: string().enum(...Dicts.shipmentStatus.map(status => status.value)).required(),

    //initiationRegionId: string().optional(),
    //destinationRegionId: string().optional(),
    initiation: map({
      regionId: string().required(),
      postalCode: string().required(),
      name: string().optional(),
      company: string().optional(),
      phone: string().optional(),
      province: map({
        id: string().required(),
        name: string().required(),
        code: string().required(),
      }).optional(),
      city: string().optional(),
      address: string().optional(),
      address2: string().optional(),
      address3: string().optional(),
    }).required(),
    destination: map({
      regionId: string().required(),
      postalCode: string().required(),
      name: string().optional(),
      company: string().optional(),
      phone: string().optional(),
      province: map({
        id: string().required(),
        name: string().required(),
        code: string().required(),
      }).optional(),
      city: string().optional(),
      address: string().optional(),
      address2: string().optional(),
      address3: string().optional(),
      type: string().optional(),
      email: string().optional(),
    }).required(),
    destinationLocalized: map({
      regionId: string().required(),
      postalCode: string().required(),
      name: string().optional(),
      company: string().optional(),
      phone: string().optional(),
      province: map({
        id: string().required(),
        name: string().required(),
        code: string().required(),
      }).optional(),
      city: string().optional(),
      address: string().optional(),
      address2: string().optional(),
      address3: string().optional(),
    }).optional(),
    package: map({
      type: string().required(),
      packages: list(map({
        waybillNumber: string().optional(),
        weight: number().required(),
        dimension: map({
          length: number().required(),
          width: number().required(),
          height: number().required(),
        }).optional(),
        insurance: map({
          code: string().required(),
          symbol: string().required(),
          value: string().required(),
        }).optional(),

        additional: map({
          DC: map({
            state: string().required(), // Yes or No
            type: string().optional(), // 1:No Signature, 2:Signature Required, 3:Adult Signature Required
          }).optional(),
          COD: map({
            state: string().required(), // Yes or No
            amount: number().optional(), // Collect on Delivery amount(required when state is true)
            fund_type: string().optional(), // Fund Type,optionst(required when state is true): 0: check,cashier’s check or money order - no cash allowed, 8: cashier’s check or money order - no cash allowed
          }).optional(),
          AH: map({
            state: string().required(), // Additional Handling Yes or No(option:true/false)
          }).optional(),
          ReferenceNumber: map({
            state: string().required(), // Reference Number Yes or No(option:true/false)
            number: string().optional(), // Reference Number
          }).optional(),
          info: map({
            state: string().required(), // To the UAE Yes or No(option:true/false)
            ItemDescriptionForClearance: string().optional(), // Description For Clearanc(required when state is true)
          }).optional(),
          IM: map({
            state: string().required(), // Yes or No(option:true/false) Destination is mandatory for Mexico.
            description: string().optional(),
          }).optional(),
          packcode: map({
            state: string().required(), // Yes or No(option:true/false) Destination is mandatory for Mexico.
          }).optional(),
        }).optional(),

        sinsured: number().optional(), // Veryk insurance, available when fedex
      })).required(),

    }).required(),

    product: list(map({
      name: string().required(),
      qty: number().optional(),
      price: number().optional(),
      unit: string().optional(),
      origin: string().optional(),
      HScode: string().optional(),
    })).optional(),

    option: map({
      memo: string().optional(),
      packingFee: number().optional(),
    }).optional(),

    sadditional: map({
      DC: map({ // Delivery Confirmation(available when UPS,Canada Post) UPS: Not available when shipping to CA
        state: string().required(), // Delivery Confirmation Yes or No(option:true/false)
        type: string().optional(), // Confirmation Type(available when UPS),options: 1:Signature Required, 2:Adult Signature Required
      }).optional(),
      SO: map({ // Signature(available when Canada Post)
        state: string().required(), // Signature Yes or No
        "signature-type": string().optional(), // Signature Type,options: SO:Signature; PA18:Proof of Age Required - 18; PA19:Proof of Age Required - 19
      }).optional(),
      HFP: map({ // Hold for Pickup(available when Canada Post) Card for pickup(available when Canada Post TO CA)
        state: string().required(), // Card for pickup Yes or No(option:true/false)
      }).optional(),
      DNS: map({ // Do not safe drop(available when Canada Post to CA)
        state: string().required(), // Yes or No(option:true/false)
      }).optional(),
      LAD: map({ // Leave at door - do not card(available when Canada Post to CA)
        state: string().required(), // Yes or No(option:true/false)
      }).optional(),
      _RFE: map({ // Reason For Export(available where Canada Post and not ship to CA)
        state: string().required(), // Reason For Export options:DOC:Document; SAM:Commercial Sample; REP:Repair Or Warranty; SOG:Sale Of Goods; OTH:Other
        "other-reason": string().optional(), // Other Reason(required when state is OTH)
      }).optional(),
      EDI: map({ // E-Commercial Invoice(available when DHL,UPS,FedEx) International non-document packages
        state: string().required(), // E-Commercial Invoice Yes or No(option:true/false)
      }).optional(),
      signature: map({ // Delivery Confirmation(available where Fedex) In Canada and the U.S., Indirect Signature Required is available for residential shipments only.
        state: string().required(), // Signature Yes or No
        type: string().optional(), // Confirmation Type(required where state is true)
      }).optional(),
      RS: map({  // Return Service Only available when UPS
        state: string().required(), // Return Service Yes or No(option:true/false)
        code: string().optional(), // Return Service Type,optional valid values: 2,3,5,8,9
        description: string().optional(), // Return Service Description
      }).optional(),
      DG: map({ // Dangerous Goods(available when DHL)
        state: string().required(), // Yes or No(option:true/false)
        type: string().optional(), // Dangerous Goods Type,optional valid values
      }).optional(),

      DIT: map({ // Use DHL official invoice, this option cannot be used with EDI (electronic invoice)
        state: string().required(), // Yes or No(option:true/false)
        type: string().optional(), // Invoice Type,optional valid values: CMI (Commercail Invoice)，PFI (Proforma Invoice)
      }).optional(),
      TermsOfTrade: map({ // TermsOfTrade,supported by freight forwarder (FEDEX)
        state: string().required(), // Valid values: DDP, DDU (DDP must confirm that the admin has already preset the payment account)
      }).optional(),
      IOSS: map({ // IOSS for EU tax collection(Canada Post, Fedex available)
        state: string().required(), // Valid values: true,false  Valid values: 0 (No) or 1 (Yes)
        ioss_id: string().optional(), // EU IOSS ID  Required when IOSS/state value is 1. Maximum length 13 digits.
        type: string().optional(), // Required when choosing FEDEX as the carrier. Valid values: "PERSONAL_NATIONAL", "PERSONAL_STATE", "FEDERAL", "BUSINESS_NATIONAL", "BUSINESS_STATE", "BUSINESS_UNION".
      }).optional(),

    }).optional(),

    price: map({
      msrp: map({
        code: string().required(),
        symbol: string().required(),
        value: string().required(),
      }).optional(),
      details: list(map({
        code: string().required(),
        description: string().required(),
        price: map({
          code: string().required(),
          symbol: string().required(),
          value: string().required(),
        }).required(),
      })).optional(),
      charges: list(map({
        code: string().required(),
        description: string().required(),
        price: map({
          code: string().required(),
          symbol: string().required(),
          value: string().required(),
        }).required(),
      })).optional(),
    }).optional(),
    payments: list(map({
      dateTime: string().required(),
      description: string().required(),
      subtotal: map({
        code: string().required(),
        symbol: string().required(),
        value: string().required(),
      }).required(),
    })).optional(),
    total: map({
      code: string().required(),
      symbol: string().required(),
      value: string().required(),
    }).optional(),
    submittedAt: string().optional(),

    labelFile: map({
      label: string().required(),
      invoice: string().optional(),
      delivery: string().optional(),
    }).optional(),
  }).and(_prevSchema => ({
    GSI2SK: string().required().link<typeof _prevSchema>(
      ({ number }) => number
    ),
    initiationRegionId: string().required().link<typeof _prevSchema>(
      ({ initiation }) => initiation.regionId
    ),
    destinationRegionId: string().required().link<typeof _prevSchema>(
      ({ destination }) => destination.regionId
    ),
  })),
});
