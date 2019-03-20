var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user:'abceh',
  password:'gjwns314159',
  database:'DB_BOARD'
});
db.connect();
module.exports = db;