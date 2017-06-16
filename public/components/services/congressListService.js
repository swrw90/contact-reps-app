var app = angular.module("contactRepsApp");
var congress = [{
        number: "110",
        display: "110th"
    },
    {
        number: "111",
        display: "111th"
    },
    {
        number: "112",
        display: "112th"
    },
    {
        number: "113",
        display: "113th"
    },
    {
        number: "114",
        display: "114th"
    },
    {
        number: "115",
        display: "115th"
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