foodgroups_app.factory('foodFactory', function($http) {
	factory = {};
	factory.uploaduser = function(user){
		console.log(user);
	$http.post('/add_user', user).success(function(output) {
	})
	},
	factory.uploadinterests = function(interests){
		console.log(interests);
	$http.post('/add_interests', interests).success(function(output) {
    console.log(output);
	})
	}
	return factory
});