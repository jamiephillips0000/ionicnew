var express = require('express');
var router = express.Router();
var format_result = require('../utils/format_result');
var Application = require('../models/application');
var Address = require('../models/address');
/* GET users listing. */

var additionalRoute = function(model) {


    router.get('/', function(req, res, next) {
        model.find(function(err, d) {
            if (err) {
                console.log(err);
                return next(err);
            } else {
//                var u = format_result.user_list(d);
//                res.json(u);
              res.json(d);
            }
        });
    });
///////////////////////////////////////////
// convert application to user
///////////////////////////////////////////
    router.post('/', function(req, res, next) {
      var body = req.body;
      Application.findById(body._id, function(err, data){
        if (err) {
            console.log(err);
            next(err);
        } else {
          async.waterfall([
          function(callback) {
              var users = body.applicants;
              model.create(users, function(err, addresses_result) {
                  //model.create({"name": "lok"}, function (err, data) {
                  if (err) {
                      console.log(err);
                      next(err);
                  } else {
                      callback(null, 'one', 'two');

                  }
              });
          },
          function(arg1, arg2, callback) {
              // arg1 now equals 'one' and arg2 now equals 'two'
              callback(null, 'three');
          },
          function(arg1, callback) {
              // arg1 now equals 'three'
              callback(null, 'done');
          }
        ], function (err, user) {
          var u = format_result.user(user);
          res.json(u);
        });

            // address

        }

      });
        model.create(req.body, function(err, data) {
            //model.create({"name": "lok"}, function (err, data) {
            if (err) {
                console.log(err);
                next(err);
            } else {
                var u = format_result.user(data);
                res.json(u);
            }
        });
    });

    router.post('/', function(req, res, next) {
        model.create(req.body, function(err, data) {
            //model.create({"name": "lok"}, function (err, data) {
            if (err) {
                console.log(err);
                next(err);
            } else {
                var u = format_result.user(data);
                res.json(u);
            }
        });
    });


    router.post('/get_user', function(req, res, next) {
        model.findOne({_id: req.params.id})
                .populate("file_dir_root")
                .populate("schools")
                .populate("selected_school")
                .exec(function(err, data) {
            if (err) {
                console.log(err);
                return next(err);
            } else {
                console.log("data from user...");
                console.log(data);
                res.json(data);
            }
        });
    });


    router.get('/:id', function(req, res, next) {
        model.findOne({_id: req.params.id})
                .populate("file_dir_root")
                .populate("schools")
                .populate("selected_school")
                .exec(function(err, data) {
            if (err) {
                console.log(err);
                return next(err);
            } else {
                console.log("data from user...");
                console.log(data);
                //var u = format_result.user(data);
                console.log("data format user...");
                //console.log(u);
                res.json(data);
            }
        });
    });

    router.put('/:id', function(req, res, next) {
        console.log("IN PUT" + req.body.selected_role);
        var tmp = req.body;
        delete tmp._id;
        delete tmp.version;
        delete tmp.updated;
        model.findByIdAndUpdate(req.params.id, req.body, function(err, data) {
            if (err) {
                console.log(err);
                return next(err);
            } else {
                model.findById(req.params.id, function(err, data) {
                    if (err) {
                        console.log(err);
                        return next(err);
                    } else {
                        var u = format_result.user(data);
                        res.json(u);
                    }
                });
            }
        });
    });

    router.delete('/:id', function(req, res, next) {
        model.findByIdAndRemove(req.params.id, req.body, function(err, data) {
            if (err) {
                console.log(err);
                return next(err);
            } else {
                var u = format_result.user(data);
                res.json(u);
            }

        });
    });

    router.post('/add_dropbox_token', function(req, res, next) {
        console.log(JSON.stringify(req.body));
        model.findById(req.body._id, function(err, data) {
            if (err) {
                console.log(err);
                return next(err);
            } else {
                data.dropbox = {access_token: req.body.access_token};
                model.update({_id: req.body._id}, data, function(e, d) {
                    if (e) {
                        console.log(e);
                        return next(e);
                    } else {
                        var u = format_result.user(d);
                        res.json(u);
                    }
                });
            }
        });
    });

    router.get('/list_roles', function(req, res, next) {
        console.log("jamie");
        var listOfRoles = require("../utils/config.js").listOfRoles;
        res.json(listOfRoles);
    });

    router.post('/check_activation', function(req, res, next) {
        console.log(JSON.stringify(req.body));
        model.find({email: req.body.email, activation_code: req.body.activation_code}, function(err, data) {
            if (err) {
                console.log(err);
                return next(err);
            } else {
                if (data.length > 0) {
                    var random = Math.floor(100000 + Math.random() * 900000);
                    var str = "<p>Hi,</p>";
                    str += "<p>Please find the code as requested</p>";
                    str += "<p>" + random + "</p>";
                    str += "<p>Regards,</p>";
                    str += "<p> EdAssist </p>";
                    var mailOptions = {to: data[0]["email"], subject: "EdAssist- School Activation Code", html: str};
                    transporter.sendMail(mailOptions, function(error, info) {
                        if (error) {
                            var msg = "some error occurred";
                            sendResponse.sendErrorMessage(msg, res);
                        } else {
                            console.log('Message sent: ');
                        }
                    });
                    model.update({_id: data[0]["_id"]}, {verification_pin_number: random,firstname: req.body.firstname,surname: req.body.surname,password: req.body.password}, function(e, d) {
                        if (e) {
                            console.log(e);
                            return next(e);
                        } else {
                            data[0]["verification_pin_number"] = random;
                            res.json(data);
                        }
                    });
                }
                else {
                    data = []
                    res.json(data);
                }
            }
        });
    });

    router.post('/invite_user', function(req, res, next) {
        console.log(JSON.stringify(req.body));
        var all_email = req.body.email;
        var all_email_array = all_email.split(",");
        var randonArray = [];
        var count1 = 0;
        for (var j = 0; j < all_email_array.length; j++) {
            var random = Math.floor(100000 + Math.random() * 900000);
            randonArray.push(random);
            if (count1 == parseInt(all_email_array.length) - 1) {
                var count = 0;
                for (var i = 0; i < all_email_array.length; i++) {
                    model.create({username: "lokesh", firstname: "lokesh", surname: "Bansal", email: all_email_array[i], activation_code: "123", password: "123",roles: req.body.list_roles,user_status: "invited"}, function(err, data) {
                        if (err) {
                            console.log(err);
                            next(err);
                        } else {
                            if (count == parseInt(all_email_array.length) - 1) {
                                send_email(all_email_array, randonArray)
                                var da = [{status: 105}]
                                res.json(da);
                            }
                            else {
                                count = parseInt(count) + 1;
                            }

//                    var str = "<p>Hi,</p>";
//                    str += "<p>You are invited to download edassist</p>";
//                    str += "<p>Please download and register in the app with activation code</p>";
//                    str += "<p>Regards,</p>";
//                    str += "<p> EdAssist </p>";
//                    var mailOptions = {to: all_email_array[i], subject: "Register", html: str};
//                    transporter.sendMail(mailOptions, function(error, info) {
//                        if (error) {
//                            var msg = "some error occurred";
//                            //sendResponse.sendErrorMessage(msg, res);
//                        } else {
//                            console.log('Message sent: ');
//                            count = parseInt(count) + 1;
//                            if (count == parseInt(all_email_array.length) -1 ){
//                                var da =[]
//                                 res.json(da);
//                            }
//                        }
//                    });


                            //res.json(data);
                        }
                    });
                }
            }
            else {
                count1 = parseInt(count1) + 1;
            }
        }
    });


    function send_email(email_array, random_array, callback) {
        console.log("in sent email funnnn");
        console.log(email_array);
        console.log(random_array)
        var email_array_len = email_array.length;
        var count = 0
        for (var p = 0; p < email_array_len; p++) {
            console.log("in for loop ofsend_email ")
            var str = "<p>Hi,</p>";
            str += "<p>You are invited to download edassist</p>";
            str += "<p>Please find activation code " + random_array[p] + "</p>";
            str += "<p>Please download and register in the app with activation code</p>";
            str += "<p>Regards,</p>";
            str += "<p> EdAssist </p>";
            var mailOptions = {to: email_array[p], subject: "Register", html: str};
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('in send_email function message sent');
                    if (count == parseInt(email_array_len) - 1) {
                        return true;
                    }
                    else {
                        count = parseInt(count) + 1;
                    }

                }
            })

        }


    }
    return router;
};

module.exports = additionalRoute;
