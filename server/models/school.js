var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;


var s =  new Schema({
			board :{type: Schema.Types.ObjectId, ref: 'Board', required : true },
		  addresses :[{type: Schema.Types.ObjectId, ref: 'Address', required : true }],
			name : {type: String, index:true},
			short_name : {type: String, index:true}

});
s.plugin(timestamps);

module.exports = mongoose.model('School', s);
