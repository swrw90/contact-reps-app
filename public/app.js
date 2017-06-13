var app = angular.module("contactRepsApp", ["ngRoute"]);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "",
            controller: ""
        })
        .when("/", {
            templateUrl: "components/user/userInfo.html",
            controller: "formCtrl"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);


app.controller("formCtrl", ["$scope", function ($scope) {

    $scope.offices = [{
            level: "administrativeArea1",
            label: "Admin Area 1"
        },
        {
            level: "administrativeArea2",
            label: "Admin Area 2"
        },
        {
            level: "country",
            label: "Country"
        },
        {
            level: "international",
            label: "International"
        },
        {
            level: "locality",
            label: "Locality"
        },
        {
            level: "regional",
            label: "Regional"
        },
        {
            level: "special",
            label: "Special"
        },
        {
            level: "subLocality1",
            label: "Sub Locality 1"
        },
        {
            level: "subLocality2",
            label: "Sub Locality 2"
        }
    ];
    $scope.info = {
        levels: $scope.offices[2].level
    };

    $scope.roles = [{
            role: "deputyHeadOfGovernment",
            display: "Deputy Head of Government"
        },
        {
            role: "executiveCouncil",
            display: "Executive Council"
        },
        {
            role: "governmentOfficer",
            display: "Government Officer"
        },
        {
            role: "headOfGovernment",
            display: "Head of Government"
        },
        {
            role: "headOfState",
            display: "Head of State"
        },
        {
            role: "highestCourtJudge",
            display: "Highest Court Judge"
        },
        {
            role: "judge",
            display: "Judge"
        },
        {
            role: "legislatorLowerBody",
            display: "Legislator (House of Representatives)"
        },
        {
            role: "legislatorUpperBody",
            display: "Legislator (Senate)"
        },
        {
            role: "schoolBoard",
            display: "School-Board"
        },
        {
            role: "specialPurposeOfficer",
            display: "Special Purpose Officer"
        }
    ]
    $scope.type = {
        types: $scope.roles[7].role
    };

    //  $scope.info = {
    //     levels: $scope.offices[2].level
    // };
}]);