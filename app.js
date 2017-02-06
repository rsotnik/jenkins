var express = require('express');
var app = express();

let test = require('./spec/helpers.js').test;

let p = require('./package.json');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
	console.log(req.body);
	res.send(req.body);
	
});

app.listen(3000, function () {
  //test(12);
  console.log('Example app listening on port 3000! With: ' + JSON.stringify(p));
});