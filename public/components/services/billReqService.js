angular.module("contactRepsApp");
app.service("billReqService", ["$http", function ($http) {

    
    this.getBill = function (billInfo) {
        
        return $http.get("/bill-api");
            // return $http.get("https://api.propublica.org/congress/v1/bills.json", config);
            // https://api.propublica.org/congress/v1/{congress}/{chamber}/bills/{type}.json
        } 
}]);