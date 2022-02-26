var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const passport = require('passport')
let User = require('../models/user.model')
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
