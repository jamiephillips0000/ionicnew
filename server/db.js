var mongoose = require('mongoose');
var options = {
    mongos: {
        ssl: true,
        sslValidate: false,
        reconnectTries: 1
    }
};

// mongoose.connect('mongodb://EdAssistAdmin:DK904xrjpF0iOLOEVHyv@cluster0-shard-00-00-lxkbh.mongodb.net:27017,cluster0-shard-00-01-lxkbh.mongodb.net:27017,cluster0-shard-00-02-lxkbh.mongodb.net:27017/EdAssist?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', function(err) {
mongoose.connect('mongodb://localhost/ed-assist1', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});
mongoose.set('debug', true);
