
// model/listModel.js
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListSchema = new Schema({
  title: String,
  description: String,
  cplt: Boolean
})

var listData = mongoose.model('list', ListSchema);
module.exports = listData;
