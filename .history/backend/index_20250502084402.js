require('dotenv').config(); {/* connects Mongo_url to the process */}

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 300

const app = express(); //express constructor called

app.listen(3005,() => {
  console.log("App Started!");
});