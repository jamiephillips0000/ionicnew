var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var s =  new Schema({
			lesson :{type: Schema.Types.ObjectId, ref: 'Lesson'},
			description :{type: String, required : true }
});
s.plugin(timestamps);

module.exports = mongoose.model('LessonSection', s);
