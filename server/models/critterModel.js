const mongoose = require("mongoose");

const critterSchema = {
    name: String
}

const Critter = mongoose.model("Critter", critterSchema);

module.exports = Critter;