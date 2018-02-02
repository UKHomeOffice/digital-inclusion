'use strict';

require('./index').start();

const mysql = require('mysql');
const config = require('./config');
const connection = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.db
});

connection.connect((err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error('error connecting: ' + err.stack);
    return err;
  }
  // eslint-disable-next-line no-console
  console.log('Db connected as id ' + connection.threadId);
});
