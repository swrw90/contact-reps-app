var express = require("express");
var billRoutes = express.Router();
var Bill = require("../models/bill")

billRoutes.get("/", function (req, res) {
    Bill.find(function (err, bills) {
        return res.send(bill);
    });
});

billRoutes.post("/", function (req, res) {
    res.send("POST /bills");
});

billRoutes.get("/:id", function (req, res) {
    res.send("GET a single bill");
});

billRoutes.put("/:id", function (req, res) {
    res.send("PUT (update) a single bill");
});

billRoutes.delete("/:id", function (req, res) {
    res.send("DELETE a single bill");
});

module.exports = billRoutes;