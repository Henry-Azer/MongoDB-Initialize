// define assert
const assert = require("assert");

// imp models
const Chars = require("../models/chars");

// Describe tests
describe("Updating Records", function () {
    var char;

    // Add a character to the db before each tests
    beforeEach(function (done) {
        char = new Chars({
            name: "mocha",
            weight: 60,
        });
        char.save().then(function () {
            done();
        });
    });

    // Create tests
    it("Update one record in database.", function (done) {
        Chars.findOneAndUpdate({ name: "Henri" }, { weight: 72 }).then(
            function () {
                Chars.findOne({ _id: char._id }).then(function (result) {
                    assert(result.weight === 72);
                    done();
                });
            }
        );
    });

    it("Increment weight by three in all records in database.", function (done) {
        Chars.update({}, {$inc: {weight: 3}}).then(function(){
            Chars.findOne({name: "mocha"}).then(function(result){
                assert(result.weight === 63);
                done();
            })
        })
    });
});
