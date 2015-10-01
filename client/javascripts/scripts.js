function initialize() {
	var input = document.getElementById('searchTextField');
	var autocomplete = new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', initialize);

var foodgroups_app = angular.module('foodgroups_app', ['ngRoute', 'auth0', 'angular-storage', 'angular-jwt']);

foodgroups_app.config(function ($routeProvider, $httpProvider ,authProvider, jwtInterceptorProvider) {
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
        .when('/groups',{
            templateUrl: 'partials/groups.html'
        })
        .when('/user', {
            templateUrl: 'partials/user_profile.html'
        })
        .when('/group/:id', {
            templateUrl: 'partials/group_page.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    //auth0 stuff
        authProvider.init({
            domain: 'steven5210.auth0.com',
            clientID: 'y0haah5PkYOmuEWDEu8BFJYk0KoqEJqs'
        });
         // We're annotating this function so that the `store` is injected correctly when this file is minified
        jwtInterceptorProvider.tokenGetter = ['store', function(store){
            //Return the saved token
            return store.get('token');
        }];
        $httpProvider.interceptors.push('jwtInterceptor');
    });
//This hooks al auth events to check everything as sono as the app starts
foodgroups_app.run(function(auth){
    auth.hookEvents();
})
// Keep the user logged in after a page refresh
foodgroups_app.run(function($rootScope, auth, store, jwtHelper, $location) {
  // This events gets triggered on refresh or URL change
  $rootScope.$on('$locationChangeStart', function() {
    var token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
        }
      } else {
        // Either show the login page or use the refresh token to get a new idToken
        $location.path('/');
      }
    }
  });
});