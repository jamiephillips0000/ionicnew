var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;
var s =  new Schema({
			curriculum :{type: Schema.Types.ObjectId, ref: 'Curriculum'},
			name :{type: String, required : true },
			short_name :{type: String, required : true }
});
s.plugin(timestamps);

module.exports = mongoose.model('Lesson', s);
