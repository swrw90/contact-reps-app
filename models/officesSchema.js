var mongoose = require("mongoose");

var officeSchema = new mongoose.Schema({
    level: String,
    label: String
});

module.exports = mongoose.model("Office", officeSchema);