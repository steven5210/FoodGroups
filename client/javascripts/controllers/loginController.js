foodgroups_app.controller('loginController', function($http, auth, store, $location) {
	this.auth = auth;

	this.login = function(){
		auth.signin({}, function(profile, token){
			//success callback
			store.set('profile', profile);
			store.set('token', token);
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