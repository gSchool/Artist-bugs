var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('artists/index');
});

// GET new form 
// POST new info

//GET one listing
//GET edit form
//POST edits
//POST delete listing

module.exports = router;
