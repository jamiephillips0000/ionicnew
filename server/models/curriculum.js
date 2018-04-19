var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var s =  new Schema({
			school_year :{type: Schema.Types.ObjectId, ref: 'SchoolYear', required : true },
			country :{type: Schema.Types.ObjectId, ref: 'Country', required : false },
			name :{type: String, required : true },
			short_name :{type: String, required : true }
});
s.plugin(timestamps);

module.exports = mongoose.model('Curriculum', s);
