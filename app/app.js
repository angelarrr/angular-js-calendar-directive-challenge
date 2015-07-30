angular.module('calendarDemoApp', [])
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

				// select show current month and year
				$scope.month = currMonth;
				$scope.year = currYear;

				// populate yr select box for 20yrs in past/future
				var years = [];
				for (var i = currYear - 20; i <= currYear + 20; i ++) {
					years.push(i);
				}
				$scope.years = years;

				// generate days that should be displayed for given month
				$scope.getCal = function(year, month){
					$scope.range = CalendarRange.getMonthlyRange(new Date(year, month));
				};

				// function to update calendar on select
				$scope.updateCal = function(){
					currMonth = $scope.month;
					$scope.getCal($scope.year, $scope.month);
				};

				// load calendar
				$scope.getCal(currYear, currMonth);
			}
		};
	})