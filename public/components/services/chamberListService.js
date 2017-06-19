var app = angular.module("contactRepsApp");
var chambers = [{
                chamber: "house",
                view: "House of Representatives"
            },
            {
                chamber: "senate",
                view: "Senate"
            },
            {
                chamber: "both",
                view: "Both (For Passed Only)"
            },
        ]
app.constant("CHAMBERS", chambers);

app.service('chamberListService', ["CHAMBERS", function (CHAMBERS) {

    this.defaultChamber = function () {
        var allChambers = this.getAllChambers();
        console.log(allChambers[0]);
        return allChambers[0].view
    };

    this.getAllChambers = function () {
        return CHAMBERS;
    };
}]);