import React, { useMemo } from 'react';
import { PageContainer, ProCard, } from '@ant-design/pro-components';
import { Tag, Typography, Space, Button, Table, Dropdown, MenuProps, Row, Col, Divider, Timeline } from 'antd';
import { Box } from 'lucide-react';
import { getDictItem } from '@/models/dicts';
import { Link, useModel } from '@umijs/max';
import { getNationalPhoneNumber, getPriceDetails, getTotal, getTotalPaid } from '../utils/utils';
import { getRegionById } from '@/models/regions';
import { CalendarOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import { getCarrierServiceById } from '@/models/carriers';

const trackingInfos: VerykType.TrackingInfoApiResVO[] = [
  {
    "id": "U010111390",
    "number": "1ZV49E886793443586",
    "carrier": {
      "id": "5",
      "code": "ups",
      "group_code": "ups",
      "name": "UPS Canada",
      "region_id": "CA"
    },
    "tracking_url": "https://wwwapps.ups.com/WebTracking/processInputRequest?AgreeToTermsAndConditions=yes&loc=en_CA&tracknum=1ZV49E886793443586&Requester=trkinppg",
    "list": [
      {
        "context": "Thank you for using VerykShip",
        "timestamp": 1723267071,
        "location": "",
        "signed": 1,
        "datetime": {
          "PRC": "Sat, 10 Aug 2024 13:17:51 +0800",
          "EST": "Sat, 10 Aug 2024 00:17:51 -0500",
          "GMT": "Sat, 10 Aug 2024 05:17:51 +0000"
        }
      },
      {
        "context": "DELIVERED",
        "timestamp": "1723267070",
        "location": "GUANG ZHOU,China",
        "signed": 0,
        "datetime": {
          "PRC": "Sat, 10 Aug 2024 13:17:50 +0800",
          "EST": "Sat, 10 Aug 2024 00:17:50 -0500",
          "GMT": "Sat, 10 Aug 2024 05:17:50 +0000"
        }
      },
      {
        "context": "Import charges are due for this package. Select Pay Now (where available) or pay at delivery.",
        "timestamp": "1723279480",
        "location": "Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Sat, 10 Aug 2024 16:44:40 +0800",
          "EST": "Sat, 10 Aug 2024 03:44:40 -0500",
          "GMT": "Sat, 10 Aug 2024 08:44:40 +0000"
        }
      },
      {
        "context": "Duties or taxes are due on this package.",
        "timestamp": "1723279475",
        "location": "Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Sat, 10 Aug 2024 16:44:35 +0800",
          "EST": "Sat, 10 Aug 2024 03:44:35 -0500",
          "GMT": "Sat, 10 Aug 2024 08:44:35 +0000"
        }
      },
      {
        "context": "Out For Delivery",
        "timestamp": "1723251370",
        "location": "Guangzhou,China",
        "signed": "0",
        "datetime": {
          "PRC": "Sat, 10 Aug 2024 08:56:10 +0800",
          "EST": "Fri, 09 Aug 2024 19:56:10 -0500",
          "GMT": "Sat, 10 Aug 2024 00:56:10 +0000"
        }
      },
      {
        "context": "Arrived at Facility",
        "timestamp": "1723250640",
        "location": "Guangzhou,China",
        "signed": "0",
        "datetime": {
          "PRC": "Sat, 10 Aug 2024 08:44:00 +0800",
          "EST": "Fri, 09 Aug 2024 19:44:00 -0500",
          "GMT": "Sat, 10 Aug 2024 00:44:00 +0000"
        }
      },
      {
        "context": "Departed from Facility",
        "timestamp": "1723247400",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Sat, 10 Aug 2024 07:50:00 +0800",
          "EST": "Fri, 09 Aug 2024 18:50:00 -0500",
          "GMT": "Fri, 09 Aug 2024 23:50:00 +0000"
        }
      },
      {
        "context": "Your package is on the way",
        "timestamp": "1723241626",
        "location": "Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Sat, 10 Aug 2024 06:13:46 +0800",
          "EST": "Fri, 09 Aug 2024 17:13:46 -0500",
          "GMT": "Fri, 09 Aug 2024 22:13:46 +0000"
        }
      },
      {
        "context": "Your package has been released by the government agency.",
        "timestamp": "1723241626",
        "location": "Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Sat, 10 Aug 2024 06:13:46 +0800",
          "EST": "Fri, 09 Aug 2024 17:13:46 -0500",
          "GMT": "Fri, 09 Aug 2024 22:13:46 +0000"
        }
      },
      {
        "context": "Warehouse Scan",
        "timestamp": "1723234186",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Sat, 10 Aug 2024 04:09:46 +0800",
          "EST": "Fri, 09 Aug 2024 15:09:46 -0500",
          "GMT": "Fri, 09 Aug 2024 20:09:46 +0000"
        }
      },
      {
        "context": "Import Scan",
        "timestamp": "1723234185",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Sat, 10 Aug 2024 04:09:45 +0800",
          "EST": "Fri, 09 Aug 2024 15:09:45 -0500",
          "GMT": "Fri, 09 Aug 2024 20:09:45 +0000"
        }
      },
      {
        "context": "UPS is preparing your package for clearance. We will notify you if additional information is needed.",
        "timestamp": "1723184596",
        "location": "Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Fri, 09 Aug 2024 14:23:16 +0800",
          "EST": "Fri, 09 Aug 2024 01:23:16 -0500",
          "GMT": "Fri, 09 Aug 2024 06:23:16 +0000"
        }
      },
      {
        "context": "UPS has received the information needed to submit your package for clearance.",
        "timestamp": "1723184474",
        "location": "Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Fri, 09 Aug 2024 14:21:14 +0800",
          "EST": "Fri, 09 Aug 2024 01:21:14 -0500",
          "GMT": "Fri, 09 Aug 2024 06:21:14 +0000"
        }
      },
      {
        "context": "UPS is preparing your package for clearance. We will notify you if additional information is needed.",
        "timestamp": "1723150618",
        "location": "Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Fri, 09 Aug 2024 04:56:58 +0800",
          "EST": "Thu, 08 Aug 2024 15:56:58 -0500",
          "GMT": "Thu, 08 Aug 2024 20:56:58 +0000"
        }
      },
      {
        "context": "Warehouse Scan",
        "timestamp": "1723147816",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Fri, 09 Aug 2024 04:10:16 +0800",
          "EST": "Thu, 08 Aug 2024 15:10:16 -0500",
          "GMT": "Thu, 08 Aug 2024 20:10:16 +0000"
        }
      },
      {
        "context": "Warehouse Scan",
        "timestamp": "1723053199",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Thu, 08 Aug 2024 01:53:19 +0800",
          "EST": "Wed, 07 Aug 2024 12:53:19 -0500",
          "GMT": "Wed, 07 Aug 2024 17:53:19 +0000"
        }
      },
      {
        "context": "Warehouse Scan",
        "timestamp": "1722967509",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Wed, 07 Aug 2024 02:05:09 +0800",
          "EST": "Tue, 06 Aug 2024 13:05:09 -0500",
          "GMT": "Tue, 06 Aug 2024 18:05:09 +0000"
        }
      },
      {
        "context": "Warehouse Scan",
        "timestamp": "1722884199",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Tue, 06 Aug 2024 02:56:39 +0800",
          "EST": "Mon, 05 Aug 2024 13:56:39 -0500",
          "GMT": "Mon, 05 Aug 2024 18:56:39 +0000"
        }
      },
      {
        "context": "Your package may be delayed due to a required x-ray inspection. / Your package is on the way",
        "timestamp": "1722732367",
        "location": "Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Sun, 04 Aug 2024 08:46:07 +0800",
          "EST": "Sat, 03 Aug 2024 19:46:07 -0500",
          "GMT": "Sun, 04 Aug 2024 00:46:07 +0000"
        }
      },
      {
        "context": "Warehouse Scan",
        "timestamp": "1722719552",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Sun, 04 Aug 2024 05:12:32 +0800",
          "EST": "Sat, 03 Aug 2024 16:12:32 -0500",
          "GMT": "Sat, 03 Aug 2024 21:12:32 +0000"
        }
      },
      {
        "context": "Import Scan",
        "timestamp": "1722719162",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Sun, 04 Aug 2024 05:06:02 +0800",
          "EST": "Sat, 03 Aug 2024 16:06:02 -0500",
          "GMT": "Sat, 03 Aug 2024 21:06:02 +0000"
        }
      },
      {
        "context": "Warehouse Scan",
        "timestamp": "1722631224",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Sat, 03 Aug 2024 04:40:24 +0800",
          "EST": "Fri, 02 Aug 2024 15:40:24 -0500",
          "GMT": "Fri, 02 Aug 2024 20:40:24 +0000"
        }
      },
      {
        "context": "Import Scan",
        "timestamp": "1722631223",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Sat, 03 Aug 2024 04:40:23 +0800",
          "EST": "Fri, 02 Aug 2024 15:40:23 -0500",
          "GMT": "Fri, 02 Aug 2024 20:40:23 +0000"
        }
      },
      {
        "context": "Your package may be delayed due to a required x-ray inspection.",
        "timestamp": "1722625835",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Sat, 03 Aug 2024 03:10:35 +0800",
          "EST": "Fri, 02 Aug 2024 14:10:35 -0500",
          "GMT": "Fri, 02 Aug 2024 19:10:35 +0000"
        }
      },
      {
        "context": "Your package may be delayed due to a required x-ray inspection.",
        "timestamp": "1722609210",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Fri, 02 Aug 2024 22:33:30 +0800",
          "EST": "Fri, 02 Aug 2024 09:33:30 -0500",
          "GMT": "Fri, 02 Aug 2024 14:33:30 +0000"
        }
      },
      {
        "context": "Arrived at Facility",
        "timestamp": "1722590580",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Fri, 02 Aug 2024 17:23:00 +0800",
          "EST": "Fri, 02 Aug 2024 04:23:00 -0500",
          "GMT": "Fri, 02 Aug 2024 09:23:00 +0000"
        }
      },
      {
        "context": "UPS initiated contact with the sender to obtain clearance information. Once received, UPS will submit for clearance.",
        "timestamp": "1722579141",
        "location": "Shenzhen,China",
        "signed": "0",
        "datetime": {
          "PRC": "Fri, 02 Aug 2024 14:12:21 +0800",
          "EST": "Fri, 02 Aug 2024 01:12:21 -0500",
          "GMT": "Fri, 02 Aug 2024 06:12:21 +0000"
        }
      },
      {
        "context": "Departed from Facility",
        "timestamp": "1722561660",
        "location": "Dubai Airport,United Arab Emirates",
        "signed": "0",
        "datetime": {
          "PRC": "Fri, 02 Aug 2024 09:21:00 +0800",
          "EST": "Thu, 01 Aug 2024 20:21:00 -0500",
          "GMT": "Fri, 02 Aug 2024 01:21:00 +0000"
        }
      },
      {
        "context": "Arrived at Facility",
        "timestamp": "1722554880",
        "location": "Dubai Airport,United Arab Emirates",
        "signed": "0",
        "datetime": {
          "PRC": "Fri, 02 Aug 2024 07:28:00 +0800",
          "EST": "Thu, 01 Aug 2024 18:28:00 -0500",
          "GMT": "Thu, 01 Aug 2024 23:28:00 +0000"
        }
      },
      {
        "context": "Departed from Facility",
        "timestamp": "1722518820",
        "location": "Louisville,United States",
        "signed": "0",
        "datetime": {
          "PRC": "Thu, 01 Aug 2024 21:27:00 +0800",
          "EST": "Thu, 01 Aug 2024 08:27:00 -0500",
          "GMT": "Thu, 01 Aug 2024 13:27:00 +0000"
        }
      },
      {
        "context": "Import Scan",
        "timestamp": "1722508341",
        "location": "Louisville,United States",
        "signed": "0",
        "datetime": {
          "PRC": "Thu, 01 Aug 2024 18:32:21 +0800",
          "EST": "Thu, 01 Aug 2024 05:32:21 -0500",
          "GMT": "Thu, 01 Aug 2024 10:32:21 +0000"
        }
      },
      {
        "context": "Warehouse Scan",
        "timestamp": "1722502825",
        "location": "Louisville,United States",
        "signed": "0",
        "datetime": {
          "PRC": "Thu, 01 Aug 2024 17:00:25 +0800",
          "EST": "Thu, 01 Aug 2024 04:00:25 -0500",
          "GMT": "Thu, 01 Aug 2024 09:00:25 +0000"
        }
      },
      {
        "context": "Arrived at Facility",
        "timestamp": "1722494160",
        "location": "Louisville,United States",
        "signed": "0",
        "datetime": {
          "PRC": "Thu, 01 Aug 2024 14:36:00 +0800",
          "EST": "Thu, 01 Aug 2024 01:36:00 -0500",
          "GMT": "Thu, 01 Aug 2024 06:36:00 +0000"
        }
      },
      {
        "context": "Departed from Facility",
        "timestamp": "1722468180",
        "location": "Winnipeg,Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Thu, 01 Aug 2024 07:23:00 +0800",
          "EST": "Wed, 31 Jul 2024 18:23:00 -0500",
          "GMT": "Wed, 31 Jul 2024 23:23:00 +0000"
        }
      },
      {
        "context": "Export Scan",
        "timestamp": "1722464190",
        "location": "Winnipeg,Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Thu, 01 Aug 2024 06:16:30 +0800",
          "EST": "Wed, 31 Jul 2024 17:16:30 -0500",
          "GMT": "Wed, 31 Jul 2024 22:16:30 +0000"
        }
      },
      {
        "context": "Arrived at Facility",
        "timestamp": "1722375672",
        "location": "Winnipeg,Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Wed, 31 Jul 2024 05:41:12 +0800",
          "EST": "Tue, 30 Jul 2024 16:41:12 -0500",
          "GMT": "Tue, 30 Jul 2024 21:41:12 +0000"
        }
      },
      {
        "context": "Pickup Scan",
        "timestamp": "1722363909",
        "location": "Winnipeg,Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Wed, 31 Jul 2024 02:25:09 +0800",
          "EST": "Tue, 30 Jul 2024 13:25:09 -0500",
          "GMT": "Tue, 30 Jul 2024 18:25:09 +0000"
        }
      },
      {
        "context": "Shipper created a label, UPS has not received the package yet.",
        "timestamp": "1722361699",
        "location": "Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Wed, 31 Jul 2024 01:48:19 +0800",
          "EST": "Tue, 30 Jul 2024 12:48:19 -0500",
          "GMT": "Tue, 30 Jul 2024 17:48:19 +0000"
        }
      },
      {
        "context": "Order created at VerykShip",
        "timestamp": "1722287778",
        "location": "",
        "signed": 0,
        "datetime": {
          "PRC": "Tue, 30 Jul 2024 05:16:18 +0800",
          "EST": "Mon, 29 Jul 2024 16:16:18 -0500",
          "GMT": "Mon, 29 Jul 2024 21:16:18 +0000"
        }
      }
    ]
  },
  {
    "id": "U010116065",
    "number": "1ZV49E880495458550",
    "carrier": {
      "id": "5",
      "code": "ups",
      "group_code": "ups",
      "name": "UPS Canada",
      "region_id": "CA"
    },
    "tracking_url": "https://wwwapps.ups.com/WebTracking/processInputRequest?AgreeToTermsAndConditions=yes&loc=en_CA&tracknum=1ZV49E880495458550&Requester=trkinppg",
    "list": [
      {
        "context": "Thank you for using VerykShip",
        "timestamp": 1725013832,
        "location": "",
        "signed": 1,
        "datetime": {
          "PRC": "Fri, 30 Aug 2024 18:30:32 +0800",
          "EST": "Fri, 30 Aug 2024 05:30:32 -0500",
          "GMT": "Fri, 30 Aug 2024 10:30:32 +0000"
        }
      },
      {
        "context": "DELIVERED",
        "timestamp": "1725013831",
        "location": "HONGKONG,Hong Kong SAR China",
        "signed": 0,
        "datetime": {
          "PRC": "Fri, 30 Aug 2024 18:30:31 +0800",
          "EST": "Fri, 30 Aug 2024 05:30:31 -0500",
          "GMT": "Fri, 30 Aug 2024 10:30:31 +0000"
        }
      },
      {
        "context": "The package has been rescheduled for a future delivery date.",
        "timestamp": "1725008400",
        "location": "Kowloon Bay,Hong Kong SAR China",
        "signed": "0",
        "datetime": {
          "PRC": "Fri, 30 Aug 2024 17:00:00 +0800",
          "EST": "Fri, 30 Aug 2024 04:00:00 -0500",
          "GMT": "Fri, 30 Aug 2024 09:00:00 +0000"
        }
      },
      {
        "context": "Arrived at Facility",
        "timestamp": "1724972400",
        "location": "Kowloon Bay,Hong Kong SAR China",
        "signed": "0",
        "datetime": {
          "PRC": "Fri, 30 Aug 2024 07:00:00 +0800",
          "EST": "Thu, 29 Aug 2024 18:00:00 -0500",
          "GMT": "Thu, 29 Aug 2024 23:00:00 +0000"
        }
      },
      {
        "context": "Departed from Facility",
        "timestamp": "1724942160",
        "location": "Chek Lap Kok,Hong Kong SAR China",
        "signed": "0",
        "datetime": {
          "PRC": "Thu, 29 Aug 2024 22:36:00 +0800",
          "EST": "Thu, 29 Aug 2024 09:36:00 -0500",
          "GMT": "Thu, 29 Aug 2024 14:36:00 +0000"
        }
      },
      {
        "context": "Import Scan",
        "timestamp": "1724939505",
        "location": "Chek Lap Kok,Hong Kong SAR China",
        "signed": "0",
        "datetime": {
          "PRC": "Thu, 29 Aug 2024 21:51:45 +0800",
          "EST": "Thu, 29 Aug 2024 08:51:45 -0500",
          "GMT": "Thu, 29 Aug 2024 13:51:45 +0000"
        }
      },
      {
        "context": "Arrived at Facility",
        "timestamp": "1724909520",
        "location": "Chek Lap Kok,Hong Kong SAR China",
        "signed": "0",
        "datetime": {
          "PRC": "Thu, 29 Aug 2024 13:32:00 +0800",
          "EST": "Thu, 29 Aug 2024 00:32:00 -0500",
          "GMT": "Thu, 29 Aug 2024 05:32:00 +0000"
        }
      },
      {
        "context": "Departed from Facility",
        "timestamp": "1724867760",
        "location": "Anchorage,United States",
        "signed": "0",
        "datetime": {
          "PRC": "Thu, 29 Aug 2024 01:56:00 +0800",
          "EST": "Wed, 28 Aug 2024 12:56:00 -0500",
          "GMT": "Wed, 28 Aug 2024 17:56:00 +0000"
        }
      },
      {
        "context": "Arrived at Facility",
        "timestamp": "1724857860",
        "location": "Anchorage,United States",
        "signed": "0",
        "datetime": {
          "PRC": "Wed, 28 Aug 2024 23:11:00 +0800",
          "EST": "Wed, 28 Aug 2024 10:11:00 -0500",
          "GMT": "Wed, 28 Aug 2024 15:11:00 +0000"
        }
      },
      {
        "context": "Departed from Facility",
        "timestamp": "1724848620",
        "location": "Louisville,United States",
        "signed": "0",
        "datetime": {
          "PRC": "Wed, 28 Aug 2024 20:37:00 +0800",
          "EST": "Wed, 28 Aug 2024 07:37:00 -0500",
          "GMT": "Wed, 28 Aug 2024 12:37:00 +0000"
        }
      },
      {
        "context": "Arrived at Facility",
        "timestamp": "1724828880",
        "location": "Louisville,United States",
        "signed": "0",
        "datetime": {
          "PRC": "Wed, 28 Aug 2024 15:08:00 +0800",
          "EST": "Wed, 28 Aug 2024 02:08:00 -0500",
          "GMT": "Wed, 28 Aug 2024 07:08:00 +0000"
        }
      },
      {
        "context": "Departed from Facility",
        "timestamp": "1724802480",
        "location": "Winnipeg,Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Wed, 28 Aug 2024 07:48:00 +0800",
          "EST": "Tue, 27 Aug 2024 18:48:00 -0500",
          "GMT": "Tue, 27 Aug 2024 23:48:00 +0000"
        }
      },
      {
        "context": "Export Scan",
        "timestamp": "1724795881",
        "location": "Winnipeg,Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Wed, 28 Aug 2024 05:58:01 +0800",
          "EST": "Tue, 27 Aug 2024 16:58:01 -0500",
          "GMT": "Tue, 27 Aug 2024 21:58:01 +0000"
        }
      },
      {
        "context": "Arrived at Facility",
        "timestamp": "1724790951",
        "location": "Winnipeg,Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Wed, 28 Aug 2024 04:35:51 +0800",
          "EST": "Tue, 27 Aug 2024 15:35:51 -0500",
          "GMT": "Tue, 27 Aug 2024 20:35:51 +0000"
        }
      },
      {
        "context": "Pickup Scan",
        "timestamp": "1724784742",
        "location": "Winnipeg,Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Wed, 28 Aug 2024 02:52:22 +0800",
          "EST": "Tue, 27 Aug 2024 13:52:22 -0500",
          "GMT": "Tue, 27 Aug 2024 18:52:22 +0000"
        }
      },
      {
        "context": "Your package is currently at the UPS Access Point™ and is scheduled to be tendered to UPS.",
        "timestamp": "1724711336",
        "location": "Winnipeg,Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Tue, 27 Aug 2024 06:28:56 +0800",
          "EST": "Mon, 26 Aug 2024 17:28:56 -0500",
          "GMT": "Mon, 26 Aug 2024 22:28:56 +0000"
        }
      },
      {
        "context": "Drop-Off",
        "timestamp": "1724711280",
        "location": "Winnipeg,Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Tue, 27 Aug 2024 06:28:00 +0800",
          "EST": "Mon, 26 Aug 2024 17:28:00 -0500",
          "GMT": "Mon, 26 Aug 2024 22:28:00 +0000"
        }
      },
      {
        "context": "Shipper created a label, UPS has not received the package yet.",
        "timestamp": "1724610170",
        "location": "Canada",
        "signed": "0",
        "datetime": {
          "PRC": "Mon, 26 Aug 2024 02:22:50 +0800",
          "EST": "Sun, 25 Aug 2024 13:22:50 -0500",
          "GMT": "Sun, 25 Aug 2024 18:22:50 +0000"
        }
      },
      {
        "context": "Order created at VerykShip",
        "timestamp": "1724610095",
        "location": "",
        "signed": 0,
        "datetime": {
          "PRC": "Mon, 26 Aug 2024 02:21:35 +0800",
          "EST": "Sun, 25 Aug 2024 13:21:35 -0500",
          "GMT": "Sun, 25 Aug 2024 18:21:35 +0000"
        }
      }
    ]
  }
]

