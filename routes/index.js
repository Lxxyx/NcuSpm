var express = require('express');
var router = express.Router();
var path = require('path');
var staticPath = path.resolve('./public');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(staticPath+'/index.html');
});

router.get('/about',function(req,res) {
	res.sendFile(staticPath+'/about.html');
});

router.get('/wx',function(req,res) {
  res.sendFile(staticPath+'/wx.html');
});

router.get('/dba',function(req,res) {
  res.sendFile(staticPath+'/db.html');
});

router.get('/resume',function(req,res) {
  res.sendFile(staticPath+'/resume/resume.html');
});

router.get('/mooc', function(req, res, next) {
  res.sendFile(staticPath+'/mooc/index.html');
});

module.exports = router;
