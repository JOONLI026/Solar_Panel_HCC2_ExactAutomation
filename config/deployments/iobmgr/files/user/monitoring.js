exports.default = {
  type: 'monitoring',
  details: {
    title: 'IO Systems',
    label: 'IOB Manager Application',
    mainSection: 1,
    position: '1',
    id: 'iobmgr',
    url: '/iobmgr'
  },
  sections: [
    {
      details: {
        title: 'IO System',
        label: 'IO System',
        position: '1',
        id: 'ioSystem',
        readOnly: true,
        url: '/ioSystem',
        dataSource: {
          configs: [],
          ioSystem: {
            topics: [
              'liveValue.state.this.io.0.version.main.revision.',
              'liveValue.state.this.io.0.version.boot.revision.',
              'liveValue.state.this.io.0.version.main.expected.',
              'liveValue.state.this.io.0.version.validated.',
              'liveValue.state.this.io.0.state.',
              'liveValue.state.this.io.0.general.upTime.',
              'liveValue.state.this.io.0.systemTime.',
              'liveValue.state.this.io.0.sntpSync.',
              'liveValue.state.this.io.0.resetIoSystem.',
              'liveValue.diagnostics.this.io.0.supplyPower.powerAokay.',
              'liveValue.diagnostics.this.io.0.supplyPower.powerBokay.',
              'liveValue.diagnostics.this.io.0.supplyPower.voltage.',
              'liveValue.diagnostics.this.io.0.supplyPower.current.',
              'liveValue.diagnostics.this.io.0.supplyPower.power.',
              'liveValue.diagnostics.this.io.0.temperature.cpu.',
              'liveValue.diagnostics.this.io.0.temperature.pcb.',
              'liveValue.diagnostics.this.io.0.rail.voltage.v5.',
              'liveValue.diagnostics.this.io.0.rail.voltage.v3p3.',
              'liveValue.diagnostics.this.io.0.rail.voltage.v1p2.'
            ],
          },
        },
      },
      content: [
        {
          id: 'ioSystem',
          title: 'IO System',
          layout: [
            {
              ioVersions: { xs: 12 },
              ioDeviceState: { xs: 12 },
              ioPowerStatus: { xs: 6 },
              ioPcbStatus: { xs: 6 },
            },
          ],
          ui: {
            ioVersions: {
              type: 'groupBox',
              title: 'IO Board Versions',
              children: {
                layout: [
                  {
                    'liveValue.state.this.io.0.version.main.revision': { xs: 2 },
                    'liveValue.state.this.io.0.version.boot.revision': { xs: 2 },
                    'liveValue.state.this.io.0.version.main.expected': { xs: 2 },
                    'liveValue.state.this.io.0.version.validated': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.state.this.io.0.version.main.revision': {
                      type: 'text',
                      placeholder: 'IO Rev',
                      title: 'Main Image Revision',
                      readOnly: true,
                      tagsRelated: ['liveValue.state.this.io.0.version.main.revision.']
                    }
                  },
                  {
                    'liveValue.state.this.io.0.version.boot.revision': {
                      type: 'text',
                      placeholder: 'BL Rev',
                      title: 'Boot Loader Revision',
                      readOnly: true,
                      tagsRelated: ['liveValue.state.this.io.0.version.boot.revision.']
                    }
                  },
                  {
                    'liveValue.state.this.io.0.version.main.expected': {
                      type: 'text',
                      placeholder: 'IO Expected',
                      title: 'Expected Main Image Revision',
                      readOnly: true,
                      tagsRelated: ['liveValue.state.this.io.0.version.main.expected.']
                    }
                  },
                  {
                    'liveValue.state.this.io.0.version.validated': {
                      type: 'checkbox',
                      title: 'IO Firmware Validated',
                      readOnly: true,
                      tagsRelated: ['liveValue.state.this.io.0.version.validated.']
                    }
                  }
                ]
              }
            },
            ioDeviceState: {
              type: 'groupBox',
              title: 'Device State',
              children: {
                layout: [
                  {
                    'liveValue.state.this.io.0.state': { xs: 2 },
                    'liveValue.state.this.io.0.general.upTime': { xs: 2 },
                    'liveValue.state.this.io.0.systemTime': { xs: 3 },
                    'liveValue.state.this.io.0.sntpSync': { xs: 2 },
                    buttonPublishResetIO: { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.state.this.io.0.state': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.state.this.io.0.state.'],
                      title: 'IO Manager State'
                    }
                  },
                  {
                    'liveValue.state.this.io.0.general.upTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Uptime',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.state.this.io.0.general.upTime.'],
                      unitConversion: {
                        category: 'TIME',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.state.this.io.0.systemTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'IO System Time',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.state.this.io.0.systemTime.'],
                      unitConversion: {
                        category: 'SYSTIME',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.state.this.io.0.sntpSync': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.state.this.io.0.sntpSync.'],
                      title: 'SNTP State'
                    }
                  },
                  {
                    buttonPublishResetIO: {
                      type: 'button',
                      text: 'Reset IO System',
                      onClick: {
                        fn: 'publishMultipleTags',
                        parameters: {
                          fields: {
                            'liveValue.state.this.io.0.resetIoSystem': {
                              singleTagName: 'liveValue.state.this.io.0.resetIoSystem.',
                              type: 'plUint16',
                              value: 1,
                            }
                          },
                        },
                      },
                    },
                  }
                ]
              }
            },
            ioPowerStatus: {
              type: 'groupBox',
              title: 'Supply Power Status',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.supplyPower.powerAokay': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.supplyPower.powerBokay': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.supplyPower.voltage': { xs: 4 },
                    'liveValue.diagnostics.this.io.0.supplyPower.current': { xs: 4 },
                    'liveValue.diagnostics.this.io.0.supplyPower.power': { xs: 4 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.supplyPower.powerAokay': {
                      type: 'checkbox',
                      title: 'Power Input A Okay',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.supplyPower.powerAokay.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.supplyPower.powerBokay': {
                      type: 'checkbox',
                      title: 'Power Input B Okay',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.supplyPower.powerBokay.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.supplyPower.voltage': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Supply Power Voltage',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.supplyPower.voltage.'],
                      unitConversion: {
                        category: 'VOLT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.supplyPower.current': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Supply Power Current',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.supplyPower.current.'],
                      unitConversion: {
                        category: 'CUR',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.supplyPower.power': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Supply Power Wattage',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.supplyPower.power.'],
                      unitConversion: {
                        category: 'POW',
                        showUnits: true,
                      }
                    }
                  }
                ]
              }
            },
            ioPcbStatus: {
              type: 'groupBox',
              title: 'Device PCB Status',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.temperature.cpu': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.temperature.pcb': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.rail.voltage.v5': { xs: 4 },
                    'liveValue.diagnostics.this.io.0.rail.voltage.v3p3': { xs: 4 },
                    'liveValue.diagnostics.this.io.0.rail.voltage.v1p2': { xs: 4 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.temperature.cpu': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'CPU Temperature',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.temperature.cpu.'],
                      unitConversion: {
                        category: 'TEMP',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.temperature.pcb': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Board Temperature',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.temperature.pcb.'],
                      unitConversion: {
                        category: 'TEMP',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.rail.voltage.v5': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Rail Voltage 5V',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.rail.voltage.v5.'],
                      unitConversion: {
                        category: 'VOLT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.rail.voltage.v3p3': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Rail Voltage 3V3',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.rail.voltage.v3p3.'],
                      unitConversion: {
                        category: 'VOLT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.rail.voltage.v1p2': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Rail Voltage 1V2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.rail.voltage.v1p2.'],
                      unitConversion: {
                        category: 'VOLT',
                        showUnits: true,
                      }
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
        title: 'Digital I/O',
        label: 'Digital I/O',
        position: '2',
        id: 'ioDigital',
        readOnly: true,
        url: '/ioDigital',
        dataSource: {
          configs: [],
          ioDigital: {
            topics: [
              'liveValue.diagnostics.this.io.0.digitalIn.ch1.',
              'liveValue.diagnostics.this.io.0.digitalInCount.ch1.',
              'liveValue.diagnostics.this.io.0.digitalIn.ch2.',
              'liveValue.diagnostics.this.io.0.digitalInCount.ch2.',
              'liveValue.diagnostics.this.io.0.digitalIn.ch3.',
              'liveValue.diagnostics.this.io.0.digitalInCount.ch3.',
              'liveValue.diagnostics.this.io.0.digitalIn.ch4.',
              'liveValue.diagnostics.this.io.0.digitalInCount.ch4.',
              'liveValue.diagnostics.this.io.0.digitalIn.ch5.',
              'liveValue.diagnostics.this.io.0.digitalInCount.ch5.',
              'liveValue.diagnostics.this.io.0.digitalIn.ch6.',
              'liveValue.diagnostics.this.io.0.digitalInCount.ch6.',
              'liveValue.diagnostics.this.io.0.digitalIn.ch7.',
              'liveValue.diagnostics.this.io.0.digitalInCount.ch7.',
              'liveValue.diagnostics.this.io.0.digitalIn.ch8.',
              'liveValue.diagnostics.this.io.0.digitalInCount.ch8.',
              'liveValue.diagnostics.this.io.0.digitalIoIn.ch1.',
              'liveValue.diagnostics.this.io.0.digitalIoOut.ch1.',
              'liveValue.diagnostics.this.io.0.digitalIoDirection.ch1.',
              'liveValue.diagnostics.this.io.0.digitalIoCount.ch1.',
              'liveValue.diagnostics.this.io.0.digitalIoDuty.ch1.',
              'liveValue.diagnostics.this.io.0.digitalIoIn.ch2.',
              'liveValue.diagnostics.this.io.0.digitalIoOut.ch2.',
              'liveValue.diagnostics.this.io.0.digitalIoDirection.ch2.',
              'liveValue.diagnostics.this.io.0.digitalIoCount.ch2.',
              'liveValue.diagnostics.this.io.0.digitalIoDuty.ch2.',
              'liveValue.diagnostics.this.io.0.digitalIoIn.ch3.',
              'liveValue.diagnostics.this.io.0.digitalIoOut.ch3.',
              'liveValue.diagnostics.this.io.0.digitalIoDirection.ch3.',
              'liveValue.diagnostics.this.io.0.digitalIoCount.ch3.',
              'liveValue.diagnostics.this.io.0.digitalIoDuty.ch3.',
              'liveValue.diagnostics.this.io.0.digitalIoIn.ch4.',
              'liveValue.diagnostics.this.io.0.digitalIoOut.ch4.',
              'liveValue.diagnostics.this.io.0.digitalIoDirection.ch4.',
              'liveValue.diagnostics.this.io.0.digitalIoCount.ch4.',
              'liveValue.diagnostics.this.io.0.digitalIoDuty.ch4.',
              'liveValue.diagnostics.this.io.0.digitalIoIn.ch5.',
              'liveValue.diagnostics.this.io.0.digitalIoOut.ch5.',
              'liveValue.diagnostics.this.io.0.digitalIoDirection.ch5.',
              'liveValue.diagnostics.this.io.0.digitalIoCount.ch5.',
              'liveValue.diagnostics.this.io.0.digitalIoDuty.ch5.',
              'liveValue.diagnostics.this.io.0.digitalIoIn.ch6.',
              'liveValue.diagnostics.this.io.0.digitalIoOut.ch6.',
              'liveValue.diagnostics.this.io.0.digitalIoDirection.ch6.',
              'liveValue.diagnostics.this.io.0.digitalIoCount.ch6.',
              'liveValue.diagnostics.this.io.0.digitalIoDuty.ch6.',
              'liveValue.diagnostics.this.io.0.digitalIoIn.ch7.',
              'liveValue.diagnostics.this.io.0.digitalIoOut.ch7.',
              'liveValue.diagnostics.this.io.0.digitalIoDirection.ch7.',
              'liveValue.diagnostics.this.io.0.digitalIoCount.ch7.',
              'liveValue.diagnostics.this.io.0.digitalIoDuty.ch7.',
              'liveValue.diagnostics.this.io.0.digitalIoIn.ch8.',
              'liveValue.diagnostics.this.io.0.digitalIoOut.ch8.',
              'liveValue.diagnostics.this.io.0.digitalIoDirection.ch8.',
              'liveValue.diagnostics.this.io.0.digitalIoCount.ch8.',
              'liveValue.diagnostics.this.io.0.digitalIoDuty.ch8.'
            ],
          },
        },
      },
      content: [
        {
          id: 'ioDigital',
          title: 'Digital I/O',
          layout: [
            {
              ioDigitalInputStates: { xs: 12 },
              ioDigitalInputOutputStates: { xs: 12 },
            },
          ],
          ui: {
            ioDigitalInputStates: {
              type: 'groupBox',
              title: 'Digital Inputs States',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.digitalIn.ch1': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch1': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalIn.ch2': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch2': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalIn.ch3': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch3': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalIn.ch4': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch4': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalIn.ch5': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch5': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalIn.ch6': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch6': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalIn.ch7': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch7': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalIn.ch8': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch8': { xs: 6 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.digitalIn.ch1': {
                      type: 'checkbox',
                      title: 'DI Input 1 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIn.ch1.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch1': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DI Counter Value Ch1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalInCount.ch1.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIn.ch2': {
                      type: 'checkbox',
                      title: 'DI Input 2 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIn.ch2.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch2': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DI Counter Value Ch2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalInCount.ch2.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIn.ch3': {
                      type: 'checkbox',
                      title: 'DI Input 3 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIn.ch3.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch3': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DI Counter Value Ch3',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalInCount.ch3.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIn.ch4': {
                      type: 'checkbox',
                      title: 'DI Input 4 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIn.ch4.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch4': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DI Counter Value Ch4',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalInCount.ch4.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIn.ch5': {
                      type: 'checkbox',
                      title: 'DI Input 5 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIn.ch5.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch5': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DI Counter Value Ch5',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalInCount.ch5.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIn.ch6': {
                      type: 'checkbox',
                      title: 'DI Input 6 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIn.ch6.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch6': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DI Counter Value Ch6',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalInCount.ch6.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIn.ch7': {
                      type: 'checkbox',
                      title: 'DI Input 7 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIn.ch7.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch7': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DI Counter Value Ch7',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalInCount.ch7.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIn.ch8': {
                      type: 'checkbox',
                      title: 'DI Input 8 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIn.ch8.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalInCount.ch8': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DI Counter Value Ch8',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalInCount.ch8.']
                    }
                  }
                ]
              }
            },
            ioDigitalInputOutputStates: {
              type: 'groupBox',
              title: 'Digital Input/Output States',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch1': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch1': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch1': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch1': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch1': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch2': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch2': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch2': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch2': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch2': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch3': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch3': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch3': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch3': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch3': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch4': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch4': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch4': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch4': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch4': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch5': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch5': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch5': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch5': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch5': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch6': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch6': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch6': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch6': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch6': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch7': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch7': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch7': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch7': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch7': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch8': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch8': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch8': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch8': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch8': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch1': {
                      type: 'checkbox',
                      title: 'DIO Input 1 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoIn.ch1.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch1': {
                      type: 'checkbox',
                      title: 'DIO Output 1 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoOut.ch1.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch1': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDirection.ch1.'],
                      title: 'DIO Output Mode Ch1'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch1': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DIO Output Count Ch1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoCount.ch1.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch1': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'DIO Output Duty Ch1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDuty.ch1.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch2': {
                      type: 'checkbox',
                      title: 'DIO Input 2 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoIn.ch2.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch2': {
                      type: 'checkbox',
                      title: 'DIO Output 2 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoOut.ch2.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch2': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDirection.ch2.'],
                      title: 'DIO Output Mode Ch2'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch2': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DIO Output Count Ch2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoCount.ch2.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch2': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'DIO Output Duty Ch2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDuty.ch2.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch3': {
                      type: 'checkbox',
                      title: 'DIO Input 3 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoIn.ch3.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch3': {
                      type: 'checkbox',
                      title: 'DIO Output 3 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoOut.ch3.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch3': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDirection.ch3.'],
                      title: 'DIO Output Mode Ch3'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch3': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DIO Output Count Ch3',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoCount.ch3.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch3': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'DIO Output Duty Ch3',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDuty.ch3.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch4': {
                      type: 'checkbox',
                      title: 'DIO Input 4 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoIn.ch4.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch4': {
                      type: 'checkbox',
                      title: 'DIO Output 4 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoOut.ch4.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch4': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDirection.ch4.'],
                      title: 'DIO Output Mode Ch4'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch4': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DIO Output Count Ch4',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoCount.ch4.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch4': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'DIO Output Duty Ch4',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDuty.ch4.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch5': {
                      type: 'checkbox',
                      title: 'DIO Input 5 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoIn.ch5.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch5': {
                      type: 'checkbox',
                      title: 'DIO Output 5 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoOut.ch5.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch5': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDirection.ch5.'],
                      title: 'DIO Output Mode Ch5'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch5': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DIO Output Count Ch5',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoCount.ch5.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch5': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'DIO Output Duty Ch5',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDuty.ch5.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch6': {
                      type: 'checkbox',
                      title: 'DIO Input 6 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoIn.ch6.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch6': {
                      type: 'checkbox',
                      title: 'DIO Output 6 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoOut.ch6.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch6': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDirection.ch6.'],
                      title: 'DIO Output Mode Ch6'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch6': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DIO Output Count Ch6',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoCount.ch6.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch6': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'DIO Output Duty Ch6',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDuty.ch6.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch7': {
                      type: 'checkbox',
                      title: 'DIO Input 7 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoIn.ch7.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch7': {
                      type: 'checkbox',
                      title: 'DIO Output 7 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoOut.ch7.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch7': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDirection.ch7.'],
                      title: 'DIO Output Mode Ch7'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch7': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DIO Output Count Ch7',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoCount.ch7.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch7': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'DIO Output Duty Ch7',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDuty.ch7.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoIn.ch8': {
                      type: 'checkbox',
                      title: 'DIO Input 8 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoIn.ch8.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoOut.ch8': {
                      type: 'checkbox',
                      title: 'DIO Output 8 State',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoOut.ch8.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDirection.ch8': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDirection.ch8.'],
                      title: 'DIO Output Mode Ch8'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoCount.ch8': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'DIO Output Count Ch8',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoCount.ch8.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.digitalIoDuty.ch8': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'DIO Output Duty Ch8',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.digitalIoDuty.ch8.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
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
        title: 'Analog I/O',
        label: 'Analog I/O',
        position: '3',
        id: 'ioAnalogIn',
        readOnly: true,
        url: '/ioAnalogIn',
        dataSource: {
          configs: [],
          ioAnalogIn: {
            topics: [
              'liveValue.diagnostics.this.io.0.analogIn.perc.ch1.',
              'liveValue.diagnostics.this.io.0.analogIn.eu.ch1.',
              'liveValue.diagnostics.this.io.0.analogIn.perc.ch2.',
              'liveValue.diagnostics.this.io.0.analogIn.eu.ch2.',
              'liveValue.diagnostics.this.io.0.analogIn.perc.ch3.',
              'liveValue.diagnostics.this.io.0.analogIn.eu.ch3.',
              'liveValue.diagnostics.this.io.0.analogIn.perc.ch4.',
              'liveValue.diagnostics.this.io.0.analogIn.eu.ch4.',
              'liveValue.diagnostics.this.io.0.analogIn.perc.ch5.',
              'liveValue.diagnostics.this.io.0.analogIn.eu.ch5.',
              'liveValue.diagnostics.this.io.0.analogIn.perc.ch6.',
              'liveValue.diagnostics.this.io.0.analogIn.eu.ch6.',
              'liveValue.diagnostics.this.io.0.analogIn.perc.ch7.',
              'liveValue.diagnostics.this.io.0.analogIn.eu.ch7.',
              'liveValue.diagnostics.this.io.0.analogIn.perc.ch8.',
              'liveValue.diagnostics.this.io.0.analogIn.eu.ch8.',
              'liveValue.diagnostics.this.io.0.analogOut.ch1.',
              'liveValue.diagnostics.this.io.0.analogOut.ch2.'
            ],
          },
        },
      },
      content: [
        {
          id: 'ioAnalogIn',
          title: 'Analog I/O',
          layout: [
            {
              ioAnalogInputs: { xs: 12 },
              ioAnalogOutputs: { xs: 12 },
            },
          ],
          ui: {
            ioAnalogInputs: {
              type: 'groupBox',
              title: 'Analog Inputs',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch1': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch1': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch2': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch2': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch3': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch3': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch4': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch4': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch5': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch5': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch6': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch6': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch7': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch7': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch8': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch8': { xs: 6 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch1': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value Percentage Ch1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.perc.ch1.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch1': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value EU Ch1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.eu.ch1.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch2': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value Percentage Ch2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.perc.ch2.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch2': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value EU Ch2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.eu.ch2.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch3': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value Percentage Ch3',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.perc.ch3.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch3': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value EU Ch3',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.eu.ch3.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch4': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value Percentage Ch4',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.perc.ch4.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch4': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value EU Ch4',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.eu.ch4.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch5': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value Percentage Ch5',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.perc.ch5.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch5': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value EU Ch5',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.eu.ch5.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch6': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value Percentage Ch6',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.perc.ch6.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch6': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value EU Ch6',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.eu.ch6.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch7': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value Percentage Ch7',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.perc.ch7.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch7': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value EU Ch7',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.eu.ch7.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.perc.ch8': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value Percentage Ch8',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.perc.ch8.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogIn.eu.ch8': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AI Value EU Ch8',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogIn.eu.ch8.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  }
                ]
              }
            },
            ioAnalogOutputs: {
              type: 'groupBox',
              title: 'Analog Outputs',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.analogOut.ch1': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.analogOut.ch2': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.analogOut.ch1': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AO Value Ch1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogOut.ch1.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.analogOut.ch2': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'AO Value Ch2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.analogOut.ch2.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
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
        title: 'ISaGRAF Status',
        label: 'ISaGRAF Status',
        position: '4',
        id: 'ioIsagrafStatus',
        readOnly: true,
        url: '/ioIsagrafStatus',
        dataSource: {
          configs: [],
          ioIsagrafStatus: {
            topics: [
              'liveValue.diagnostics.this.io.0.isagraf.resource1.name.',
              'liveValue.diagnostics.this.io.0.isagraf.resource1.number.',
              'liveValue.diagnostics.this.io.0.isagraf.resource1.cycleDateStamp.',
              'liveValue.diagnostics.this.io.0.isagraf.resource1.programmedCycleTime.',
              'liveValue.diagnostics.this.io.0.isagraf.resource1.currentCycleTime.',
              'liveValue.diagnostics.this.io.0.isagraf.resource1.maximumDetectedCycleTime.',
              'liveValue.diagnostics.this.io.0.isagraf.resource1.detectedCycleTimeOverflows.',
              'liveValue.diagnostics.this.io.0.isagraf.resource1.scanCounter.',
              'liveValue.diagnostics.this.io.0.isagraf.resource1.cycleCounter.',
              'liveValue.diagnostics.this.io.0.isagraf.resource1.executionMode.',
              'liveValue.diagnostics.this.io.0.isagraf.resource1.warningCode.',
              'liveValue.diagnostics.this.io.0.isagraf.resource1.warningArgument.',
              'liveValue.diagnostics.this.io.0.isagraf.resource1.warningComponentName.',
              'liveValue.diagnostics.this.io.0.isagraf.resource2.name.',
              'liveValue.diagnostics.this.io.0.isagraf.resource2.number.',
              'liveValue.diagnostics.this.io.0.isagraf.resource2.cycleDateStamp.',
              'liveValue.diagnostics.this.io.0.isagraf.resource2.programmedCycleTime.',
              'liveValue.diagnostics.this.io.0.isagraf.resource2.currentCycleTime.',
              'liveValue.diagnostics.this.io.0.isagraf.resource2.maximumDetectedCycleTime.',
              'liveValue.diagnostics.this.io.0.isagraf.resource2.detectedCycleTimeOverflows.',
              'liveValue.diagnostics.this.io.0.isagraf.resource2.scanCounter.',
              'liveValue.diagnostics.this.io.0.isagraf.resource2.cycleCounter.',
              'liveValue.diagnostics.this.io.0.isagraf.resource2.executionMode.',
              'liveValue.diagnostics.this.io.0.isagraf.resource2.warningCode.',
              'liveValue.diagnostics.this.io.0.isagraf.resource2.warningArgument.',
              'liveValue.diagnostics.this.io.0.isagraf.resource2.warningComponentName.',
              'liveValue.diagnostics.this.io.0.isagraf.resource3.name.',
              'liveValue.diagnostics.this.io.0.isagraf.resource3.number.',
              'liveValue.diagnostics.this.io.0.isagraf.resource3.cycleDateStamp.',
              'liveValue.diagnostics.this.io.0.isagraf.resource3.programmedCycleTime.',
              'liveValue.diagnostics.this.io.0.isagraf.resource3.currentCycleTime.',
              'liveValue.diagnostics.this.io.0.isagraf.resource3.maximumDetectedCycleTime.',
              'liveValue.diagnostics.this.io.0.isagraf.resource3.detectedCycleTimeOverflows.',
              'liveValue.diagnostics.this.io.0.isagraf.resource3.scanCounter.',
              'liveValue.diagnostics.this.io.0.isagraf.resource3.cycleCounter.',
              'liveValue.diagnostics.this.io.0.isagraf.resource3.executionMode.',
              'liveValue.diagnostics.this.io.0.isagraf.resource3.warningCode.',
              'liveValue.diagnostics.this.io.0.isagraf.resource3.warningArgument.',
              'liveValue.diagnostics.this.io.0.isagraf.resource3.warningComponentName.',
              'liveValue.diagnostics.this.io.0.isagraf.resource4.name.',
              'liveValue.diagnostics.this.io.0.isagraf.resource4.number.',
              'liveValue.diagnostics.this.io.0.isagraf.resource4.cycleDateStamp.',
              'liveValue.diagnostics.this.io.0.isagraf.resource4.programmedCycleTime.',
              'liveValue.diagnostics.this.io.0.isagraf.resource4.currentCycleTime.',
              'liveValue.diagnostics.this.io.0.isagraf.resource4.maximumDetectedCycleTime.',
              'liveValue.diagnostics.this.io.0.isagraf.resource4.detectedCycleTimeOverflows.',
              'liveValue.diagnostics.this.io.0.isagraf.resource4.scanCounter.',
              'liveValue.diagnostics.this.io.0.isagraf.resource4.cycleCounter.',
              'liveValue.diagnostics.this.io.0.isagraf.resource4.executionMode.',
              'liveValue.diagnostics.this.io.0.isagraf.resource4.warningCode.',
              'liveValue.diagnostics.this.io.0.isagraf.resource4.warningArgument.',
              'liveValue.diagnostics.this.io.0.isagraf.resource4.warningComponentName.'
            ],
          },
        },
      },
      content: [
        {
          id: 'ioIsagrafStatus',
          title: 'ISaGRAF Status',
          layout: [
            {
              ioResource1: { xs: 12 },
              ioResource2: { xs: 12 },
              ioResource3: { xs: 12 },
              ioResource4: { xs: 12 },
            },
          ],
          ui: {
            ioResource1: {
              type: 'groupBox',
              title: 'ISaGRAF Resources #1 Status',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.name': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.number': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.cycleDateStamp': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.programmedCycleTime': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.currentCycleTime': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.maximumDetectedCycleTime': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.detectedCycleTimeOverflows': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.scanCounter': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.cycleCounter': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.executionMode': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.warningCode': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.warningArgument': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.warningComponentName': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.name': {
                      type: 'text',
                      placeholder: '',
                      title: 'Resource 1 Name',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource1.name.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.number': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Resource 1 Number (Slave)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource1.number.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.cycleDateStamp': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Cycle Date Stamp',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource1.cycleDateStamp.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.programmedCycleTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Programmed Cycle Time (ms)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource1.programmedCycleTime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.currentCycleTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Current Cycle Time (ms)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource1.currentCycleTime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.maximumDetectedCycleTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Maximum Detected Cycle Time (ms)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource1.maximumDetectedCycleTime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.detectedCycleTimeOverflows': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Number of Detected Cycle Time Overflows',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource1.detectedCycleTimeOverflows.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.scanCounter': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Scan Counter',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource1.scanCounter.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.cycleCounter': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Cycle Counter',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource1.cycleCounter.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.executionMode': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource1.executionMode.'],
                      title: 'Resource Execution Mode'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.warningCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Resource Warning Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource1.warningCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.warningArgument': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Resource Warning Argument',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource1.warningArgument.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource1.warningComponentName': {
                      type: 'text',
                      placeholder: '',
                      title: 'Resource Warning Component Name',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource1.warningComponentName.']
                    }
                  }
                ]
              }
            },
            ioResource2: {
              type: 'groupBox',
              title: 'ISaGRAF Resources #2 Status',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.name': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.number': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.cycleDateStamp': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.programmedCycleTime': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.currentCycleTime': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.maximumDetectedCycleTime': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.detectedCycleTimeOverflows': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.scanCounter': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.cycleCounter': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.executionMode': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.warningCode': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.warningArgument': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.warningComponentName': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.name': {
                      type: 'text',
                      placeholder: '',
                      title: 'Resource 2 Name',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource2.name.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.number': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Resource 2 Number (Slave)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource2.number.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.cycleDateStamp': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Cycle Date Stamp',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource2.cycleDateStamp.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.programmedCycleTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Programmed Cycle Time (ms)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource2.programmedCycleTime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.currentCycleTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Current Cycle Time (ms)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource2.currentCycleTime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.maximumDetectedCycleTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Maximum Detected Cycle Time (ms)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource2.maximumDetectedCycleTime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.detectedCycleTimeOverflows': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Number of Detected Cycle Time Overflows',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource2.detectedCycleTimeOverflows.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.scanCounter': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Scan Counter',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource2.scanCounter.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.cycleCounter': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Cycle Counter',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource2.cycleCounter.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.executionMode': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource2.executionMode.'],
                      title: 'Resource Execution Mode'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.warningCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Resource Warning Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource2.warningCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.warningArgument': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Resource Warning Argument',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource2.warningArgument.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource2.warningComponentName': {
                      type: 'text',
                      placeholder: '',
                      title: 'Resource Warning Component Name',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource2.warningComponentName.']
                    }
                  }
                ]
              }
            },
            ioResource3: {
              type: 'groupBox',
              title: 'ISaGRAF Resources #3 Status',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.name': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.number': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.cycleDateStamp': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.programmedCycleTime': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.currentCycleTime': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.maximumDetectedCycleTime': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.detectedCycleTimeOverflows': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.scanCounter': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.cycleCounter': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.executionMode': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.warningCode': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.warningArgument': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.warningComponentName': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.name': {
                      type: 'text',
                      placeholder: '',
                      title: 'Resource 3 Name',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource3.name.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.number': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Resource 3 Number (Slave)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource3.number.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.cycleDateStamp': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Cycle Date Stamp',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource3.cycleDateStamp.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.programmedCycleTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Programmed Cycle Time (ms)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource3.programmedCycleTime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.currentCycleTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Current Cycle Time (ms)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource3.currentCycleTime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.maximumDetectedCycleTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Maximum Detected Cycle Time (ms)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource3.maximumDetectedCycleTime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.detectedCycleTimeOverflows': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Number of Detected Cycle Time Overflows',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource3.detectedCycleTimeOverflows.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.scanCounter': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Scan Counter',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource3.scanCounter.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.cycleCounter': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Cycle Counter',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource3.cycleCounter.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.executionMode': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource3.executionMode.'],
                      title: 'Resource Execution Mode'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.warningCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Resource Warning Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource3.warningCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.warningArgument': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Resource Warning Argument',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource3.warningArgument.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource3.warningComponentName': {
                      type: 'text',
                      placeholder: '',
                      title: 'Resource Warning Component Name',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource3.warningComponentName.']
                    }
                  }
                ]
              }
            },
            ioResource4: {
              type: 'groupBox',
              title: 'ISaGRAF Resources #4 Status',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.name': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.number': { xs: 6 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.cycleDateStamp': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.programmedCycleTime': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.currentCycleTime': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.maximumDetectedCycleTime': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.detectedCycleTimeOverflows': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.scanCounter': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.cycleCounter': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.executionMode': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.warningCode': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.warningArgument': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.warningComponentName': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.name': {
                      type: 'text',
                      placeholder: '',
                      title: 'Resource 4 Name',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource4.name.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.number': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Resource 4 Number (Slave)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource4.number.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.cycleDateStamp': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Cycle Date Stamp',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource4.cycleDateStamp.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.programmedCycleTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Programmed Cycle Time (ms)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource4.programmedCycleTime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.currentCycleTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Current Cycle Time (ms)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource4.currentCycleTime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.maximumDetectedCycleTime': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Maximum Detected Cycle Time (ms)',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource4.maximumDetectedCycleTime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.detectedCycleTimeOverflows': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Number of Detected Cycle Time Overflows',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource4.detectedCycleTimeOverflows.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.scanCounter': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Scan Counter',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource4.scanCounter.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.cycleCounter': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Cycle Counter',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource4.cycleCounter.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.executionMode': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource4.executionMode.'],
                      title: 'Resource Execution Mode'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.warningCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Resource Warning Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource4.warningCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.warningArgument': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Resource Warning Argument',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource4.warningArgument.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.isagraf.resource4.warningComponentName': {
                      type: 'text',
                      placeholder: '',
                      title: 'Resource Warning Component Name',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.isagraf.resource4.warningComponentName.']
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
        title: 'HART Channels',
        label: 'HART Channels',
        position: '5',
        id: 'ioHARTchannels',
        readOnly: true,
        url: '/ioHARTchannels',
        dataSource: {
          configs: [],
          HARTAnalogIn1: {
            topics: [
              'liveValue.diagnostics.this.io.0.hart.ch1.pv.',
              'liveValue.diagnostics.this.io.0.hart.ch1.sv.',
              'liveValue.diagnostics.this.io.0.hart.ch1.tv.',
              'liveValue.diagnostics.this.io.0.hart.ch1.fv.',
              'liveValue.diagnostics.this.io.0.hart.ch1.pvUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch1.svUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch1.tvUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch1.fvUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch1.current.',
              'liveValue.diagnostics.this.io.0.hart.ch1.manufacturerId.',
              'liveValue.diagnostics.this.io.0.hart.ch1.manufacturerDeviceCode.',
              'liveValue.diagnostics.this.io.0.hart.ch1.requiredPreambles.',
              'liveValue.diagnostics.this.io.0.hart.ch1.universalCommandRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch1.transmitterSpecificationCommandRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch1.softwareRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch1.hardwareRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceFunctionFlags.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceId.',
              'liveValue.diagnostics.this.io.0.hart.ch1.sensorSerial.',
              'liveValue.diagnostics.this.io.0.hart.ch1.unitsCodeForSensor.',
              'liveValue.diagnostics.this.io.0.hart.ch1.sensorUpperLimit.',
              'liveValue.diagnostics.this.io.0.hart.ch1.sensorLowerLimit.',
              'liveValue.diagnostics.this.io.0.hart.ch1.sensorMinimumSpan.',
              'liveValue.diagnostics.this.io.0.hart.ch1.tag.',
              'liveValue.diagnostics.this.io.0.hart.ch1.descriptor.',
              'liveValue.diagnostics.this.io.0.hart.ch1.date.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceStatus.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceSpecificStatus0.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceOperationalModes.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus0.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus1.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceAnalogChannelSaturated.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus2.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus3.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceAnalogChannelFixed.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceSpecificStatus1.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceStatus2.',
              'liveValue.diagnostics.this.io.0.hart.ch1.deviceLiveList.',
              'liveValue.diagnostics.this.io.0.hart.ch1.txCount.',
              'liveValue.diagnostics.this.io.0.hart.ch1.rxCount.',
              'liveValue.diagnostics.this.io.0.hart.ch1.communicationErrors.',
              'liveValue.diagnostics.this.io.0.hart.ch1.commandErrors.',
              'liveValue.diagnostics.this.io.0.hart.ch1.timeoutErrors.',
              'liveValue.diagnostics.this.io.0.hart.ch1.relayRxCount.',
              'liveValue.diagnostics.this.io.0.hart.ch1.relayTxCount.',
              'liveValue.diagnostics.this.io.0.hart.ch1.advancedDiagnosticReadSuccess.',
              'liveValue.diagnostics.this.io.0.hart.ch1.advancedDiagnosticReadFailed.',
              'liveValue.diagnostics.this.io.0.hart.ch1.advancedDiagnosticReadTimeout.'
            ],
          },
          HARTAnalogIn2: {
            topics: [
              'liveValue.diagnostics.this.io.0.hart.ch2.pv.',
              'liveValue.diagnostics.this.io.0.hart.ch2.sv.',
              'liveValue.diagnostics.this.io.0.hart.ch2.tv.',
              'liveValue.diagnostics.this.io.0.hart.ch2.fv.',
              'liveValue.diagnostics.this.io.0.hart.ch2.pvUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch2.svUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch2.tvUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch2.fvUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch2.current.',
              'liveValue.diagnostics.this.io.0.hart.ch2.manufacturerId.',
              'liveValue.diagnostics.this.io.0.hart.ch2.manufacturerDeviceCode.',
              'liveValue.diagnostics.this.io.0.hart.ch2.requiredPreambles.',
              'liveValue.diagnostics.this.io.0.hart.ch2.universalCommandRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch2.transmitterSpecificationCommandRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch2.softwareRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch2.hardwareRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceFunctionFlags.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceId.',
              'liveValue.diagnostics.this.io.0.hart.ch2.sensorSerial.',
              'liveValue.diagnostics.this.io.0.hart.ch2.unitsCodeForSensor.',
              'liveValue.diagnostics.this.io.0.hart.ch2.sensorUpperLimit.',
              'liveValue.diagnostics.this.io.0.hart.ch2.sensorLowerLimit.',
              'liveValue.diagnostics.this.io.0.hart.ch2.sensorMinimumSpan.',
              'liveValue.diagnostics.this.io.0.hart.ch2.tag.',
              'liveValue.diagnostics.this.io.0.hart.ch2.descriptor.',
              'liveValue.diagnostics.this.io.0.hart.ch2.date.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceStatus.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceSpecificStatus0.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceOperationalModes.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus0.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus1.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceAnalogChannelSaturated.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus2.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus3.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceAnalogChannelFixed.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceSpecificStatus1.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceStatus2.',
              'liveValue.diagnostics.this.io.0.hart.ch2.deviceLiveList.',
              'liveValue.diagnostics.this.io.0.hart.ch2.txCount.',
              'liveValue.diagnostics.this.io.0.hart.ch2.rxCount.',
              'liveValue.diagnostics.this.io.0.hart.ch2.communicationErrors.',
              'liveValue.diagnostics.this.io.0.hart.ch2.commandErrors.',
              'liveValue.diagnostics.this.io.0.hart.ch2.timeoutErrors.',
              'liveValue.diagnostics.this.io.0.hart.ch2.relayRxCount.',
              'liveValue.diagnostics.this.io.0.hart.ch2.relayTxCount.',
              'liveValue.diagnostics.this.io.0.hart.ch2.advancedDiagnosticReadSuccess.',
              'liveValue.diagnostics.this.io.0.hart.ch2.advancedDiagnosticReadFailed.',
              'liveValue.diagnostics.this.io.0.hart.ch2.advancedDiagnosticReadTimeout.'
            ],
          },
          HARTAnalogIn3: {
            topics: [
              'liveValue.diagnostics.this.io.0.hart.ch3.pv.',
              'liveValue.diagnostics.this.io.0.hart.ch3.sv.',
              'liveValue.diagnostics.this.io.0.hart.ch3.tv.',
              'liveValue.diagnostics.this.io.0.hart.ch3.fv.',
              'liveValue.diagnostics.this.io.0.hart.ch3.pvUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch3.svUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch3.tvUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch3.fvUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch3.current.',
              'liveValue.diagnostics.this.io.0.hart.ch3.manufacturerId.',
              'liveValue.diagnostics.this.io.0.hart.ch3.manufacturerDeviceCode.',
              'liveValue.diagnostics.this.io.0.hart.ch3.requiredPreambles.',
              'liveValue.diagnostics.this.io.0.hart.ch3.universalCommandRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch3.transmitterSpecificationCommandRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch3.softwareRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch3.hardwareRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceFunctionFlags.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceId.',
              'liveValue.diagnostics.this.io.0.hart.ch3.sensorSerial.',
              'liveValue.diagnostics.this.io.0.hart.ch3.unitsCodeForSensor.',
              'liveValue.diagnostics.this.io.0.hart.ch3.sensorUpperLimit.',
              'liveValue.diagnostics.this.io.0.hart.ch3.sensorLowerLimit.',
              'liveValue.diagnostics.this.io.0.hart.ch3.sensorMinimumSpan.',
              'liveValue.diagnostics.this.io.0.hart.ch3.tag.',
              'liveValue.diagnostics.this.io.0.hart.ch3.descriptor.',
              'liveValue.diagnostics.this.io.0.hart.ch3.date.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceStatus.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceSpecificStatus0.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceOperationalModes.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus0.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus1.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceAnalogChannelSaturated.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus2.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus3.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceAnalogChannelFixed.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceSpecificStatus1.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceStatus2.',
              'liveValue.diagnostics.this.io.0.hart.ch3.deviceLiveList.',
              'liveValue.diagnostics.this.io.0.hart.ch3.txCount.',
              'liveValue.diagnostics.this.io.0.hart.ch3.rxCount.',
              'liveValue.diagnostics.this.io.0.hart.ch3.communicationErrors.',
              'liveValue.diagnostics.this.io.0.hart.ch3.commandErrors.',
              'liveValue.diagnostics.this.io.0.hart.ch3.timeoutErrors.',
              'liveValue.diagnostics.this.io.0.hart.ch3.relayRxCount.',
              'liveValue.diagnostics.this.io.0.hart.ch3.relayTxCount.',
              'liveValue.diagnostics.this.io.0.hart.ch3.advancedDiagnosticReadSuccess.',
              'liveValue.diagnostics.this.io.0.hart.ch3.advancedDiagnosticReadFailed.',
              'liveValue.diagnostics.this.io.0.hart.ch3.advancedDiagnosticReadTimeout.'
            ],
          },
          HARTAnalogIn4: {
            topics: [
              'liveValue.diagnostics.this.io.0.hart.ch4.pv.',
              'liveValue.diagnostics.this.io.0.hart.ch4.sv.',
              'liveValue.diagnostics.this.io.0.hart.ch4.tv.',
              'liveValue.diagnostics.this.io.0.hart.ch4.fv.',
              'liveValue.diagnostics.this.io.0.hart.ch4.pvUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch4.svUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch4.tvUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch4.fvUnitCode.',
              'liveValue.diagnostics.this.io.0.hart.ch4.current.',
              'liveValue.diagnostics.this.io.0.hart.ch4.manufacturerId.',
              'liveValue.diagnostics.this.io.0.hart.ch4.manufacturerDeviceCode.',
              'liveValue.diagnostics.this.io.0.hart.ch4.requiredPreambles.',
              'liveValue.diagnostics.this.io.0.hart.ch4.universalCommandRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch4.transmitterSpecificationCommandRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch4.softwareRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch4.hardwareRevision.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceFunctionFlags.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceId.',
              'liveValue.diagnostics.this.io.0.hart.ch4.sensorSerial.',
              'liveValue.diagnostics.this.io.0.hart.ch4.unitsCodeForSensor.',
              'liveValue.diagnostics.this.io.0.hart.ch4.sensorUpperLimit.',
              'liveValue.diagnostics.this.io.0.hart.ch4.sensorLowerLimit.',
              'liveValue.diagnostics.this.io.0.hart.ch4.sensorMinimumSpan.',
              'liveValue.diagnostics.this.io.0.hart.ch4.tag.',
              'liveValue.diagnostics.this.io.0.hart.ch4.descriptor.',
              'liveValue.diagnostics.this.io.0.hart.ch4.date.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceStatus.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceSpecificStatus0.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceOperationalModes.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus0.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus1.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceAnalogChannelSaturated.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus2.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus3.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceAnalogChannelFixed.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceSpecificStatus1.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceStatus2.',
              'liveValue.diagnostics.this.io.0.hart.ch4.deviceLiveList.',
              'liveValue.diagnostics.this.io.0.hart.ch4.txCount.',
              'liveValue.diagnostics.this.io.0.hart.ch4.rxCount.',
              'liveValue.diagnostics.this.io.0.hart.ch4.communicationErrors.',
              'liveValue.diagnostics.this.io.0.hart.ch4.commandErrors.',
              'liveValue.diagnostics.this.io.0.hart.ch4.timeoutErrors.',
              'liveValue.diagnostics.this.io.0.hart.ch4.relayRxCount.',
              'liveValue.diagnostics.this.io.0.hart.ch4.relayTxCount.',
              'liveValue.diagnostics.this.io.0.hart.ch4.advancedDiagnosticReadSuccess.',
              'liveValue.diagnostics.this.io.0.hart.ch4.advancedDiagnosticReadFailed.',
              'liveValue.diagnostics.this.io.0.hart.ch4.advancedDiagnosticReadTimeout.'
            ],
          },
        },
      },
      content: [
        {
          id: 'HARTAnalogIn1',
          title: 'HART Analog In 1',
          layout: [
            {
              hart1ProcessVariables: { xs: 12 },
              hart1DeviceInfo: { xs: 12 },
              hart1DeviceStatus: { xs: 12 },
              hart1Statistics: { xs: 12 },
            },
          ],
          ui: {
            hart1ProcessVariables: {
              type: 'groupBox',
              title: 'HART Ch1 Process Variables',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.pv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.sv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.tv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.fv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.pvUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.svUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.tvUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.fvUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.current': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.pv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'PV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.pv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.sv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'SV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.sv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.tv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'TV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.tv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.fv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'FV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.fv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.pvUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'PV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.pvUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.svUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'SV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.svUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.tvUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'TV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.tvUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.fvUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'FV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.fvUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.current': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Analog Current',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.current.'],
                      unitConversion: {
                        category: 'CUR',
                        showUnits: true,
                      }
                    }
                  }
                ]
              }
            },
            hart1DeviceInfo: {
              type: 'groupBox',
              title: 'HART Ch1 Device Info',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.manufacturerId': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.manufacturerDeviceCode': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.requiredPreambles': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.universalCommandRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.transmitterSpecificationCommandRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.softwareRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.hardwareRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceFunctionFlags': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceId': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.sensorSerial': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.unitsCodeForSensor': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.sensorUpperLimit': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.sensorLowerLimit': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.sensorMinimumSpan': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.tag': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.descriptor': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.date': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.manufacturerId': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Manufacturer ID',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.manufacturerId.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.manufacturerDeviceCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Manufacturer Device Type Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.manufacturerDeviceCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.requiredPreambles': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Number of Preambles',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.requiredPreambles.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.universalCommandRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Universal Command Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.universalCommandRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.transmitterSpecificationCommandRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Transmitter Specific Command Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.transmitterSpecificationCommandRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.softwareRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Software Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.softwareRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.hardwareRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Hardware Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.hardwareRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceFunctionFlags': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device Function Flags',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceFunctionFlags.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceId': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device ID Number',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceId.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.sensorSerial': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Sensor Serial Number',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.sensorSerial.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.unitsCodeForSensor': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Units Code for Sensor',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.unitsCodeForSensor.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.sensorUpperLimit': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Sensor Upper Limit',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.sensorUpperLimit.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.sensorLowerLimit': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Sensor Lower Limit',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.sensorLowerLimit.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.sensorMinimumSpan': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Sensor Minimum Span',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.sensorMinimumSpan.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.tag': {
                      type: 'text',
                      placeholder: 'HCh1 Tag',
                      title: 'Tag',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.tag.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.descriptor': {
                      type: 'text',
                      placeholder: 'HCh1 Descriptor',
                      title: 'Descriptor',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.descriptor.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.date': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Date',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.date.']
                    }
                  }
                ]
              }
            },
            hart1DeviceStatus: {
              type: 'groupBox',
              title: 'HART Ch1 Device Status',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceStatus': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceSpecificStatus0': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceOperationalModes': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus0': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus1': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceAnalogChannelSaturated': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus2': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus3': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceAnalogChannelFixed': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceSpecificStatus1': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceStatus2': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceLiveList': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceStatus': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'HART Status',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceStatus.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceSpecificStatus0': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device Specific Status 0',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceSpecificStatus0.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceOperationalModes': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Operational Modes',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceOperationalModes.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus0': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 0',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus0.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus1': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus1.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceAnalogChannelSaturated': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Analog Channel Saturated',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceAnalogChannelSaturated.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus2': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus2.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus3': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 3',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceStandardizeStatus3.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceAnalogChannelFixed': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Analog Channel Fixed',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceAnalogChannelFixed.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceSpecificStatus1': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device Specific Status 1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceSpecificStatus1.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceStatus2': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Status 2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceStatus2.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.deviceLiveList': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Live List',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.deviceLiveList.']
                    }
                  }
                ]
              }
            },
            hart1Statistics: {
              type: 'groupBox',
              title: 'HART Ch1 Statistics',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.txCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.rxCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.communicationErrors': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.commandErrors': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.timeoutErrors': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.relayRxCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.relayTxCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.advancedDiagnosticReadSuccess': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.advancedDiagnosticReadFailed': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch1.advancedDiagnosticReadTimeout': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.txCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'HART Tx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.txCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.rxCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'HART Rx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.rxCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.communicationErrors': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Communication Errors',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.communicationErrors.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.commandErrors': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Command Errors',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.commandErrors.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.timeoutErrors': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Timeout Errors',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.timeoutErrors.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.relayRxCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Relay Message Rx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.relayRxCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.relayTxCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Relay Message Tx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.relayTxCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.advancedDiagnosticReadSuccess': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Advanced Diagnostics Read Success',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.advancedDiagnosticReadSuccess.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.advancedDiagnosticReadFailed': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Advanced Diagnostics Read Failed',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.advancedDiagnosticReadFailed.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch1.advancedDiagnosticReadTimeout': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Advanced Diagnostics Read Time-out',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch1.advancedDiagnosticReadTimeout.']
                    }
                  }
                ]
              }
            }
          }
        },
        {
          id: 'HARTAnalogIn2',
          title: 'HART Analog In 2',
          layout: [
            {
              hart2ProcessVariables: { xs: 12 },
              hart2DeviceInfo: { xs: 12 },
              hart2DeviceStatus: { xs: 12 },
              hart2Statistics: { xs: 12 },
            },
          ],
          ui: {
            hart2ProcessVariables: {
              type: 'groupBox',
              title: 'HART Ch2 Process Variables',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.pv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.sv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.tv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.fv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.pvUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.svUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.tvUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.fvUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.current': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.pv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'PV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.pv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.sv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'SV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.sv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.tv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'TV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.tv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.fv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'FV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.fv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.pvUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'PV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.pvUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.svUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'SV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.svUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.tvUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'TV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.tvUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.fvUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'FV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.fvUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.current': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Analog Current',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.current.'],
                      unitConversion: {
                        category: 'CUR',
                        showUnits: true,
                      }
                    }
                  }
                ]
              }
            },
            hart2DeviceInfo: {
              type: 'groupBox',
              title: 'HART Ch2 Device Info',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.manufacturerId': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.manufacturerDeviceCode': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.requiredPreambles': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.universalCommandRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.transmitterSpecificationCommandRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.softwareRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.hardwareRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceFunctionFlags': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceId': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.sensorSerial': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.unitsCodeForSensor': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.sensorUpperLimit': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.sensorLowerLimit': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.sensorMinimumSpan': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.tag': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.descriptor': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.date': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.manufacturerId': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Manufacturer ID',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.manufacturerId.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.manufacturerDeviceCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Manufacturer Device Type Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.manufacturerDeviceCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.requiredPreambles': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Number of Preambles',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.requiredPreambles.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.universalCommandRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Universal Command Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.universalCommandRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.transmitterSpecificationCommandRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Transmitter Specific Command Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.transmitterSpecificationCommandRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.softwareRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Software Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.softwareRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.hardwareRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Hardware Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.hardwareRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceFunctionFlags': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device Function Flags',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceFunctionFlags.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceId': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device ID Number',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceId.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.sensorSerial': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Sensor Serial Number',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.sensorSerial.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.unitsCodeForSensor': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Units Code for Sensor',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.unitsCodeForSensor.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.sensorUpperLimit': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Sensor Upper Limit',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.sensorUpperLimit.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.sensorLowerLimit': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Sensor Lower Limit',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.sensorLowerLimit.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.sensorMinimumSpan': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Sensor Minimum Span',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.sensorMinimumSpan.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.tag': {
                      type: 'text',
                      placeholder: 'HCh2 Tag',
                      title: 'Tag',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.tag.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.descriptor': {
                      type: 'text',
                      placeholder: 'HCh2 Descriptor',
                      title: 'Descriptor',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.descriptor.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.date': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Date',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.date.']
                    }
                  }
                ]
              }
            },
            hart2DeviceStatus: {
              type: 'groupBox',
              title: 'HART Ch2 Device Status',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceStatus': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceSpecificStatus0': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceOperationalModes': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus0': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus1': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceAnalogChannelSaturated': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus2': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus3': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceAnalogChannelFixed': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceSpecificStatus1': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceStatus2': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceLiveList': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceStatus': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'HART Status',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceStatus.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceSpecificStatus0': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device Specific Status 0',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceSpecificStatus0.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceOperationalModes': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Operational Modes',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceOperationalModes.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus0': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 0',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus0.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus1': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus1.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceAnalogChannelSaturated': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Analog Channel Saturated',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceAnalogChannelSaturated.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus2': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus2.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus3': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 3',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceStandardizeStatus3.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceAnalogChannelFixed': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Analog Channel Fixed',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceAnalogChannelFixed.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceSpecificStatus1': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device Specific Status 1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceSpecificStatus1.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceStatus2': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Status 2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceStatus2.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.deviceLiveList': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Live List',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.deviceLiveList.']
                    }
                  }
                ]
              }
            },
            hart2Statistics: {
              type: 'groupBox',
              title: 'HART Ch2 Statistics',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.txCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.rxCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.communicationErrors': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.commandErrors': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.timeoutErrors': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.relayRxCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.relayTxCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.advancedDiagnosticReadSuccess': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.advancedDiagnosticReadFailed': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch2.advancedDiagnosticReadTimeout': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.txCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'HART Tx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.txCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.rxCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'HART Rx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.rxCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.communicationErrors': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Communication Errors',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.communicationErrors.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.commandErrors': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Command Errors',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.commandErrors.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.timeoutErrors': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Timeout Errors',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.timeoutErrors.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.relayRxCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Relay Message Rx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.relayRxCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.relayTxCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Relay Message Tx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.relayTxCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.advancedDiagnosticReadSuccess': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Advanced Diagnostics Read Success',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.advancedDiagnosticReadSuccess.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.advancedDiagnosticReadFailed': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Advanced Diagnostics Read Failed',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.advancedDiagnosticReadFailed.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch2.advancedDiagnosticReadTimeout': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Advanced Diagnostics Read Time-out',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch2.advancedDiagnosticReadTimeout.']
                    }
                  }
                ]
              }
            }
          }
        },
        {
          id: 'HARTAnalogIn3',
          title: 'HART Analog In 3',
          layout: [
            {
              hart3ProcessVariables: { xs: 12 },
              hart3DeviceInfo: { xs: 12 },
              hart3DeviceStatus: { xs: 12 },
              hart3Statistics: { xs: 12 },
            },
          ],
          ui: {
            hart3ProcessVariables: {
              type: 'groupBox',
              title: 'HART Ch3 Process Variables',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.pv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.sv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.tv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.fv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.pvUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.svUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.tvUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.fvUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.current': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.pv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'PV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.pv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.sv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'SV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.sv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.tv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'TV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.tv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.fv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'FV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.fv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.pvUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'PV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.pvUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.svUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'SV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.svUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.tvUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'TV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.tvUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.fvUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'FV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.fvUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.current': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Analog Current',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.current.'],
                      unitConversion: {
                        category: 'CUR',
                        showUnits: true,
                      }
                    }
                  }
                ]
              }
            },
            hart3DeviceInfo: {
              type: 'groupBox',
              title: 'HART Ch3 Device Info',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.manufacturerId': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.manufacturerDeviceCode': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.requiredPreambles': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.universalCommandRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.transmitterSpecificationCommandRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.softwareRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.hardwareRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceFunctionFlags': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceId': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.sensorSerial': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.unitsCodeForSensor': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.sensorUpperLimit': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.sensorLowerLimit': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.sensorMinimumSpan': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.tag': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.descriptor': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.date': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.manufacturerId': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Manufacturer ID',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.manufacturerId.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.manufacturerDeviceCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Manufacturer Device Type Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.manufacturerDeviceCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.requiredPreambles': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Number of Preambles',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.requiredPreambles.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.universalCommandRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Universal Command Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.universalCommandRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.transmitterSpecificationCommandRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Transmitter Specific Command Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.transmitterSpecificationCommandRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.softwareRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Software Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.softwareRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.hardwareRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Hardware Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.hardwareRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceFunctionFlags': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device Function Flags',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceFunctionFlags.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceId': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device ID Number',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceId.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.sensorSerial': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Sensor Serial Number',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.sensorSerial.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.unitsCodeForSensor': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Units Code for Sensor',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.unitsCodeForSensor.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.sensorUpperLimit': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Sensor Upper Limit',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.sensorUpperLimit.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.sensorLowerLimit': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Sensor Lower Limit',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.sensorLowerLimit.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.sensorMinimumSpan': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Sensor Minimum Span',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.sensorMinimumSpan.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.tag': {
                      type: 'text',
                      placeholder: 'HCh3 Tag',
                      title: 'Tag',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.tag.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.descriptor': {
                      type: 'text',
                      placeholder: 'HCh3 Descriptor',
                      title: 'Descriptor',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.descriptor.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.date': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Date',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.date.']
                    }
                  }
                ]
              }
            },
            hart3DeviceStatus: {
              type: 'groupBox',
              title: 'HART Ch3 Device Status',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceStatus': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceSpecificStatus0': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceOperationalModes': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus0': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus1': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceAnalogChannelSaturated': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus2': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus3': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceAnalogChannelFixed': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceSpecificStatus1': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceStatus2': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceLiveList': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceStatus': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'HART Status',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceStatus.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceSpecificStatus0': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device Specific Status 0',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceSpecificStatus0.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceOperationalModes': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Operational Modes',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceOperationalModes.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus0': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 0',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus0.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus1': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus1.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceAnalogChannelSaturated': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Analog Channel Saturated',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceAnalogChannelSaturated.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus2': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus2.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus3': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 3',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceStandardizeStatus3.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceAnalogChannelFixed': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Analog Channel Fixed',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceAnalogChannelFixed.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceSpecificStatus1': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device Specific Status 1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceSpecificStatus1.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceStatus2': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Status 2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceStatus2.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.deviceLiveList': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Live List',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.deviceLiveList.']
                    }
                  }
                ]
              }
            },
            hart3Statistics: {
              type: 'groupBox',
              title: 'HART Ch3 Statistics',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.txCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.rxCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.communicationErrors': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.commandErrors': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.timeoutErrors': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.relayRxCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.relayTxCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.advancedDiagnosticReadSuccess': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.advancedDiagnosticReadFailed': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch3.advancedDiagnosticReadTimeout': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.txCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'HART Tx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.txCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.rxCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'HART Rx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.rxCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.communicationErrors': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Communication Errors',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.communicationErrors.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.commandErrors': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Command Errors',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.commandErrors.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.timeoutErrors': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Timeout Errors',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.timeoutErrors.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.relayRxCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Relay Message Rx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.relayRxCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.relayTxCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Relay Message Tx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.relayTxCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.advancedDiagnosticReadSuccess': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Advanced Diagnostics Read Success',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.advancedDiagnosticReadSuccess.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.advancedDiagnosticReadFailed': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Advanced Diagnostics Read Failed',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.advancedDiagnosticReadFailed.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch3.advancedDiagnosticReadTimeout': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Advanced Diagnostics Read Time-out',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch3.advancedDiagnosticReadTimeout.']
                    }
                  }
                ]
              }
            }
          }
        },
        {
          id: 'HARTAnalogIn4',
          title: 'HART Analog In 4',
          layout: [
            {
              hart4ProcessVariables: { xs: 12 },
              hart4DeviceInfo: { xs: 12 },
              hart4DeviceStatus: { xs: 12 },
              hart4Statistics: { xs: 12 },
            },
          ],
          ui: {
            hart4ProcessVariables: {
              type: 'groupBox',
              title: 'HART Ch4 Process Variables',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.pv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.sv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.tv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.fv': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.pvUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.svUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.tvUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.fvUnitCode': { xs: 3 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.current': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.pv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'PV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.pv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.sv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'SV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.sv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.tv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'TV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.tv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.fv': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'FV',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.fv.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.pvUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'PV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.pvUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.svUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'SV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.svUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.tvUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'TV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.tvUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.fvUnitCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'FV Units Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.fvUnitCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.current': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Analog Current',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.current.'],
                      unitConversion: {
                        category: 'CUR',
                        showUnits: true,
                      }
                    }
                  }
                ]
              }
            },
            hart4DeviceInfo: {
              type: 'groupBox',
              title: 'HART Ch4 Device Info',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.manufacturerId': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.manufacturerDeviceCode': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.requiredPreambles': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.universalCommandRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.transmitterSpecificationCommandRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.softwareRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.hardwareRevision': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceFunctionFlags': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceId': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.sensorSerial': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.unitsCodeForSensor': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.sensorUpperLimit': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.sensorLowerLimit': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.sensorMinimumSpan': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.tag': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.descriptor': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.date': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.manufacturerId': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Manufacturer ID',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.manufacturerId.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.manufacturerDeviceCode': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Manufacturer Device Type Code',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.manufacturerDeviceCode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.requiredPreambles': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Number of Preambles',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.requiredPreambles.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.universalCommandRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Universal Command Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.universalCommandRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.transmitterSpecificationCommandRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Transmitter Specific Command Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.transmitterSpecificationCommandRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.softwareRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Software Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.softwareRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.hardwareRevision': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Hardware Revision',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.hardwareRevision.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceFunctionFlags': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device Function Flags',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceFunctionFlags.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceId': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device ID Number',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceId.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.sensorSerial': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Sensor Serial Number',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.sensorSerial.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.unitsCodeForSensor': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Units Code for Sensor',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.unitsCodeForSensor.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.sensorUpperLimit': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Sensor Upper Limit',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.sensorUpperLimit.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.sensorLowerLimit': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Sensor Lower Limit',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.sensorLowerLimit.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.sensorMinimumSpan': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Sensor Minimum Span',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.sensorMinimumSpan.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.tag': {
                      type: 'text',
                      placeholder: 'HCh4 Tag',
                      title: 'Tag',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.tag.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.descriptor': {
                      type: 'text',
                      placeholder: 'HCh4 Descriptor',
                      title: 'Descriptor',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.descriptor.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.date': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Date',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.date.']
                    }
                  }
                ]
              }
            },
            hart4DeviceStatus: {
              type: 'groupBox',
              title: 'HART Ch4 Device Status',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceStatus': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceSpecificStatus0': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceOperationalModes': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus0': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus1': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceAnalogChannelSaturated': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus2': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus3': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceAnalogChannelFixed': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceSpecificStatus1': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceStatus2': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceLiveList': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceStatus': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'HART Status',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceStatus.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceSpecificStatus0': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device Specific Status 0',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceSpecificStatus0.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceOperationalModes': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Operational Modes',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceOperationalModes.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus0': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 0',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus0.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus1': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus1.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceAnalogChannelSaturated': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Analog Channel Saturated',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceAnalogChannelSaturated.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus2': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus2.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus3': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Standardized Status 3',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceStandardizeStatus3.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceAnalogChannelFixed': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Analog Channel Fixed',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceAnalogChannelFixed.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceSpecificStatus1': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Device Specific Status 1',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceSpecificStatus1.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceStatus2': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Status 2',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceStatus2.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.deviceLiveList': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Live List',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.deviceLiveList.']
                    }
                  }
                ]
              }
            },
            hart4Statistics: {
              type: 'groupBox',
              title: 'HART Ch4 Statistics',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.txCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.rxCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.communicationErrors': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.commandErrors': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.timeoutErrors': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.relayRxCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.relayTxCount': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.advancedDiagnosticReadSuccess': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.advancedDiagnosticReadFailed': { xs: 2 },
                    'liveValue.diagnostics.this.io.0.hart.ch4.advancedDiagnosticReadTimeout': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.txCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'HART Tx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.txCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.rxCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'HART Rx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.rxCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.communicationErrors': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Communication Errors',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.communicationErrors.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.commandErrors': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Command Errors',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.commandErrors.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.timeoutErrors': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Timeout Errors',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.timeoutErrors.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.relayRxCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Relay Message Rx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.relayRxCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.relayTxCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Relay Message Tx Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.relayTxCount.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.advancedDiagnosticReadSuccess': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Advanced Diagnostics Read Success',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.advancedDiagnosticReadSuccess.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.advancedDiagnosticReadFailed': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Advanced Diagnostics Read Failed',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.advancedDiagnosticReadFailed.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.io.0.hart.ch4.advancedDiagnosticReadTimeout': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Advanced Diagnostics Read Time-out',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.io.0.hart.ch4.advancedDiagnosticReadTimeout.']
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
