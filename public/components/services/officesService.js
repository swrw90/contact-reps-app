var app = angular.module("contactRepsApp");
app.service('officesService', function () {

    this.defaultOffice = function () {
        var allOffices = this.getAllOffices();
        return allOffices[2].level
    };

    this.getAllOffices = function () {
        return [{
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
        ]
    };
});