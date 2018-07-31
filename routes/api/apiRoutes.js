const express = require('express');
const router  = express.Router();

router.get('/data', function(req, res) {
    res.send({ "info" : "Express was here 😮" });
});

router.get('/data2', function(req, res) {
    res.send({ "info" : "Express was here 2 😮" });
});

module.exports = router