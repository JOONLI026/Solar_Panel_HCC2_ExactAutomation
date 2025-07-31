/* eslint-disable max-lines-per-function, complexity, react/no-array-index-key */
import './_TimeLocationSettings.scss'
import React, { useCallback, useEffect } from 'react'
import Column from 'components/common/grid/Column'
import Row from 'components/common/grid/Row'
import { noop } from '@utils/dynamicUtils'
import { TIME_SOURCE_CATALOG } from './timeZoneUtils'
import Dropdown from 'components/dropdown/Dropdown'
import Input from 'components/common/input/Input'
import ButtonsContainer from 'components/buttons/ButtonsContainer'
import {
  TIME_SETTINGS_ALIASES,
  TimeLocationSettingsLogic,
} from './TimeLocationSettingsLogic'
import { BANNER_TYPES, getSuccessMessage, SECTION_PAGES_CATALOG } from '@utils/notificationsUtils'
import useBannerNotification from '@hooks/banner/useBannerNotification'
import SECTIONS from '@utils/sectionsConstants'
import { generateMessage } from '@utils/messageUtils'
import useChangeRoute from '@hooks/change-route/useChangeRoute'
import { timeZoneCatalog } from './timeLocationUtils'

const TimeLocationSettings = () => {
  const [successBanner] = useBannerNotification(
    SECTION_PAGES_CATALOG[SECTIONS.TIME_LOCATION],
    BANNER_TYPES.SUCCESS
  )
  const { nextRoute } = useChangeRoute()

  return (
    <TimeLocationSettingsLogic>
      {({
        _timeSync,
        _validateDateTimeAndSetErrors,
        _manualSettings,
        setVal,
        validateIpAndSetErrors,
        errors,
        timeServer1,
        syncSource,
        timeZone,
        onSaveClick,
        resetPersistence,
        location,
        setErrors,
        validateConfiguration,
        setValidationCallbacks,
      }) => {
        const [errorBanner] = useBannerNotification(
          SECTION_PAGES_CATALOG[SECTIONS.TIME_LOCATION],
          BANNER_TYPES.ERROR
        )

        useEffect(() => {
          if (validateConfiguration) {
            setValidationCallbacks({
              onInvalid: (validatorErrors) => {
                errorBanner(generateMessage(validatorErrors, TIME_SETTINGS_ALIASES))
              },
            })
          }
        }, [validateConfiguration])

        const onSaveClickHandler = useCallback(
          (shouldGoToNextRoute) => {
            onSaveClick(
              () => {
                successBanner(getSuccessMessage())
                if (shouldGoToNextRoute) {
                  nextRoute()
                }
              },
              (validatorErrors) => {
                setErrors(validatorErrors)
                errorBanner(generateMessage(validatorErrors, TIME_SETTINGS_ALIASES))
              }
            )
          },
          [setErrors, errorBanner]
        )

        const getControl = (syncSourceId) => {
          switch (syncSourceId) {
            case 'Manual':
              return <Column md={3} />
            case 'Auto':
              return (
                <Column md={3}>
                  <Input
                    id="timeServer1"
                    name="timeServer1"
                    label="NTP Server"
                    type="text"
                    onChange={setVal('timeServer1')}
                    onBlur={(e) => validateIpAndSetErrors(e.target.value)}
                    error={errors?.timeServer1}
                    value={timeServer1}
                    placeholder="0.0.0.0"
                  />
                </Column>
              )
            default:
              return <Column md={3} />
          }
        }

        return (
          <>
            <Row>
              <Column md={9}>
                <div className="sectionTitle text-bold padding-bottom-2rem padding-top-2rem">
                  Time Setting
                </div>
              </Column>
              <Column md={3}>
                <div className="sectionTitle text-bold padding-bottom-2rem padding-top-2rem">
                  Locate the HCC2
                </div>
              </Column>
            </Row>
            <Row>
              <Column md={2}>
                <Dropdown
                  id="syncSource"
                  testid="syncSource"
                  label="Time Source"
                  values={TIME_SOURCE_CATALOG}
                  textKey="label"
                  selectedValues={syncSource}
                  updateValuesHandler={setVal('syncSource', true)}
                />
              </Column>
              {getControl(syncSource?.[0]?.id)}
              <Column md={4}>
                <Dropdown
                  label="Time Zone"
                  testid="timeZone"
                  searchEnabled
                  searchPlaceholder="Search"
                  values={timeZoneCatalog}
                  textKey="label"
                  selectedValues={timeZone}
                  updateValuesHandler={setVal('timeZone', true)}
                />
              </Column>
              <Column md={3}>
                <>
                  <div>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      label="Location"
                      placeholder="Address"
                      maxLength={60}
                      value={location}
                      onChange={setVal('location')}
                    />
                  </div>
                </>
              </Column>
            </Row>
            <Column md={12}>
              <ButtonsContainer
                onSaveFn={onSaveClickHandler}
                onSaveAndNext={() => onSaveClickHandler(true)}
                onCancelFn={resetPersistence}
              />
            </Column>
          </>
        )
      }}
    </TimeLocationSettingsLogic>
  )
}

export default TimeLocationSettings
