const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const groupSchema = new Schema ({
    name: {type: String, required: true},
    initialChapter: {type: ObjectId, required: true},
    users: {type: [ObjectId], required: true}
});

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;