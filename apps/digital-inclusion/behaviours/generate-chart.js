'use strict';

const readModel = require('../models/read');
// const readData = () => new Promise((resolve, reject) => {
//   readModel.read();
// }});
// let data;

module.exports = superclass => class extends superclass {
  getValues(req, res, next) {
    console.log('yoooo');
    new Promise((resolve, reject) => {
       return readModel.read(resolve, reject);
    })
    .then(results => console.log('data', results))
    .then(_ => super.getValues(req, res, next))
    .catch(err => console.log(err));

    console.log('hello')
    // readModel.read()
    //   .then((data) => {
    //     console.log(data);
    //   });
    // console.log('data', data);
  }
};
