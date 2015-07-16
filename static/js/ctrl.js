app.controller('maps-ctrl', function($scope) {

    var Location = function() {
        this.name = "",
        this.label = "",
        this.map = "",
        this.show = false
    };

    $scope.locations = [];

    var initLocations = function() {
       for(var i = 0; i < 4; i++) {
           $scope.locations.push(new Location());
       }
    };

    initLocations();

    var getImgUrl = function(locationName) {
        return 'http://maps.googleapis.com/maps/api/staticmap?center='
            + locationName + '&zoom=10&size=128x128&key=AIzaSyAxrGtGp1Dh3BDyuPHAR32qYDk3jiL3E6k';
    };

    $scope.searchLocations = function() {
        for (var i = 0; i < $scope.locations.length; i++) {
            var location = $scope.locations[i];
            if (location.name) {
                location.map = getImgUrl(location.name);
            }
        }
    };

    $scope.searchLocations = function() {
        var _locations = $scope.locations;
        for (var i = 0; i < _locations.length; i++) {
            var location = _locations[i];
            if (location.name) {
                location.map = getImgUrl(location.name);
                location.label = location.name;
                location.show = true;
            }
        }
    };

    $scope.searchLocation = function(e) {
        if (e.which === 13) {
            $scope.searchLocations();
        }
    };

    $scope.clearLocations = function() {
        var _locations = $scope.locations;
        for (var i = 0; i < _locations.length; i++) {
            var location = _locations[i];
            location.name = "";
            location.label = "";
            location.show = false;
        }
    };

    $scope.addRow = function() {
        var _locations = $scope.locations;
        _locations.push(new Location());
    };

    $scope.removeRow = function(index) {
        var _locations = $scope.locations;
        _locations.splice(index, 1);
    };

});
