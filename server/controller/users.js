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
				res.send(results)
			});
		},
		addinterests: function (req, res) {
			console.log("came to model");
			console.log(req.body);
			var interests=[];
			var userhasinterests;
			for(var i=0; i<3;i++){
				var interest_id;

				interests = ({name: req.body[i], 			
						created_at: new Date(),
						updated_at: new Date()
						})
				var query = connection.query('INSERT INTO intrests SET ?', interests, function (err, results) {
				console.log(err);
				console.log(results);
				console.log(results.insertId)
				interest_id=results.insertId;
				userhasinterests = {user_id: req.body.currentuser, intrest_id: interest_id}
				console.log(userhasinterests);
				var query2 = connection.query('INSERT INTO users_has_intrests SET ?', userhasinterests, function (err, results) {
				console.log(err);
				console.log(results);
				})
			});
			}
		},
		adddiets: function (req, res) {
			console.log("came to model");
			console.log(req.body);
			var diets=[];
			var userhasdiets;
			var thisdiet_id;
			for(var i=0; i<3;i++){
				var diet_id;

				diets = ({name: req.body[i], 			
						created_at: new Date(),
						updated_at: new Date()
						})
				var query = connection.query('INSERT INTO diets SET ?', diets, function (err, results) {
				console.log(err);
				console.log(results);
				console.log(results.insertId)
				thisdiet_id=results.insertId;
				userhasdiets = {users_id: req.body.currentuser, diets_id: thisdiet_id}
				console.log(userhasdiets);
				var query2 = connection.query('INSERT INTO users_has_diets SET ?', userhasdiets, function (err, results) {
				console.log(err);
				console.log(results);
				})
			});
			}
		}
	}
}