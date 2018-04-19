var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;


var s =  new Schema({
  type : {type : String, required: true, enum : ["TERMS", "PRIVACY"]},
  scope : {type : String, required: true, enum : ["REGISTRATION", "SCHOOL"]},
  title : {type: String, required: true},
	body : {type: String, required: true}
});
s.plugin(timestamps);
module.exports = mongoose.model('LegalDocs', s);
