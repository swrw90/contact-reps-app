//SCHEMAS
var mongoose = require("mongoose")
var billSchema = new mongoose.Schema({
    title: String,
    bill: String,
    sponsor: {
        name: String,
        party: String,
        state: String
    },
    introductionDate: Number,
    active: Boolean,
    housePassage: String,
    senatePassage: String,
    enacted: String,
    vetoed: String,
    primarySubject: String,
    committees: String,
    summaryShort: String

});

module.exports = mongoose.model("Bill", billSchema);