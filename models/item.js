var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    title: String
});

module.exports = mongoose.model('Item', itemSchema);
