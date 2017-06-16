app.controller('PersonalController', ['$scope', '$http', '$routeParams', 'Operations', '$window', function($scope,$http,$routeParams,Operations,$window) {
	var id = $routeParams.id;
	var card_url = "http://localhost:3030/students/"+id;
	angular.element('#editForm').css({display:'none'});

	toastr.options.timeOut = 3000;
	toastr.options.extendedTimeout= 1000;
	toastr.options.positionClass = 'toast-bottom-right';

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
		bootbox.confirm({
			title: "Update Record?",
			message: "Are you sure you want to update this record?",
			buttons: {
				cancel: {
					label: "<span class='glyphicon glyphicon-remove'></span> No, keep the same.",
					className: "btn btn-default"
				},
				confirm: {
					label: "<span class='glyphicon glyphicon-ok'></span> Yes, update the record.",
					className: "btn btn-primary"
				}
			},
			onEscape: true,
    		backdrop: true,
			callback: function(result) {
				if(result){
					var student = {
						"fname": $scope.fname,
						"lname": $scope.lname,
						"age": $scope.age,
						"degree": $scope.deg,
						"college": $scope.clg
					}
					console.log(student);
					Operations.update(card_url,student);
					//$window.location.href = "#!/display/students";
					toastr.info("Success","Edited a record.");
				}
			}
		});
	}

	$scope.delete = function() {	
		bootbox.confirm({
			title: "Delete Record?",
			message: "Are you sure you want to delete this record?",
			buttons: {
				cancel: {
					label: "<span class='glyphicon glyphicon-remove'></span> No, keep the record.",
					className: "btn btn-default"
				},
				confirm: {
					label: "<span class='glyphicon glyphicon-ok'></span> Yes, delete the record.",
					className: "btn btn-danger"
				}
			},
			onEscape: true,
    		backdrop: true,
			callback: function(result) {
				if(result){
					Operations.delete(card_url);
					//$window.location.href = "#!/display/students";
					toastr.error("Deleted a record.");
				}
			}
		});
	}

}]);