myApp.controller("addCtrl", function($scope, $http) {
    
    $scope.addItem = function (new_el, addForm) {
    	    if(addForm.$valid) {
                var new_element = {
                name: new_el.name,
                page: new_el.page
            };
        	$scope.list.items.push(new_element)
        	
            var data = {
                action:"add",
                element:new_element
            };
            /*отправка нового елемента в модель*/
            $http({
                method: 'POST',
                url: "backend/model.php",
                data: data
            }).then(function (data) {
                var element = angular.element("<p class='alert'></p>");
                if (data) {
                    element.addClass("alert-info").text("Element added");
                } else {
                    element.addClass("alert-danger").text("Element NOT added");
                }
                var parent = angular.element(document.querySelector("form"));
                parent.append(element);
            })
        }
    }
});