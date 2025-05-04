require('dotenv')
const express = require("express");
const app = express(); //express constructor called
app.listen(3005,() => {
  console.log("App Started!");
});