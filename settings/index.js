var env = process.env.NODE_ENV || 'development';
var settings = require('./' + env);

console.log("App running as:", env);

module.exports = settings;
