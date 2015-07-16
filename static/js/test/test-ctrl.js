describe('maps-ctrl', function() {
    beforeEach(module('maps-app'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
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

        it('composes maps image url using entered location name', function() {
            var testName = 'test';
            expect($scope.getImgUrl(testName))
                .toEqual('http://maps.googleapis.com/maps/api/staticmap?center=test&zoom=10&size=128x128&key=AIzaSyAxrGtGp1Dh3BDyuPHAR32qYDk3jiL3E6k');
        });
    });
});