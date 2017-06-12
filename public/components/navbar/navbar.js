var app = angular.module("contactRepsApp");
app.directive("navbar", function () {
    return {
        templateUrl: "components/navbar/navbar.html",
        restrict: "E"
    };
});
