const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel = new model("holding", HoldingsSchema); {/*Plural of holding --> holdings (mongoDB collection name) */}

module.exports = { HoldingsModel };