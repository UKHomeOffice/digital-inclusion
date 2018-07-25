'use strict';
const _ = require('lodash');

module.exports = {
  transform(data) {
    let x = _.mapValues(data, (value) => value.project = 'evw');
    console.log('hello', x);
  },
};
