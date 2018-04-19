var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;


var s =  new Schema({
	name : {type: String, required: true},
	type : {type : String, enum : ["FILE", "DIR"]},
	direct_url : {type: String},
	s3_bucket : {type: String},
	s3_directory : {type: String},
	s3_file_name : {type: String},
	tree : [{type: Schema.Types.Mixed}]

});
s.plugin(timestamps);
module.exports = mongoose.model('FAT', s);
