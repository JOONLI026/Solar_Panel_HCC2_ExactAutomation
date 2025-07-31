exports.default = {
    type: "monitoring",
    details: {
        title: "avalonHcc2App",
        label: "avalonHcc2App",
        mainSection: 1,
        position: 1,
        id: "avalonHcc2App",
        url: "/avalonHcc2App",
    },
    sections: [
        {
            details: {
                title: "CP Avalon Provisioning",
                label: "CP Avalon Provisioning",
                position: "2",
                id: "cp-provision",
                url: "/cp-provision",
                readOnly: true,
                dataSource: {
                    configs: [],
                    "cp-provision": {
                        topics: [
                            "liveValue.diagnostics.this.avalonHcc2App.0.provision.psUrl.url."
                        ]
                    }
                }
            },
            content: "CpgCustomPage.jsx"
        },
        {
            details: {
                title: "CP Avalon Monitoring",
                label: "CP Avalon Monitoring",
                position: "3",
                id: "cpa-monitoring",
                url: "/cpa-monitoring",
                readOnly: true,
                dataSource: {
                    configs: [],
                    "cpa-monitoring": {
                        topics: [
                            'liveValue.diagnostics.this.avalonHcc2App.0.psUrl.url.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.psUrl.status.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.currentHostname.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.enrolled.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.status.enrollment.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.tagCount.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.ingress.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.egress.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.ramUsage.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.authAttemp.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.authError.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.authSuccess.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.authUpdate.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.configVersion.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.cpVersion.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.cpStartAt.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.provisionUpdate.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.deviceHwId.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.appVersion.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.lastWrite.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.writeStatus.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.writeCount.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.value.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.quality.',
                            'liveValue.diagnostics.this.avalonHcc2App.0.stats.adapterversion.'
                        ]
                    }
                }
            },
            content: [
                {
                    id: "cpa-monitoring",
                    title: "CP Monitoring",
                    layout: [{
                        provisionStatus: { xs: 12 },
                        provisionUrl: { xs: 12 },
                        enrolled: { xs: 12 },
                        deviceStatus: { xs: 12 },
                        fileTransferStatus: { xs: 12 }
                    }],
                    ui: {
                        provisionStatus: {
                            type: 'groupBox',
                            title: 'Provisioning Status',
                            children: {
                                layout: [
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.psUrl.status": { xs: 12 }
                                    },
                                ],
                                ui: [
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.psUrl.status": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Provisioning Status',
                                            title: "Provisioning Status",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.psUrl.status."]
                                        }
                                    },

                                ]
                            }
                        },
                        provisionUrl: {
                            type: "groupBox",
                            title: "Provision URL",
                            children: {
                                layout: [
                                    {
                                        "label_Url": { xs: 12 }
                                    },
                                ],
                                ui: [
                                    {
                                        "label_Url": {
                                            type: "label",
                                            text: "Provision URL",
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.psUrl.url."]
                                        }
                                    }
                                ]
                            }
                        },
                        enrolled: {
                            type: 'groupBox',
                            title: 'Enrollment Status',
                            children: {
                                layout: [
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.enrolled": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.status.enrollment": { xs: 6 }
                                    },
                                ],
                                ui: [
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.enrolled": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Enroll Status',
                                            title: "Enroll Status",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.enrolled."]
                                        },
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.status.enrollment": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Enrollment Status',
                                            title: "Last Enrollment Status",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.status.enrollment."]
                                        },
                                    }
                                ]
                            }
                        },
                        deviceStatus: {
                            type: 'groupBox',
                            title: 'Device Status',
                            children: {
                                layout: [
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.tagCount": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.currentHostname": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.ingress": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.egress": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.ramUsage": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.authAttemp": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.authError": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.authSuccess": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.authUpdate": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.configVersion": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.cpVersion": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.cpStartAt": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.provisionUpdate": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.deviceHwId": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.appVersion": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.adapterversion": { xs: 3 }
                                    },
                                ],
                                ui: [
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.tagCount": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Tag Count',
                                            title: "Tag Count",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.tagCount."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.currentHostname": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Current Hostname (Provision URL)',
                                            title: "Current Hostname (Provision URL)",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.currentHostname."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.ingress": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Avg. Ingress',
                                            title: "Avg. Ingress",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.ingress."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.egress": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Avg. Egress',
                                            title: "Avg. Egress",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.egress."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.ramUsage": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'RAM Usage',
                                            title: "RAM Usage",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.ramUsage."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.authAttemp": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Auth Attempted At',
                                            title: "Auth Attempted At",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.authAttemp."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.authError": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Auth Errors',
                                            title: "Auth Errors",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.authError."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.authSuccess": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Auth Success At',
                                            title: "Auth Success At",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.authSuccess."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.authUpdate": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Auth Updated At',
                                            title: "Auth Updated At",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.authUpdate."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.configVersion": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Config Version',
                                            title: "Config Version",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.configVersion."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.cpVersion": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Cp Gateway Version',
                                            title: "Cp Gateway Version",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.cpVersion."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.cpStartAt": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Cp Started At',
                                            title: "Cp Started At",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.cpStartAt."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.provisionUpdate": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Provision Updated At',
                                            title: "Provision Updated At",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.provisionUpdate."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.deviceHwId": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Hardware ID',
                                            title: "Hardware ID",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.deviceHwId."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.appVersion": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Avalon HCC2 App Version',
                                            title: "Avalon HCC2 App Version",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.appVersion."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.adapterversion": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'HCC2 CPGW Adapter Version',
                                            title: "CPGW - HCC2 Adapter Version",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.adapterversion."]
                                        }
                                    }
                                ]
                            }
                        },
                        fileTransferStatus: {
                            type: 'groupBox',
                            title: 'File Transfer Status',
                            children: {
                                layout: [
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.lastWrite": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.writeStatus": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.writeCount": { xs: 3 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.value": { xs: 6 },
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.quality": { xs: 3 }
                                    },
                                ],
                                ui: [
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.lastWrite": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Last Write',
                                            title: "Last Write Attempt",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.lastWrite."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.writeStatus": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Write Status',
                                            title: "Write Status",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.writeStatus."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.writeCount": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Retry Write Count',
                                            title: "Retry Write Count",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.writeCount."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.value": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: "VQT 'v' Value",
                                            title: "VQT 'v' Value",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.value."]
                                        }
                                    },
                                    {
                                        "liveValue.diagnostics.this.avalonHcc2App.0.stats.quality": {
                                            type: "textInput",
                                            dataType: "text",
                                            placeholder: 'Quality Code',
                                            title: "VQT Quality Code 'q'",
                                            readOnly: true,
                                            tagsRelated: ["liveValue.diagnostics.this.avalonHcc2App.0.stats.quality."]
                                        }
                                    }
                                ]
                            }
                        }
                    }

                }
            ]
        }
    ]
}