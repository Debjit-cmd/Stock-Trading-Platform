const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel = new model("holding", HoldingsSchema); {/*Plural of holding --> Holdings (mongoDB collection name) */}

module.exports = { HoldingsModel };