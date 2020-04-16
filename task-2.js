const mongoClient = require("mongodb").MongoClient;
const createInterns = require("./interns");
const findInterns = require("./findInterns");
const updateInterns = require("./updateInterns");

//connection url
const url = "mongodb://localhost:27017/"
//Database to connect to
const dbName = "abraham_hanks";

const client = new mongoClient(url,{ useUnifiedTopology: true, useNewUrlParser: true });

client.connect(function(err){

    if (err) throw err;
    console.log("Database created by Abraham Hanks");
    const db = client.db(dbName);

    //creates  documents in the interns collection
    createInterns(db,function(res){
        console.log(res);
        client.close;
    })

    //displays the first document in the interns collection 
    findInterns.findFirstIntern(db,function(){
        client.close;
    })

    //displays only the movie titles of documents in the interns collection
    findInterns.findInternReturnOnlyMovieTitles(db,function(){
        client.close;
    })

    //displays only movies with rating 7 in the interns collection
    findInterns.findInternWithRatingSeven(db,function(){
        client.close;
    })
    
    //updates a document in the interns collection
    updateInterns(db, function(res){
        console.log(res);
        client.close;
    })
});