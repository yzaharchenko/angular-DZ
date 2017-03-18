myApp.controller("textCtrl", function($scope, $http) {
	
	$scope.deleteItem = function (item) {
		for (var i in $scope.list.items) {
			if ($scope.list.items[i].name == item) {
				$scope.list.items.splice(i, 1)

				var data = {
                    action: "remove",
                    index : i
                };
                /*отправка запроса на удаление елемента в модель*/
                $http({
                    method: 'POST',
                    url: "backend/model.php",
                    data: data
                }).then(function (data) {
                    var element = angular.element("<p class='alert'></p>");
                    if (data) {
                        element.addClass("alert-info").text("Element removed");
                    } else {
                        element.addClass("alert-danger").text("Element NOT removed");
                    }

                    var parent = angular.element(document.querySelector("table"));
                    parent.after(element);
                });
			}
		}
	}
});