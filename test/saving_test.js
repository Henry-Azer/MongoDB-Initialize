// define assert
const assert = require("assert");

// imp models
const Chars = require("../models/chars");

// Describe tests
describe("Saving Records", function () {
   
    // Create tests
    it("Saves record to database.", function (done) {
        var char = new Chars({
            name: "Henry",
            weight: "55",
        });

        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });
    });
});
