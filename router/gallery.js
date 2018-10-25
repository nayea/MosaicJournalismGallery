var express = require('express');
var router = express.Router();
var request = require('request');
var photosModel = require('../models/photosModel');


router.get('/', function(req,res){
  photosModel.find(function(err,products){
      res.render( 'gallery' , 
          { products : products } 
      );
  });
});


router.post('/', function(req,res){
    var product = new photosModel({
      photoImage : req.body.imageName,

  });
  product.save(function(err){
      res.redirect('/gallery');
  });
 
   });

module.exports = router;