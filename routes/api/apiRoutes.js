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

router.get('/me', (req, res) => {
    var options = {
        url: "https://api.github.com/user",
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

router.post('/login', (req, res) => {
    
    if (req.body.user === process.env.ADMIN_USER && req.body.pass === process.env.ADMIN_PASS)
    {
        res.send({ 'login' : 'Successful' });
    }
    else
    {
        res.send({ 'login' : 'Failed' });
    }
});

module.exports = router;