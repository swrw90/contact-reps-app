var express = require("express");
var app = express();
var port = process.env.Port || 8000;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
var morgan = require("morgan");
app.use(morgan("dev"));
var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/contactReps");
var path = require("path");
var request = require("request");

app.use(express.static(path.join(__dirname, "public")));
app.use("/bill", require("./routes/billRoute"));
app.get("/bill-api", function (req, res) {
    var config = {
        url: "https://api.propublica.org/congress/v1/115/senate/members.json",
        headers: {
            "X-API-Key": "vEFMOw3W8p1AmhFJA02KZ7c5HYdivG4e1WO6kptF"
        }
    }
    request(config,
        function (error, response, body) {
            console.log(response.headers);
            if (error) {
                return res.send(error);
            }
            return res.send(body)
        })
})

app.listen(port, function () {
    console.log("Server is running on port " + port)
});