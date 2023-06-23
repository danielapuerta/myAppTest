var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SeniorCare' });
});

router.get('/test', function(req, res, next) {
  //res.render('index', { title: 'SeniorCare' });
  res.send("Hello World")
});

router.post('/test', function(req, res, next) {
  console.log(req.body.username)
  res.send("200")
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'SeniorCare' });
});


module.exports = router;
