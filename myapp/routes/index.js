var express = require('express');
const mongodb = require('mongodb');
const https = require ('https');
var router = express.Router();

const uri = 'mongodb://favri:fabric10@ds115045.mlab.com:15045/heroku_xzvnnj4p';
const apixuUrl = 'https://api.apixu.com/v1/current.json?key=';
const apixuToken = '409167ff741942d9a59201326170304';
const q = 'Buenos+Aires';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
