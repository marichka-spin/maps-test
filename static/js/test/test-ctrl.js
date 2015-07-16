describe('maps-ctrl', function() {
    beforeEach(module('maps-app'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('', function() {
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('maps-ctrl', { $scope: $scope });
        });

        it('initLocations should add to array 4 empty locations', function() {
            expect($scope.locations.length).toEqual(4);
        });

        it('populates location data and composes maps image url using entered location name', function() {
            var testName = 'test';
            var firstLocation = $scope.locations[0];
            firstLocation.name = testName;
            $scope.searchLocations();
            expect($scope.locations[0].map)
                .toEqual('http://maps.googleapis.com/maps/api/staticmap?center=test&zoom=10&size=128x128&key=AIzaSyAxrGtGp1Dh3BDyuPHAR32qYDk3jiL3E6k');
            expect($scope.locations[0].show)
                .toBe(true);
        });

        it('clears all populated locations', function(){
            populateLocations($scope);
            $scope.clearLocations();
            var _locations = $scope.locations;
            for (var i = 0; i < _locations.length; i++) {
                var location = _locations[i];
                expect(location.name).toEqual('');
                expect(location.show).toBe(false);
            }
        });

        it('adds one additional default location', function(){
            $scope.addRow();
            expect($scope.locations.length).toEqual(5);
        });

        it('adds one  location', function(){
            $scope.removeRow(0);
            expect($scope.locations.length).toEqual(3);
        });

        var populateLocations = function($scope){
            var _locations = $scope.locations;
            var firstLocation = _locations[0];
            var secondLocation = _locations[1];

            firstLocation.name = 'test1';
            firstLocation.map = 'testUrl1';
            firstLocation.label = 'test1';
            firstLocation.show = true;

            secondLocation.name = 'test2';
            secondLocation.map = 'testUrl2';
            secondLocation.label = 'test2';
            secondLocation.show = true;
        };
    });
});