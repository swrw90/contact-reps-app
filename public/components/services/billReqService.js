angular.module("contactRepsApp");
const apiString = "http://localhost:8000/bills"

app.service("billReqService", ["$http", function ($http) {
    this.getBill = function (billInfo) {
        return $http.get("/bill-api", billInfo)
    };

    this.getLocalBill = function () {
        return $http.get(apiString)
    };

    this.postBill = function (bill) {
        return $http.post(apiString, bill)
    };

    this.updateBill = function(id, bill) {
        return $http.put(apiString + id, bill)
    };

    this.removeBill = function (bill) {
        return $http.delete(apiString + bill._id)
    };
}]);