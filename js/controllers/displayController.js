app.controller('DisplayController', ['$scope', 'Operations', function($scope,Operations) {

		$("#displayTable").bootstrapTable({
			url: "http://localhost:3030/students",
            toolbar: '#toolbar',
            striped: true,
            search: true,
            showColumns: true,
            showToggle: true,
            showRefresh: true,
            pagination: true,
            sortName: 'fullName',
            sortOrder: 'asc',
            pageSize: 10,
            pageList: [5,10,25,50,100],
			columns: [{
                field: 'fullName',
                title: 'Full Name',
                sortName: 'fname',
                sortable: true,
                switchable: false,
                formatter: function (value, row) {
                    var name = [row.fname, row.lname].join(' ');
                    return '<a href="./display/students/'+ row.id +'">'+name+'</a>';
                }
            }, {
                field: 'age',
                title: 'Age',
                sortable:true,
                visible: false
            }, {
            	field: 'degree',
            	title: 'Degree',
            	sortable: true
            }, {
            	field: 'college',
            	title: 'College',
            	sortable: true
            }]
		})
	
}]);