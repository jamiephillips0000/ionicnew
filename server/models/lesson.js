var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var s =  new Schema({
			school_year :{type: Schema.Types.ObjectId, ref: 'SchoolYear'},
			title :{type: String, required : true },
			description :{type: String, required : true }
});
s.plugin(timestamps);

module.exports = mongoose.model('Lesson', s);
