exports.default = {
  type: 'monitoring',
  details: {
    title: 'core',
    label: 'HCC2 Core Systems',
    mainSection: 1,
    position: '1',
    id: 'core',
    url: '/core'
  },
  sections: [
    {
      details: {
        title: 'System Information',
        label: 'System Information',
        position: '1',
        id: 'systemInfo',
        readOnly: true,
        url: '/systemInfo',
        dataSource: {
          configs: [],
          systemInfo: {
            topics: [
              'liveValue.diagnostics.this.core.0.osBuiltInfo|.',
              'liveValue.diagnostics.this.core.0.hardwareInfo|.'
            ],
          },
        },
      },
      content: [
        {
          id: 'systemInfo',
          title: 'System Information',
          layout: [
            {
              systemVersions: { xs: 12 },
              hwInfo: { xs: 12 },
            },
          ],
          ui: {
            systemVersions: {
              type: 'groupBox',
              title: 'System Versions',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.core.0.osBuiltInfo|.osBuildVersion': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.osBuiltInfo|.osBuildId': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.core.0.osBuiltInfo|.osBuildVersion': {
                      type: 'text',
                      placeholder: 'OS Build Version',
                      title: 'OS Build Version',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.osBuiltInfo|.osBuildVersion.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.osBuiltInfo|.osBuildId': {
                      type: 'text',
                      placeholder: 'OS Build ID',
                      title: 'OS Build ID',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.osBuiltInfo|.osBuildId.']
                    }
                  }
                ]
              }
            },
            hwInfo: {
              type: 'groupBox',
              title: 'Hardware Information',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.manufacturer': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.productFamily': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.productName': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.modelNumber': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.assemblyVersion': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.serialNumber': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.cpuBoardHardwareVersion': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.cpuBoardSerialNumber': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.cpuBoardPartNumber': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.id': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.manufacturer': {
                      type: 'text',
                      placeholder: 'mfg.',
                      title: 'Manufacturer',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.hardwareInfo|.manufacturer.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.productFamily': {
                      type: 'text',
                      placeholder: 'Prod. Family',
                      title: 'Product Family Name',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.hardwareInfo|.productFamily.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.productName': {
                      type: 'text',
                      placeholder: 'Prod. Name',
                      title: 'Product Name',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.hardwareInfo|.productName.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.modelNumber': {
                      type: 'text',
                      placeholder: 'Model No.',
                      title: 'Model Number',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.hardwareInfo|.modelNumber.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.assemblyVersion': {
                      type: 'text',
                      placeholder: 'Assy. Ver.',
                      title: 'Assembly Version',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.hardwareInfo|.assemblyVersion.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.serialNumber': {
                      type: 'text',
                      placeholder: 'Serial No.',
                      title: 'Serial Number',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.hardwareInfo|.serialNumber.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.cpuBoardHardwareVersion': {
                      type: 'text',
                      placeholder: 'CPU Ver.',
                      title: 'CPU Board Hardware Version',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.hardwareInfo|.cpuBoardHardwareVersion.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.cpuBoardSerialNumber': {
                      type: 'text',
                      placeholder: 'CPU SN.',
                      title: 'CPU Board Serial Number',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.hardwareInfo|.cpuBoardSerialNumber.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.cpuBoardPartNumber': {
                      type: 'text',
                      placeholder: 'CPU PN.',
                      title: 'CPU Board Part Number',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.hardwareInfo|.cpuBoardPartNumber.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.hardwareInfo|.id': {
                      type: 'text',
                      placeholder: 'HW ID',
                      title: 'Hardware Identifier',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.hardwareInfo|.id.']
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
        title: 'System Status',
        label: 'System Status',
        position: '2',
        id: 'systemStatus',
        readOnly: true,
        url: '/systemStatus',
        dataSource: {
          configs: [],
          systemStatus: {
            topics: [
              'liveValue.diagnostics.this.core.0.temperature|.',
              'liveValue.diagnostics.this.core.0.cpuUsage|.',
              'liveValue.diagnostics.this.core.0.diskUsage|.',
              'liveValue.diagnostics.this.core.0.memoryUsage|.'
            ],
          },
        },
      },
      content: [
        {
          id: 'systemStatus',
          title: 'System Status',
          layout: [
            {
              systemTemperature: { xs: 12 },
              cpuUsage: { xs: 12 },
              diskUsage: { xs: 12 },
              memoryUsage: { xs: 12 },
            },
          ],
          ui: {
            systemTemperature: {
              type: 'groupBox',
              title: 'System Temperatures',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.core.0.temperature|.cpu': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.temperature|.core0': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.temperature|.core1': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.temperature|.core2': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.temperature|.core3': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.core.0.temperature|.cpu': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'CPU Temperature',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.temperature|.cpu.'],
                      unitConversion: {
                        category: 'TEMP',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.temperature|.core0': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'CPU Core 0 Temperature',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.temperature|.core0.'],
                      unitConversion: {
                        category: 'TEMP',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.temperature|.core1': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'CPU Core 1 Temperature',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.temperature|.core1.'],
                      unitConversion: {
                        category: 'TEMP',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.temperature|.core2': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'CPU Core 2 Temperature',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.temperature|.core2.'],
                      unitConversion: {
                        category: 'TEMP',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.temperature|.core3': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'CPU Core 3 Temperature',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.temperature|.core3.'],
                      unitConversion: {
                        category: 'TEMP',
                        showUnits: true,
                      }
                    }
                  }
                ]
              }
            },
            cpuUsage: {
              type: 'groupBox',
              title: 'CPU Usage',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.core.0.cpuUsage|.total': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.cpuUsage|.core0': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.cpuUsage|.core1': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.cpuUsage|.core2': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.cpuUsage|.core3': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.core.0.cpuUsage|.total': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Overall CPU Usage',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.cpuUsage|.total.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.cpuUsage|.core0': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Core 0 CPU Usage',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.cpuUsage|.core0.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.cpuUsage|.core1': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Core 1 CPU Usage',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.cpuUsage|.core1.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.cpuUsage|.core2': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Core 2 CPU Usage',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.cpuUsage|.core2.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.cpuUsage|.core3': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Core 3 CPU Usage',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.cpuUsage|.core3.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  }
                ]
              }
            },
            diskUsage: {
              type: 'groupBox',
              title: 'Disk Usage',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.core.0.diskUsage|.bootVolume': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.diskUsage|.osVolume': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.diskUsage|.dataVolume': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.diskUsage|.bootVolumeBytesUsed': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.diskUsage|.osVolumeBytesUsed': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.diskUsage|.dataVolumeBytesUsed': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.core.0.diskUsage|.bootVolume': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Boot EFI Volume Usage',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.diskUsage|.bootVolume.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.diskUsage|.osVolume': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'OS Volume Usage',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.diskUsage|.osVolume.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.diskUsage|.dataVolume': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Data Volume Usage',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.diskUsage|.dataVolume.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.diskUsage|.bootVolumeBytesUsed': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Boot EFI Volume Bytes Used',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.diskUsage|.bootVolumeBytesUsed.'],
                      unitConversion: {
                        category: 'BYTE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.diskUsage|.osVolumeBytesUsed': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'OS Volume Bytes Used',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.diskUsage|.osVolumeBytesUsed.'],
                      unitConversion: {
                        category: 'BYTE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.diskUsage|.dataVolumeBytesUsed': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Data Volume Bytes Used',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.diskUsage|.dataVolumeBytesUsed.'],
                      unitConversion: {
                        category: 'BYTE',
                        showUnits: true,
                      }
                    }
                  }
                ]
              }
            },
            memoryUsage: {
              type: 'groupBox',
              title: 'Memory Usage',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.core.0.memoryUsage|.memoryTotal': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.memoryUsage|.memoryUsed': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.memoryUsage|.memoryPercentUsed': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.core.0.memoryUsage|.memoryTotal': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Memory Total',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.memoryUsage|.memoryTotal.'],
                      unitConversion: {
                        category: 'BYTE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.memoryUsage|.memoryUsed': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Memory Used',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.memoryUsage|.memoryUsed.'],
                      unitConversion: {
                        category: 'BYTE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.memoryUsage|.memoryPercentUsed': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Memory Percent Used',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.memoryUsage|.memoryPercentUsed.'],
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
        title: 'Time And Location Status',
        label: 'Time And Location Status',
        position: '3',
        id: 'timeLocationStatus',
        readOnly: true,
        url: '/timeLocationStatus',
        dataSource: {
          configs: [],
          timeLocationStatus: {
            topics: [
              'liveValue.diagnostics.this.core.0.timeStatus|.',
              'liveValue.location.this.core.0.location|.'
            ],
          },
        },
      },
      content: [
        {
          id: 'timeLocationStatus',
          title: 'Time And Location Status',
          layout: [
            {
              timeSection: { xs: 12 },
              location: { xs: 12 },
            },
          ],
          ui: {
            timeSection: {
              type: 'groupBox',
              title: 'Time',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.core.0.timeStatus|.timezone': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.timeStatus|.localtime': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.timeStatus|.utc': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.timeStatus|.timeSource': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.timeStatus|.manualSyncTime': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.timeStatus|.ntpServer': { xs: 3 },
                    'liveValue.state.this.core.0.systemTime.manualSetTime.': { xs: 3 },
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.core.0.timeStatus|.timezone': {
                      type: 'text',
                      placeholder: 'TZone',
                      title: 'Device Time Zone',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.timeStatus|.timezone.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.timeStatus|.localtime': {
                      type: 'text',
                      placeholder: 'DLTime',
                      title: 'Device Local Time',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.timeStatus|.localtime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.timeStatus|.utc': {
                      type: 'text',
                      placeholder: 'UTC',
                      title: 'UTC',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.timeStatus|.utc.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.timeStatus|.timeSource': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.timeStatus|.timeSource.'],
                      options: [
                        { id: '0', value: 'Manual' },
                        { id: '1', value: 'Auto' }
                      ],
                      title: 'Source Configuration'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.timeStatus|.manualSyncTime': {
                      type: 'text',
                      placeholder: 'Manual Sync Time',
                      title: 'Last Manual Sync Time (UTC)',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.timeStatus|.manualSyncTime.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.timeStatus|.ntpServer': {
                      type: 'text',
                      placeholder: 'Active Time Source',
                      title: 'Active Time Source',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.timeStatus|.ntpServer.']
                    }
                  },
                  {
                    'liveValue.state.this.core.0.systemTime.manualSetTime.': {
                      type: 'button',
                      text: 'Sync to Computer Time',
                      readOnly: true,
                      onClick: {
                        fn: 'publishTagValue',
                        parameters: {
                          singleTagName: 'liveValue.state.this.core.0.systemTime.manualSetTime.',
                          value: 'currentMicroTime',
                          type: 'plUint64',
                          timestamp: 'current',
                        },
                      },                   
                    },
                  },
                ]
              }
            },
            location: {
              type: 'groupBox',
              title: 'Location',
              children: {
                layout: [
                  {
                    'liveValue.location.this.core.0.location|.locationName': { xs: 3 },
                    'liveValue.location.this.core.0.location|.latitude': { xs: 3 },
                    'liveValue.location.this.core.0.location|.longitude': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'liveValue.location.this.core.0.location|.locationName': {
                      type: 'text',
                      placeholder: 'Name',
                      title: 'Location Name',
                      readOnly: true,
                      tagsRelated: ['liveValue.location.this.core.0.location|.locationName.']
                    }
                  },
                  {
                    'liveValue.location.this.core.0.location|.latitude': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Latitude',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.location.this.core.0.location|.latitude.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.location.this.core.0.location|.longitude': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Longitude',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.location.this.core.0.location|.longitude.'],
                      unitConversion: {
                        category: 'NONE',
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
        title: 'Network Status',
        label: 'Network Status',
        position: '4',
        id: 'networkStatus',
        readOnly: true,
        url: '/networkStatus',
        dataSource: {
          configs: [],
          EthernetStatus: {
            topics: [
              'liveValue.diagnostics.this.core.0.networkStatus.internetSelection.',
              'liveValue.diagnostics.this.core.0.networkStatus.eth1|.',
              'liveValue.diagnostics.this.core.0.networkStatus.eth2|.',
              'liveValue.diagnostics.this.core.0.networkStatus.eth3|.'
            ],
          },
          WirelessStatus: {
            topics: [
              'liveValue.diagnostics.this.core.0.networkStatus.wifi|.',
              'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.'
            ],
          },
        },
      },
      content: [
        {
          id: 'EthernetStatus',
          title: 'Ethernet Status',
          layout: [
            {
              networkStatusInternetSelection: { xs: 12 },
              networkStatusEth1: { xs: 12 },
              networkStatusEth2: { xs: 12 },
              networkStatusEth3: { xs: 12 },
            },
          ],
          ui: {
            networkStatusInternetSelection: {
              type: 'groupBox',
              title: 'Network Global Settings',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.internetSelection': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.internetSelection': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.internetSelection.'],
                      title: 'Internet Selection'
                    }
                  }
                ]
              }
            },
            networkStatusEth1: {
              type: 'groupBox',
              title: 'ETH-1 Ethernet Interface',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.enable': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.ipAddress': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.subnetMask': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.defaultGateway': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.mode': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.primaryDns': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.secondaryDns': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.linkStatus': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallSettings': { xs: 12 }                    
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.enable': {
                      type: 'checkbox',
                      title: 'Enabled',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.enable.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.ipAddress': {
                      type: 'text',
                      placeholder: 'ETH-1 IP',
                      title: 'Assigned IP Address',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.ipAddress.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.subnetMask': {
                      type: 'text',
                      placeholder: 'ETH-1 Mask',
                      title: 'Assigned Subnet Mask',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.subnetMask.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.defaultGateway': {
                      type: 'text',
                      placeholder: 'ETH-1 Gateway',
                      title: 'Assigned Default Gateway',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.defaultGateway.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.mode': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.mode.'],
                      options: [
                        { id: '0', value: 'Static' },
                        { id: '1', value: 'Dynamic' }
                      ],
                      title: 'Mode'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.primaryDns': {
                      type: 'text',
                      placeholder: 'ETH-1 Pri-DNS',
                      title: 'Assigned Primary DNS',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.primaryDns.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.secondaryDns': {
                      type: 'text',
                      placeholder: 'ETH-1 Sec-DNS',
                      title: 'Assigned Secondary DNS',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.secondaryDns.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.linkStatus': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.linkStatus.'],
                      options: [
                        { id: '0', value: 'Physical Down, Logical Down' },
                        { id: '1', value: 'Physical Down, Logical Up' },
                        { id: '2', value: 'Physical Up, Logical Down' },
                        { id: '3', value: 'Physical Up, Logical Up' }
                      ],
                      title: 'Link Status/Connection State'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallSettings': {
                      type: 'groupBox',
                      title: 'Firewall Settings',
                      children: {
                        layout: [
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallUnity': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallCipExplicit': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallIsagrafDebug': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallSshEpm': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallNtpServer': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallModbusTcp': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallModbusRtu': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallModbusEditor': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallUnityRedirection': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallFTOptixDeploy': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallFTOptixOpcUA': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallFTOptixWeb': { xs: 3 }
                          }
                        ],
                        ui: [
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallUnity': {
                              type: 'checkbox',
                              title: 'Unity Interface',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallUnity.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallCipExplicit': {
                              type: 'checkbox',
                              title: 'CIP Explicit',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallCipExplicit.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallIsagrafDebug': {
                              type: 'checkbox',
                              title: 'ISaGRAF Workbench',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallIsagrafDebug.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallSshEpm': {
                              type: 'checkbox',
                              title: 'SSH & EPM',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallSshEpm.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallNtpServer': {
                              type: 'checkbox',
                              title: 'NTP Server',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallNtpServer.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallModbusTcp': {
                              type: 'checkbox',
                              title: 'ModbusTCP (502)',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallModbusTcp.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallModbusRtu': {
                              type: 'checkbox',
                              title: 'ModbusRTU over TCP (503)',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallModbusRtu.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallModbusEditor': {
                              type: 'checkbox',
                              title: 'Modbus Editor',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallModbusEditor.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallUnityRedirection': {
                              type: 'checkbox',
                              title: 'Unity Interface Redirection (Port 80)',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallUnityRedirection.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallFTOptixDeploy': {
                              type: 'checkbox',
                              title: 'FTOptix Deployment',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallFTOptixDeploy.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallFTOptixOpcUA': {
                              type: 'checkbox',
                              title: 'FTOptix OPC UA',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallFTOptixOpcUA.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallFTOptixWeb': {
                              type: 'checkbox',
                              title: 'FTOptix Web Browser',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth1|.firewallFTOptixWeb.']
                            }
                          }
                        ]
                      }
                    }  
                  }  
                ]
              }
            },
            networkStatusEth2: {
              type: 'groupBox',
              title: 'ETH-2 Ethernet Interface',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.enable': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.ipAddress': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.subnetMask': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.defaultGateway': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.mode': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.primaryDns': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.secondaryDns': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.linkStatus': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallSettings': { xs: 12 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.enable': {
                      type: 'checkbox',
                      title: 'Enabled',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.enable.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.ipAddress': {
                      type: 'text',
                      placeholder: 'ETH-2 IP',
                      title: 'Assigned IP Address',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.ipAddress.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.subnetMask': {
                      type: 'text',
                      placeholder: 'ETH-2 Mask',
                      title: 'Assigned Subnet Mask',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.subnetMask.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.defaultGateway': {
                      type: 'text',
                      placeholder: 'ETH-2 Gateway',
                      title: 'Assigned Default Gateway',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.defaultGateway.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.mode': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.mode.'],
                      options: [
                        { id: '0', value: 'Static' },
                        { id: '1', value: 'Dynamic' }
                      ],
                      title: 'Mode'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.primaryDns': {
                      type: 'text',
                      placeholder: 'ETH-2 Pri-DNS',
                      title: 'Assigned Primary DNS',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.primaryDns.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.secondaryDns': {
                      type: 'text',
                      placeholder: 'ETH-2 Sec-DNS',
                      title: 'Assigned Secondary DNS',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.secondaryDns.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.linkStatus': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.linkStatus.'],
                      options: [
                        { id: '0', value: 'Physical Down, Logical Down' },
                        { id: '1', value: 'Physical Down, Logical Up' },
                        { id: '2', value: 'Physical Up, Logical Down' },
                        { id: '3', value: 'Physical Up, Logical Up' }
                      ],
                      title: 'Link Status/Connection State'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallSettings': {
                      type: 'groupBox',
                      title: 'Firewall Settings',
                      children: {
                        layout: [
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallUnity': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallCipExplicit': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallIsagrafDebug': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallSshEpm': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallNtpServer': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallModbusTcp': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallModbusRtu': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallModbusEditor': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallUnityRedirection': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallFTOptixDeploy': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallFTOptixOpcUA': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallFTOptixWeb': { xs: 3 }
                          }
                        ],
                        ui: [
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallUnity': {
                              type: 'checkbox',
                              title: 'Unity Interface',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallUnity.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallCipExplicit': {
                              type: 'checkbox',
                              title: 'CIP Explicit',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallCipExplicit.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallIsagrafDebug': {
                              type: 'checkbox',
                              title: 'ISaGRAF Workbench',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallIsagrafDebug.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallSshEpm': {
                              type: 'checkbox',
                              title: 'SSH & EPM',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallSshEpm.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallNtpServer': {
                              type: 'checkbox',
                              title: 'NTP Server',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallNtpServer.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallModbusTcp': {
                              type: 'checkbox',
                              title: 'ModbusTCP (502)',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallModbusTcp.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallModbusRtu': {
                              type: 'checkbox',
                              title: 'ModbusRTU over TCP (503)',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallModbusRtu.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallModbusEditor': {
                              type: 'checkbox',
                              title: 'Modbus Editor',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallModbusEditor.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallUnityRedirection': {
                              type: 'checkbox',
                              title: 'Unity Interface Redirection (Port 80)',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallUnityRedirection.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallFTOptixDeploy': {
                              type: 'checkbox',
                              title: 'FTOptix Deployment',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallFTOptixDeploy.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallFTOptixOpcUA': {
                              type: 'checkbox',
                              title: 'FTOptix OPC UA',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallFTOptixOpcUA.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallFTOptixWeb': {
                              type: 'checkbox',
                              title: 'FTOptix Web Browser',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth2|.firewallFTOptixWeb.']
                            }
                          }
                        ]
                      }
                    }  
                  }                    
                ]
              }
            },
            networkStatusEth3: {
              type: 'groupBox',
              title: 'ETH-3/ETH-4 Ethernet Interfaces',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.enable': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.ipAddress': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.subnetMask': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.defaultGateway': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.mode': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.primaryDns': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.secondaryDns': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.linkStatus': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.enable': {
                      type: 'checkbox',
                      title: 'Enabled',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth3|.enable.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.ipAddress': {
                      type: 'text',
                      placeholder: 'ETH-3 IP',
                      title: 'Assigned IP Address',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth3|.ipAddress.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.subnetMask': {
                      type: 'text',
                      placeholder: 'ETH-3 Mask',
                      title: 'Assigned Subnet Mask',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth3|.subnetMask.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.defaultGateway': {
                      type: 'text',
                      placeholder: 'ETH-3 Gateway',
                      title: 'Assigned Default Gateway',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth3|.defaultGateway.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.mode': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth3|.mode.'],
                      options: [
                        { id: '0', value: 'Static' },
                        { id: '1', value: 'Dynamic' }
                      ],
                      title: 'Mode'
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.primaryDns': {
                      type: 'text',
                      placeholder: 'ETH-3 Pri-DNS',
                      title: 'Assigned Primary DNS',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth3|.primaryDns.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.secondaryDns': {
                      type: 'text',
                      placeholder: 'ETH-3 Sec-DNS',
                      title: 'Assigned Secondary DNS',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth3|.secondaryDns.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.eth3|.linkStatus': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.eth3|.linkStatus.'],
                      title: 'Link Status/Connection State'
                    }
                  }
                ]
              }
            }
          }
        },
        {
          id: 'WirelessStatus',
          title: 'Wireless Status',
          layout: [
            {
              networkStatusWifi: { xs: 12 },
              networkStatusCellModem: { xs: 12 },
            },
          ],
          ui: {
            networkStatusWifi: {
              type: 'groupBox',
              title: 'Wifi Interface',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.enable': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.clientSSID': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.mode': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.signalStrength': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.installed': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.ipAddress': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.fccId': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.linkStatus': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallSettings': { xs: 12 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.enable': {
                      type: 'checkbox',
                      title: 'Enabled',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.enable.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.clientSSID': {
                      type: 'text',
                      placeholder: 'Wifi SSID',
                      title: 'SSID',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.clientSSID.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.mode': {
                      type: 'text',
                      placeholder: 'Wifi Mode',
                      title: 'Mode',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.mode.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.signalStrength': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Signal Strength',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.signalStrength.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.installed': {
                      type: 'checkbox',
                      title: 'Installed',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.installed.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.ipAddress': {
                      type: 'text',
                      placeholder: 'Wifi IP',
                      title: 'Access Point IP Address',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.ipAddress.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.fccId': {
                      type: 'text',
                      placeholder: 'Wifi FCCID',
                      title: 'FCCID',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.fccId.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.linkStatus': {
                      type: 'checkbox',
                      title: 'Link Status',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.linkStatus.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallSettings': {
                      type: 'groupBox',
                      title: 'Firewall Settings',
                      children: {
                        layout: [
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallUnity': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallCipExplicit': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallIsagrafDebug': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallSshEpm': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallNtpServer': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallModbusTcp': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallModbusRtu': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallModbusEditor': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallUnityRedirection': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallFTOptixDeploy': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallFTOptixOpcUA': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallFTOptixWeb': { xs: 3 }
                          }
                        ],
                        ui: [
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallUnity': {
                              type: 'checkbox',
                              title: 'Unity Interface',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallUnity.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallCipExplicit': {
                              type: 'checkbox',
                              title: 'CIP Explicit',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallCipExplicit.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallIsagrafDebug': {
                              type: 'checkbox',
                              title: 'ISaGRAF Workbench',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallIsagrafDebug.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallSshEpm': {
                              type: 'checkbox',
                              title: 'SSH & EPM',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallSshEpm.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallNtpServer': {
                              type: 'checkbox',
                              title: 'NTP Server',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallNtpServer.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallModbusTcp': {
                              type: 'checkbox',
                              title: 'ModbusTCP (502)',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallModbusTcp.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallModbusRtu': {
                              type: 'checkbox',
                              title: 'ModbusRTU over TCP (503)',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallModbusRtu.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallModbusEditor': {
                              type: 'checkbox',
                              title: 'Modbus Editor',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallModbusEditor.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallUnityRedirection': {
                              type: 'checkbox',
                              title: 'Unity Interface Redirection (Port 80)',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallUnityRedirection.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallFTOptixDeploy': {
                              type: 'checkbox',
                              title: 'FTOptix Deployment',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallFTOptixDeploy.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallFTOptixOpcUA': {
                              type: 'checkbox',
                              title: 'FTOptix OPC UA',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallFTOptixOpcUA.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallFTOptixWeb': {
                              type: 'checkbox',
                              title: 'FTOptix Web Browser',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.wifi|.firewallFTOptixWeb.']
                            }
                          }
                        ]
                      }
                    }  
                  }                    
                ]
              }
            },
            networkStatusCellModem: {
              type: 'groupBox',
              title: 'Cellular Modem Interface',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.enable': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.apn': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.imei': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.fccId': { xs: 3 },                                       
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.installed': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.ipAddress': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.signalStrength': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.snr': { xs: 3 },                                      
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.linkStatus': { xs: 2 },
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.rsrp': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.rsrq': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.rssi': { xs: 3 },
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallSettings': { xs: 12 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.enable': {
                      type: 'checkbox',
                      title: 'Enabled',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.enable.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.apn': {
                      type: 'text',
                      placeholder: 'CellModem APN',
                      title: 'APN',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.apn.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.imei': {
                      type: 'text',
                      placeholder: 'CellModem IMEI',
                      title: 'IMEI',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.imei.']
                    }
                  },                  
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.signalStrength': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Signal Strength',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.signalStrength.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },                  
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.installed': {
                      type: 'checkbox',
                      title: 'Installed',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.installed.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.ipAddress': {
                      type: 'text',
                      placeholder: 'CellModem IP',
                      title: 'Access Point IP Address',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.ipAddress.']
                    }
                  },                  
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.fccId': {
                      type: 'text',
                      placeholder: 'CellModem FCCID',
                      title: 'FCCID',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.fccId.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.linkStatus': {
                      type: 'checkbox',
                      title: 'Link Status',
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.linkStatus.']
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.snr': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'SNR',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.snr.'],
                      unitConversion: {
                        category: 'POWLEV',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.rsrp': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'RSRP',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.rsrp.'],
                      unitConversion: {
                        category: 'POWLEV',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.rsrq': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'RSRQ',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.rsrq.'],
                      unitConversion: {
                        category: 'POWLEV',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.rssi': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'RSSI',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.rssi.'],
                      unitConversion: {
                        category: 'POWLEV',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallSettings': {
                      type: 'groupBox',
                      title: 'Firewall Settings',
                      children: {
                        layout: [
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallUnity': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallCipExplicit': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallIsagrafDebug': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallSshEpm': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallNtpServer': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallModbusTcp': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallModbusRtu': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallModbusEditor': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallUnityRedirection': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallFTOptixDeploy': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallFTOptixOpcUA': { xs: 3 },
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallFTOptixWeb': { xs: 3 }
                          }
                        ],
                        ui: [
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallUnity': {
                              type: 'checkbox',
                              title: 'Unity Interface',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallUnity.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallCipExplicit': {
                              type: 'checkbox',
                              title: 'CIP Explicit',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallCipExplicit.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallIsagrafDebug': {
                              type: 'checkbox',
                              title: 'ISaGRAF Workbench',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallIsagrafDebug.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallSshEpm': {
                              type: 'checkbox',
                              title: 'SSH & EPM',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallSshEpm.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallNtpServer': {
                              type: 'checkbox',
                              title: 'NTP Server',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallNtpServer.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallModbusTcp': {
                              type: 'checkbox',
                              title: 'ModbusTCP (502)',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallModbusTcp.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallModbusRtu': {
                              type: 'checkbox',
                              title: 'ModbusRTU over TCP (503)',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallModbusRtu.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallModbusEditor': {
                              type: 'checkbox',
                              title: 'Modbus Editor',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallModbusEditor.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallUnityRedirection': {
                              type: 'checkbox',
                              title: 'Unity Interface Redirection (Port 80)',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallUnityRedirection.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallFTOptixDeploy': {
                              type: 'checkbox',
                              title: 'FTOptix Deployment',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallFTOptixDeploy.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallFTOptixOpcUA': {
                              type: 'checkbox',
                              title: 'FTOptix OPC UA',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallFTOptixOpcUA.']
                            }
                          },
                          {
                            'liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallFTOptixWeb': {
                              type: 'checkbox',
                              title: 'FTOptix Web Browser',
                              readOnly: true,
                              tagsRelated: ['liveValue.diagnostics.this.core.0.networkStatus.cellModem|.firewallFTOptixWeb.']
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
