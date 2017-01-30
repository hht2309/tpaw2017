var meteoControllers = angular.module( 'meteoControllers' , []);
meteoControllers .controller('MainController', ['$scope', '$http',
function($scope, $http) {
$scope.recherche = function() {
/* appel AJAX à l’API openweathermap */
 $http.get(' https://demo.bilelz.fr/owmap/?q='+$scope.city+'&units=metric&appid=07b0aeb82066b96906d98aa533eeb0e0' )
.success(function(data) {
/* on met dans l’objet meteo les données retournées par openweathermap */
$scope.meteo = data;
}).error(function(data) {
/* en cas d’erreur */
$scope.errorMsg = "Hum. Error... please retry.";
});
}

$scope.gps = function() {
            if (navigator.geolocation) navigator.geolocation.getCurrentPosition($scope.showPosition);
        }
        $scope.showPosition = function(position) {
            $scope.city ="Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;
            $http.get('https://demo.bilelz.fr/owmap/?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=metric&appid=5aac3e6764c3b306d2250d00173b1b23')
                .success(function(data) {
                    /* on met dans l’objet meteo les données retournées
                    par openweathermap */
                    $scope.meteo = data;
                }).error(function(data) {
                    /* en cas d’erreur */
                    $scope.errorMsg = "Hum. Error... please retry.";
                });
        }

}]);