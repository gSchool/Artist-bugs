var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function artists() {
  return knex('artists');
};

// ROUTES
router.get('/', function(req,res,next){
  artists().select().then(function(results){
    res.render('artists/index', {artists: results});
  });
});

router.get('/new', function(req,res,next){
  res.render('artists/new');
});

router.post('/', function(req,res,next){
  artists().insert(req.body).then(function(result){
    res.redirect('/');
  });
});

router.get('/:id', function(req,res,next){
  var artist_id = parseInt(req.params.id);
  artists().where('id', artist_id).first().then(function(artist){
    res.render('artists/show', {artist: artist} );
  });
});


router.get('/:id/edit', function(req, res, next) {
  var artist_id = parseInt(req.params.id);
  artists().where('id', artist_id).first().then(function(artist) {
    res.render('artists/edit', {artist: artist});
  });
});

router.post('/:id', function (req, res, next) {
  var artist_id = parseInt(req.params.id);
  artists().where('id', artist_id).update(req.body).then(function(artist) {
    res.redirect('/');
  });
});

router.post('/:id/delete', function (req, res, next) {
  var artist_id = parseInt(req.params.id);
  artists().where('id', artist_id).del().then(function (artist) {
    res.redirect('/');
  });
});


module.exports = router;
