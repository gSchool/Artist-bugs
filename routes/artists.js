// BUGS
// 1. req,res,next -> res,req,next for one of the routes
// 2. change order of something in app.js
// 3. something with database or knex
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('artists/index');
});

// GET new form
router.get('/new', function(req,res,next){
  res.render('artists/new');
});

// POST new info
router.post('', function(req,res,next){
  res.redirect('');
});

//GET one listing
router.get('', function(req,res,next){
  res.render('');
});

//GET edit form
router.get('', function(req,res,next){
  res.render('');
});

//POST edits
router.post('', function(req,res, next){
  res.redirect('');
});

//POST delete listing
router.post('', function(req,res,next){

});

module.exports = router;
