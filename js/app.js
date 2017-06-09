
	var app = angular.module('myApp', ['ngRoute']);
	
	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl:"views/home.html"
			})
			.when('/display', {
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
			.when('/display/:id', {
				controller: "PersonalController",
				templateUrl: "views/studentcard.html"
			})
			.otherwise({
				redirectTo: '/'
			})
	});
