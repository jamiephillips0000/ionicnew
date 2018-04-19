var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;



var s =  new Schema({
	name : {type: String, index: true},
	alpha2Code : {type: String, index: true},
	alpha3Code : {type: String, index: true},
	numericCode : {type: String}
});
s.plugin(timestamps);
module.exports = mongoose.model('Country', s);
