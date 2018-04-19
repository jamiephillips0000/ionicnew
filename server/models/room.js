var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;


var s =  new Schema({
		  room :{type: Schema.Types.ObjectId, ref: 'Floor', required : true },
			name : {type: String, index:true},
});
s.plugin(timestamps);

module.exports = mongoose.model('Room', s);
