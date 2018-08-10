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

router.post('/login', async (req, res) => {
    if (req.body.user === process.env.ADMIN_USER && req.body.pass === process.env.ADMIN_PASS)
    {
        req.session.admin = true;
        res.send({ 'login' : 'Successful' });
    }
    else
    {
        req.session.admin = false;
        res.send({ 'login' : 'Failed' });
    }
});


router.get('/admin', (req, res) => {

    if (req.session.admin) {
        res.send(true);
    } else {
        res.send(false);
    }
});

router.get('/admin/test', (req, res) => {
    req.session.admin = true;
    res.send("admin test login");
});

router.get('/admin/test1', (req, res) => {
    res.send(req.session.id + " ||| " + req.session.admin);
});

module.exports = router;