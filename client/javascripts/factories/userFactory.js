foodgroups_app.factory('userFactory', function($http){
	return {
		getUser: function(callback){
			$http.get('/user').then(function(response){
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