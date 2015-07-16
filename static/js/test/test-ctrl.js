describe('maps-ctrl', function() {
    beforeEach(module('app'));

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

        it('composes maps image url using entered location name', function() {
            expect($scope.locations.length).toEqual(4);
        });

//        it('sets the strength to "weak" if the password length <3 chars', function() {
//            $scope.password = 'a';
//            $scope.grade();
//            expect($scope.strength).toEqual('weak');
//        });
    });
});