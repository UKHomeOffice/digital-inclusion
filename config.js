'use strict';

/* eslint no-process-env: 0 */
module.exports = {
  mysql: {
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    db: process.env.SQL_DB
  }
};
