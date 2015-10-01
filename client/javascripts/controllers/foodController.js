foodgroups_app.controller('foodgroupsController', function() {
var that = this;
	this.interests = 0;
	this.foods = 0;
	this.diet=0;

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
    }
})