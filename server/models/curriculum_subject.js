var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var s =  new Schema({
			curriculum_year :{type: Schema.Types.ObjectId, ref: 'CurriculumYear'},
			name :{type: String, required : true },
			short_name :{type: String, required : true }
});
s.plugin(timestamps);

module.exports = mongoose.model('CurriculumSubject', s);
