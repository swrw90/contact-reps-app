var app = angular.module("contactRepsApp");
var billType = [{
        value: "introduced",
        label: "Introduced"
    },
    {
        value: "updated",
        label: "Updated"
    },
    {
        value: "passed",
        label: "Passed"
    },
    {
        value: "enacted",
        label: "Enacted"
    },
    {
        value: "vetoed",
        label: "Vetoed"
    },
]
app.constant("BILLTYPE", billType);

app.service('billTypeService', ["BILLTYPE", function (BILLTYPE) {

    this.defaultBillType = function () {
        var billType = BILLTYPE;
        return billType[0].value
    };

    this.getBillTypes = function () {
        return BILLTYPE;
    };
}]);