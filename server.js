var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var router = express.Router();

//var personal = require('./controllers/personal')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'))
app.use(require('./controllers'))
//app.use(require('./controllers/personal'))
app.listen(3000, function () {
	console.log('Listening on port 3000...');
});