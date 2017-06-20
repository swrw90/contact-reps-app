var app = angular.module("contactRepsApp");
var congress = [{
        value: "110",
        label: "110th"
    },
    {
        value: "111",
        label: "111th"
    },
    {
        value: "112",
        label: "112th"
    },
    {
        value: "113",
        label: "113th"
    },
    {
        value: "114",
        label: "114th"
    },
    {
        value: "115",
        label: "115th"
    },

]
app.constant("CONGRESS", congress);

app.service('congressListService', ["CONGRESS", function (CONGRESS) {

    this.defaultCongressNum = function () {
        var congressNums = CONGRESS;
        return congressNums[5].value
    };

    this.getCongressNums = function () {
        return CONGRESS;
    };
}]);