var mongoose = require('mongoose');
//var passportLocalMongoose = require('passport-local-mongoose');
var crypto = require('crypto');
var timestamps = require('mongoose-timestamp');

var _ = require('underscore');

var listOfRoles = require("../utils/config.js").listOfRoles;
var Schema = mongoose.Schema;


var schema =  new Schema({
	email: {type: String, required : true},
	password : {type:String, required : true},
	firstname: {type: String, index: true},
	surname : {type: String, index: true},
	phone: {type: String, index: true},
	phone_valiated_on : {type :Date},
  activation_code : {type :String, index: true},
  verification_pin_number : {type :String},
  family_name : {type :String},
  email_activation_status : {type :Boolean},
  user_status : {type :String},
  avatar: String,
  accessToken: { type: String }
});
schema.plugin(timestamps);
module.exports = mongoose.model('User', schema);
