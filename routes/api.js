var express = require('express');
var router = express.Router();
var path = require('path');
var staticPath = path.resolve('./public');
var dirPath = path.resolve('./')


router.get('/', function(req, res, next) {
  res.send('This is api');
});

router.get('/focusNews',function(req,res,next) {
	res.sendFile(dirPath+'/focusNews.json');
});

router.get('/academic',function(req,res,next) {
	res.sendFile(dirPath+'/academic.json');
});

router.get('/schoolNotice',function(req,res,next) {
	res.sendFile(dirPath+'/schoolNotice.json');
});

module.exports = router;