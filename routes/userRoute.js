var express = require("express");
var userRoutes = express.Router();
var User = require("../models/user")

showRoutes.get("/", function (req, res) {
    User.find(function (err, users) {
        return res.send(user);
    });
});

userRoutes.post("/", function (req, res) {
    res.send("POST /users");
});

userRoutes.get("/:id", function (req, res) {
    res.send("GET a single user");
});

userRoutes.put("/:id", function (req, res) {
    res.send("PUT (update) a single user");
});

userRoutes.delete("/:id", function (req, res) {
    res.send("DELETE a single user");
});

module.exports = userRoutes;