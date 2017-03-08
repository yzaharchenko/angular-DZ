myApp.controller("addCtrl", function($scope) {
    $scope.list = data;

    $scope.addItem = function (name, page) {
    	page = parseFloat(page);
        if(name != "" && !isNaN(page)) {
        	$scope.list.items.push({name: name, page: page})
        }
    }
});