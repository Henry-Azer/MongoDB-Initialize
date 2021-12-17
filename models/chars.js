const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model
const CharsSchema = new Schema({
    name: String,
    weight: Number,
});

const Chars = mongoose.model('chars', CharsSchema);

module.exports = Chars;
