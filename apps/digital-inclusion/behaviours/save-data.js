'use strict';

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
