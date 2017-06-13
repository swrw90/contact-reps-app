angular.module("contactRepsApp");
app.service("repsApiReq", ["$http", function ($http){

    this.getRepInfo = function (repsInfo) {
        return $http.get("https://www.googleapis.com/civicinfo/v2/representatives?address= + userinput + &key=AIzaSyCnS7XgZcVD8IfLIJlOZiuysz7S8p8BLcE");

    };

}]); 