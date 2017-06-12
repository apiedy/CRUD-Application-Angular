
 app.controller('FormController', ['$scope', 'Operations', '$window', '$http', function($scope,Operations,$window,$http) {

 	var reset = function(){
 		$scope.student=null;
 	}

	$scope.add = function(){
		Operations.create($scope.student);
		reset();
		$window.location.href="#!/display";
		toastr.success("Success!", "Created a record");
	}
}]);
