var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;


var s =  new Schema({
			school :{type: Schema.Types.ObjectId, ref: 'School', required : true },
		  start_year :{type: Number, required : true },
			end_year :{type: Number, required : true },
			name : {type: String, required : true },

});
s.plugin(timestamps);

module.exports = mongoose.model('SchoolYear', s);
