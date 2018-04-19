
var user = function(user){
  var u = {
    _id : user._id,
    token : user.accessToken,
    dropbox : user.dropbox,
    file_dir_root : user.file_dir_root,
    schools :user.schools,
    selected_school : user.selected_school,
    roles :user.roles,
    selected_role : user.selected_role
  }
  return u;

}

var user_list = function(users){
  var newList = [];
  for (var i=0;i<users.length;i++){
    newList.push(user(users[i]))
  }
  return newList;
}

module.exports.user = user;
module.exports.user_list = user_list;
