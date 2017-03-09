myApp.directive("customTotal", function() {
	return function (scope, element, attrs ) {
        var td = angular.element ("<td>")
		element.append(td)
        
        var sumPages = 0
		for (var i=0; i<scope.list.items.length; i++) {
			sumPages += scope.list.items[i].page
		}
        td.text(sumPages)
	}
})