const mariadb = require('mariadb');
const pool = mariadb.createPool({
  connectionLimit : 10,
  host            : process.env.HOST || 'classmysql.engr.oregonstate.edu',
  port            : process.env.DB_PORT || 3306,
  user            : process.env.USERNAME || 'cs340_made',
  password        : process.env.PASSWORD || '0961',
  database        : process.env.DATABASE || 'cs_340_made',
  queueLimit      : 0, // unlimited queueing
  connectionLimit : 0, // unlimited connections
  multipleStatements: true
});

/*************************************************************************************************/

module.exports = {
    pool: pool
};