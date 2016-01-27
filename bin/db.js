var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var user = {
  "userName":"admin",
  "password":123456
}

var url = 'mongodb://localhost:27017/ncuspm';

// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  var collection = db.collection('user');
  collection.find(user).toArray(function(err, docs) {
    console.dir(docs[0]);
    db.close();
  });

});
