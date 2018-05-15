'use strict';

const readModel = require('../models/read');
const helper = require('../helpers/transformer');


module.exports = superclass => class extends superclass {
  getValues(req, res, next) {
    new Promise((resolve, reject) => {
       return readModel.read(resolve, reject);
    })
    // .then(results => console.log('results', JSON.stringify(results, null, 2)))
    .then(results =>  helper.transform(results))
    .then(_ => super.getValues(req, res, next))
    .catch(err => console.log(err));
    // readModel.read()
    //   .then((data) => {
    //     console.log(data);
    //   });
    // console.log('data', data);
  }
};
