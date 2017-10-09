var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var router = express.Router();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'))
app.use(require('./controllers'))
//es necesario discriminar entre las rutas controllers y controllers/algo, si no, no es posible usar el controlador de personal
app.use(require('./controllers/personal'))
app.listen(3000, function () {
	console.log('Listening on port 3000...');
});