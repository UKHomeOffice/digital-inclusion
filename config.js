'use strict';

/* eslint no-process-env: 0 */
module.exports = {
  sql: {
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    db: 'digitalInclusion',
    table: 'research_data'
  }
};
