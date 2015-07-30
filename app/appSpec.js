describe('calendar', function(){
	var scope,
		element,
		compiled,
		html;

	beforeEach(module('calendarDemoApp'));
	beforeEach(module('calendar.html'));

	beforeEach(inject(function($rootScope, $compile){
		html = "<calendar></calendar>";

		scope = $rootScope.$new();
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();
	}));

	it('should render calendar element correctly', function(){
		expect(element.find('select').length).toBe(2);
		expect(element.find('.year option').length).toBe(41);
	});
});