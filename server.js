const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const path = require("path");

const app = express();

// env vars //
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect(`mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@ds159527.mlab.com:59527/blog_dev`, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`Connected to MongoDB.`);
});

const PORT = 8080 || process.env.PORT;


app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }));

app.use("/api", require('./routes'));

app.use(express.static(__dirname + '/client/build'));

app.get('*', (req, res) => {
    req.session.admin = false;
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`@---Port: ${PORT}---@`);
});
