/* istanbul ignore file */
/* eslint-disable max-lines-per-function */
import React, { useState, useEffect } from 'react'
import Column from 'components/common/grid/Column'
import Row from 'components/common/grid/Row'
import Modal from 'components/modal/Modal'
import Toggle from 'components/custom-fields/toggle/Toggle'
import Input from 'components/common/input/Input'
import GroupBox from 'components/group-box/GroupBox';
import api from '@utils/RealTimeAPI'
import { publishTagValue } from 'routes/dynamic-form/customScripts/tags'

const Main = ({
}) => {
  const [showModal, setShowModal] = useState(false)

  const log = ()=>{};

  const [inputData, setInputData] = useState({
    endpoint: '',
    hardwareID: '',
    softwareID: ''
  });

  const linkModalStyle = {
    "fontWeight": "bold",
    "color": "#38ff38"
  }

  const linkStyle = {
    "display": "block",
    "paddingTop": "35px",
    "fontWeight": "bold",
    "color": "#38ff38",
    "padding": "14px 8px",
    "background": "#1D2530",
    "marginLeft": "1.2857142857rem",
    "minWidth": "150px"
  }

  const containerStyle = {
    "display": "flex",
    "marginBottom": "0.5rem"
  }

  const [dataValues, setData] = useState({
    provisionUrl: '',
    provisionStatus: '',
    currentHostname: '',
    enrollStatus: '',
    enrollMsg: '',
    serialNumber: ''
  });

  const LIVE_DIAGNOSTICS_TOPIC = "liveValue.diagnostics.this.avalonHcc2App.0.psUrl.";
  const PS_URL_TAG = LIVE_DIAGNOSTICS_TOPIC + "url";
  const PROVISION_STATUS_TAG = LIVE_DIAGNOSTICS_TOPIC + "status";



  const LIVE_STATS_TOPIC = "liveValue.diagnostics.this.avalonHcc2App.0.stats.";

  const CURRENT_HOSTNAME_TAG = LIVE_STATS_TOPIC + "currentHostname";
  const ENROLLED_TAG = LIVE_STATS_TOPIC + "enrolled";

  /*
  const AUTH_ATTEMP_TAG = LIVE_STATS_TOPIC  + "authAttemp";
  const AUTH_ERROR_TAG = LIVE_STATS_TOPIC  + "authError";
  const AUTH_SUCCESS_TAG = LIVE_STATS_TOPIC  + "authSuccess";
  const AUTH_UPDATE_TAG = LIVE_STATS_TOPIC  + "authUpdate";
  */

  //const PROVISION_UPDATE_TAG = LIVE_STATS_TOPIC  + "provisionUpdate";
  const LIVE_HARDWARE_ID_TAG = LIVE_STATS_TOPIC + "deviceHwId";


  const LIVE_STATUS_ENROLLMENT_TOPIC = "liveValue.diagnostics.this.avalonHcc2App.0.status.";

  const ENROLLMENT_STATUS_TAG = LIVE_STATUS_ENROLLMENT_TOPIC + "enrollment";

  const topic = [PS_URL_TAG, PROVISION_STATUS_TAG, CURRENT_HOSTNAME_TAG, ENROLLED_TAG,/*AUTH_ATTEMP_TAG,AUTH_ERROR_TAG,AUTH_SUCCESS_TAG,AUTH_UPDATE_TAG,*/, LIVE_HARDWARE_ID_TAG, ENROLLMENT_STATUS_TAG];
  const topics = topic.map((v) => v + ".");

  const onMessageCallback = (topic, protoDecoded) => {
    log(topic);
    log("---------- PROTO DECODED VALUES ---------")
    log(JSON.stringify(protoDecoded));
    if (!protoDecoded?.message?.dataPoints) return;
    let data = "";
    let err = false;

    try {
      data = protoDecoded.message.dataPoints[0].plString.values[0];
    } catch (error) {
      log('Error getting Value');
      log(JSON.stringify(error));
      err = true;
    }

    if (err) {
      return;
    }

    switch (topic) {
      case PS_URL_TAG: {

        setData(dataValues => ({ ...dataValues, provisionUrl: data }));

        break;
      }
      case PROVISION_STATUS_TAG: {

        setData(dataValues => ({ ...dataValues, provisionStatus: data }));

        /*setData(dataValues => {
           
             if(data.indexOf('- OK -')<0){
             setModalData({...modalData, title : 'Error Provisioning', text : 'Error Provisioning - Check provisioning URL'});
             setShowModal(true);
             setShowProvision({...showProvision, currentProvision : false});
           } 
           return ({...dataValues, provisionStatus : data})
         })*/


        break;
      }

      case CURRENT_HOSTNAME_TAG: {

        setData(dataValues => ({ ...dataValues, currentHostname: data }));
        break;
      }
      case ENROLLED_TAG: {

        setData(dataValues => ({ ...dataValues, enrollStatus: data }));
        if (data.indexOf('OK') >= 0) {
          setModalData({ ...modalData, title: 'Enrollment Successfull', text: 'The device was enrolled successfully' })
          setShowModal(true);
        }
        break;
      }
      case ENROLLMENT_STATUS_TAG: {

        setData(dataValues => ({ ...dataValues, enrollMsg: data }));
        break;
      }

      case LIVE_HARDWARE_ID_TAG: {
        setData(dataValues => ({ ...dataValues, serialNumber: data }));
        break;
      }
      default:
        break;

    }
  };

  useEffect(() => {
    const tokens = api.subscribe(topics, onMessageCallback);
    log('-- Subscribing to topics/tags --');
    return () => {
      api.unsubscribe(tokens, topics)
    }
  }, []);


  const [modalData, setModalData] = useState({ title: '', text: '', link: '' })
  const [showProvision, setShowProvision] = useState({ enrolled: false, updateAll: false, connected: false, buttonText: 'Provision', isButtonVisible: false, currentProvision: false });
  const urlProv = (value) => {

    if (!showProvision.enrolled) {
      setInputData({ ...inputData, endpoint: value });
    } else if (showProvision.updateAll || showProvision.change) {
      setInputData({ ...inputData, endpoint: value });
    }

  }

  const softwareId = (value) => {
    if (!showProvision.enrolled) {
      setInputData({ ...inputData, softwareID: value });
    } else if (showProvision.updateAll || showProvision.change) {
      setInputData({ ...inputData, softwareID: value });
    }
  }

  const actionButtonVisible = (obj) => {
    if (obj.change) {
      setShowProvision({ ...showProvision, ...obj, updateAll: false, buttonText: 'Provision', isButtonVisible: true });
      return;
    }
    if (obj.updateAll) {
      setShowProvision({ ...showProvision, ...obj, change: false, buttonText: 'Enroll', isButtonVisible: true });
      return;
    }

    setShowProvision({ ...showProvision, ...obj, isButtonVisible: false });
    return;
  }

  const actionButtonClick = async () => {

    if (showProvision.buttonText === "Enroll") {
      doEnroll();
    } else if (showProvision.buttonText === 'Provision') {
      if (showProvision.change) {
        setModalData({ ...modalData, title: '', text: '', link: '' })
      }
      doProvision();
    }

  }


  const doProvision = async () => {

    log('Doing Provision Action');
    const { hardwareID, endpoint } = inputData;
    log(JSON.stringify({ endpoint, hardwareID }));
    try {


      publishTagValue({ singleTagName: "liveValue.general.this.avalonHcc2App.0.provisioning.provision.", tagName: "provision.", value: JSON.stringify({ endpoint }), type: "plString", quality: 192, timestamp: "current" });

      setModalData({ ...modalData, title: 'Provision URL Obtained', text: 'Check here for the provision URL under "Provision Status" or in CP Avalon Monitoring Section to get the Provisioning URL, if there is an error please check the Connected Production URL you provided' });
      setShowModal(true);
      setShowProvision({ ...showProvision, isButtonVisible: false, change: false, updateAll: false, currentProvision: true })
    } catch (err) {
      log('Error While Provisioning the device...');
      log(JSON.stringify(err));
      setModalData({ ...modalData, title: 'Error Code: 400', text: `Error while provisioning -> fill all fields correctly`, link: '' });
      setShowModal(true);
    }

  }

  const doEnroll = async () => {
    const { endpoint, softwareID } = inputData;
    try {
      if (endpoint.length <= 8) {
        throw new Error("Something");
      }
      if (softwareID.length <= 8) {
        throw new Error("Something");
      }

      publishTagValue({ singleTagName: "liveValue.general.this.avalonHcc2App.0.enrolling.enroll", tagName: "enroll.", value: JSON.stringify({ endpoint, softwareID }), type: "plString", quality: 192, timestamp: "current" });

      setModalData({ ...modalData, title: 'Enrollment Command Sent', text: 'Check in CP Avalon Monitoring Section to see Enrollment Status' });
      setShowModal(true);
      setShowProvision({ ...showProvision, isButtonVisible: false, change: false, updateAll: false, currentProvision: false })
    } catch (err) {
      log('Error While Enrolling the device');
      log(JSON.stringify(err));
      setModalData({ ...modalData, title: 'Error Code: 400', text: `Error while enrolling -> fill all fields correctly`, link: '' });
      setShowModal(true);
    }

  }

  const enrollStatus = <Input id="enrollValue" onChange={(() => { })} value={dataValues.enrollStatus} name="enrollValue" type="text" label="Enroll Status" readonly={true} />
  const lastEnrollMsg = <Input id="enrollStatus" onChange={(() => { })} value={dataValues.enrollMsg} name="enrollStatus" type="text" label="Last Manual Enroll Attempt Status" readonly={true} />
  const serialNumber = <Input id="serialNumber" onChange={(() => { })} value={dataValues.serialNumber} name="serialNumber" type="text" label="Hardware ID" readonly={true} />
  const enrollElements = <Row><Column xs={3}>{enrollStatus}</Column ><Column xs={6}>{lastEnrollMsg}</Column><Column xs={3}>{serialNumber}</Column></Row>

  const provisionUrl = <a style={linkStyle} href={dataValues.provisionUrl} target="_blank">{dataValues.provisionUrl.length > 0 && dataValues.provisionUrl !== "-" ? 'Click Here to Provision' : ''}</a>
  const provisionStatus = <Input onChange={(() => { })} id="provisionStatus" value={dataValues.provisionStatus} name="provisionStatus" type="text" label="Provisioning Status" readonly={true} />
  const currentHostname = <Input onChange={(() => { })} id="currentHostname" value={dataValues.currentHostname} name="currentHostname" type="text" label="Current Hostname" readonly={true} />
  const provisionElements = <Row><Column xs={3}>{provisionStatus}</Column><Column xs={3}>{currentHostname}</Column></Row>

  /*
  const authAttemp = <Input id="authAttemp" value={dataValues.authAttemp} name="authAttemp" type="text" label="Auth Attemp At:" readonly={true}/>
  const authError = <Input id="authError" value={dataValues.authError} name="authError" type="text" label="Auth Error Msg" readonly={true}/>
  const authSuccess = <Input id="authSuccess" value={dataValues.authSuccess} name="authSuccess" type="text" label="Auth Success At:" readonly={true}/>
  const authUpdate = <Input id="authUpdate" value={dataValues.authUpdate} name="authUpdate" type="text" label="Auth Updated At:" readonly={true}/>
  const authStatusElements = <Row><Column xs={3}>{authAttemp}</Column><Column xs={3}>{authError}</Column><Column xs={3}>{authSuccess}</Column><Column xs={3}>{authUpdate}</Column></Row>
  */

  return (
    <div className="main extra-margin-bottom">

      <Row>
        <Column md={12}>
          <>
            <br></br>
            <h5> Provision URL</h5>
            <br></br>
            <Input
              id="endpoint"
              value={inputData.endpoint}
              onChange={(e) => urlProv(e)}
              name="endpoint"
              type="text"
            />
          </>
        </Column>
        {showProvision.updateAll &&
          <Column md={12}>
            <>
              <Input
                id="softwareId"
                value={inputData.softwareID}
                onChange={(v) => softwareId(v)}
                name="softwareId"
                type="text"
                label="Software Id"
              />
            </>
          </Column>
        }

        <Column md={12}>
          <Row>
            <Column xs={6} >
              <div style={containerStyle}>
                <button className="button__primary" onClick={() => { actionButtonClick() }} type="button">{showProvision.buttonText}</button>
                {provisionUrl}
              </div>
            </Column>
          </Row>
          <Modal
            closeHandler={() => {
              setShowModal(false)
            }}
            backdrop={false}
            show={showModal}
            title={modalData.title}
          >
            <p>{modalData.text}</p><br></br>
            {modalData.link.length > 0 && <a style={linkModalStyle} href={modalData.link} target="_blank">Click to Provision</a>}
          </Modal>
        </Column>
      </Row>


      <Row>
        <Column md={12}>
          <GroupBox title="Enroll Status" children={enrollElements} />
        </Column>
      </Row>
      <Row>
        <Column md={12}>
          <GroupBox title="Provision Status" children={provisionElements} />
        </Column>
      </Row>
    </div>
  )
}

export default Main