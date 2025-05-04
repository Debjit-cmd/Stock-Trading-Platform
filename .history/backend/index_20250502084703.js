require('dotenv').config(); {/* connects Mongo_url to the process */}

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3005
const uri 

const app = express(); //express constructor called

app.listen(3005,() => {
  console.log("App Started!");
});