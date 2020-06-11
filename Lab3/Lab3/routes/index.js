'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res)
{
    res.render('index', { title: 'Lab 3' });
});

router.get('/michael', function (req, res)
{
    res.render('michael', { name: "Michael" });
});

router.get('/maria', function (req, res)
{
    res.render('maria', { name: "Maria" });
});

router.get('/alfredo', function (req, res)
{
    res.render('alfredo', { name: "Alfredo" });
});

/*POST on homepage*/
router.post('/', function (req, res)
{

})

module.exports = router;
