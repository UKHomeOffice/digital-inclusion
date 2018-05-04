'use strict';

const saveData = require('./behaviours/save-data');
const generateChart = require('./behaviours/generate-chart');

module.exports = {
  name: 'digital-inclusion',
  baseUrl: '/',
  steps: {
    '/chart': {
      behaviours: generateChart,
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
