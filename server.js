const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");
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

const PORT = 8080;

app.use("/api", require('./routes'));

app.use(express.static(__dirname + '/client/build'));

app.get('/git/data', (req, res) => {
    console.log("Gitting data.");
    const git_info = {
        method: 'GET',
        headers: {
          'Authorization': 'token ' + process.env.GITTOKEN
        },
        url: "https://api.github.com/user/repos?sort=created",
      };
      axios(git_info)
        .then(res => {
            console.log(res);
            res.json(res);
        })
        .catch(err => console.log(err));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`@---Port: ${PORT}---@`);
});
