foodgroups_app.factory('userFactory', function($http){
	return {
		getUser: function(profile,callback){
			$http.get('/user/' + profile.user_id).then(function(response){
				callback(response);
			})
		},
		addUser: function(user, callback){
			$http.post('/new_user', user).then(function(data){
				callback(data)
			})
		}
	}
})