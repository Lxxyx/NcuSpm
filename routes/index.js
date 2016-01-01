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

module.exports = router;
