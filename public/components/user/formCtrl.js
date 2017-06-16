var app = angular.module("contactRepsApp");
app.controller("formCtrl", ["$scope", "roleService", "officesService", "repsApiReq", function ($scope, roleService, officesService, repsApiReq) {

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

}]);