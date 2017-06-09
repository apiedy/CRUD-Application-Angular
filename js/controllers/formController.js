
 app.controller('FormController', ['$scope', 'Operations', '$window', '$http', function($scope,Operations,$window,$http) {

 	var reset = function(){
 		$scope.student=null;
 	}

	$scope.add = function(){
		$http({
			method: "POST",
			url: "http://localhost:3030/students",
			data: $scope.student
		}).then(function successCallback(response){
			console.log(response);
		}, function errorCallback(response){
			console.log(response);
		});
		reset();
		alert('Successfully added a new record');
		$window.location.href='#!/display';
	}
}]);
