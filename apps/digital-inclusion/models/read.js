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
  read(resolve, reject) {
    let sql = `SELECT * FROM ${table}`;
    console.log('a')

    pool.getConnection((err, connection) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error('error connecting: ' + err.stack);
        return reject(err);
      } else {
        console.log('b');
        // eslint-disable-next-line no-console
        console.info('connect to db OR use existing db connection!');
        connection.query(sql, (error, results) => {
        // when done release the connection to be reused
          connection.release();
          if (error) {
            // eslint-disable-next-line no-console
            console.error('error connecting: ' + error.stack);
          } else {
            // eslint-disable-next-line no-console
            console.log('hello is it me your looking for');
            // console.log('results', JSON.stringify(results, null, 2));

            return resolve(results);
          }
          });
        }
      });
  }
};
