var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;


var s =  new Schema({
			school_class :{type: Schema.Types.ObjectId, ref: 'SchoolClass', required : true },
			name : {type: String, required : true },
			languages : [{
				language : {type: Schema.Types.ObjectId, ref: 'SchoolLanguage', required : true },
				percentage : {type: Number, required : true }
			}]

});
s.plugin(timestamps);

module.exports = mongoose.model('SchoolClassGroup', s);
