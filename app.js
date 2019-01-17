var express = require('express'),
    app     = express();

//routes
var indexRoutes = require('./routes/index.js');

app.set("view engine", "ejs");

app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started");
});
