var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var s =  new Schema({
			curriculum_section :{type: Schema.Types.ObjectId, ref: 'CurriculumSubject'},
			level :{type: String, required : true },
			week_of_year :{type: Number, required : true }
});
s.plugin(timestamps);

module.exports = mongoose.model('CurriculumSchedule', s);
