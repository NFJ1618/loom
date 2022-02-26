var express = require('express');
const Chapter = require('../models/chapter.model');
const User = require('../models/user.model');
const Group = require('../models/group.model');
const mongoose = require('mongoose');
var router = express.Router();

async function getPreviews (childrenIDs) {
  var previewArr = []
  await Promise.all(childrenIDs.map(async childID => {
    await Chapter.findById(childID).then(child => {
      previewArr.push({
        id: child._id,
        blurb: child.blurb,
        summary: child.summary,
        likes: child.likes,
        contributor: child.contributor,
      })
    })
  }))
  return previewArr;
}

/* GET chapters listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getChapter', (req, res) => {
  const chapterId = req.body.chapterId;
  Chapter.findById(chapterId).then(async chapter => {
    if (chapter == null) {
      res.json("ID Error")
    }
    else {
      childrenIDs = chapter.children;
      previews = await getPreviews(childrenIDs);
      res.json({chapter: chapter, childPreviews: previews});
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
    group: mongoose.Types.ObjectId(req.body.group),
    contributor: mongoose.Types.ObjectId(req.body.contributor),
    children: [],
    parent: null,
  })
  if (req.body.parent == null) {
    newChapter.save().then((savedChapter, err) => {
      newID = savedChapter._id;
      res.json({chapterID: newID});
    })
    return;
  }
  else {
    var parentID = mongoose.Types.ObjectId(req.body.parent);
    newChapter.parent = parentID;
    Chapter.findById(parentID).then(parent => {
      newChapter.group = parent.group;
      newChapter.save().then((savedChapter, err) => {
        newID = savedChapter._id;
        console.log(newID)
        parent.children.push(newID);
        parent.save();
        res.json({chapterID: newID});
      })
    })
  }
})



module.exports = router;