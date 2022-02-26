var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
let User = require('../models/user.model')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/addUser').post(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const groupId = req.body.groupid;
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({username: username, password: hashedPassword, groups: [groupId]});
    
    User.exists({username: username}).then(exists => {
      if (exists) {
        res.json(false)
      } else {
        newUser.save()
        .then(() => res.json(username))
        .catch(err => res.status(400).json('Error: ' + err));
      }});
  } catch {
    res.status(400).json('Error' + err);
  }
});





module.exports = router;
