var app = angular.module("contactRepsApp", ["ngRoute"]);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        // .when("/", {
        //     templateUrl: "",
        //     controller: ""
        // })
        .when("/reqInfo", {
            templateUrl: "components/user/reqForm.html",
            controller: "formCtrl"
        })
        .otherwise("/reqInfo", {
            redirectTo: "components/user/reqForm.html"
        });
}]);