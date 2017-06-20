angular.module("contactRepsApp");
const apiString = "http://localhost:8000/bills"

app.service("billReqService", ["$http", function ($http) {
    this.getBill = function (billInfo) {
        console.log(billInfo);
        var config = {
            params: billInfo
        }
        // console.log($http.get("/bill-api?", config));
        return $http.get("/bill-api?callback=JSON_CALLBACK", config);
    };

    this.getLocalBill = function () {
        return $http.get(apiString)
    };

    this.postBill = function (bill) {
        return $http.post(apiString, bill)
    };

    this.updateBill = function (id, bill) {
        return $http.put(apiString + id, bill)
    };

    this.removeBill = function (bill) {
        return $http.delete(apiString + bill._id)
    };
}]);