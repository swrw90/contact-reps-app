var app = angular.module("contactRepsApp", ["ngRoute"]);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
    //     .when("/", {
    //         templateUrl: "",
    //         controller: ""
    //     })
        .when("/userInfo", {
            templateUrl: "components/user/userInfo.html",
            controller: "formCtrl"
        })
        .otherwise("/userInfo", {
            redirectTo: "components/user/userInfo.html"
        });
}]);