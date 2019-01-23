var rp          = require('request-promise'),
    $           = require('cheerio'),
    mongoose    = require('mongoose'),
    Item        = require('./models/item');

const url = 'https://ozbargain.com.au';
// const $   = cheerio.load('<div[class="nodeozbdeal">...</div>');
var dataTitles = [];

function bargainScraper(){
    rp(url)
        .then(function(html){
        //process html
        //create array to hold titles
        //loop through all of the titles and push them to the array
        for(let i = 0; i < 20; i++) {
            var newTitle = {title: $('.node-ozbdeal h2', html)[i].attribs['data-title']};
            dataTitles.push(newTitle);
        }
        console.log('here')
        Item.remove({}, function(err){
            if(err){
                console.log(err);
            } else {
                console.log('here???')
                dataTitles.forEach(function(thisTitle){
                    Item.create(thisTitle, function(err, item){
                        if(err){
                            console.log(err);
                        }
                        item.save();
                    });
                });
            }
        });        
    })
    .catch(function(err){
        //crawling failed
        console.log(err);
    });
}

module.exports = bargainScraper;
