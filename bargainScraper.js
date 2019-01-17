var rp      = require('request-promise'),
    cheerio = require('cheerio');

const url = 'https://ozbargain.com.au';

rp(url)
  .then(function(html){
    //process html
    //create array to hold titles
    var dataTitles = [];
    //loop through all of the titles and push them to the array
    for(let i = 0; i < 30; i++) {
      dataTitles.push(cheerio('h2[class="title"]', html)[i].attribs['data-title']);
    }
    console.log(dataTitles);
  })
  .catch(function(err){
    //crawling failed
    console.log(err);
  });
