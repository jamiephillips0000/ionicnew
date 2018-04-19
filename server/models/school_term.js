var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;


var s =  new Schema({
			school_year :{type: Schema.Types.ObjectId, ref: 'SchoolYear', required : true },
		  begin_date :{type: Date, required : true },
			end_date :{type: Date, required : true },
			term_name :{type: String, required : true },

});
s.plugin(timestamps);

module.exports = mongoose.model('SchoolTerm', s);
