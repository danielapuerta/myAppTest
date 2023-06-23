var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userProfile', function(req, res, next) {
  let data = req.body;
  res.send('Data Received: ' + JSON.stringify(data));
  //res.render('userProfile');
  console.log(data)
});



module.exports = router;
