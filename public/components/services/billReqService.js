angular.module("contactRepsApp");
app.service("repsApiReq", ["$http", function ($http) {
this.getBill = function (billInfo) {

    return $http.get("");
}
}]);