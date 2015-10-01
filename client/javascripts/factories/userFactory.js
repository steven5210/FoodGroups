foodgroups_app.factory('userFactory', function($http){
	return {
		getUser: function(callback){
			$http.get('/user').then(function(response){
				callback(response);
			})
		}
	}
})