var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const passport = require('passport')
let User = require('../models/user.model')
let Group = require('../models/group.model')
const mongoose = require('mongoose');
const initializePassport = require('../passport-config')
 initializePassport(
  passport,
  name => User.findOne({username: name}),
  id =>  User.findOne({_id: id})
)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/addUser').post(async (req, res) => {
  console.log("Request Received!");
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

router.route('/login').post(function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.send(401,{ success : false, message : 'authentication failed' });
    }
    req.login(user, function(err){
      if(err){
        return next(err);
      }
      return res.send({ success : true, message : 'authentication succeeded' });        
    });
  })(req, res, next);
});

router.get('/loggedin', (req, res) => {
    if (req.user) {
        res.send(true)
    } else {
        res.send(false);
    }
})

router.get('/groups', async (req, res) => {
  const username = req.body.username;
    console.log(username)
    let user = await User.findOne({username: req.body.username})
    if (user == null){
        return res.status(400).json('User not found')
    } else{
      groupnames = []
      for (let i = 0; i < user.groups.length; i++){
        console.log(user.groups)
        let group = await Group.findById(mongoose.Types.ObjectId(user.groups[i]))
        groupnames.push(group.name)
      }
      res.send(groupnames)
    }
})


router.post('/logout', (req, res) => {
  req.logOut()
  res.send("logged out")
})

// function checkAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next()
//   }

//   res.redirect('/login')
// }

// function checkNotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return res.redirect('/')
//   }
//   next()
// }





module.exports = router;
