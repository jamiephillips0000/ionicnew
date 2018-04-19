var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var validate = require('mongoose-validator');
var listOfApplicationRoles = require("../utils/config.js").listOfApplicationRoles;
var Schema = mongoose.Schema;


var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var emailValidator = [
  validate({
		validator: 'matches',
	  arguments: emailRegex,
    message: 'Name should be email format'
  })
];


var s =  new Schema({
		family_name : {type: String, required: true},
		applicants : [{
				registration_type : {type: String, enum : listOfApplicationRoles},
				first_name : {type: String},
				last_name : {type: String},
				email : {type : String, required: true, validate: emailValidator},
				email_verified : {type : Boolean, default: false},
				phone : {type : String},
				phone_verified : {type : Boolean, default: false},
				terms : {
						is_accepted : {type : Boolean, required: true, default: false},
						date_accepted : {type : Date}
				},
				privacy : {
						is_accepted : {type : Boolean, required: true, default: false},
						date_accepted : {type : Date}
				},
				subjects : [{
						name : {type : String}
				}],
				qualifications : [{
						name : {type : String},
						level : {type : String},
						institution : {type : String}
				}],
		}],
		addresses : [{
					  isPrimary : {type: Boolean, required:true, index:true, enum:["HOME","BUSINESS"]},
						line1 : {type: String, required:true, index:true},
						line2 : {type: String, index:true},
						line3 : {type: String, index:true},
						line4 : {type: String, index:true},
						city : {type: String, index:true},
						region : {type: String, index:true},
						postcode : {type: String, index:true},
						country :{type: Schema.Types.ObjectId, ref: 'Country', required : true }
					}]
});
s.plugin(timestamps);


// s.path('parents.email').validate(function (email) {
//
//    return emailRegex.test(email.text); // Assuming email has a text attribute
// }, 'Mal-formed or empty e-mail.')

module.exports = mongoose.model('Registration', s);
