
nodejs,mysql install

npm i

npm install pm2 -g

cd /back

pm2 start main.js --watch

cd /front

ng serve -o


CREATE TABLE T_USER (

seq INT(11) NOT NULL AUTO_INCREMENT primary key COMMENT '인덱스',

id VARCHAR(20) NOT NULL unique key COMMENT '아이디',

password VARCHAR(255) NOT NULL COMMENT '비밀번호'

);


/back/lib/db.js

var mysql = require('mysql');
var db = mysql.createConnection({
  host:'',
  user:'',
  password:'',
  database:''
});
db.connect();
module.exports = db;

