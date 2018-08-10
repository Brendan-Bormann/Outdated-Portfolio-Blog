const express = require('express');
const router  = express.Router();
const request = require("request");

// get all my github repos
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


// get my github profile data
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

// admin login
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

// check if admin
router.get('/admin', (req, res) => {
    if (req.session.admin) {
        res.send(true);
    } else {
        res.send(false);
    }
});

// Nodemailer begin //
const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'brendan.bormann2@gmail.com',
      pass: process.env.EMAIL
    }
  });
// --------------- //

// TODO: set up nodemailer route
router.post('/mailer', (req, res) => {
    var mailOptions = {
        from: 'brendan.bormann@gmail.com',
        to: 'brendan.bormann@gmail.com',
        subject: 'An email from your website.',
        person: req.body.name,
        message: req.body.message
      };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.send(error);
        } else {
          res.send('Email sent: ' + info.response);
        }
      });

});

module.exports = router;