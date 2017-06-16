
	var app = angular.module('myApp', ['ngRoute']);
	
	app.config(function($routeProvider,$locationProvider) {
		$routeProvider
			.when('/home', {
				templateUrl:"views/home.html"
			})
			.when('/display/students', {
				controller:"DisplayController",
				templateUrl:"views/display.html"
			})
			.when('/create', {
				controller: "FormController",
				templateUrl: "views/createForm.html"
			})
			/*.when('/edit', {
				controller: "UpdateController",
				templateUrl: "views/updateForm.html"
			})*/
			.when('/display/students/:id', {
				controller: "PersonalController",
				templateUrl: "views/studentcard.html"
			})
			.otherwise({
				redirectTo: '/display/students'
			})
			$locationProvider.html5Mode(true);
	});
