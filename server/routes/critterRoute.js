const express = require("express");
const router = express.Router();
const Critter = require("../models/critterModel");

//Route for sending information from /create
router.route("/create").post((req, res) => {
    const name = req.body.name;

    const newCritter = new Critter({
        name
    });

    newCritter.save();
})

//Route for getting info to /saved
router.route("/saved").get((req, res) => {
    Critter.find()
    .then(foundCritters => res.json(foundCritters))
})

module.exports = router;