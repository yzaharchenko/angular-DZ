myApp.controller("addCtrl", function($scope, customService) {
    $scope.list = customService

    $scope.addItem = function (new_el, addForm) {
    	    if(addForm.$valid) {
        	$scope.list.items.push({name: new_el.name, page: new_el.page})
        }
    }
});