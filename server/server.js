var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var api = require('./routes/api');

var port = 4300;

var app = express();

// View Engine
app.set('views', path.join(__dirname, '../client/dist'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, `../client/dist`)));

// Body Parser MW
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// Route
app.use(`/`, index);
app.use(`/api`, api);

// Listen
app.listen(port, function () {
	console.log(`Server started on port ${port}`);
});