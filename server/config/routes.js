var mysql = require('mysql');

var connection = mysql.createConnection({

  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'mydb'
});

connection.connect();

var users = require('../controller/users.js')(connection);
var groups = require('../controller/groups.js') (connection);

module.exports = function (app) {
app
	.post('/add_user', function (req, res) {
		users.add(req, res);
	})
	.post('/add_interests', function (req, res) {
		users.addinterests(req, res);
	})
	.post('/add_diets', function (req, res) {
		users.adddiets(req, res);
	})
	.post('/add_interests', function (req, res) {
		users.addinterests(req, res);
	})
	
	//groups
	.post('/new_group', function (req, res) {
		groups.add(req, res);
	})
	.get('/show_groups', function (req, res) {
		groups.show(req, res);
	})
	.get('/find_group/:id', function (req, res) {
		groups.find(req, res);
	})

	//events
	.post('/add_event', function (req, res) {
		groups.addEvnt(req, res);
	})
	.get('/show_events/:id', function (req, res) {
		groups.showEvents(req, res)
	})
	//checks to see if user exists in DB
	.get('/user/:id', function(req, res){
		users.find(req, res);
	})
	.post('/new_user', function(req, res){
		users.add(req, res);
	})
};