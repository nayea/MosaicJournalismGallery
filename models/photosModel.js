var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var PhotoSchema = new Schema({
  photoImage : {
      type : String, 
  }
});

PhotoSchema.plugin( autoIncrement.plugin, 
  {model : "products", field : "id", startAt : 1});
module.exports = mongoose.model('products', PhotoSchema);