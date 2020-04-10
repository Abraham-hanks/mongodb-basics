var mongodb = require("mongodb");
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/"
const createInterns = require("./interns");

//Database to connect to
const dbName = "abraham_hanks";

mongoClient.connect(url, function(err, db){

    if (err) throw err;
    console.log("Database created by Abraham Hanks");
    var dbo = db.db("abraham_hanks");
    createInterns(dbo,function(){
        db.close
    });

    // db.close();
});