var app = angular.module("contactRepsApp");
var congress = [{
        number: "110",
        menu: "110th"
    },
    {
        number: "111",
        menu: "111th"
    },
    {
        number: "112",
        menu: "112th"
    },
    {
        number: "113",
        menu: "113th"
    },
    {
        number: "114",
        menu: "114th"
    },
    {
        number: "115",
        menu: "115th"
    },

]
app.constant("CONGRESS", congress);

app.service('congressListService', ["CONGRESS", function (CONGRESS) {

    this.defaultChamber = function () {
        var congressNums = this.getCongressNums();
        return allChambers[5].chamber
    };

    this.getCongressNums = function () {
        return CONGRESS;
    };
}]);