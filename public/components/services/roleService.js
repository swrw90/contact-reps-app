var app = angular.module("contactRepsApp");
var roles = [{
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
app.constant("ROLES", roles);

app.service('roleService', ["ROLES", function (ROLES) {

    this.defaultRole = function () {
        var allRoles = this.getAllRoles();
        return allRoles[7].role
    };

    this.getAllRoles = function () {
        return ROLES;
    };
}]);