const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const groupSchema = new Schema ({
    name: {type: String, required: True},
    initialChapter: {type: ObjectId, required: True},
    users: {type: [ObjectId], required: true}
});

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;