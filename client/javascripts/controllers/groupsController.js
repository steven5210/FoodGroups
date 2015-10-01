foodgroups_app.controller('groupsController', function(groupsFactory) {
	var that = this;
	var getAllGroups = function () {
		groupsFactory.getAllGroups(function (data) {
			that.allGroups = data;
			console.log(that.allGroups);
		})
	}
	getAllGroups();
	that.addGroup = function() {
		groupsFactory.addGroup(that.newGroup, function (data) {
			getAllGroups();
		});
	}
	that.findGroup = function (id) {
		groupsFactory.findGroup(id, function (data) {
			that.group = data;
			console.log(that.group);
		})
	}
})