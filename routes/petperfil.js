var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var PetPerfil = require('../models/petperfil.js');

/* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
    PetPerfil.find(function (err, perfis) {
    if (err) return next(err);
    res.json(perfis);
  });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
    PetPerfil.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
    PetPerfil.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
    PetPerfil.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
    PetPerfil.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;