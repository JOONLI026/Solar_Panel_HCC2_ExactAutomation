import Button from 'components/buttons/Button'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Row, { ALIGN_ITEMS } from 'components/common/grid/Row'
import Column from 'components/common/grid/Column'
import api from '@utils/RealTimeAPI'
import GroupBox from 'components/group-box/GroupBox'
import Input from 'components/common/input/Input'
import { ACTIONS } from 'routes/dynamic-form/customScripts/tags'
import { BASE_URL } from 'src/constants'
import Loading from 'components/common/loading/Loading'
import Modal from 'components/modal/Modal'
import './DataLoggerExport.scss'
const topic = `liveValue.state.this.dataLogger.0.exportTrigger.`
const utilityTopic = `liveValue.state.this.dataLogger.0.dataLoggerUtilityFileName.`
const DataLoggerExport = () => {
  const [generatedFileName, setGeneratedFileName] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [utilityDataFileName, setUtilityDataFileName] = useState('')
  const inputRef = useRef(null)
  const apiData = useRef({})

  const createExportFile = useCallback(() => {
    setShowModal(true)
    setTimeout(() => setShowModal(false), 120000)
    setGeneratedFileName('')
    const now = Date.now()
    const data = [
      {
        topic,
        header: {
          timestamp: now,
        },
        dataPoints: [
          {
            tagName: '',
            quality: 192,
            plString: {
              time_stamps: [now],
              interval: 0,
              values: [''],
            },
          },
        ],
      },
    ]
    api.sendMessage({
      type: ACTIONS.PUBLISH,
      data,
    })
  }, [])

  const processData = useCallback((_pubSubTopic, data) => {
    apiData.current = data.message
    if (data?.message?.dataPoints[0]?.plString?.values[0] !== '') {
      setShowModal(false)
      setGeneratedFileName(data.message.dataPoints[0].plString.values[0])
    }
  }, [])

  useEffect(() => {
    const tokens = api.subscribe(topic, processData)
    const utilityTokens = api.subscribe(utilityTopic, (_topic, data) => {
      const utilityFileName = data.message.dataPoints[0].plString?.values[0]
      setUtilityDataFileName(utilityFileName)
    })
    return () => {
      api.unsubscribe(tokens, topic)
      api.unsubscribe(utilityTokens, utilityTopic)
    }
  }, [])

  function downloadFile(url, fileName) {
    const href = window.URL.createObjectURL(url)
    const link = document.createElement('a')
    link.href = href
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    if (inputRef.current && generatedFileName) {
      inputRef.current.onclick = () => {
        fetch(`${BASE_URL}logExport/${generatedFileName}`)
          .then((res) => {
            return res.blob()
          })
          .then((blob) => {
            downloadFile(blob, generatedFileName)
          })
      }
    }
  }, [inputRef.current, generatedFileName])

  const downloadUtilityFile = useCallback((fileName) => {
    fetch(`${BASE_URL}logExport/${fileName}`)
      .then((res) => {
        return res.blob()
      })
      .then((blob) => {
        downloadFile(blob, fileName)
      })
  }, [])

  return (
    <div className="datalogger-export-container">
      <Modal show={showModal} showHeader={false}>
        <Loading message="A new log export file is being created.  This may take up to two minutes when a large number of records have been collected." />
      </Modal>
      <GroupBox>
        <Row alignItems={ALIGN_ITEMS.CENTER}>
          <Column md={2}>
            <Button
              name="Create Export File"
              onClickFn={createExportFile}
              extraClass="button__primary--outlineGrey button__primary--fullWidth modbus__editorButton"
            />
          </Column>
          <Column md={4}>
            <Input
              id="generated-file-name"
              type="text"
              value={generatedFileName}
              onChange={setGeneratedFileName}
              label="Generated File Name"
              name="generatedFileName"
              inputRef={inputRef}
              readonly
            />
          </Column>
          <Column md={6}>
            Press button to cause the creation of the HCC2 Log File. When the file is created and
            ready for download, a hyperlink will appear. Click the hyperlink to download the file.
          </Column>
        </Row>
        <Row>
          {utilityDataFileName && (
            <Column>
              The HCC2 datalogger export utility can be downloaded here:
              <Button
                name={utilityDataFileName}
                onClickFn={() => downloadUtilityFile(utilityDataFileName)}
                extraClass="button__primary--outlineGrey button__primary--fullWidth modbus__editorButton utilityBtn"
              />
            </Column>
          )}
        </Row>
      </GroupBox>
    </div>
  )
}
export default DataLoggerExport
