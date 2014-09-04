var s = require('./base');

s.app.host = "localhost";
s.app.port = 2222;

s.mongo.uri = "localhost";
s.mongo.port = 27017;
s.mongo.dbName = "node-settings-production"

s.redis.host = "localhost";
s.redis.port = 8888;

s.twitter.consumer_key = "kdsjhflksdjhgksdhfklsdh";
s.twitter.consumer_secret = "fdskhafgd7ft36273ashjf27";

s.author.name = "Mateusz";
s.author.username = "username";

module.exports = s;
