// express initialization //
const express = require("express");
const app = express();
// ---------------------- //

const path = require("path");

// env vars //
require('dotenv').config();
// -------- //


// Body Parser initialization //
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// -------------------------- //

// Mongoose Begin //
const mongoose = require("mongoose");
mongoose.connect(`mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@ds159527.mlab.com:59527/blog_dev`, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`Connected to MongoDB.`);
});
// -------------- //

// Express Session Begin //
const session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
// -------------------- //

// Get external and interal routes set up //
app.use("/api", require('./routes'));

app.use(express.static(__dirname + '/client/build'));

app.get('*', (req, res) => {
    req.session.admin = false;
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
// -------------------------------------- //


// Express server port info //
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`@---Port: ${PORT}---@`);
});
// ------------------------ //