var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var itemSchema = new Schema(
  {
    name : String,
    category: String,
    // any other key value pairs
  }
);


var Item = mongoose.model('Item', itemSchema);

module.exports = Item;

mongoose.connect('mongodb://localhost/boiler-database');