const rp = require('request-promise');
const url = 'https://ozbargain.com.au';

rp(url)
  .then(function(html){
    //success
    console.log(html);
  })
  .catch(function(err){
    console.log(err);
  });
