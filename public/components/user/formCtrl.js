var app = angular.module("contactRepsApp");
app.controller("formCtrl", ["$scope", "roleService", "officesService", "repsApiReq", "congressListService", "chamberListService", "billReqService", function ($scope, roleService, officesService, repsApiReq, congressListService, chamberListService, billReqService) {

    $scope.addInfo = function (info) {
        repsApiReq.getRepInfo(info).then(function (response) {
            console.log(response.data);
            $scope.repsInfo = response.data;
        });
    }

    $scope.roles = roleService.getAllRoles();
    $scope.info = {
        types: roleService.defaultRole(),
        levels: officesService.defaultOffice()

    };

    $scope.offices = officesService.getAllOffices();

    $scope.addBill = function (bill) {
    billReqService.getBill(bill).then(function (response) {
        console.log(response.data);
        $scope.billInfo = response.data;
    });
}
    $scope.bills = billReqService.getBill();
    $scope.bill = {

    }
}]);