var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/address', {
        templateUrl: "/assets/views/routes/address.html",
        controller: "addressController"
    }).
    when('/order', {
        templateUrl: "/assets/views/routes/order.html",
        controller: "orderController"
    }).
    otherwise({
        redirectTo: 'address'
    })
}]);