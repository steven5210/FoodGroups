module.exports = function (connection) {
	return {
		show: function (req, res) {
			var query = connection.query('SELECT * FROM groups', function (err, rows, result) {
				res.json(rows);
			})
		},
		add: function (req, res) {
			var group = {
				name: req.body.name,
				content: req.body.content,
				created_at: new Date(),
				updated_at: new Date()
			}
			connection.query('INSERT INTO groups SET ?', group, function (err, results) {
			})
			connection.query('SELECT * FROM groups', function (err, rows, result) {
				res.json(rows);
			})
		},
		find: function(req, res) {
			var groupId = req.params.id;
			var sql = 'SELECT * FROM groups WHERE id = ' + connection.escape(groupId);
			connection.query(sql, function (err, results) {
				res.json(results);
			})
		},
		addEvnt: function (req, res) {
			var evnt = req.body;
			var query = connection.query('INSERT INTO events SET ?', evnt, function (err, results) {

			})
		},
		showEvents: function (req, res) {
			var groupId = req.params.id;
			var sql = 'SELECT * FROM events WHERE groups_id = ' + connection.escape(groupId);
			connection.query(sql, function (err, results) {
				res.json(results);
			})
		}
	}
};