var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    bargainScraper    = require('./bargainScraper');



//routes
var indexRoutes = require('./routes/index.js');

var url = process.env.DATABASEURL || "mongodb://localhost:27017/ozbargain_scraper"
mongoose.connect(url, {useNewUrlParser: true});

app.set("view engine", "ejs");

app.use("/", indexRoutes);

bargainScraper();

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started");
});
