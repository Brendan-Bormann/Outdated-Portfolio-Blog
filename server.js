const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// Mlab login //
var mLog = require("./login");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect(`mongodb://${mLog.username}:${mLog.password}@ds159527.mlab.com:59527/blog_dev`, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`Connected to MongoDB as user ${mLog.username}.`);
});

const PORT = 8080;

app.use("/api", require('./routes'));

app.get("/test", (req, res) => {
    fluffy.save(function (err, fluffy) {
        if (err) return console.error(err);
    });
    res.send("Test.");
});

app.use(express.static(__dirname + '/client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`@---Port: ${PORT}---@`);
});