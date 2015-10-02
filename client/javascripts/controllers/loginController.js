foodgroups_app.controller('loginController', function(userFactory, $http, auth, store, $location) {
	this.auth = auth;

	this.login = function(){
		auth.signin({}, function(profile, token){
			//success callback
			store.set('profile', profile);
			store.set('token', token);
			userFactory.addUser(profile, function (data){
			})
			$location.path('/user');
		}, function(){
			//Error callback
		})
		}
	this.logout = function(){
		auth.signout();
		store.remove('profile');
		store.remove('token');
		$location.path('/')
	}
	})