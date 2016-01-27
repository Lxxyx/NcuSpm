var express = require('express');
var router = express.Router();
var path = require('path');
var staticPath = path.resolve('./public');
var dataPath = path.resolve('./data')

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/ncuspm';

router.get('/', function(req, res, next) {
  res.send('This is Db Api');
});

router.post('/login', function(req, res) {
  var user = {
    "userName": req.body.userName,
    "password": req.body.password
  }

  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log(err)
      return false;
    };

    var collection = db.collection('user');

    collection.find(user).toArray(function(err, docs) {
      if (docs[0] != null) {
        res.json(docs)
      } else {
        res.json({
          'errorMsg': 'NoUser'
        })
      }
      db.close();
    });

  });
});

router.post('/reg', function(req, res) {
  var user = {
    "userName": req.body.userName,
    "password": req.body.password
  };

  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log(err)
      return false;
    };
    collection.find({
      "userName":user.userName
    }).toArray(function(err,doc) {
      res.json(doc)
    })
    var collection = db.collection('user');

    collection.insertOne(user,function(err,status) {
      res.json(status)
    });
    db.close();
  });
})

module.exports = router;
