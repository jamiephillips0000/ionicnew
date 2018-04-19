var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;


var s =  new Schema({
		  floor :{type: Schema.Types.ObjectId, ref: 'Building', required : true },
			name : {type: String, index:true},
});
s.plugin(timestamps);

module.exports = mongoose.model('Floor', s);
