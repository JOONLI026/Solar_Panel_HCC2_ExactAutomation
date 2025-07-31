import React from 'react'

export default {
  logging: React.lazy(() => import('./logging')),
}

exports.default = {
  type: 'application',
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
        title: 'User Log Configuration',
        label: 'User Log Configuration',
        position: '1',
        id: 'userTagLogConfiguration',
        url: '/userTagLogConfiguration'
      },
      content: 'logging.jsx',
    },
    {
      details: {
        title: 'Logging Priorities',
        label: 'Logging Priorities',
        position: '2',
        id: 'tagLoggingPriorities',
        url: '/tagLoggingPriorities'
      },
      content: [
        {
          id: 'tagLoggingPriorities',
          title: 'Logging Priorities',
          layout: [
            {
              tagsLoggingProperties: { xs: 12 },
              defaultCaptureRateControl: { xs: 12 },
            },
          ],
          ui: {
            tagsLoggingProperties: {
              type: 'groupBox',
              title: 'Logging Priority Periods',
              children: {
                layout: [
                  {
                    'tagLog.highestPriorityPeriod': { xs: 2 },
                    'tagLog.highPriorityPeriod': { xs: 2 },
                    'tagLog.mediumPriorityPeriod': { xs: 2 },
                    'tagLog.lowPriorityPeriod': { xs: 2 },
                    'tagLog.lowestPriorityPeriod': { xs: 2 }
                  }
                ],
                ui: [
                  {
                    'tagLog.highestPriorityPeriod': {
                      type: 'textInput',
                      dataType: 'integer',
                      min: 1,
                      title: 'Highest Log Priority Period (sec)',
                      showControls: false,
                      readOnly: false,
                      tagsRelated: ['tagLog.highestPriorityPeriod.'],
                      customErrorMsgs: {
                        checkRange: 'Value must be between 1 and 14400.'
                      }
                    }
                  },
                  {
                    'tagLog.highPriorityPeriod': {
                      type: 'textInput',
                      dataType: 'integer',
                      min: 1,
                      title: 'High Log Priority Period (sec)',
                      showControls: false,
                      readOnly: false,
                      tagsRelated: ['tagLog.highPriorityPeriod.'],
                      customErrorMsgs: {
                        checkRange: 'Value must be between 1 and 14400.'
                      }
                    }
                  },
                  {
                    'tagLog.mediumPriorityPeriod': {
                      type: 'textInput',
                      dataType: 'integer',
                      min: 1,
                      title: 'Medium Log Priority Period (sec)',
                      showControls: false,
                      readOnly: false,
                      tagsRelated: ['tagLog.mediumPriorityPeriod.'],
                      customErrorMsgs: {
                        checkRange: 'Value must be between 1 and 14400.'
                      }
                    }
                  },
                  {
                    'tagLog.lowPriorityPeriod': {
                      type: 'textInput',
                      dataType: 'integer',
                      min: 1,
                      title: 'Low Log Priority Period (sec)',
                      showControls: false,
                      readOnly: false,
                      tagsRelated: ['tagLog.lowPriorityPeriod.'],
                      customErrorMsgs: {
                        checkRange: 'Value must be between 1 and 14400.'
                      }
                    }
                  },
                  {
                    'tagLog.lowestPriorityPeriod': {
                      type: 'textInput',
                      dataType: 'integer',
                      min: 1,
                      title: 'Lowest Log Priority Period (sec)',
                      showControls: false,
                      readOnly: false,
                      tagsRelated: ['tagLog.lowestPriorityPeriod.'],
                      customErrorMsgs: {
                        checkRange: 'Value must be between 1 and 14400.'
                      }
                    }
                  }
                ]
              }
            },
            defaultCaptureRateControl: {
              type: 'groupBox',
              title: 'Default Capture Rate Control',
              children: {
                layout: [
                  {
                    'tagLog.defaultGuaranteedLoggingPeriod': { xs: 3 },
                    'tagLog.defaultGuaranteedLoggingPeriodLabel': { xs: 9 }
                  }
                ],
                ui: [
                  {
                    'tagLog.defaultGuaranteedLoggingPeriod': {
                      type: 'textInput',
                      dataType: 'integer',
                      min: 0,
                      title: 'Default Guaranteed Maximum Period (sec)',
                      showControls: false,
                      readOnly: false,
                      tagsRelated: ['tagLog.defaultGuaranteedLoggingPeriod.'],
                      customErrorMsgs: {
                        checkRange: 'Value must be between 0 and 86400.'
                      }
                    }
                  },
                  {
                    'tagLog.defaultGuaranteedLoggingPeriodLabel': {
                      type: 'label',
                      text: 'If set to a non-zero time value, the Data Logger will create a redundant record containing the most recently received value.  This occurs when the age of the stored data exceeds the Guaranteed Maximum Period.',
                      alignment: 'left',
                      modifier: ''
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
