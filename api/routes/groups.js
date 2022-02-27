var express = require('express');
const Chapter = require('../models/chapter.model');
const User = require('../models/user.model');
const Group = require('../models/group.model');
const mongoose = require('mongoose');
var router = express.Router();

router.post('/addGroup', function(req, res) {
    const name = req.body.name;
    const initialChapter = req.body.initialChapter;
    const users = []
    
    const newGroup = new Group({
        name,
        initialChapter,
        users
    })
    newGroup.save()
        .then(() => res.json('Group added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/addUser', (req, res) => {
    const groupID = mongoose.Types.ObjectId(req.body.groupID);
    const userID = mongoose.Types.ObjectId(req.body.userID);
    User.findById(userID).then(user => {
        user.groups.push(groupID)
        user.save()
    })
    Group.findById(groupID).then(group => {
        group.users.push(groupID)
        group.save()
    })
    res.send('User Added')

})


  module.exports = router;