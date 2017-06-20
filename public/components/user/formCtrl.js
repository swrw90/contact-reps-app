var app = angular.module("contactRepsApp");
app.controller("formCtrl", ["$scope", "roleService", "officesService", "repsApiReq", "congressListService", "chamberListService", "billReqService", "billTypeService", function ($scope, roleService, officesService, repsApiReq, congressListService, chamberListService, billReqService, billTypeService) {

    $scope.addInfo = function (info) {
        repsApiReq.getRepInfo(info).then(function (response) {
            console.log(response.data);
            $scope.repsInfo = response.data;
        });
    }


    $scope.offices = officesService.getAllOffices();
    $scope.roles = roleService.getAllRoles();
    $scope.info = {
        types: roleService.defaultRole(),
        levels: officesService.defaultOffice()

    };

    $scope.addBill = function (bill) {
        billReqService.getBill(bill).then(function (response) {
            $scope.bills = response.data.results[0].bills;
            $scope.chamber = response.data.results[0].chamber;
            $scope.congressNumber = response.data.results[0].congress;

        });
    }

    $scope.addReadList = function (bill) {
        billReqService.postBill(bill);
    };

    $scope.displayMyList = function () {
            billReqService.getLocalBill().then(function (response){
                $scope.myList = response.data;
            });
        }

    $scope.chambers = chamberListService.getAllChambers();
    $scope.congressNumbers = congressListService.getCongressNums();
    $scope.billTypes = billTypeService.getBillTypes();
    $scope.bill = {
        chamber: chamberListService.defaultChamber(),
        number: congressListService.defaultCongressNum(),
        type: billTypeService.defaultBillType()
    }
}]);