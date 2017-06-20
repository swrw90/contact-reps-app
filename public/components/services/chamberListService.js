var app = angular.module("contactRepsApp");
var chambers = [{
                value: "house",
                label: "House of Representatives"
            },
            {
                value: "senate",
                label: "Senate"
            },
            {
                value: "both",
                label: "Both (For Passed Only)"
            },
        ]
app.constant("CHAMBERS", chambers);

app.service('chamberListService', ["CHAMBERS", function (CHAMBERS) {

    this.defaultChamber = function () {
        var allChambers = CHAMBERS;
        return allChambers[0].value
    };

    this.getAllChambers = function () {
        return CHAMBERS;
    };
}]);