import React from 'react'

exports.default = {
  type: 'monitoring',
  details: {
    title: 'dataLogger',
    label: 'HCC2 Centralized Data Logging',
    mainSection: 1,
    position: '1',
    id: 'dataLogger',
    url: '/dataLogger'
  },
  sections: [
    {
      details: {
        title: 'System And Status',
        label: 'System And Status',
        position: '1',
        id: 'dataLoggerStatus',
        readOnly: true,
        url: '/dataLoggerStatus',
        dataSource: {
          configs: [],
          dataLoggerStatus: {
            topics: [
              'liveValue.diagnostics.this.dataLogger.0.stats|.',
              'liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.',
              'liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.',
              'liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.',
              'liveValue.state.this.dataLogger.0.state.'
            ],
          },
        },
      },
      content: [
        {
          id: 'dataLoggerStatus',
          title: 'System And Status',
          layout: [
            {
              globalLoggingActivityReport: { xs: 12 },
              eventLogActivityReport: { xs: 12 },
              tagLogActivityReport: { xs: 12 },
              trendLogActivityReport: { xs: 12 }
            },
          ],
          ui: {
            globalLoggingActivityReport: {
              type: 'groupBox',
              title: 'Global Activity',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.dataLogger.0.stats|.capacityLevel': { xs: 6 },
                    'liveValue.diagnostics.this.dataLogger.0.stats|.diskActivity': { xs: 3 },
                    'liveValue.state.this.dataLogger.0.state': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.dataLogger.0.stats|.capacityLevel': {
                      type: 'horizontalChart',
                      dataType: 'float',
                      title: 'Capacity Level',
                      showControls: false,
                      readOnly: true,
                      chartDefinitions: {
                        data: 0,
                        minValue: 0,
                        maxValue: 100,
                        units: 'PRCNT',
                        decimals: 3
                      },
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.stats|.capacityLevel.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.stats|.diskActivity': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Average Number of Disk Writes',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.stats|.diskActivity.'],
                      unitConversion: {
                        category: 'NONE.RATE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.state.this.dataLogger.0.state': {
                      type: 'select',
                      readOnly: true,
                      tagsRelated: ['liveValue.state.this.dataLogger.0.state.'],
                      title: 'Datalogger State'
                    }
                  }
                ]
              }
            },
            eventLogActivityReport: {
              type: 'groupBox',
              title: 'Event/Alarm Log Activity',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.capacityLevel': { xs: 6 },
                    'liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.diskActivity': { xs: 4 },
                    'liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.totalRecordsStored': { xs: 3 },
                    'liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.alarmRecordsStored': { xs: 3 },
                    'liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.databaseFileSize': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.capacityLevel': {
                      type: 'horizontalChart',
                      dataType: 'float',
                      title: 'Capacity Level',
                      showControls: false,
                      readOnly: true,
                      chartDefinitions: {
                        data: 0,
                        minValue: 0,
                        maxValue: 100,
                        units: 'PRCNT',
                        decimals: 3
                      },
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.capacityLevel.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.diskActivity': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Average Number of Disk Writes',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.diskActivity.'],
                      unitConversion: {
                        category: 'NONE.RATE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.totalRecordsStored': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Total Records Stored',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.totalRecordsStored.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.alarmRecordsStored': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Alarm Records Stored',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.alarmRecordsStored.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.databaseFileSize': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Database Disk Size',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.eventAlarmLog.stats|.databaseFileSize.'],
                      unitConversion: {
                        category: 'BYTE',
                        showUnits: true,
                      }
                    }
                  }
                ]
              }
            },
            tagLogActivityReport: {
              type: 'groupBox',
              title: 'Tag Log Activity',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.capacityLevel': { xs: 6 },
                    'liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.diskActivity': { xs: 4 },
                    'liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.registeredApplicationsCount': { xs: 3 },
                    'liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.watchedTagsCount': { xs: 3 },
                    'liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.databaseFileSize': { xs: 3 },
                    'liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.currentTagRecordsCount': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.capacityLevel': {
                      type: 'horizontalChart',
                      dataType: 'float',
                      title: 'Capacity Level',
                      showControls: false,
                      readOnly: true,
                      chartDefinitions: {
                        data: 0,
                        minValue: 0,
                        maxValue: 100,
                        units: 'PRCNT',
                        decimals: 3
                      },
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.capacityLevel.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.diskActivity': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Average Number of Disk Writes',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.diskActivity.'],
                      unitConversion: {
                        category: 'NONE.RATE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.registeredApplicationsCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Number Of Registered Applications',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.registeredApplicationsCount.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.watchedTagsCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Number Of Watched Tags',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.watchedTagsCount.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.databaseFileSize': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Database Disk Size',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.databaseFileSize.'],
                      unitConversion: {
                        category: 'BYTE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.currentTagRecordsCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Current Tag Record Count',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.tagLog.stats|.currentTagRecordsCount.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  }
                ]
              }
            },
            trendLogActivityReport: {
              type: 'groupBox',
              title: 'Trend Log Activity',
              children: {
                layout: [
                  {
                    'liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.capacityLevel': { xs: 6 },
                    'liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.diskActivity': { xs: 4 },
                    'liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.registeredApplicationsCount': { xs: 3 },
                    'liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.watchedTagsCount': { xs: 3 },
                    'liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.databaseFileSize': { xs: 3 }
                  }
                ],
                ui: [
                  {
                    'liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.capacityLevel': {
                      type: 'horizontalChart',
                      dataType: 'float',
                      title: 'Capacity Level',
                      showControls: false,
                      readOnly: true,
                      chartDefinitions: {
                        data: 0,
                        minValue: 0,
                        maxValue: 100,
                        units: 'PRCNT',
                        decimals: 3
                      },
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.capacityLevel.'],
                      unitConversion: {
                        category: 'PRCNT',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.diskActivity': {
                      type: 'textInput',
                      dataType: 'float',
                      title: 'Average Number of Disk Writes',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.diskActivity.'],
                      unitConversion: {
                        category: 'NONE.RATE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.registeredApplicationsCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Number Of Registered Applications',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.registeredApplicationsCount.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.watchedTagsCount': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Number Of Watched Tags',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.watchedTagsCount.'],
                      unitConversion: {
                        category: 'NONE',
                        showUnits: true,
                      }
                    }
                  },
                  {
                    'liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.databaseFileSize': {
                      type: 'textInput',
                      dataType: 'integer',
                      title: 'Database Disk Size',
                      showControls: false,
                      readOnly: true,
                      tagsRelated: ['liveValue.diagnostics.this.dataLogger.0.trendLog.stats|.databaseFileSize.'],
                      unitConversion: {
                        category: 'BYTE',
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
        title: 'Export Log',
        label: 'Export Log',
        position: '2',
        id: 'dataLoggerExport',
        url: '/dataLoggerExport',
      },
      content: 'DataLoggerExport.jsx',
    }
  ]
}
