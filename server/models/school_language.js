var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;


var s =  new Schema({
			school_year :{type: Schema.Types.ObjectId, ref: 'SchoolYear', required : true },
			language :{type: String, required : true }
});
s.plugin(timestamps);

module.exports = mongoose.model('SchoolLanguage', s);
