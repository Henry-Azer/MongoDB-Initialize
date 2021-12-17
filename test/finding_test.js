// define assert
const assert = require("assert");

// imp models
const Chars = require("../models/chars");

// Describe tests
describe("Finding Records", function () {
    var char;
   
    // Add a character to the db before each tests
    beforeEach(function (done) {
        char = new Chars({
            name: "Henry",
        });
        char.save().then(function () {
            done();
        });
    });

    // Create tests
    it("Find one record in database.", function (done) {
        Chars.findOne({ name: "Henry" }).then(function (result) {
            assert(result.name === "Henry");
            done();
        });
    });

    it("Find one record by id in database.", function (done) {
        Chars.findOne({ __id: char.__id}).then(function (result) {
            assert(result.__id.toString() === char.__id.toString());
        })
    })
});
