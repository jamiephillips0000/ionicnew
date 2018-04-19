module.exports.replaceAll = function(str, from, to){
  console.log("replaceAll");
  str = str.replace(from, to);
  console.log("replaceAll1");
  if(str.indexOf(from)!=-1){
    console.log("replaceAll2");
    return this.replaceAll(str, from, to);
  }else{
    console.log("replaceAll3");
    return str;
  }
};

module.exports.makeFileNameFromUrl = function(url){
  console.log("makeFileNameFromUrl");
  var ret = url.substring(url.lastIndexOf("/")+1,url.length);
  console.log("makeFileNameFromUrl1");
  if(ret.indexOf("?")!= -1){
    console.log("makeFileNameFromUrl2");
    ret = ret.substring(0,ret.indexOf("?"));
  }
  console.log("makeFileNameFromUrl3");
  ret = this.replaceAll(ret, "%20", "");
  console.log("makeFileNameFromUrl4");
  ret = ret.replace(/[^0-9a-z]/gi, '');
  console.log("makeFileNameFromUrl5");
  console.log("made file name " + ret);
  console.log("makeFileNameFromUrl6" + ret);
  return ret.toLowerCase();
};

module.exports.makeBucketName = function(school_name, school_id){
  return "edassist" + this.replaceAll(school_name.replace(/[^0-9a-z]/gi, ''), " ", "").toLowerCase()+ "" + school_id;

};
