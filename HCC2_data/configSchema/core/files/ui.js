import React from 'react'

export default {
  DisplayUnits: React.lazy(() => import('./DisplayUnits')),
}

exports.default = {
  type: 'application',
  details: {
    title: 'Core Systems',
    label: 'HCC2 Core Systems',
    mainSection: 1,
    position: '1',
    id: 'core',
    url: '/core'
  },
  sections: [
    {
      details: {
        title: 'Device Information',
        label: 'Device Information',
        position: '1',
        id: 'deviceInfo',
        url: '/deviceInfo'
      },
      content: [
        {
          id: 'deviceInfo',
          title: 'Device Information',
          layout: [
            {
              assetInfo: { xs: 12 },
              projectInfo: { xs: 12 },
            },
          ],
          ui: {
            assetInfo: {
              type: 'groupBox',
              title: 'Device Asset Information',
              children: {
                layout: [
                  {
                    'assetInfo.assetName': { xs: 3 },
                    'assetInfo.assetDescription': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'assetInfo.assetName': {
                      type: 'text',
                      placeholder: 'Asset Name',
                      title: 'Asset Name',
                      tagsRelated: ['assetInfo.assetName.']
                    }
                  },
                  {
                    'assetInfo.assetDescription': {
                      type: 'text',
                      placeholder: 'Asset Desc',
                      title: 'Asset Description',
                      tagsRelated: ['assetInfo.assetDescription.']
                    }
                  }
                ]
              }
            },
            projectInfo: {
              type: 'groupBox',
              title: 'Project Information',
              children: {
                layout: [
                  {
                    'projectInfo.projectName': { xs: 3 },
                    'projectInfo.projectDescription': { xs: 3 },
                    'projectInfo.companyName': { xs: 3 },
                    'projectInfo.siteWellName': { xs: 3 },
                    'projectInfo.fieldLeaseName': { xs: 3 },
                    'projectInfo.legalLandDescription': { xs: 3 },
                    'projectInfo.operator': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'projectInfo.projectName': {
                      type: 'text',
                      placeholder: 'Proj Name',
                      title: 'Project Name',
                      tagsRelated: ['projectInfo.projectName.']
                    }
                  },
                  {
                    'projectInfo.projectDescription': {
                      type: 'text',
                      placeholder: 'Proj Desc',
                      title: 'Project Description',
                      tagsRelated: ['projectInfo.projectDescription.']
                    }
                  },
                  {
                    'projectInfo.companyName': {
                      type: 'text',
                      placeholder: 'Company',
                      title: 'Company Name',
                      tagsRelated: ['projectInfo.companyName.']
                    }
                  },
                  {
                    'projectInfo.siteWellName': {
                      type: 'text',
                      placeholder: 'Site / Well',
                      title: 'Site / Well Name',
                      tagsRelated: ['projectInfo.siteWellName.']
                    }
                  },
                  {
                    'projectInfo.fieldLeaseName': {
                      type: 'text',
                      placeholder: 'Field / Lease',
                      title: 'Field / Lease Name',
                      tagsRelated: ['projectInfo.fieldLeaseName.']
                    }
                  },
                  {
                    'projectInfo.legalLandDescription': {
                      type: 'text',
                      placeholder: 'Land Desc.',
                      title: 'Legal Land Description',
                      tagsRelated: ['projectInfo.legalLandDescription.']
                    }
                  },
                  {
                    'projectInfo.operator': {
                      type: 'text',
                      placeholder: 'Operator',
                      title: 'Operator',
                      tagsRelated: ['projectInfo.operator.']
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    },
    {
      details: {
        title: 'Time & Location',
        label: 'Time & Location',
        position: '2',
        id: 'timeLocation',
        url: '/timeLocation',
      },
      content: 'TimeLocationSettings.jsx',
    },
    {
      details: {
        title: 'Display Units',
        label: 'Display Units',
        position: '3',
        id: 'userUnits',
        url: '/userUnits',
      },
      content: 'DisplayUnits.jsx',
    },
    {
      details: {
        title: 'Network Configuration',
        label: 'Network Configuration',
        position: '4',
        id: 'networkConfig',
        url: '/networkConfig'
      },
      content: [
        {
          id: 'EthernetConfiguration',
          title: 'Ethernet Configuration',
          layout: [
            {
              internetSelection: { xs: 12 },
              eth1: { xs: 12 },
              eth2: { xs: 12 },
              eth3: { xs: 12 },
            },
          ],
          ui: {
            internetSelection: {
              type: 'groupBox',
              title: 'Internet Interface Selection',
              children: {
                layout: [
                  {
                    'internetSelection': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'internetSelection': {
                      type: 'select',
                      tagsRelated: ['internetSelection.'],
                      title: 'Internet Selection'
                    }
                  }
                ]
              }
            },
            eth1: {
              type: 'groupBox',
              title: 'ETH-1 Ethernet Interface',
              children: {
                layout: [
                  {
                    'eth1.enable': { xs: 2 },
                    'eth1.ipAddress': { xs: 3 },
                    'eth1.subnetMask': { xs: 3 },
                    'eth1.defaultGateway': { xs: 3 },
                    'eth1.mode': { xs: 2 },
                    'eth1.primaryDns': { xs: 3 },
                    'eth1.secondaryDns': { xs: 3 },
                    'eth1.firewallSettings': { xs: 12 },
                  }
                ],
                ui: [
                  {
                    'eth1.enable': {
                      type: 'toggle',
                      title: 'Enable',
                      tagsRelated: ['eth1.enable.']
                    }
                  },
                  {
                    'eth1.ipAddress': {
                      type: 'text',
                      placeholder: 'ETH-1 IP',
                      title: 'Static IP Address',
                      tagsRelated: ['eth1.ipAddress.'],
                      customErrorMsgs: {
                        checkValidEth1IPv4: 'ETH-1 IP Address outside practical operating ranges.'
                      }
                    }
                  },
                  {
                    'eth1.subnetMask': {
                      type: 'text',
                      placeholder: 'ETH-1 Mask',
                      title: 'Static Subnet Mask',
                      tagsRelated: ['eth1.subnetMask.'],
                      customErrorMsgs: {
                        checkValidEth1Subnet: 'Subnet Mask outside practical operating ranges.'
                      }
                    }
                  },
                  {
                    'eth1.defaultGateway': {
                      type: 'text',
                      placeholder: 'ETH-1 Gateway',
                      title: 'Static Default Gateway',
                      tagsRelated: ['eth1.defaultGateway.'],
                      customErrorMsgs: {
                        checkValidIP: 'IP outside practical operating ranges.'
                      }
                    }
                  },
                  {
                    'eth1.mode': {
                      type: 'select',
                      tagsRelated: ['eth1.mode.'],
                      options: [
                        { id: '0', value: 'Static' },
                        { id: '1', value: 'Dynamic' }
                      ],
                      title: 'Mode'
                    }
                  },
                  {
                    'eth1.primaryDns': {
                      type: 'text',
                      placeholder: 'ETH-1 Pri-DNS',
                      title: 'Static Primary DNS',
                      tagsRelated: ['eth1.primaryDns.'],
                      customErrorMsgs: {
                        checkValidIP: 'IP outside practical operating ranges.'
                      }
                    }
                  },
                  {
                    'eth1.secondaryDns': {
                      type: 'text',
                      placeholder: 'ETH-1 Sec-DNS',
                      title: 'Static Secondary DNS',
                      tagsRelated: ['eth1.secondaryDns.'],
                      customErrorMsgs: {
                        checkValidIP: 'IP outside practical operating ranges.'
                      }
                    }
                  },
                  {
                  'eth1.firewallSettings': {
                    type: 'groupBox',
                    title: 'Firewall Settings',
                    children: {
                        layout: [
                          {
                            'eth1.firewallUnity': { xs: 3 },
                            'eth1.firewallCipExplicit': { xs: 3 },
                            'eth1.firewallIsagrafDebug': { xs: 3 },
                            'eth1.firewallSshEpm': { xs: 3 },
                            'eth1.firewallNtpServer': { xs: 3 },
                            'eth1.firewallModbusTcp': { xs: 3 },
                            'eth1.firewallModbusRtu': { xs: 3 },
                            'eth1.firewallModbusEditor': { xs: 3 },
                            'eth1.firewallUnityRedirection': { xs: 3 },
                            'eth1.firewallFTOptixDeploy': { xs: 3 },
                            'eth1.firewallFTOptixOpcUA': { xs: 3 },
                            'eth1.firewallFTOptixWeb': { xs: 3 }
                          }
                        ],
                        ui: [
                          {
                            'eth1.firewallUnity': {
                              type: 'checkbox',
                              title: 'Allow Unity Interface',
                              tagsRelated: ['eth1.firewallUnity.']
                            }
                          },
                          {
                            'eth1.firewallCipExplicit': {
                              type: 'checkbox',
                              title: 'Allow CIP Explicit',
                              tagsRelated: ['eth1.firewallCipExplicit.']
                            }
                          },
                          {
                            'eth1.firewallIsagrafDebug': {
                              type: 'checkbox',
                              title: 'Allow ISaGRAF Workbench',
                              tagsRelated: ['eth1.firewallIsagrafDebug.']
                            }
                          },
                          {
                            'eth1.firewallSshEpm': {
                              type: 'checkbox',
                              title: 'Allow SSH & EPM',
                              tagsRelated: ['eth1.firewallSshEpm.']
                            }
                          },
                          {
                            'eth1.firewallNtpServer': {
                              type: 'checkbox',
                              title: 'Allow NTP Server',
                              tagsRelated: ['eth1.firewallNtpServer.']
                            }
                          },
                          {
                            'eth1.firewallModbusTcp': {
                              type: 'checkbox',
                              title: 'Allow ModbusTCP (502)',
                              tagsRelated: ['eth1.firewallModbusTcp.']
                            }
                          },
                          {
                            'eth1.firewallModbusRtu': {
                              type: 'checkbox',
                              title: 'Allow ModbusRTU over TCP (503)',
                              tagsRelated: ['eth1.firewallModbusRtu.']
                            }
                          },
                          {
                            'eth1.firewallModbusEditor': {
                              type: 'checkbox',
                              title: 'Allow Modbus Editor',
                              tagsRelated: ['eth1.firewallModbusEditor.']
                            }
                          },
                          {
                            'eth1.firewallUnityRedirection': {
                              type: 'checkbox',
                              title: 'Allow Unity Interface Redirection (Port 80)',
                              tagsRelated: ['eth1.firewallUnityRedirection.']
                            }
                          },
                          {
                            'eth1.firewallFTOptixDeploy': {
                              type: 'checkbox',
                              title: 'Allow FTOptix Deployment',
                              tagsRelated: ['eth1.firewallFTOptixDeploy.']
                            }
                          },
                          {
                            'eth1.firewallFTOptixOpcUA': {
                              type: 'checkbox',
                              title: 'Allow FTOptix OPC UA',
                              tagsRelated: ['eth1.firewallFTOptixOpcUA.']
                            }
                          },
                          {
                            'eth1.firewallFTOptixWeb': {
                              type: 'checkbox',
                              title: 'Allow FTOptix Web Browser',
                              tagsRelated: ['eth1.firewallFTOptixWeb.']
                            }
                          }
                        ]
                      }
                    }  
                  }      
                ]
              }
            },
            eth2: {
              type: 'groupBox',
              title: 'ETH-2 Ethernet Interface',
              children: {
                layout: [
                  {
                    'eth2.enable': { xs: 2 },
                    'eth2.ipAddress': { xs: 3 },
                    'eth2.subnetMask': { xs: 3 },
                    'eth2.defaultGateway': { xs: 3 },
                    'eth2.mode': { xs: 2 },
                    'eth2.primaryDns': { xs: 3 },
                    'eth2.secondaryDns': { xs: 3 },
                    'eth2.firewallSettings': { xs: 12 },
                  }
                ],
                ui: [
                  {
                    'eth2.enable': {
                      type: 'toggle',
                      title: 'Enable',
                      tagsRelated: ['eth2.enable.']
                    }
                  },
                  {
                    'eth2.ipAddress': {
                      type: 'text',
                      placeholder: 'ETH-2 IP',
                      title: 'Static IP Address',
                      tagsRelated: ['eth2.ipAddress.'],
                      customErrorMsgs: {
                        checkValidEth2IPv4: 'ETH-2 IP Address outside practical operating ranges.'
                      }
                    }
                  },
                  {
                    'eth2.subnetMask': {
                      type: 'text',
                      placeholder: 'ETH-2 Mask',
                      title: 'Static Subnet Mask',
                      tagsRelated: ['eth2.subnetMask.'],
                      customErrorMsgs: {
                        checkValidEth2Subnet: 'Subnet Mask outside practical operating ranges.'
                      }
                    }
                  },
                  {
                    'eth2.defaultGateway': {
                      type: 'text',
                      placeholder: 'ETH-2 Gateway',
                      title: 'Static Default Gateway',
                      tagsRelated: ['eth2.defaultGateway.'],
                      customErrorMsgs: {
                        checkValidIP: 'IP outside practical operating ranges.'
                      }
                    }
                  },
                  {
                    'eth2.mode': {
                      type: 'select',
                      tagsRelated: ['eth2.mode.'],
                      options: [
                        { id: '0', value: 'Static' },
                        { id: '1', value: 'Dynamic' }
                      ],
                      title: 'Mode'
                    }
                  },
                  {
                    'eth2.primaryDns': {
                      type: 'text',
                      placeholder: 'ETH-2 Pri-DNS',
                      title: 'Static Primary DNS',
                      tagsRelated: ['eth2.primaryDns.'],
                      customErrorMsgs: {
                        checkValidIP: 'IP outside practical operating ranges.'
                      }
                    }
                  },
                  {
                    'eth2.secondaryDns': {
                      type: 'text',
                      placeholder: 'ETH-2 Sec-DNS',
                      title: 'Static Secondary DNS',
                      tagsRelated: ['eth2.secondaryDns.'],
                      customErrorMsgs: {
                        checkValidIP: 'IP outside practical operating ranges.'
                      }
                    }
                  },
                  {
                  'eth2.firewallSettings': {
                    type: 'groupBox',
                    title: 'Firewall Settings',
                    children: {
                        layout: [
                          {
                            'eth2.firewallUnity': { xs: 3 },
                            'eth2.firewallCipExplicit': { xs: 3 },
                            'eth2.firewallIsagrafDebug': { xs: 3 },
                            'eth2.firewallSshEpm': { xs: 3 },
                            'eth2.firewallNtpServer': { xs: 3 },
                            'eth2.firewallModbusTcp': { xs: 3 },
                            'eth2.firewallModbusRtu': { xs: 3 },
                            'eth2.firewallModbusEditor': { xs: 3 },
                            'eth2.firewallUnityRedirection': { xs: 3 },
                            'eth2.firewallFTOptixDeploy': { xs: 3 },
                            'eth2.firewallFTOptixOpcUA': { xs: 3 },
                            'eth2.firewallFTOptixWeb': { xs: 3 }
                          }
                        ],
                        ui: [
                          {
                            'eth2.firewallUnity': {
                              type: 'checkbox',
                              title: 'Allow Unity Interface',
                              tagsRelated: ['eth2.firewallUnity.']
                            }
                          },
                          {
                            'eth2.firewallCipExplicit': {
                              type: 'checkbox',
                              title: 'Allow CIP Explicit',
                              tagsRelated: ['eth2.firewallCipExplicit.']
                            }
                          },
                          {
                            'eth2.firewallIsagrafDebug': {
                              type: 'checkbox',
                              title: 'Allow ISaGRAF Workbench',
                              tagsRelated: ['eth2.firewallIsagrafDebug.']
                            }
                          },
                          {
                            'eth2.firewallSshEpm': {
                              type: 'checkbox',
                              title: 'Allow SSH & EPM',
                              tagsRelated: ['eth2.firewallSshEpm.']
                            }
                          },
                          {
                            'eth2.firewallNtpServer': {
                              type: 'checkbox',
                              title: 'Allow NTP Server',
                              tagsRelated: ['eth2.firewallNtpServer.']
                            }
                          },
                          {
                            'eth2.firewallModbusTcp': {
                              type: 'checkbox',
                              title: 'Allow ModbusTCP (502)',
                              tagsRelated: ['eth2.firewallModbusTcp.']
                            }
                          },
                          {
                            'eth2.firewallModbusRtu': {
                              type: 'checkbox',
                              title: 'Allow ModbusRTU over TCP (503)',
                              tagsRelated: ['eth2.firewallModbusRtu.']
                            }
                          },
                          {
                            'eth2.firewallModbusEditor': {
                              type: 'checkbox',
                              title: 'Allow Modbus Editor',
                              tagsRelated: ['eth2.firewallModbusEditor.']
                            }
                          },
                          {
                            'eth2.firewallUnityRedirection': {
                              type: 'checkbox',
                              title: 'Allow Unity Interface Redirection (Port 80)',
                              tagsRelated: ['eth2.firewallUnityRedirection.']
                            }
                          },
                          {
                            'eth2.firewallFTOptixDeploy': {
                              type: 'checkbox',
                              title: 'Allow FTOptix Deployment',
                              tagsRelated: ['eth2.firewallFTOptixDeploy.']
                            }
                          },
                          {
                            'eth2.firewallFTOptixOpcUA': {
                              type: 'checkbox',
                              title: 'Allow FTOptix OPC UA',
                              tagsRelated: ['eth2.firewallFTOptixOpcUA.']
                            }
                          },
                          {
                            'eth2.firewallFTOptixWeb': {
                              type: 'checkbox',
                              title: 'Allow FTOptix Web Browser',
                              tagsRelated: ['eth2.firewallFTOptixWeb.']
                            }
                          }
                        ]
                      }
                    }  
                  }      
                ]
              }
            },            
            eth3: {
              type: 'groupBox',
              title: 'ETH-3/ETH-4 Ethernet Interfaces',
              children: {
                layout: [
                  {
                    'eth3.enable': { xs: 2 },
                    'eth3.ipAddress': { xs: 3 },
                    'eth3.subnetMask': { xs: 3 },
                    'eth3.defaultGateway': { xs: 3 },
                    'eth3.mode': { xs: 2 },
                    'eth3.primaryDns': { xs: 3 },
                    'eth3.secondaryDns': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'eth3.enable': {
                      type: 'toggle',
                      title: 'Enable',
                      tagsRelated: ['eth3.enable.']
                    }
                  },
                  {
                    'eth3.ipAddress': {
                      type: 'text',
                      placeholder: 'ETH-3 IP',
                      title: 'Static IP Address',
                      tagsRelated: ['eth3.ipAddress.'],
                      customErrorMsgs: {
                        checkIPv4: 'Must be a valid IPv4 Address in the form XXX.XXX.XXX.XXX'
                      }
                    }
                  },
                  {
                    'eth3.subnetMask': {
                      type: 'text',
                      placeholder: 'ETH-3 Mask',
                      title: 'Static Subnet Mask',
                      tagsRelated: ['eth3.subnetMask.'],
                      customErrorMsgs: {
                        checkValidSubnet: 'Subnet Mask outside practical operating ranges.'
                      }
                    }
                  },
                  {
                    'eth3.defaultGateway': {
                      type: 'text',
                      placeholder: 'ETH-3 Gateway',
                      title: 'Static Default Gateway',
                      tagsRelated: ['eth3.defaultGateway.'],
                      customErrorMsgs: {
                        checkValidIP: 'IP outside practical operating ranges.'
                      }
                    }
                  },
                  {
                    'eth3.mode': {
                      type: 'label',
                      text: 'The enabling of Static mode on ETH-3/ETH-4 is controlled by the state of Dip Switch 2 at power up. (OFF = Static, ON = Dynamic)',
                      alignment: 'center',
                      modifier: 'warning'	
                    }
                  },
                  {
                    'eth3.primaryDns': {
                      type: 'text',
                      placeholder: 'ETH-3 Pri-DNS',
                      title: 'Static Primary DNS',
                      tagsRelated: ['eth3.primaryDns.'],
                      customErrorMsgs: {
                        checkValidIP: 'IP outside practical operating ranges.'
                      }
                    }
                  },
                  {
                    'eth3.secondaryDns': {
                      type: 'text',
                      placeholder: 'ETH-3 Sec-DNS',
                      title: 'Static Secondary DNS',
                      tagsRelated: ['eth3.secondaryDns.'],
                      customErrorMsgs: {
                        checkValidIP: 'IP outside practical operating ranges.'
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        {
          id: 'WirelessConfiguration',
          title: 'Wireless Configuration',
          layout: [
            {
              wifi: { xs: 12 },
              cellular: { xs: 12 },
            },
          ],
          ui: {
            wifi: {
              type: 'groupBox',
              title: 'Wi-Fi Client Interface',
              children: {
                layout: [
                  {
                    'wifi.enable': { xs: 2 },
                    'wifi.clientSSID': { xs: 3 },
                    'wifi.clientSSIDPassword': { xs: 3 },
                    'wifi.firewallSettings': { xs: 12 },
                  }
                ],
                ui: [
                  {
                    'wifi.enable': {
                      type: 'toggle',
                      title: 'Enable',
                      tagsRelated: ['wifi.enable.']
                    }
                  },
                  {
                    'wifi.clientSSID': {
                      type: 'text',
                      placeholder: 'Wi-Fi SSID',
                      title: 'SSID',
                      tagsRelated: ['wifi.clientAccessPointName.']
                    }
                  },
                  {
                    'wifi.clientSSIDPassword': {
                      type: 'password',
                      placeholder: 'Wi-Fi Password',
                      title: 'SSID Password',
                      tagsRelated: ['wifi.clientSSIDPassword.']
                    }
                  },
                  {
                    'wifi.firewallSettings': {
                      type: 'groupBox',
                      title: 'Firewall Settings',
                      children: {
                        layout: [
                          {
                            'wifi.firewallUnity': { xs: 3 },
                            'wifi.firewallCipExplicit': { xs: 3 },
                            'wifi.firewallIsagrafDebug': { xs: 3 },
                            'wifi.firewallSshEpm': { xs: 3 },
                            'wifi.firewallNtpServer': { xs: 3 },
                            'wifi.firewallModbusTcp': { xs: 3 },
                            'wifi.firewallModbusRtu': { xs: 3 },
                            'wifi.firewallModbusEditor': { xs: 3 },
                            'wifi.firewallUnityRedirection': { xs: 3 },
                            'wifi.firewallFTOptixDeploy': { xs: 3 },
                            'wifi.firewallFTOptixOpcUA': { xs: 3 },
                            'wifi.firewallFTOptixWeb': { xs: 3 }
                          }
                        ],
                        ui: [
                          {
                            'wifi.firewallUnity': {
                              type: 'checkbox',
                              title: 'Allow Unity Interface',
                              tagsRelated: ['wifi.firewallUnity.']
                            }
                          },
                          {
                            'wifi.firewallCipExplicit': {
                              type: 'checkbox',
                              title: 'Allow CIP Explicit',
                              tagsRelated: ['wifi.firewallCipExplicit.']
                            }
                          },
                          {
                            'wifi.firewallIsagrafDebug': {
                              type: 'checkbox',
                              title: 'Allow ISaGRAF Workbench',
                              tagsRelated: ['wifi.firewallIsagrafDebug.']
                            }
                          },
                          {
                            'wifi.firewallSshEpm': {
                              type: 'checkbox',
                              title: 'Allow SSH & EPM',
                              tagsRelated: ['wifi.firewallSshEpm.']
                            }
                          },
                          {
                            'wifi.firewallNtpServer': {
                              type: 'checkbox',
                              title: 'Allow NTP Server',
                              tagsRelated: ['wifi.firewallNtpServer.']
                            }
                          },
                          {
                            'wifi.firewallModbusTcp': {
                              type: 'checkbox',
                              title: 'Allow ModbusTCP (502)',
                              tagsRelated: ['wifi.firewallModbusTcp.']
                            }
                          },
                          {
                            'wifi.firewallModbusRtu': {
                              type: 'checkbox',
                              title: 'Allow ModbusRTU over TCP (503)',
                              tagsRelated: ['wifi.firewallModbusRtu.']
                            }
                          },
                          {
                            'wifi.firewallModbusEditor': {
                              type: 'checkbox',
                              title: 'Allow Modbus Editor',
                              tagsRelated: ['wifi.firewallModbusEditor.']
                            }
                          },
                          {
                            'wifi.firewallUnityRedirection': {
                              type: 'checkbox',
                              title: 'Allow Unity Interface Redirection (Port 80)',
                              tagsRelated: ['wifi.firewallUnityRedirection.']
                            }
                          },
                          {
                            'wifi.firewallFTOptixDeploy': {
                              type: 'checkbox',
                              title: 'Allow FTOptix Deployment',
                              tagsRelated: ['wifi.firewallFTOptixDeploy.']
                            }
                          },
                          {
                            'wifi.firewallFTOptixOpcUA': {
                              type: 'checkbox',
                              title: 'Allow FTOptix OPC UA',
                              tagsRelated: ['wifi.firewallFTOptixOpcUA.']
                            }
                          },
                          {
                            'wifi.firewallFTOptixWeb': {
                              type: 'checkbox',
                              title: 'Allow FTOptix Web Browser',
                              tagsRelated: ['wifi.firewallFTOptixWeb.']
                            }
                          }
                        ]
                      }
                    }  
                  }                 
                ]
              }
            },
            cellular: {
              type: 'groupBox',
              title: 'Cellular Modem Interface',
              children: {
                layout: [
                  {
                    'cellular.enable': { xs: 2 },
                    'cellular.apn': { xs: 3 },
                    'cellular.userName': { xs: 3 },
                    'column3': { xs: 4 },
                    'column1': { xs: 2 },
                    'cellular.password': { xs: 3 },
                    'cellular.pin': { xs: 3 },
                    'cellular.firewallSettings': { xs: 12 },
                  }
                ],
                ui: [
                  {
                    'cellular.enable': {
                      type: 'toggle',
                      title: 'Enable',
                      tagsRelated: ['cellular.enable.']
                    }
                  },
                  {
                    'cellular.apn': {
                      type: 'text',
                      placeholder: 'CellModem APN',
                      title: 'Access Point Name',
                      tagsRelated: ['cellular.apn.']
                    }
                  },
                  {
                    'cellular.userName': {
                      type: 'text',
                      placeholder: 'CellModem User',
                      title: 'User Name',
                      tagsRelated: ['cellular.userName.']
                    }
                  },
                  {
                    'column3': {
                      type: 'label',
                      text: '',
                      alignment: 'center'	
                    }
                  },
                  {
                    'column1': {
                      type: 'label',
                      text: '',
                      alignment: 'center'
                    }
                  },
                  {
                    'cellular.password': {
                      type: 'password',
                      placeholder: 'CellModem Password',
                      title: 'Password',
                      tagsRelated: ['cellular.password.']
                    }
                  },
                  {
                    'cellular.pin': {
                      type: 'password',
                      placeholder: 'CellModem PIN',
                      title: 'PIN',
                      tagsRelated: ['cellular.pin.']
                    }
                  },
                  {
                    'cellular.firewallSettings': {
                      type: 'groupBox',
                      title: 'Firewall Settings',
                      children: {
                        layout: [
                          {
                            'cellular.firewallUnity': { xs: 3 },
                            'cellular.firewallCipExplicit': { xs: 3 },
                            'cellular.firewallIsagrafDebug': { xs: 3 },
                            'cellular.firewallSshEpm': { xs: 3 },
                            'cellular.firewallNtpServer': { xs: 3 },
                            'cellular.firewallModbusTcp': { xs: 3 },
                            'cellular.firewallModbusRtu': { xs: 3 },
                            'cellular.firewallModbusEditor': { xs: 3 },
                            'cellular.firewallUnityRedirection': { xs: 3 },
                            'cellular.firewallFTOptixDeploy': { xs: 3 },
                            'cellular.firewallFTOptixOpcUA': { xs: 3 },
                            'cellular.firewallFTOptixWeb': { xs: 3 }
                          }
                        ],
                        ui: [
                          {
                            'cellular.firewallUnity': {
                              type: 'checkbox',
                              title: 'Allow Unity Interface',
                              tagsRelated: ['cellular.firewallUnity.']
                            }
                          },
                          {
                            'cellular.firewallCipExplicit': {
                              type: 'checkbox',
                              title: 'Allow CIP Explicit',
                              tagsRelated: ['cellular.firewallCipExplicit.']
                            }
                          },
                          {
                            'cellular.firewallIsagrafDebug': {
                              type: 'checkbox',
                              title: 'Allow ISaGRAF Workbench',
                              tagsRelated: ['cellular.firewallIsagrafDebug.']
                            }
                          },
                          {
                            'cellular.firewallSshEpm': {
                              type: 'checkbox',
                              title: 'Allow SSH & EPM',
                              tagsRelated: ['cellular.firewallSshEpm.']
                            }
                          },
                          {
                            'cellular.firewallNtpServer': {
                              type: 'checkbox',
                              title: 'Allow NTP Server',
                              tagsRelated: ['cellular.firewallNtpServer.']
                            }
                          },
                          {
                            'cellular.firewallModbusTcp': {
                              type: 'checkbox',
                              title: 'Allow ModbusTCP (502)',
                              tagsRelated: ['cellular.firewallModbusTcp.']
                            }
                          },
                          {
                            'cellular.firewallModbusRtu': {
                              type: 'checkbox',
                              title: 'Allow ModbusRTU over TCP (503)',
                              tagsRelated: ['cellular.firewallModbusRtu.']
                            }
                          },
                          {
                            'cellular.firewallModbusEditor': {
                              type: 'checkbox',
                              title: 'Allow Modbus Editor',
                              tagsRelated: ['cellular.firewallModbusEditor.']
                            }
                          },
                          {
                            'cellular.firewallUnityRedirection': {
                              type: 'checkbox',
                              title: 'Allow Unity Interface Redirection (Port 80)',
                              tagsRelated: ['cellular.firewallUnityRedirection.']
                            }
                          },
                          {
                            'cellular.firewallFTOptixDeploy': {
                              type: 'checkbox',
                              title: 'Allow FTOptix Deployment',
                              tagsRelated: ['cellular.firewallFTOptixDeploy.']
                            }
                          },
                          {
                            'cellular.firewallFTOptixOpcUA': {
                              type: 'checkbox',
                              title: 'Allow FTOptix OPC UA',
                              tagsRelated: ['cellular.firewallFTOptixOpcUA.']
                            }
                          },
                          {
                            'cellular.firewallFTOptixWeb': {
                              type: 'checkbox',
                              title: 'Allow FTOptix Web Browser',
                              tagsRelated: ['cellular.firewallFTOptixWeb.']
                            }
                          }
                        ]
                      }
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
