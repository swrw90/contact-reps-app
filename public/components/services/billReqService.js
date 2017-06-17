angular.module("contactRepsApp");
app.service("billReqService", ["$http", function ($http) {
    this.getBill = function (billInfo) {
        return $http.get("/bill-api");
    }
}]);