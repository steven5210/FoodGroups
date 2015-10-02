foodgroups_app.controller('foodgroupsController', function(foodFactory, $location) {

var that = this;
this.hide=true;
this.showinterests=true;

    this.uploaduser = function(){
        console.log(this.user);

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
    console.log(this.yourdiets)
    foodFactory.uploaddiets(this.yourdiets, function(data){
    console.log(data);
    })
    $location.path('/user')
    }
})