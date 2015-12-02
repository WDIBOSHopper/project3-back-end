'use strict';

var mongoose = require("../models/index");
var passport = require('passport');

var Page = mongoose.model("Page");

var pageController = {


  showAllPages : function(req, res) {
    Page.find(function(error, Pages){
      if (error) {
        console.error(error);
      };
      res.json(Pages);
    });
  },

  showOnePage : function(req, res) {
    Page.findById(req.params.id, function(error, Page){
      if (error) {
        console.error(error);
      }
      res.json(Page);
    });
  },

   createPage : function(req, res, next) {
    var pageCreatePromise = new Promise(function(res, rej) {
      Page.create({
        title: req.body.title,
        content: req.body.content,
        url: req.body.url,
        owner: req.body.owner
      }, function(error, Page){
        if(error) {
          rej(error);
          return;
      }
      res(Page);

      });
    });
    pageCreatePromise.then(function(page) {
      res.setStatus(201);
      res.send(page);

    }).catch(function(error) {
      res.status(500);
      res.send('Invalid Entry. Please Try Creating a Page Again.');
    });
  },

  updatePage : function(req, res, next) {
      var title = req.body.title;
      var content = req.body.content;

      var pageFindPromise = new Promise(
        function(resolve, reject) {
        var selectedPage =  Page.findById(req.params.id, function(error, Page){
        if (error) {
          reject(error);
        }
        resolve(selectedPage);
        });
      });

    var pageUpdatePromise = function(selectedPage) {
      selectedPage.update({
        title: title,
        content: content
      }, function(error, Page){
        if(error) {
          return;
      }
      res.json(Page);
      });
    };

    pageFindPromise.then(
    pageUpdatePromise).catch(function(error) {
      res.send('Invalid Entry. Please Try Updating Your Page Again.');
    });
  },

  deletePage : function(req, res, error) {
    Page.findByIdAndRemove({_id : req.params.id})
    .exec().then(function(){
      res.json({message: "DELTETED"});
    })
    .catch(function(err){
      res.json({error: error});
    });

  }
};

module.exports = pageController;
