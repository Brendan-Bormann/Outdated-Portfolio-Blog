const express = require('express');
const router  = express.Router();
const request = require("request");

router.get('/data', function(req, res) {
    res.send({ "info" : "Express was here 😮" });
});

router.get('/data2', function(req, res) {
    res.send({ "info" : "Express was here 2 😮" });
});

router.get('/git/repos', (req, res) => {
    var options = {
        url: "https://api.github.com/user/repos?sort=created",
        headers: {
            'Authorization': process.env.GITTOKEN,
            'User-Agent': 'request'
        },
        json: true
    }

    request(options, (error, response, body) => {
        if (error) console.log(error);
        else if (response) {
            res.json(response);
        }
    });

});

router.get('/git/me', (req, res) => {
    console.log("Getting git data.");
    var options = {
        url: "https://api.github.com/user/repos?sort=created",
        headers: {
            'Authorization': process.env.GITTOKEN,
            'User-Agent': 'request'
        },
        json: true
    }

    request(options, (error, response, body) => {
        if (error) console.log(error);
        else if (response) {
            res.json(response);
        }
    });

});

module.exports = router