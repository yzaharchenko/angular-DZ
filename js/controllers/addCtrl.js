myApp.controller("addCtrl", function($scope, $http) {
    
    $scope.addItem = function (new_el, addForm) {
                        
            if(addForm.$valid) {
                var id = 0
                var new_element = {
                name: new_el.name,
                page: new_el.page,
                id: id++
            };
        	$scope.list.items.push(new_element)
            
            

            var data = {
                action:"add",
                element:new_element
            };
            
            $http({
                method: 'POST',
                url: "backend/model.php",
                data: data
            }).then(function (data) {
                var element = angular.element("<p class='alert'></p>");
                if (data) {
                    element.addClass("alert-info").text("Книга добавлена");
                } else {
                    element.addClass("alert-danger").text("Книга НЕ добавлена");
                }
                var parent = angular.element(document.querySelector("form"));
                parent.append(element);
            })
        }
    }
});