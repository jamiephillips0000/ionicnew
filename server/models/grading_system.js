var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;

var s =  new Schema({
		  type : {type: String, required:true, index:true, required : true,  enum:["EEE","PERCENTAGE", "GPA"]},
			line1 : {type: String, required:true, index:true},
			line2 : {type: String, index:true},
			line3 : {type: String, index:true},
			line4 : {type: String, index:true},
			city : {type: String, index:true, required : true},
			region : {type: String, index:true},
			postcode : {type: String, index:true},
			country :{type: Schema.Types.ObjectId, ref: 'Country', required : true }
});
s.plugin(timestamps);

module.exports = mongoose.model('GradingSystem', s);
