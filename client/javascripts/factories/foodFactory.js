foodgroups_app.factory('foodFactory', function($http, $location) {
	factory = {};
	factory.uploaduser = function(user, callback){
		console.log(user);
	$http.post('/add_user', user).success(function(output) {
		console.log(output);
		callback(output);
		// $location.path("/registration1");
	})
	},
	factory.uploadinterests = function(interests){
		console.log(interests);
	$http.post('/add_interests', interests).success(function(output) {
    console.log(output);
	})
	},
	factory.uploaddiets = function(diets){
		console.log(diets);
	$http.post('/add_diets', diets).success(function(output) {
    console.log(output);
	})
	}
	return factory
});