const assert = require("assert");

const createInterns = function(db,callback){
  //create interns collection
  db.createCollection("interns",function(err, res){
    assert.equal(err, null);
    console.log("Interns collection created!");
    callback(res);
  });
}

module.exports = createInterns;