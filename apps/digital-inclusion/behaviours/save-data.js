'use strict';

// const mysql = require('mysql');
// const config = require('../../../config');

// const pool = mysql.createPool({
//   host: config.mysql.host,
//   user: config.mysql.user,
//   password: config.mysql.password,
//   database: config.mysql.db
// });

// const table = 'research_data';
const saveModel = require('../models/save');

module.exports = superclass => class extends superclass {
  saveValues(req, res, next) {
    saveModel.create({
      project: req.sessionModel.get('project'),
      researchDate: req.sessionModel.get('research-date'),
      category: req.sessionModel.get('category'),
      accessNeeds: req.sessionModel.get('access-needs')
    });

    super.saveValues(req, res, next);
  }
};
