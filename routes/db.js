var express = require('express');
var router = express.Router();
var path = require('path');
var staticPath = path.resolve('./public');
var dataPath = path.resolve('./data')

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var dbUrl = 'mongodb://localhost:27017/ncuspm';

router.get('/', function(req, res, next) {
  res.send('This is Db Api');
});

router.post('/login', function(req, res) {
  MongoClient.connect(dbUrl, function(err, db) {
    var collection = db.collection('user');

    collection.findOne(req.body)
      .then(function(result) {
        if (result === null) {
          res.status(400).send("账号密码错误，或用户名不存在！")
        } else {
          res.cookie("userName",req.body.userName,{
            expires: new Date(Date.now() + 3600000)
          }).json(result);
        }
        db.close();
      })

  });
});

router.post('/reg', function(req, res) {
  var checkUser = {
    "userName": req.body.userName
  };

  MongoClient.connect(dbUrl, function(err, db) {
    var collection = db.collection('user');

    collection.findOne(checkUser)
      .then(function(result) {
        if (result === null) {
          collection.insertOne(req.body)
            .then(function(result) {
              res.json(result);
              db.close();
            })
        } else {
          res.status(400).send('用户名已被注册')
          db.close();
        }

      })

  });
})

module.exports = router;
