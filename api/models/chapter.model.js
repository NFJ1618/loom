const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const chapterSchema = new Schema ({
    blurb: {type: String, required: true, maxLength: 50},
    summary: {type: String},
    text: {type: String, required: true},
    title: String,
    subtitle: String,
    likes: {type: [ObjectId], required: true},

    group: {type: ObjectId, required: true},
    contributor: {type: ObjectId, required: true, immutable: true},
    children: {type: [ObjectId], required: true},
    parent: ObjectId
});

const Chapter = mongoose.model('Chapter', chapterSchema);
module.exports = Chapter;