var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;


var s =  new Schema({
		  address :{type: Schema.Types.ObjectId, ref: 'Address', required : true },
			name : {type: String, index:true},
});
s.plugin(timestamps);

module.exports = mongoose.model('Building', s);
