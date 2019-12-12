// DEPENDENCIES //
const express = require("express");
const path = require("path");

// Express configuration //
const app = express();

// Set PORT //
const PORT = process.env.PORT || 8080;


// Set up Express to handle data parsing //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// HTML ROUTES //
//  Index //
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
}); 

// Notes //
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});

// server listening //
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});