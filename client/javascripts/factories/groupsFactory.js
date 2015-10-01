foodgroups_app.factory('groupsFactory', function ($http) {
	return {
		getAllGroups: function (callback) {
			$http.get('show_groups').then(function (data) {
				callback(data.data);
			})
		},
		addGroup: function (newGroup, callback) {
			$http.post('new_group', newGroup).then(function (data) {
				callback(data.data);
			});
		},
		findGroup: function (id, callback) {
			$http.get('find_group/' + id).then(function (data) {
				callback(data.data[0]);
			}) 
		},
		addEvent: function (evnt, callback) {
			$http.post('add_event', evnt).then(function (data) {
				callback(data.data);
			})
		}
	}
})