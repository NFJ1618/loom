var express = require('express');
const Chapter = require('../models/chapter.model');
const User = require('../models/user.model');
const Group = require('../models/group.model');
const mongoose = require('mongoose');
var router = express.Router();

/*
function getPreviews (childrenIDs) {

  children = childrenIDs.map(childID => {
    Chapter.findById(childID).then(child => {

    })
  })
}
*/

/* GET chapters listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getChapter', (req, res) => {
  const chapterId = req.body.chapterId;
  Chapter.findById(chapterId).then(chapter => {
    if (chapter == null) {
      res.json("ID Error")
    }
    else {
      childrenIDs = chapter.children;
    }
  }).catch(err => res.status(400).json(err))
})

router.post('/addChapter', (req, res) => {
  var newChapter = new Chapter({
    blurb: req.body.blurb,
    summary: req.body.summary,
    text: req.body.summary,
    likes: [],
    title: req.body.title,
    subtitle: req.body.subtitle,
    group: groupId,
    contributor: mongoose.Types.ObjectId(req.body.contributor),
    children: [],
    parent: null,
  })

  var groupId, parentId;
  if (req.body.parentId == null) {
    newChapter.group = mongoose.Types.ObjectId(req.body.groupId);
    parentId = null;
    newChapter.save().then((savedChapter, err) => {
      newID = savedChapter._id;
      res.json({chapterID: newID});
    })
    return;
  }
  else {
    parentId = mongoose.Types.ObjectId(req.body.parentID);
    newChapter.parent = parentId;
    Chapter.findById(parent).then(parent => {
      newChapter.group = parent.group;
      newChapter.save.then((err, savedChapter) => {
        newID = savedChapter._id
        parent.children.push(newID);
        res.json({chapterID: newID});
      })
    })
  }
})



module.exports = router;