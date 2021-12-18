const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/authors");

// Describe Tests
describe("Nesting Records", function () {
    // Create tests
    it("Create Author with books", function (done) {
        var auth = new Author({
            name: "Joe Smith",
            books: [{ title: "Name of love", pages: 428 }],
        });

        auth.save().then(function () {
            Author.findOne({ name: "Joe Smith" }).then(function (result) {
                assert(result.books.length === 1);
                done();
            });
        });
    });

    it("Add books to an Author", function (done) {
        var auth = new Author({
            name: "Henry Smith",
            books: [{ title: "Name of love", pages: 428 }],
        });

        auth.save().then(function () {
            Author.findOne({ name: "Henry Smith" }).then(function (result) {
                result.books.push({ title: "Name of d7k", pages: 455 });
                result.save().then(function () {
                    Author.findOne({ name: "Henry Smith" }).then(function (
                        result
                    ) {
                        assert(result.books.length === 2);
                        done();
                    });
                });
            });
        });
    });
});
