'use strict';
const dateComponent = require('hof-component-date');

module.exports = {
  'research-date': dateComponent('research-date'),
  'category': {
    mixin: 'radio-group',
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9'
    ]
  },
  'access-needs': {
    mixin: 'radio-group',
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      'yes',
      'no'
    ]
  }
};
