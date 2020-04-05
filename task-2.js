var mongodb = require("mongodb");
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/abraham_hanks"
mongoClient.connect(url, function(err, db){

    if (err) throw err;
    console.log("Database created by Abraham Hanks");

    db.close();
});