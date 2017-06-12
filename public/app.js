var app = angular.module("contactRepsApp", [ngRoute]);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "",
            controller: ""
        })
        .when("/", {
            templateUrl: "",
            controller: ""
        })
        .otherwise({
            redirectTo: "/"
        });
}]);