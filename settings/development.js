var s = require('./base');

s.app.host = process.env.APP_HOST || "localhost";
s.app.port = process.env.APP_PORT || 3000;

s.mongo.uri = process.env.MONGO_URI || "localhost";
s.mongo.port = process.env.APP_PORT || 27017;
s.mongo.dbName = "node-settings";

s.redis.host = process.env.REDIS_HOST || "localhost";
s.redis.port = process.env.REDIS_PORT || 6379;

module.exports = s;
