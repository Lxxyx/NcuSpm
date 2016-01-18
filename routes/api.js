var express = require('express');
var router = express.Router();
var path = require('path');
var staticPath = path.resolve('./public');
var dataPath = path.resolve('./data')

router.get('/', function(req, res, next) {
  res.send('This is api');
});

router.get('/focusNews', function(req, res, next) {
  res.sendFile(dataPath + '/focusNews.json');
});

router.get('/academic', function(req, res, next) {
  res.sendFile(dataPath + '/academic.json');
});

router.get('/schoolNotice', function(req, res, next) {
  res.sendFile(dataPath + '/schoolNotice.json');
});

router.get('/studentWork', function(req, res, next) {
  res.sendFile(dataPath + '/studentWork.json')
});

module.exports = router;
