foodgroups_app.controller('userController', function(userFactory, $location){
	var that = this;

	var getUser = function(){
		userFactory.getUser(function(result){
			that.user = result;
		})
	}
	getUser();
})