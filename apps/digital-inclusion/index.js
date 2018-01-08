'use strict';

module.exports = {
  name: 'digital-inclusion',
  baseUrl: '/',
  steps: {
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
      behaviours: ['complete', require('hof-behaviour-summary-page')],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
};
