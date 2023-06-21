var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userProfile', function(req, res, next) {
  let data = req.body;
  res.send('Data Received: ' + JSON.stringify(data));
  //res.render('userProfile');
});

router.get('/residentsList', function(req, res, next) {
  res.render('residentList');
});




module.exports = router;
