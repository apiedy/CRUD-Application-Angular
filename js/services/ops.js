app.factory('Operations', ['$window', function($window){

	this.delete = function(i){
		if(confirm('Do you want to delete the record?'))
		{
			myData.splice(i,1);
			alert('Deleted a record.');
		}
		console.log(myData);
	};

	return this;
}]);