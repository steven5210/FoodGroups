function initialize() {
	var input = document.getElementById('searchTextField');
	var autocomplete = new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', initialize);

var foodgroups_app = angular.module('foodgroups_app', ['ngRoute']);

foodgroups_app.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/welcome.html'
        })
        .when('/registration0',{
            templateUrl: 'partials/registration0.html'
        })
        .when('/registration1',{
            templateUrl: 'partials/registration1.html'
        })
        .when('/registration2',{
            templateUrl: 'partials/registration2.html'
        })
        .when('/registration3',{
            templateUrl: 'partials/registration3.html'
        })
        .when('/mainpage',{
            templateUrl: 'partials/mainpage.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });