'use strict';

const mysql = require('mysql');
const config = require('../../../config');

const pool = mysql.createPool({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.db
});

const table = 'research_data';

module.exports = {
  create(options) {
    const project = options.project;
    const researchDate = options.researchDate;
    const category = options.category;
    const accessNeeds = options.accessNeeds;

    // build sql statement to deal with empty researchDate or/and accessNeeds,
    // this will mean a null will go into the db
    let sql = `INSERT INTO ${table} SET project=?, category=?`;
    if (researchDate) {
      sql += ', research_date=?';
    }
    if (accessNeeds) {
     sql += ', access_needs=?';
    }

    pool.getConnection((err, connection) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error('error connecting: ' + err.stack);
      } else {
        // eslint-disable-next-line no-console
        console.info('connect to db OR use existing db connection!');
        connection.query(sql, [project, category, researchDate, accessNeeds], (error, result) => {
        // when done release the connection to be reused
          connection.release();
          if (error) {
            // eslint-disable-next-line no-console
            console.error('error connecting: ' + err.stack);
          } else {
            // eslint-disable-next-line no-console
            console.info(`Number of records inserted: ${result.affectedRows}`);
          }
        });
      }
    });
  }
};
