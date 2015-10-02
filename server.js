var bodyParser = require('body-parser');
var formidable = require('formidable');
var express = require('express');
var qt = require('quickthumb');
var fs = require('fs-extra');
var util = require('util');
var app = express();

// if using body-parser
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));

//routes
require('./server/config/routes.js')(app);

app.listen(8000, function () {
	console.log('listening on port 8000');
})