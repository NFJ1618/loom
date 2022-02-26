var express = require('express');
var router = express.Router();
const port = 5000
var cors = require('cors')

app.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var userRouter = require('./users');
var chapterRouter = require('./chapters');

app.use('/user', userRouter);
app.use('/chapter',chapterRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})



module.exports = router;
