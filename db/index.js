var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:password@localhost:5432/demodb';
var db = pgp(connectionString);

module.exports = db;
