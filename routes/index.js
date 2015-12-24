var express = require('express');
var router = express.Router();
var path = require('path');
var staticPath = path.resolve('./public');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(staticPath+'/index.html');
});

router.get('/xsgz',function(req,res) {
	res.sendFile(staticPath+'/xsgz.html');
});

module.exports = router;
