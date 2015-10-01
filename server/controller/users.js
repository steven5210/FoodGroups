module.exports = function (connection) {
	return {
		add: function (req, res) {
			var user = {first_name: req.body.first_name, 
						last_name: req.body.last_name,
						created_at: new Date(),
						updated_at: new Date()
						}
			var query = connection.query('INSERT INTO users SET ?', user, function (err, result) {
				console.log(rows)
			});
		}
	}
};