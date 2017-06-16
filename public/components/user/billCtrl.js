var app = angular.module("contactRepsApp");
app.controller("billCtrl", ["$scope", "billReqService", function ($scope, billReqService){

$scope.addBill = function (bill) {
    billReqService.getBill(bill).then(function (response) {
        console.log(response.data);
        $scope.billInfo = response.data;
    })
}
}]);