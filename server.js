// DEPENDENCIES //
const express = require("express");
const path = require("path");
const fs = require("fs");

// Express configuration //
const app = express();

// Set PORT //
const PORT = process.env.PORT || 8080;

// Set up Express to handle data parsing //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// ========= HTML ROUTES ========= //
//  Index //
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
}); 

// Notes //
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

// ======= API Routes ========= //
// GET //
// testing api //
app.get("/api/", function(req, res) {
    res.send({ message: "hooray!! api works!" });
})

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "db", "db.json"));
})

// POST //
app.post("/api/notes", function(req, res) {

    const newNote = req.body;

    console.log(newNote);

    res.json(newNote);
});

// server listening //
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});