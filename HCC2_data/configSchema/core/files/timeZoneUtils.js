import { listTimeZones, findTimeZone, getUTCOffset } from 'timezone-support'
import { formatInTimeZone } from 'date-fns-tz'

const TIME_ZONES_REMOVED = ['Asia/Qostanay']

/**
 * Timezone based on  IANA time zones
 * https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
const listTMZones = () => {
  const timeZones = listTimeZones().filter((time) => !TIME_ZONES_REMOVED.includes(time))
  const currentDate = new Date()
  const formattedTimeZones = timeZones.map((time) => {
    const abbreviation = getUTCOffset(currentDate, findTimeZone(time)).abbreviation
    const timezone = `UTC ${formatInTimeZone(currentDate, time, 'xxxxx')}`
    const result = `(${abbreviation}) - ${timezone}`
    return {
      id: `${time} ${result}`,
      abbreviation,
      description: time,
      timezone,
    }
  })
  return formattedTimeZones
}

export const createTimeZoneCatalog = () =>
  listTMZones().map((tz) => ({
    ...tz,
    label: `${tz.description} (${tz.abbreviation}) - ${tz.timezone}`,
  }))

export const TIME_SOURCE_CATALOG = [
  {
    id: 'Manual',
    label: 'Manual',
  },
  {
    id: 'Auto',
    label: 'Auto',
    default: true,
  },
]
