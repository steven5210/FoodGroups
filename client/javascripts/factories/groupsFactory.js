foodgroups_app.factory('groupsFactory', function ($http) {
	return {
		getAllGroups: function (callback) {
			$http.get('show_groups').then(function (data) {
				callback(data.data);
			})
		},
		addGroup: function (newGroup, callback) {
			$http.post('new_group', newGroup);
		}
	}
})