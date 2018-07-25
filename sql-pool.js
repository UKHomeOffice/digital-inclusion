'use strict';

const mysql = require('mysql');
const config = require('./config');

module.exports = {
  create() {
    mysql.createPool({
      host: config.mysql.host,
      user: config.mysql.user,
      password: config.mysql.password,
      database: config.mysql.db
    });
  }
};
