myApp.controller('AddressController', ['$scope', '$http', function($scope, $http){
    $scope.currentName = {};
    $scope.nameArray = [];
    $scope.addressArray = [];


    $scope.getName = function(){
        $http.get('/name').then(function(response){
            console.log(response.data);
            $scope.nameArray = response.data;
        });
    };


    $scope.getAddress = function(data){
        console.log(data);
        $http.get('/address', {params: {name: data.name, id: data.id}}).then(function(response){
            console.log(response.data);
            $scope.addressArray = response.data;
        });
    };

    $scope.getName();

}]);