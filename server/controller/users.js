module.exports = function (connection) {
	return {
		add: function (req, res) {
			var user = {first_name: req.body.first_name, 
						last_name: req.body.last_name,
						created_at: new Date(),
						updated_at: new Date()
						}
			var query = connection.query('INSERT INTO users SET ?', user, function (err, results) {
				console.log(err);
				console.log(results);
				console.log(results)
				// res.json({user_id: results.insertID})
			});
		},
		addinterests: function (req, res) {
			var user = {first_name: req.body.first_name, 
						last_name: req.body.last_name,
						created_at: new Date(),
						updated_at: new Date()
						}
			var query = connection.query('INSERT INTO users SET ?', user, function (err, result) {
				console.log(err);
				console.log(result);

			});
		}
	}
};