var express = require('express');
var db = require('./lib/db');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/user', function(request, response) {
  db.query('SELECT * from T_USER', function(err, rows) {
    response.send(rows);
  });
});

app.post('/api/user', function(request, response) {
  var post = request.body;
  response.json(post);
  //response.writeHead(200);
  //response.end(request);

  /*
  db.query('SELECT * from T_USER', function(err, rows) {
    response.send(rows);
  });
  */
});







app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});


/*

var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet')
app.use(helmet());

var indexRouter = require('./routes/index');
var topicRouter = require('./routes/topic');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get('*', function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});

app.use('/', indexRouter);
app.use('/topic', topicRouter);

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});
*/