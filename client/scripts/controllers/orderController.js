myApp.controller('orderController', ['$scope', function($scope){
    console.log("Order Controller");
    $scope.thing = "Orders here";
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

//Input fields for Start Date and End Date

//-- General Date Range selection
// SELECT * FROM orders WHERE order_date > '2014-01-01' AND order_date < 'tomorrow';

//When one is selected, display all of the orders for this user within the date range given in a table.
// Also blow out the data to display:
//    All orders fields

//-- Get all the info in our entire database for a particular user’s orders

//SELECT users.name, addresses.*, orders.*
//FROM orders
//JOIN addresses
//ON addresses.address_id = orders.ship_address_id
//JOIN users
//ON users.id = <connected to which field?>
//WHERE orders.user_id = 1;

//Include address street, city, state, and zip for that order

//-- Generic JOIN syntax. This will show the user’s names and their addresses
//SELECT users.name, addresses.* FROM users JOIN addresses ON users.id = addresses.user_id;

//Include user’s name

//-- Generic JOIN syntax. This will show the user’s names and their addresses
//SELECT users.name, addresses.* FROM users JOIN addresses ON users.id = addresses.user_id;


//Sum the total amount spent at the bottom for only the selected orders


//Make sure the amount fields have a dollar sign and proper commas and formatting
