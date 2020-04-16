const assert = require("assert");

const findFirstIntern = function(db, callback){
    // get interns collection
    const collection = db.collection("interns");
    //find documents from interns collection
    collection.findOne({},function(err, res){
        assert.equal(err, null);
        console.log(res);
        callback(res);
    });
};

const findInternWithRatingSeven = function(db,callback){
    // get interns collection
    const collection = db.collection("interns");
    //find documents from interns collection
    collection.find({rating: 7}).toArray(function(err, res){
        assert.equal(err, null);
        console.log(res);
        callback(res);
    });
};

const findInternReturnOnlyMovieTitles = function(db,callback){
    // get interns collection
    const collection = db.collection("interns");
    //find documents from interns collection
    collection.find({},
        { projection: {_id: 0, movie: 1} }).toArray(function(err, res){
        assert.equal(err, null);
        console.log(res);
        callback(res);
    });
};

const findIntern = {
    findFirstIntern: findFirstIntern, 
    findInternReturnOnlyMovieTitles: findInternReturnOnlyMovieTitles, 
    findInternWithRatingSeven: findInternWithRatingSeven
};

module.exports = findIntern;
