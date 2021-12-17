const mongoose = require("mongoose");

// connect db before mocha tests
before(function (done) {
    // Connection
    mongoose.connect("mongodb://localhost/Test");

    mongoose.connection
        .once("open", function () {
            console.log("Connection Success.");
            done();
        })
        .on("error", function (err) {
            console.log("Connection Failed: " + err.message);
        });
});


// Drop Collection
// beforeEach(function (done) {
//     mongoose.connection.collections.chars.drop(function (){
//         done();
//     })
// })
