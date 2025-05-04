require('dotenv').config(); {/* connects Mongo_url to the process */}

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3005
const uri = process.env.PORT || 3005

const app = express(); //express constructor called

app.listen(,() => {
  console.log("App Started!");
});