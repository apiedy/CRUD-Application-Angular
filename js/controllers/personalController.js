app.controller('PersonalController', ['$scope', '$http', '$routeParams', 'Operations', '$window', function($scope,$http,$routeParams,Operations,$window) {
	var id = $routeParams.id;
	var card_url = "http://localhost:3030/students/"+id;
	angular.element('#editForm').css({display:'none'});

	$http({
		method: "GET",
		url: card_url
	}).then(function successCallback(response){
		$scope.details = response.data;
	}, function errorCallback(response){
		$scope.details = response.statusText;
	});

	$scope.edit = function(){
		$scope.fname = $scope.details.fname;
		$scope.lname = $scope.details.lname;
		$scope.age = $scope.details.age;
		$scope.deg = $scope.details.degree;
		$scope.clg = $scope.details.college;
		angular.element('.to-hide').css({display:'none'});
		angular.element('#editForm').css({display:'block'});
	}

	$scope.update = function(){
		var student = {
			"fname": $scope.fname,
			"lname": $scope.lname,
			"age": $scope.age,
			"degree": $scope.deg,
			"college": $scope.clg
		}
		console.log(student);
		Operations.update(card_url,student);
		$window.location.href = "#!/";
	}

	$scope.delete = function() {
		Operations.delete(card_url);
		$window.location.href = "#!/";
	}

}]);