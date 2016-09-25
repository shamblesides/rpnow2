var express = require('express');
var router = express.Router();
module.exports = router;

router.get('/', (req, res) => res.sendFile(`${__dirname}/html/home.html`));
router.get('/rp/:url', (req, res) => res.sendFile(`${__dirname}/html/rp.html`));