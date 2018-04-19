var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;


var s =  new Schema({
			school_year :{type: Schema.Types.ObjectId, ref: 'SchoolYear', required : true },
			day_name :{type: String, enum : ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"], required : true }

});
s.plugin(timestamps);

module.exports = mongoose.model('SchoolDay', s);
