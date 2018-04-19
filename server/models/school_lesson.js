var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;


var s =  new Schema({
			school_day :{type: Schema.Types.ObjectId, ref: 'SchoolDay', required : true },
		  begin_time : {type: String, index:true},
			end_time :{type: Date, required : true },
			name :{type: String, required : true }

});
s.plugin(timestamps);

module.exports = mongoose.model('SchoolLesson', s);
