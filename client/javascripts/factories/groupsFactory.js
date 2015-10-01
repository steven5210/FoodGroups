foodgroups_app.factory('groupsFactory', function ($http) {
	return {
		getAllGroups: function (callback) {
			$http.get('show_groups').then(function (data) {
				console.lopg(data);
			})
		}
	}
})