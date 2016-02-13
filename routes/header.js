var express      = require('express');
var router       = express.Router();
var path         = require('path');
var staticPath   = path.resolve('./public');

router.get('/', function(req, res) {
  res.send("This is headerNav api")
});

router.get('/:id',function(req,res) {
  
})

module.exports = router;
