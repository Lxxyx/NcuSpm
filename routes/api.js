var express = require('express');
var router = express.Router();
var dbUrl = 'mongodb://localhost:27017/ncuspm';
var MongoClient = require('mongodb').MongoClient;
var queryLimit = 10;

router.get('/', function(req, res) {
  res.send('This is api');
});

router.get('/focusNews', function(req, res) {
  MongoClient.connect(dbUrl, function(err, db) {

    if (err) {
      console.log(err);
      return false;
    }

    var collection = db.collection('article.focusNews');
    collection.find({}).limit(queryLimit).toArray(function(err, docs) {
      res.json(docs);
      db.close();
    });
  });

});

router.get('/academic', function(req, res) {
  MongoClient.connect(dbUrl, function(err, db) {

    if (err) {
      console.log(err);
      return false;
    }

    var collection = db.collection('article.academic');
    collection.find({}).limit(queryLimit).toArray(function(err, docs) {
      res.json(docs);
      db.close();
    });
  });
});

router.get('/schoolNotice', function(req, res) {
  MongoClient.connect(dbUrl, function(err, db) {

    if (err) {
      console.log(err);
      return false;
    }

    var collection = db.collection('article.schoolNotice');
    collection.find({}).limit(queryLimit).toArray(function(err, docs) {
      res.json(docs);
      db.close();
    });
  });
});

router.get('/studentWork', function(req, res) {
  MongoClient.connect(dbUrl, function(err, db) {

    if (err) {
      console.log(err);
      return false;
    }

    var collection = db.collection('article.studentWork');
    collection.find({}).limit(queryLimit).toArray(function(err, docs) {
      res.json(docs);
      db.close();
    });
  });
});

module.exports = router;
