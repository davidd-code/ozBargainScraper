var express = require('express'),
    router  = express.Router(),
    Item    = require("../models/item"),
    bargainScraper = require('../bargainScraper');

router.get("/", function(req, res){
    bargainSCraper();
    //get all titles from ozBargain
    Item.find({}, function(err, allItems){
        if(err){
            console.log(err);
        } else {
            res.render("index", {items: allItems});
        }
    })
});

module.exports = router;
