var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'mydb',
  port: 3306
});

connection.connect();

var users = require('../controller/users.js')(connection);

module.exports = function (app) {
	app.post('/add_user', function (req, res) {
		users.add(req, res);
	})
	app.post('/add_interests', function (req, res) {
		users.addinterests(req, res);
	})
	app.post('/add_diets', function (req, res) {
		users.adddiets(req, res);
	})
	app
	.post('/add_user', function (req, res) {
		users.add(req, res);
	})
	.get('/show_groups', function (req, res) {
		console.log('in route');
	})
};