app.factory('Operations', ['$http', function($http){
	
	this.getData = function() {
		return $http({
			method: "GET",
			url: "http://localhost:3030/students"
		}).then(function successCallback(response){
			 return response.data;
		}, function errorCallback(response){
			return response.status;
		});
	}

	this.create = function(student) {
		return $http({
			method: "POST",
			url: "http://localhost:3030/students",
			data: student
		}).then(function successCallback(response){
			return response;
		}, function errorCallback(response){
			return response;
		});
	}

	this.update = function(card_url,student) {
		return $http({
			method: "PUT",
			url: card_url,
			data: student
		}).then(function successCallback(response){
			console.log(response);
		}, function errorCallback(response){
			console.log(response);
		});
	}

	this.delete = function(card_url) {
		return $http({
			method: "DELETE",
			url: card_url,
		}).then(function successCallback(response){
			console.log(response);
		}, function errorCallback(response){
			console.log(response);
		});
	}

	return this;

}]);