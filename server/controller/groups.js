module.exports = function (connection) {
	return {
		add: function (req, res) {
			var query = connection.query('SELECT * FROM groups', function (err, rows, result) {
				res.json(rows);
			})
		}
	}
};