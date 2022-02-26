const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        immutable: true,
        minLength: 5
    },
    password: {
        type: String,
        required: true,
        immutable: true,
        minLength: 5
    },
    groups: {type: [ObjectId], required: true},
    savedStories: [[ObjectId]],
    contributions: [ObjectId]
});

const User = mongoose.model('User', userSchema);
module.exports = User;