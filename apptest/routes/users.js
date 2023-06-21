var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'SeniorCare' });
});

router.get('/home', function(req, res, next) {
  res.send('test');
});

module.exports = router;
