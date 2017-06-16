var app = angular.module("contactRepsApp");
var chambers = [{
                chamber: "house",
                display: "House of Representatives"
            },
            {
                chamber: "senate",
                display: "Senate"
            },
            {
                chamber: "both",
                display: "Both (For Passed Only"
            },
        ]
app.constant("CHAMBERS", chambers);

app.service('chamberListService', ["CHAMBERS", function (CHAMBERS) {

    this.defaultChamber = function () {
        var allChambers = this.getAllChambers();
        return allChambers[0].chamber
    };

    this.getAllChambers = function () {
        return CHAMBERS;
    };
}]);