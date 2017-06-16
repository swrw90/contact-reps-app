var express = require("express");
var app = express();
var port = process.env.Port || 8000;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
var morgan = require("morgan");
app.use(morgan("dev"));
var mongoose = require("mongoose")
mongoose.connect("mongodb://");




app.use("/bill", require("./routes/bill"))

app.listen(port, function () {
    console.log("Server is running on port " + port)
});