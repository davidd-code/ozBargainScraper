var express = require('express'),
    router  = express.Router(),
    Item    = require("../models/item");

router.get("/", function(req, res){
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
