//var express = require('express');
//var router = express.Router();
//var passport = require('passport');
/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
//module.exports = router;

var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var format_result = require('../utils/format_result');
var router = express.Router();
var FAT = require('../models/FAT');

router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.get('/login', function(req, res) {
    res.render('login', { });
});

router.post('/register', function(req, res) {

  var newUser = new User(req.body);
  newUser.provider = 'local';
  console.log("req.username"+req.username);
  User
    .findOne({ username: newUser.username })
    .exec(function(err, user){
      if(err) return next(err)
      if(!user){
        FAT.create(  {
            name : "/",
            type : "DIR",
            tree : []
          }, function (err, fat) {
            console.log("empty root created");
            if (err) {
              console.log(err);
              return res.json(err);
            }
            newUser.file_dir_root = fat._id;
            newUser.save(function(err){
              if (err) {
                console.log(err);
                return res.json(err);
              }
              req.logIn(newUser, function(err) {
                if (err){
                  console.log("err >> " + err)
                  return next(err)
                }
                res.json({msg:"success"})
              })
            });




        });

      } else {

         res.status(400).send({msg:"username already registered"});
      }
    });
});

router.post('/updateUser', function(req, res) {

  var newUser = new User(req.body);
  newUser.provider = 'local';
  console.log("req.username"+req.username);
  User
    .findOne({ username: newUser.username })
    .exec(function(err, user){
      if(err) return next(err)
      if(user){
        newUser.save(function(err){
          if (err) {
            console.log(err);
            return res.json(err);
          }
          req.logIn(newUser, function(err) {
            if (err) return next(err)
            res.json(user)
          })
        });
      } else {

         res.status(400).send({msg:"Cant update user that does not exist"});
      }
    });
});




    // User.register(new User({ username : req.body.username }), req.body.password, function(err, account) {
    //     if (err) {
    //         return res.render('register', { account : account });
    //     }
    //
    //     passport.authenticate('json')(req, res, function () {
    //         res.redirect('/');
    //     });
    // });
//});

// router.get('/login', function(req, res) {
//     res.render('login', { user : req.user });
// });

router.get('/test', function(req, res) {
    res.render('test', { user : req.user });
});

router.post('/checkUserNameAvailable', function(req, res) {
  User
  .findOne({ username: req.body.username })
  .exec(function(err, user){
    if(err){
      return next(err);
    }
    if(!user){
      res.status(200).send({msg:"username available"});
    } else {
      res.status(400).send({msg:"username not available"});
    }
  });
});



router.post(
  '/login',
  passport.authenticate('json-custom', { failWithError: true }),
  function(req, res) {
    console.log(JSON.stringify(res.headers));
    console.log("/login - success");
    uname = req.body.username
    if(!uname){
      uname = req.query.username
    }
    User.findOne({ username: req.body.username })
    .populate("file_dir_root")
    .populate("schools")
    .populate("selected_school")
    .exec(function(err, user){
      if(err){ return next(err);}
      if(!user){
        res.status(400).send({msg:"Cant find user"});
      } else {
        user.authenticated= req.isAuthenticated();
        // console.log(user);
        if(!user.file_dir_root){

        }
        //var u = format_result.user(user);
//        console.log(">>>>>> selected role " + u.selected_role);
        res.status(200).json(user);
      }
    });
  },
  function(err, req, res, next) {
    console.log(err);
    console.log("/login - failure");
    res.status(400).json({
      authenticated: req.isAuthenticated(),
      err: err.message,
      msg:"Bad username and/or password"
    });
  }
);
// router.post('/login', passport.authenticate('json-custom'), function(req, res) {
//     User.findOne({username:req.body.username}, function(err, user){
//       if(err){
//         console.log(err);
//         res.status(401).send("User/Password does not exist" + new Date());
//       }else{
//         console.log("############################################# /login");
//   //       req.login(user, function(err) {
//   //             if (err) {
//   //               next(err);
//   //             }
//   //             var createAccessToken = function () {
//   //               var token = user.generateRandomToken();
//   //               User.findOne( { accessToken: token }, function (err, existingUser) {
//   //                 if (err) { return
//   //                   console.log( err );
//   //                 }
//   //                 if (existingUser) {
//   //                   return createAccessToken(); // Run the function again - the token has to be unique!
//   //                 } else {
//   //                   user.set('accessToken', token);
//   //                   user.save( function (err) {
//   //                     if (err) {
//   //                       console.log(err);
//   //                     }else{
//   //                       return user.get('accessToken');
//   //                     }
//   //                   })
//   //                 }
//   //               });
//   //             };
//   //             var token = createAccessToken();
//   //            res.cookie('remember_me', token, { path: '/', httpOnly: true, maxAge: 1*1000*60*60*24*365 }); // 365 days
//   //
//   // //            user.provider = "";
//   // //            user.hashed_password = "";
//   // //            user.salt ="";
//   //
//   //             res.json(user);
//   //           });
//           res.json({done:true});
//       }
//     });
//
// });

router.get('/logout', function(req, res) {
    req.logout();
    res.json({msg: "logged out"});
    //res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!" + new Date());
});

module.exports = router;
