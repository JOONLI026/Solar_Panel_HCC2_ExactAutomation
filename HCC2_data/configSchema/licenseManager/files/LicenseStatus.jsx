import React, { useState, useEffect } from "react";
import CustomTable from "components/custom-fields/table/CustomTable";
import { publishTagValue } from "routes/dynamic-form/customScripts/tags";
import Button from "components/buttons/Button";
import "./LicenseStatus.scss";
import api from "@utils/RealTimeAPI";

function LicenseManager() {
    const topicLicenseStatus =
        "liveValue.state.this.licenseManager.0.licenses.";
    const topicLicenseRequest =
        "liveValue.state.this.licenseManager.0.licenseRequest|."; 
    const topicApplyLicense =
        "liveValue.command.this.licenseManager.0.licenseUpdate.";

    const [licenseRequest, setLicenseRequest] = useState(""); 
    const [licenseFileName, setLicenseFileName] = useState("");
    const [licenseInfo, setLicenseInfo] = useState([]);
    const [lastStatus, setLastStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const updateStatus = (_pubSubTopic, { message, topic, throwError }) => {
        const msgData = message.dataPoints[0].plJSON.values[0];
        const licenseData = JSON.parse(msgData);

        setLastStatus(licenseData.status);
        setErrorMessage(licenseData.error);

        const licenseRows = [];
        for (const license of licenseData.licenseInfo) {
            const row = {};
            row.appName = license.applicationName;
            row.productCode = license.productCode;
            row.status = license.status;
            row.licenseType = license.type;
            row.expDate = license.expirationTime;
            licenseRows.push(row);
        }

        setLicenseInfo(licenseRows);
    };

    const updateLicenseRequest = (
        _pubSubTopic,
        { message, topic, throwError }
    ) => {
        const dataBase64 = message.dataPoints[0].plBytes.values[0];
        const dataString = window.atob(dataBase64);
        setLicenseRequest(dataString);
        setLicenseFileName(message.dataPoints[1].plString.values[0])
    };

    useEffect(() => {
        let tokStatus = [];
        tokStatus = api.subscribe(topicLicenseStatus, updateStatus);

        let tokLicReq = [];
        tokLicReq = api.subscribe(topicLicenseRequest, updateLicenseRequest);

        return () => {
            api.unsubscribe(tokStatus, topicLicenseStatus);
            api.unsubscribe(tokLicReq, topicLicenseRequest);
        };
    }, []);

    const applyLicense = () => {
        const licenseInput = document.createElement("input");
        licenseInput.type = "file";
        licenseInput.multiple = false;
        licenseInput.accept = "*.WibuCmRaU";
        licenseInput.onchange = () => {
            if (licenseInput.files.length <= 0) {
                return;
            }
            const licenseFile = licenseInput.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const params = {
                    singleTagName: topicApplyLicense,
                    value: reader.result,
                    type: "plString",
                    timestamp: Date.now(),
                };
                publishTagValue({ ...params });
            };
            reader.readAsText(licenseFile);
        };
        licenseInput.click();
    };

    const downloadFile = () => {
        const element = document.createElement("a");
        const file = new Blob([licenseRequest], {
            type: "text/plain",
        });

        element.href = URL.createObjectURL(file);
        element.download = licenseFileName; 
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    const tableChange = () => {};

    const uiSchema = {
        "ui:title": "Licenses",
        "ui:columnDefs": [
            {
                master: true,
                title: "Application Name",
                name: "appName",
                enum: licenseInfo.map((r) => ""),
                type: "label",
                // flex: 1
                width: "auto"
            },
            {
                title: "Status",
                type: "label",
                name: "status",
                // flex: 1
                width: "auto"
            },
            {
                title: "License Type",
                type: "label",
                name: "licenseType",
                // flex: 1
                width: "auto"
            },
            {
                title: "Expiration Date",
                type: "label",
                name: "expDate",
                // flex: 1                
                width: "auto"
            },
        ],
    };

    return (
        <div className="license-status">
            <div className="actionButtons">
                <Button
                    name="Get License Request"
                    extraClass="license-button"
                    disabled={licenseRequest? false : true }
                    onClickFn={downloadFile}
                />

                <Button
                    name="Apply License"
                    extraClass="license-button"
                    disabled={licenseRequest? false : true }
                    onClickFn={applyLicense}
                />
            </div>
            <h5 className="status-message">
                Last Status:&nbsp;
                <LastStatus
                    lastStatus={lastStatus}
                    errorMessage={errorMessage}
                />
                
            </h5>

            <CustomTable
                name="LicenseStatus"
                uiSchema={uiSchema}
                formData={licenseInfo}
                onChange={tableChange}
                shouldUpdateOnFormDataChange={true}
            />

            {/* <span style={{ whiteSpace: "pre-wrap" }}>
                {JSON.stringify(licenseInfo, null, 4)}
            </span> */}
        </div>
    );
}

function LastStatus({ lastStatus, errorMessage }) {
    switch (lastStatus) {
        case "OK":
            return <span className="success">Success</span>;

        case "error":
            return <span className="error">Error: {errorMessage}</span>;

        default:
            return <span className="success">Unknown</span>;
    }
}

export default LicenseManager;
