myApp.controller('addressController', ['$scope', function($scope){
    console.log("Address Controller");
    $scope.thing = "Addresses here";
}]);


//Drop down/select list of all users
myApp.controller('DropDownController', ['$scope', function ($scope) {

    $scope.subjects = ['Math', 'Physics', 'Chemistry', 'Hindi', 'English'];
    $scope.selectedItem;
    $scope.dropboxitemselected = function (item) {

        $scope.selectedItem = item;
        alert($scope.selectedItem);
    }
}]);

//When one is selected, display all of their addresses

//-- Generic JOIN syntax. This will show the user’s names and their addresses
//SELECT users.name, addresses.* FROM users JOIN addresses ON users.id = addresses.user_id;

//Format the addresses nicely like a real address with line breaks, spaces, etc.
