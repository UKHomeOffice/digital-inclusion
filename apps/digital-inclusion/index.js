'use strict';

const saveData = require('./behaviours/save-data');

module.exports = {
  name: 'digital-inclusion',
  baseUrl: '/',
  steps: {
    '/chart': {
      next: '/project'
    },
    '/project': {
      fields: ['project'],
      next: '/research-date'
    },
    '/research-date': {
      fields: ['research-date'],
      next: '/category'
    },
    '/category': {
      fields: ['category'],
      next: '/access-needs'
    },
    '/access-needs': {
      fields: ['access-needs'],
      next: '/confirm',
    },
    '/confirm': {
      behaviours: [saveData, 'complete', require('hof-behaviour-summary-page')],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
};
