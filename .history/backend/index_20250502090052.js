require('dotenv').config(); {/* connects Mongo_url to the process */}

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express(); //express constructor called

app.listen(PORT,() => {
  console.log("App Started!");
  mongoose.connect(uri);
  console.log("Database Connected");
});