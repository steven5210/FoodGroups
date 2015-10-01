foodgroups_app.controller('foodgroupsController', function(foodFactory) {

var that = this;

    this.hello = function(){
    console.log('hello');
    },
    this.addinterest = function(){
      this.interests += 1;
      console.log(this.interests);
    },
	this.addfood = function(){
	this.foods += 1;
	console.log(this.interests);
    },
    this.adddiet = function(){
    this.diet += 1;
    console.log(this.diet);
    },
    this.uploaduser = function(){
        console.log(this.user);
        this.hide=true;
        this.showinterests=true;
    foodFactory.uploaduser(this.user, function(data){
    console.log(data);
    that.currentuser = data.insertId;
    console.log(this.currentuser);
    })
    },
    this.uploadinterests = function(){
        this.showinterests=false;
        this.showdiets=true;
        this.yourinterests.currentuser = that.currentuser
    console.log(this.yourinterests)
    foodFactory.uploadinterests(this.yourinterests, function(data){
    console.log(data);
    })
    },
    this.uploaddiets = function(){
    this.yourdiets.currentuser = that.currentuser
    console.log(this.yourdiets)
    foodFactory.uploaddiets(this.yourdiets, function(data){
    console.log(data);
    })
    }
})