// define assert
const assert = require("assert");

// imp models
const Chars = require("../models/chars");

// Describe tests
describe("Deleting Records", function () {
    var char;

    // Add a character to the db before each tests
    beforeEach(function (done) {
        char = new Chars({
            name: "Henro",
            weight: 22,
        });
        char.save().then(function () {
            done();
        });
    });

    // Create tests
    it("Delete one record in database.", function (done) {
        Chars.findOneAndRemove({ name: "Henro" }, function () {
            Chars.findOne({ name: "Henro" }).then(function (result) {
                assert(result === null);
                done();
            });
        });
    });
});
