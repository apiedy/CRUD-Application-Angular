app.controller('DisplayController', ['$scope', 'Operations', '$http', function($scope,Operations,$http) {
	
	$http({
		method: "GET",
		url: "http://localhost:3030/students"
	}).then(function successCallback(response){
		$scope.details = response.data;
	}, function errorCallback(response){
		$scope.details = response.statusText;
	});

	$scope.delete=function(x){
		Operations.delete(x);
	}
}]);