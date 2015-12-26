var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index',{title:"南昌大学公共管理学院"})
});

module.exports = router;
