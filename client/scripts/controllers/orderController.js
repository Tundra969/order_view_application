myApp.controller('OrderController', ['$scope', '$http', function($scope, $http){
    $scope.currentName = {};
    $scope.nameArray = [];
    $scope.endDate;
    $scope.startDate;
    $scope.ordersArray = [];
    $scope.totalAmount = 0;
    $scope.predicate = false;


    $scope.getName = function(){
        $http.get('/name').then(function(response){
            console.log(response.data);
            $scope.resultsArray = response.data;
        });
    };

    $scope.getOrders = function(startDate,endDate,id){
        $http.get('/orders', {params: {start: startDate, end: endDate, id: id}}).then(function(response){
            console.log(response.data);
            $scope.ordersArray = response.data;

            for(var i=0; i<$scope.ordersArray.length; i++){
                $scope.totalAmount += Number($scope.ordersArray[i].amount);
            }
            $scope.predicate = true;

        });

    };

    $scope.getName();

}]);