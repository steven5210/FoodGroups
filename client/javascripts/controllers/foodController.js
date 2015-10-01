foodgroups_app.controller('foodgroupsController', function(foodFactory) {

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
    },
    this.uploaduser = function(){
        console.log(this.user);
    foodFactory.uploaduser(this.user, function(data){
    console.log("back at controller");
    console.log(data);
    })
    },
    this.uploadinterests = function(){
        console.log(this.yourinterests);
    foodFactory.uploadinterests(this.yourinterests, function(data){
    console.log(data);
    })
    }
})