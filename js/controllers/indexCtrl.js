myApp.controller("indexCtrl", function($scope, $http) {

	$http({method:"POST", url:"backend/model.php"}).then(function (data) {
        $scope.list = data.data;
    });

	$scope.mystyle = {color: "red", textAlign: "left"};
	$scope.form = "form";
	$scope.button = "button";
	
 });