var express      = require('express');
var router       = express.Router();
var path         = require('path');
var staticPath   = path.resolve('./public');
var dataPath     = path.resolve('./data')
var academicPath = path.resolve('./data/academic/')

router.get('/', function(req, res) {
  res.send("This is article api")
});

router.get('/academic/:id', function(req, res) {
  var title   = require(dataPath + '/academic.json')[req.params.id].title;
  var time    = require(dataPath + '/academic.json')[req.params.id].time;
  var content = require(academicPath + '/' + req.params.id + '.json')[0].content;
  
  res.render('article', {
    title: title,
    time:time,
    content: content
  });
});

module.exports = router;
