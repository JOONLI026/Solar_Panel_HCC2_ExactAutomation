import useConnection from '@hooks/connection/useConnection'
import usePersistedState from '@hooks/persisted-state/usePersistedState'
import SECTIONS from '@utils/sectionsConstants'
import {
  defaultTimeLocation,
  generateConfigPayload,
  timeZoneCatalog,
  validator,
  TIME_SOURCE,
  getFormattedTimeZone,
} from './timeLocationUtils'
import { DATE_FNS_FORMATS, getLocalDateTime } from '@utils/dateFnsUtils'
import { TIME_SOURCE_CATALOG } from './timeZoneUtils'
import { useEffect, useState } from 'react'
import { ipAddressSchema } from '@shared/utils/ip'
import { transformErrors } from '@shared/utils/validationUtils'
import { isMatch } from 'date-fns'
import timeLocationSchema from './timeLocationConfig'
import dissoc from 'ramda/src/dissoc'
import equals from 'ramda/src/equals'
import api from '@utils/RealTimeAPI'
import { get, isEmpty } from '@utils/objectUtils'
import { loadConfiguration, saveConfiguration } from '@store/action-creators/configuration'
import { connect } from 'react-redux'

export const TIME_SETTINGS_ALIASES = {
  timeServer1: 'NTP Server',
}

const HASH_DEFAULT_ARGUMENT = '1d8670fd58f20b59d38aa1216a3b02ff9270040d16ee356b3d830ca3b00370ab'

const mapStateToProps = ({ settings, sidebar }) => {
  const hash = get(sidebar, 'details.versions.time-location', HASH_DEFAULT_ARGUMENT)
  const storedTimeLocationData = get(settings, SECTIONS.TIME_LOCATION, {})

  return {
    storedTimeLocationData,
    hash,
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadTimeLocation: () => {
    dispatch(loadConfiguration(SECTIONS.TIME_LOCATION))
  },
  saveTimeLocationConfiguration: (data) => {
    dispatch(
      saveConfiguration({
        section: SECTIONS.TIME_LOCATION,
        data,
        showNotification: false,
      })
    )
  },
})

export const TimeLocationSettingsLogic = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  /* eslint-disable max-lines-per-function */
  ({
    loadTimeLocation,
    validateConfiguration = false,
    storedTimeLocationData,
    saveTimeLocationConfiguration,
    hash,
    children,
  }) => {
    const { isConnected } = useConnection()
    const [timeLocationData, setTimeLocationData, removeTimeLocationData] = usePersistedState(
      SECTIONS.TIME_LOCATION,
      defaultTimeLocation
    )
    const [errors, setErrors, removeErrors] = usePersistedState('timeLocationErrors', {})
    const {
      syncSource: syncSourceIdValue,
      timeZone: timeZoneId,
      timeSync,
      timeServer1,
      location,
      //manualSettings = getLocalDateTime(DATE_FNS_FORMATS.CUSTOM_DEPLOY_FORMAT),
    } = timeLocationData

    const timeZone = timeZoneCatalog.filter((item) => item.description === timeZoneId)
    const syncSource = TIME_SOURCE_CATALOG.filter((item) => item.id === syncSourceIdValue)
    const [validationCallbacks, setValidationCallbacks] = useState({
      onInvalid: null,
    })
    
    const validateIpAndSetErrors = (ip) => {
      let result = true
      if(''!== ip) 
        result = validator.validate(ipAddressSchema, { ipAddress: ip })
      
      const ipErrors = result ? null : transformErrors(validator.getErrors(), ipAddressSchema)
      setErrors({
        ...errors,
        timeServer1: ipErrors?.ipAddress,
      })
      return !ipErrors
    }


    const validateDateTimeAndSetErrors = (dateTimeValue) => {
    const manualSettingsTime = isMatch(dateTimeValue, DATE_FNS_FORMATS.CUSTOM_DEPLOY_FORMAT)
    ? null
    : 'Invalid format, please use DD:MMM:YYYY HH:MM:SS'
    setErrors({
    ...errors,
    //manualSettings: manualSettingsTime,
    })
    }

    const validateTimeLocationSettings = (timeLocationConfiguration) => {
      const isValid = validator.validate(timeLocationSchema, timeLocationConfiguration)
      const validatorErrors = isValid
        ? null
        : dissoc('globalError', transformErrors(validator.getErrors(), timeLocationSchema))
      return {
        isValid,
        validatorErrors,
      }
    }

    const validateAndSaveTimeLocation = async () => {
      const timeLocationConfiguration = generateConfigPayload(timeLocationData, hash)
      const { isValid, validatorErrors } = validateTimeLocationSettings(timeLocationConfiguration)
      if (isValid) {
        await saveTimeLocationConfiguration(timeLocationConfiguration)
        removeTimeLocationData()
        removeErrors()
      } else {
        setErrors(validatorErrors)
        validationCallbacks.onInvalid(validatorErrors)
      }
    }

    useEffect(() => {
      loadTimeLocation()
    }, [])

    useEffect(() => {
      if (validationCallbacks.onInvalid) {
        validateAndSaveTimeLocation()
      }
    }, [validationCallbacks])

    useEffect(() => {
      if (!isEmpty(storedTimeLocationData) && !equals(storedTimeLocationData, timeLocationData)) {
        setTimeLocationData(storedTimeLocationData)
      }
    }, [storedTimeLocationData])

    const setVal = (key, isArray) => (newValue) => {
      const value = isArray ? newValue[0].id : newValue
      if (key === 'timeSync' && timeLocationData?.syncSource === TIME_SOURCE.MANUAL) {
        return setTimeLocationData({
          ...timeLocationData,
          //manualSettings: timeSync ? '' : getLocalDateTime(DATE_FNS_FORMATS.CUSTOM_DEPLOY_FORMAT),
          [`${key}`]: value,
        })
      }
      if (key === 'timeZone') {
        const timezoneDesc = getFormattedTimeZone(value)
        return setTimeLocationData({
          ...timeLocationData,
          [`${key}`]: timezoneDesc,
        })
      }
      return setTimeLocationData({ ...timeLocationData, [`${key}`]: value })
    }

    const onSaveClick = async (onValid, onInvalid) => {
      const timeLocationConfiguration = generateConfigPayload(timeLocationData, hash)
      const { isValid, validatorErrors } = validateTimeLocationSettings(timeLocationConfiguration)

      if (isValid) {
        await saveTimeLocationConfiguration(timeLocationConfiguration)
        removeErrors()

        onValid()
      } else {
        onInvalid(validatorErrors)
      }
    }

    const resetPersistence = async () => {
      await removeTimeLocationData()
      loadTimeLocation()
      setErrors({})
    }

    return children({
      timeSync,
      validateDateTimeAndSetErrors,
      //manualSettings,
      setVal,
      validateIpAndSetErrors,
      errors,
      timeServer1,
      syncSource,
      timeZone,
      onSaveClick,
      resetPersistence,
      location,
      validateTimeLocationSettings,
      timeLocationData,
      hash,
      setErrors,
      validateConfiguration,
      setValidationCallbacks,
    })
  }
)
