
 app.controller('FormController', ['$scope', 'Operations', '$window', '$http', function($scope,Operations,$window,$http) {

 	var reset = function(){
 		$scope.student=null;
 	}

 	toastr.options.timeOut = 3000;
	toastr.options.extendedTimeout= 1000;
	toastr.options.positionClass = 'toast-bottom-right';

	$scope.add = function(){
		Operations.create($scope.student);
		reset();
		$window.location.href="#!/display";
		toastr.success("Success!", "Created a record");
	}
}]);
