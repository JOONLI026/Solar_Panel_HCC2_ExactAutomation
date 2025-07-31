import { DATE_FNS_FORMATS, getLocalDateTime } from '@utils/dateFnsUtils'
import Validator from '@shared/utils/Validator'
import { createTimeZoneCatalog, TIME_SOURCE_CATALOG } from './timeZoneUtils'
import {
  dataQualityStatus,
  QUALITY_STATUS,
  QUALITY_MESSAGES,
} from 'components/data-quality/dataQuality'
import { getTagId } from '@utils/tagsUtils'
import { set } from '@utils/objectUtils'

console.log('---get-localdate-time----', getLocalDateTime(DATE_FNS_FORMATS.CUSTOM_DEPLOY_FORMAT))

export const getFormattedTimeZone = (timeZone) => {
  const [tzIdentifierFormat] = timeZone.split(' ')
  return tzIdentifierFormat
}

export const defaultTimeLocation = {
  location: '',
  //manualSettings: getLocalDateTime(DATE_FNS_FORMATS.CUSTOM_DEPLOY_FORMAT),
  syncSource: 'Auto',
  timeSync: false,
  timeZone: 'Etc/UTC (UTC) - UTC +00:00',
}
export const validator = new Validator()

export const timeZoneCatalog = createTimeZoneCatalog()

export const TIME_SOURCE = Object.freeze({
  MANUAL: TIME_SOURCE_CATALOG[0].id,
  AUTO: TIME_SOURCE_CATALOG[1].id,
})

export const generateConfigPayload = (config, hash) => {
  const newConfig = { ...config, hash }
  const { syncSource, timeZone } = config
  if (syncSource === TIME_SOURCE.MANUAL) {
    delete newConfig.ntpServer
  } 

  const tzIdentifierFormat = getFormattedTimeZone(timeZone)
  set(newConfig, 'timeZone', tzIdentifierFormat)
  return newConfig
}