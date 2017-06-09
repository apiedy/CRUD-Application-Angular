app.controller('DisplayController', ['$scope', 'Operations', function($scope,Operations) {
	
	Operations.getData().then(function(response){
		$scope.details = response;
	});
	
}]);