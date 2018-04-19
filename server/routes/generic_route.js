var express = require('express');
var mongoose = require('mongoose');



var genericRouter = function(collectionName, additionalRoutes){
  var model = require('../models/'+collectionName+'.js');
  var router = {};
  if(additionalRoutes){
    router = additionalRoutes(model);
  }else {
    router = express.Router();
  }

  router.get('/', function(req, res, next) {
    model.find(function (err, data) {
      if (err) {
        console.log(err);
        return next(err);
      }else{
        res.json(data);
      }
    });
  });


  router.post('/', function(req, res, next) {
    model.create(req.body, function (err, data) {
    //model.create({"name": "lok"}, function (err, data) {
      if (err){
          console.log(err);
	        next(err);
      } else{
          res.json(data);
      }
    });
  });

  router.get('/:id', function(req, res, next) {
    model.findById(req.params.id, function (err, data) {
      if (err) {
        console.log(err);
        return next(err);
      }else{
        res.json(data);
      }
    });
  });

  router.put('/:id', function(req, res, next) {
    var tmp  = req.body;
    delete tmp._id;
    delete tmp.version;
    delete tmp.updated;
    model.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
      if (err) {
        console.log(err);
        return next(err);
      }else{
        model.findById(req.params.id, function (err, data) {
          if (err) {
            console.log(err);
            return next(err);
          }else{
            res.json(data);
          }
        });
      }
    });
  });

  router.delete('/:id', function(req, res, next) {
    model.findByIdAndRemove(req.params.id, req.body, function (err, data) {
      if (err) {
        console.log(err);
        return next(err);
      }else{
        res.json(data);
      }

    });
  });


  return router;
};

module.exports = genericRouter;
