const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

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
    contributions: [ObjectId],
    likedPosts: [ObjectId],
});

const User = mongoose.model('User', userSchema);
module.exports = User;