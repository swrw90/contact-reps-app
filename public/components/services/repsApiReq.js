angular.module("contactRepsApp");
app.service("repsApiReq", ["$http", function ($http) {

    this.getRepInfo = function (repsInfo) {
        var config = {
            params: repsInfo
        }
        return $http.get("https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCnS7XgZcVD8IfLIJlOZiuysz7S8p8BLcE", config);
    };
}]);