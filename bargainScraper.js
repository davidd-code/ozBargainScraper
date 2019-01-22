var rp          = require('request-promise'),
    cheerio     = require('cheerio'),
    mongoose    = require('mongoose'),
    Item        = require('./models/item');

const url = 'https://ozbargain.com.au';
var dataTitles = [];



function bargainScraper(){
    rp(url)
    .then(function(html){
    //process html
    //create array to hold titles
    
    //loop through all of the titles and push them to the array
    for(let i = 0; i < 30; i++) {
        var newTitle = {title: cheerio('h2[class="title"]', html)[i].attribs['data-title']};
        dataTitles.push(newTitle);
    }
    // console.log(dataTitles);
    })
    .catch(function(err){
    //crawling failed
    console.log(err);
    });
    Item.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("got here");
            dataTitles.forEach(function(title){
                Item.create(title, function(err, item){
                    if(err){
                        console.log(err);
                    } else {
                        item.save();
                        console.log("Created new item");
                    }
                });
            });
        }
    });
}

module.exports = bargainScraper;
