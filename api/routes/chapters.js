var express = require('express');
const Chapter = require('../models/chapter.model');
const User = require('../models/user.model');
const Group = require('../models/group.model');
const mongoose = require('mongoose');
var router = express.Router();

async function getPreviews (childrenIDs) {
  var previewArr = []
  await Promise.all(childrenIDs.map(async childID => {
    await Chapter.findById(childID).then(async child => {
      contributor = await User.findById(mongoose.Types.ObjectId(child.contributor)).then(user => {return user});
      previewArr.push({
        id: child._id,
        blurb: child.blurb,
        summary: child.summary,
        likes: child.likes,
        contributor: contributor,
      })
    })
  }))
  return previewArr;
}

/* GET chapters listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getChapter/:chapterId', (req, res) => {
  const chapterId = mongoose.Types.ObjectId(req.params.chapterId);
  Chapter.findById(chapterId).then(async chapter => {
    if (chapter == null) {
      res.json("ID Error")
    }
    else {
      childrenIDs = chapter.children;
      previews = await getPreviews(childrenIDs);
      contributor = await User.findById(mongoose.Types.ObjectId(chapter.contributor)).then(user => {return user});
      res.json({
          blurb: chapter.blurb, 
          summary: chapter.summary, 
          id: chapter._id.toString(), 
          title: chapter.title, 
          subtitle: chapter.subtitle,
          text: chapter.text,
          contributor: contributor,
          likes: chapter.likes,
          children: previews,
      })
      console.log(previews)
    }
  })
  .catch(err => res.status(400).json(err))
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

router.post('/addLike', (req, res) => {
    const chapterId = mongoose.Types.ObjectId(req.body.chapterId);
    const userID = mongoose.Types.ObjectId(req.body.userID);
    Chapter.findById(chapterId).then(chapter => {
        chapter.likes.push(userID)
        chapter.save()
        })
    User.findById(userID).then(user => {
        user.likedPosts.push(userID)
        user.save()
        })
    res.send("added like")
  })



module.exports = router;