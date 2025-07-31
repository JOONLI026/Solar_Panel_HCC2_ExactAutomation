import { createTimeZoneCatalog, TIME_SOURCE_CATALOG } from './timeZoneUtils'
import { IP_ADDRESS_V4 } from '@utils/regexUtils'

const timeZoneCatalog = createTimeZoneCatalog()

const schema = {
  type: 'object',
  properties: {
    syncSource: {
      type: 'string',
      enum: TIME_SOURCE_CATALOG.map((item) => item.id),
      errorMessage: {
        required: 'Time source field is required.',
        enum: `Please select only one of those values: Manual, Auto.`,
      },
    },
    timeServer1: {
      type: 'string',
      errorMessage: {
        isIPinRange: 'A valid IP is required.',
       },
    },
    timeZone: {
      type: 'string',
      enum: timeZoneCatalog.map((item) => item.description),
      errorMessage: {
        enum: 'Please enter a valid time zone.',
      },
    },
    location: {
      type: 'string',
    },
    timeSync: {
      type: 'boolean',
    },
    hash: {
      type: 'string',
    },
    // pending validation for gps coordinate
    gpsCoordinate: {
      type: 'string',
      errorMessage: {},
    },
  },
  required: ['syncSource', 'timeZone'],
  additionalProperties: false,
  allOf: [
    {
      if: {
        properties: {
          syncSource: {
            enum: ['Auto'],
          },
        },
      },
      then: {
        required: ['syncSource', 'timeZone', 'timeServer1'],
      },
      else: {
        required: ['syncSource', 'timeZone'],
      },
    },
  ],
}

export default schema