const { Title, Text, Paragraph } = Typography;

const ShipmentDetail: React.FC<{
  shipment: VerykType.ShipmentDetailResVO & { service: ReturnType<typeof getCarrierServiceById> }
  printLabelDropdownMenu: MenuProps['items']
  signedLabelUrlLoading: boolean,
  priceDetails: VerykType.PriceDetail[],
  totalPrice: { symbol: string, value: string }
}>
  = ({ shipment, printLabelDropdownMenu, signedLabelUrlLoading, priceDetails, totalPrice }) => {
    // We'll use the shipment prop to populate the data

    const { dicts, loading: dictsLoading } = useModel('dicts', (model) => ({
      dicts: model.dicts,
      loading: model.loading
    }))

    const { regions } = useModel('regions')

    const totalPaid = useMemo(() => getTotalPaid(shipment.payments), [shipment.payments])


    return (
      <ProCard ghost gutter={[16, 16]} direction='row'>
        <ProCard colSpan={14} ghost direction='column' gutter={[0, 16]}>
          <ProCard
            bordered
            headerBordered
            type='inner'
            title={<>
              <Space align='center' >
                <Box style={
                  {
                    verticalAlign: 'middle',
                  }
                }
                />
                <Text
                  style={{
                    fontSize: '1em',
                    padding: 0,
                  }}
                >
                  {shipment.number}

                </Text>

                {shipment.externalId && <Text type="secondary">{shipment.externalId}</Text>}
              </Space>
            </>}
            extra={
              <Text strong style={{ fontSize: '1.25em', color: '#b94a48' }}>
                {getDictItem(dicts, "shipmentStatus", shipment.status)?.label}
              </Text>
            }
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
              <ProCard
                colSpan={12}
              >
                <Space align='start' direction='vertical' size={0}>
                  <Title level={5} style={{ fontSize: '1em', margin: 0, color: 'gray' }}>SHIP FROM</Title>
                  <Title level={5} style={{ fontSize: '1.25em', margin: 0 }}>{shipment.initiation.name}</Title>
                  <Text style={{ fontSize: '0.75em', fontWeight: 700 }}>P: +{getNationalPhoneNumber(shipment.initiation.phone, shipment.initiation.regionId || '', regions)}</Text>
                  <Text>{shipment.initiation.address}</Text>
                  {shipment.initiation.address2 && <Text>{shipment.initiation.address2}</Text>}
                  {shipment.initiation.address3 && <Text>{shipment.initiation.address3}</Text>}
                  <Text>{shipment.initiation.city}, {shipment.initiation.province?.name} {shipment.initiation.postalCode}, {getRegionById(regions, shipment.initiation.regionId)?.name}</Text>
                </Space>
              </ProCard>
              <ProCard
                colSpan={12}
              >
                <Space direction="vertical" size={0}>
                  <Title level={5} style={{ fontSize: '1em', margin: 0, color: 'gray' }}>SHIP TO</Title>
                  <Space>
                    <Title level={5} style={{ fontSize: '1.25em', margin: 0 }}>{shipment.destination.name}</Title>
                    <Tag color="green">{getDictItem(dicts, "addressType", shipment.destination.type)?.label}</Tag>
                  </Space>
                  <Text style={{ fontSize: '0.75em', fontWeight: 700 }}>P: +{getNationalPhoneNumber(shipment.destination.phone, shipment.destination.regionId, regions)}</Text>
                  <Text>{shipment.destination.address}</Text>
                  {shipment.destination.address2 && <Text>{shipment.destination.address2}</Text>}
                  {shipment.destination.address3 && <Text>{shipment.destination.address3}</Text>}
                  <Text>{shipment.destination.city}, {shipment.destination.province?.name} {shipment.destination.postalCode}, {getRegionById(regions, shipment.destination.regionId)?.name}</Text>
                </Space>
              </ProCard>
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
                  </>}

                  {shipment.status === 'submitted' &&
                    <Dropdown
                      menu={{ items: printLabelDropdownMenu }}
                      disabled={signedLabelUrlLoading}
                      placement="top"
                    >
                      <Button color="primary" type="link" loading={signedLabelUrlLoading}>
                        Print Label
                      </Button>
                    </Dropdown>
                  }

                </Space>


              </ProCard>
            </ProCard>

          </ProCard>

          <ProCard
            title={
              <Space>
                Packages
                <Tag color="#c09853">{getDictItem(dicts, "packageType", shipment.package.type)?.label}</Tag>
              </Space>
            }
            headerBordered
            type='inner'
            bordered
            split='horizontal'
          >
            <ProCard direction='row'>
              <Space>
                <Text style={{ fontSize: '1.125em' }}>Total Packages: <span style={{ fontWeight: 700, color: '#b94a48' }}>{shipment.package.packages.length}</span></Text>
                <Text style={{ fontSize: '1.125em' }}>Total Weight: <span style={{ fontWeight: 700, color: '#b94a48' }}>{shipment.package.packages.reduce((sum, pkg) => sum + pkg.weight, 0)} </span><sup>lb</sup></Text>
              </Space>
            </ProCard>
            {shipment.package.packages.map((packageItem, index) => (
              <ProCard
                key={index}
              >
                <Title level={5}>Package #{index + 1}</Title>
                <Space align="start" style={{ width: '100%', justifyContent: 'space-between' }}>
                  {/* <ul>
                    <li>Weight: <strong>{Number(packageItem.weight)?.toFixed(2) || '0.00'}</strong> <sup>lb</sup></li>
                    <li>Dimensions: Dimensions: <strong>{Number(packageItem.dimension?.length)?.toFixed(2) || '0.00'}*{Number(packageItem.dimension?.width)?.toFixed(2) || '0.00'}*{Number(packageItem.dimension?.height)?.toFixed(2) || '0.00'}</strong> <sup>in</sup></li>
                    <li>Insurance: <span>{packageItem.insurance?.symbol || '$'}</span> <span>{Number(packageItem.insurance?.value).toFixed(2) || '0.00'}</span></li>
                  </ul> */}
                  <Space direction="vertical" size={0} style={{ paddingInlineStart: '1rem' }}>
                    <Text>Weight: <strong>{Number(packageItem.weight)?.toFixed(2) || '0.00'}</strong> <sup>lb</sup></Text>
                    <Text>Dimensions: Dimensions: <strong>{Number(packageItem.dimension?.length)?.toFixed(2) || '0.00'}*{Number(packageItem.dimension?.width)?.toFixed(2) || '0.00'}*{Number(packageItem.dimension?.height)?.toFixed(2) || '0.00'}</strong> <sup>in</sup></Text>
                    <Text>Insurance: <span>{packageItem.insurance?.symbol || '$'}</span> <span>{Number(packageItem.insurance?.value).toFixed(2) || '0.00'}</span></Text>
                  </Space>
                  <Space direction="vertical" align="end">
                    {packageItem.waybillNumber && <Text copyable>{packageItem.waybillNumber}</Text>}
                  </Space>
                </Space>
              </ProCard>
            ))}
          </ProCard>

          {shipment.product && shipment.product.length > 0 && <ProCard
            title="Products"
            headerBordered
            type='inner'
            bordered
            split='horizontal'
          >
            {shipment.product.map((productItem, index) => (
              <ProCard
                key={index}
              >
                <Title level={5}>Product #{index + 1}</Title>
                <Row style={{ width: '100%' }} >
                  <Col span={12}>
                    <Space direction="vertical" size={0} style={{ paddingInlineStart: '1rem' }}>
                      <Text>Description: <Text strong italic>{productItem.name}</Text></Text>
                      <Text>Quantity: <Text strong italic>{productItem.qty}</Text></Text>
                      <Text>Unit Price(CAD): <Text strong italic>{Number(productItem.price).toFixed(2) || '0.00'}</Text></Text>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Space direction="vertical" size={0} >
                      <Text>Unit: <Text strong italic>{productItem.unit}</Text></Text>
                      <Text>Origin: <Text strong italic>{productItem.origin}</Text></Text>
                      <Text>HSCode: <Text strong italic>{productItem.HScode}</Text></Text>
                    </Space>
                  </Col>
                </Row>
              </ProCard>
            ))}
          </ProCard>
          }

          <ProCard
            title="Options"
            headerBordered
            type='inner'
            bordered
          >
            <Space align="start" style={{ width: '100%' }}>
              <Space direction="vertical" size={0} style={{ paddingInlineStart: '1rem' }}>
                <Text>Packing Fee: <span>$</span> <span>{Number(shipment?.option?.packingFee).toFixed(2) || '0.00'}</span></Text>
                <Paragraph
                  ellipsis={{
                    rows: 1,
                    expandable: 'collapsible',
                  }}
                >
                  Remarks: {shipment.option?.memo}
                </Paragraph>
              </Space>
            </Space>
          </ProCard>
        </ProCard>

        <ProCard colSpan={10} ghost direction='column' gutter={[0, 16]}>
          <ProCard
            title="Retail & Payment Details"
            type='inner'
            headerBordered
            bordered
          >

            <Row>
              <Col span={12}>

                <Space direction="vertical" style={{ width: '100%' }} align="end">
                  <Title level={5} style={{ margin: 0 }}>Retail Details:</Title>
                </Space>
                <Divider dashed style={{
                  borderColor: 'grey',
                  marginBlock: '0.5rem',
                  width: '80%',
                  minWidth: '80%',
                  marginInlineStart: 'auto'
                }} />
                <Space direction="vertical" style={{ width: '100%' }} align="end">
                  {shipment.price?.msrp?.value && Number(shipment.price?.msrp?.value) > 0 &&
                    <Text><strong>MSRP(pre-tax): </strong><span style={{ color: '#a27676' }}>{shipment.price?.msrp?.symbol} </span><del style={{ color: 'grey' }}>{shipment.price?.msrp?.value}</del>
                    </Text>}
                  {priceDetails.map((chargeDetail: VerykType.PriceDetail, index: number) => (
                    (Number(chargeDetail?.price?.value) && <Text key={index} style={{ color: chargeDetail.code === 'freight' ? 'black' : 'grey' }}><strong>{chargeDetail.description}: </strong><span style={{ color: '#a27676' }}>{shipment.price?.msrp?.symbol} </span><span style={{ color: 'red' }}>{chargeDetail?.price?.value}</span></Text>)
                  ))}
                </Space>
                <Divider dashed style={{
                  borderColor: 'grey',
                  marginBlock: '0.5rem',
                  width: '80%',
                  minWidth: '80%',
                  marginInlineStart: 'auto'
                }} />
                <Space direction="vertical" style={{ width: '100%' }} align='end'>
                  <Text strong><b>Grand Total(CAD): </b><span style={{ color: '#a27676' }}>{totalPrice.symbol || '$'} </span><span style={{ color: 'red' }}>{totalPrice.value || '0.00'}</span></Text>
                </Space>
              </Col>
              <Col span={12}>
                <Space direction="vertical" style={{ width: '100%' }} align="end">
                  <Title level={5} style={{ margin: 0 }}>Payment Details:</Title>
                </Space>
                <Divider dashed style={{
                  borderColor: 'grey',
                  marginBlock: '0.5rem',
                  width: '80%',
                  minWidth: '80%',
                  marginInlineStart: 'auto'
                }} />

                <Space direction="vertical" style={{ width: '100%' }} align="end">
                  {shipment.payments.map((payment: VerykType.PaymentResVO, index: number) => (
                    <Text key={index} style={{ color: 'black' }}><strong>{moment(Number(payment.dateTime) * 1000).format('YYYY-MM-DD')}: </strong><span style={{ color: '#a27676' }}>{payment.subtotal.symbol} </span><span style={{ color: 'red' }}>{payment.subtotal.value}</span></Text>
                  ))}
                </Space>
                <Divider dashed style={{
                  borderColor: 'grey',
                  marginBlock: '0.5rem',
                  width: '80%',
                  minWidth: '80%',
                  marginInlineStart: 'auto'
                }} />
                <Space direction="vertical" style={{ width: '100%' }} align='end'>
                  <Text strong><b>Paid Amount: </b><span style={{ color: '#a27676' }}>{totalPaid.symbol || '$'} </span><span style={{ color: 'red' }}>{totalPaid.value || '0.00'}</span></Text>
                </Space>
              </Col>
            </Row>

          </ProCard>

          <ProCard
            title="Tracking Status"
            type='inner'
            headerBordered
            bordered
          >
            <Space direction="vertical" size="large">
              {trackingInfos.map((tracking, index) => (
                <Space key={index} direction="vertical" size={8}>
                  <Space align="center">
                    <Text strong copyable>{tracking.number}</Text>
                    <Button color="danger" variant="solid" size="small" href={tracking.tracking_url} target="_blank">
                      Track on {tracking.carrier.name}
                    </Button>
                    {/* <Tag color="red">{tracking.carrier.name}</Tag>
                  {tracking.carrier.code === 'ups' && (
                    <Tag color="orange">1Track</Tag>
                  )} */}
                  </Space>
                  <Divider style={{
                    borderColor: 'grey',
                    marginBlock: '0.5rem',
                  }} />
                  <Timeline
                    mode="left"
                    items={tracking.list.map((event, eventIndex) => ({
                      color: eventIndex === 0 ? 'green' : 'gray',
                      children: (
                        <Space direction="vertical" size={0}>
                          <Text strong style={{ color: eventIndex === 0 ? 'green' : undefined }}>{moment.unix(Number(event.timestamp)).format('MM/DD/YY HH:mm')}</Text>
                          <Text style={{ color: eventIndex === 0 ? 'green' : undefined }}>
                            {event.location && <span>[{event.location}]</span>}
                            {event.signed === 1 && <CheckCircleOutlined style={{ color: 'green', marginRight: '4px' }} />}
                            {event.context}
                          </Text>
                        </Space>
                      ),
                      dot: eventIndex === 0 ? <ClockCircleOutlined style={{ fontSize: '16px' }} /> : undefined,
                    }))}
                  />
                </Space>
              ))}
            </Space>
          </ProCard>
        </ProCard>
      </ProCard>
    );
  };

export default ShipmentDetail;
