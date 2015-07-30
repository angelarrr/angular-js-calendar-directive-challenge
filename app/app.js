angular.module('calendarDemoApp', [])

// your controller and directive code go here
	.directive('calendar', function(){
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'calendar.html',
			scope: true,
			controller: function controller($scope, $element, $attrs){
				var today = new Date();
				var currMonth = today.getMonth();
				var currYear = today.getFullYear();

				$scope.month = currMonth;
				$scope.year = currYear;
				console.log($scope.month, $scope.year);
			}
		}
	})