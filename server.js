var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());

app.listen(3000, function () {
	console.log('Listening on port 3000...');
});