//SCHEMAS
var mongoose = require("mongoose")
var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    rating: Number,
    duration: String,
    price: Number,
    actors: [String],
    locations: [{
        street: String,
        city: String,
        state: String,
        country: String,
        coords: {
            lat: Number,
            long: Number
        }
    }]
});

module.exports = mongoose.model("User", userSchema);

