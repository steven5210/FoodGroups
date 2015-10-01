foodgroups_app.controller('groupsController', function(groupsFactory) {
	var that = this;
	var getAllGroups = function () {
		groupsFactory.getAllGroups(function (data) {
			that.allGroups = data;
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
			console.log(that.group)
		})
	}
	that.addEvnt = function (groupId) {
		var evnt = {
			date: that.newGroupEvnt.date,
			restaurant: that.newGroupEvnt.restaurant,
			description: that.newGroupEvnt.description,
			created_at: new Date(),
			updated_at: new Date(),
			groups_id: groupId
		}
		groupsFactory.addEvent(evnt, function (data) {
			that.evnt = data;
		})
	}
})