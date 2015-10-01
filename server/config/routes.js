var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mydb'
});

connection.connect();

var users = require('../controller/users.js')(connection);

module.exports = function (app) {
	app
	.post('/add_user', function (req, res) {
		users.add(req, res);
	})
	.get('/show_groups', function (req, res) {
		console.log('in route');
	})
};