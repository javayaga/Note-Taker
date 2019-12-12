// dependencies //
const express = require("express");

// express configuration //
const app = express();

// set port //
const PORT = process.env.PORT || 8080;

// set up express to handle data parsing //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


