angular.module("contactRepsApp");
app.service("repsApiReq", ["$http", function ($http) {

    this.getRepInfo = function (repsInfo) {
        console.log(repsInfo);
        var address = repsInfo.address.replace(/\s/gi, "+");
        return $http.get("https://www.googleapis.com/civicinfo/v2/representatives?address=" + address + "&includeOffices=" + repsInfo.includeOffice + "&levels=" + repsInfo.levels + "&roles=" + repsInfo.types + "&key=AIzaSyCnS7XgZcVD8IfLIJlOZiuysz7S8p8BLcE");

    };
}]);