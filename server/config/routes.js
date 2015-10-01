var mysql = require('mysql');

var connection = mysql.createConnection({
<<<<<<< HEAD
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'mydb',
  port: 3306
=======
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mydb'
>>>>>>> b27f283b26c38caa5e8b992bf03b8f89ac15b09f
});

connection.connect();

var users = require('../controller/users.js')(connection);

module.exports = function (app) {
<<<<<<< HEAD
	app.post('/add_user', function (req, res) {
		users.add(req, res);
	})
	app.post('/add_interests', function (req, res) {
		users.addinterests(req, res);
=======
	app
	.post('/add_user', function (req, res) {
		users.add(req, res);
	})
	.get('/show_groups', function (req, res) {
		console.log('in route');
>>>>>>> b27f283b26c38caa5e8b992bf03b8f89ac15b09f
	})
};