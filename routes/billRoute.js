var express = require("express");
var billRoutes = express.Router();
var Bill = require("../models/billSchema")

billRoutes.get("/", function (req, res) {
    Bill.find(function (err, bills) {
        return res.send(bills);
    });
});

billRoutes.post("/", function (req, res) {
    var bill = new Bill(req.body);
    bill.save(function(err, newBill){
        if (err) return res.status(500).send(err);
        return res.status(201).send(newBill);
    });
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