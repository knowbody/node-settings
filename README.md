Simple way of storing your app's settings
===================================


## Intro

**node-settings** helps you to store the app's settings.

It allows you to define a base parameters and extend them for different environments.
For example: for development, production, test, etc.


## Getting started


### `./settings/base.js` sets the base skeleton of the settings file:
    
    var s = module.exports = {};
    
    s.app = {}
    s.mongo = {};
    s.redis = {};
    s.twitter = {};

    s.author = {};
    s.author.username = "knowbody";
---


### This is the example of development settings:

    var s = require('./base');
    
    s.app.host = process.env.APP_HOST || "localhost";
    s.app.port = process.env.APP_PORT || 3000;

    s.mongo.uri = process.env.MONGO_URI || "localhost";
    s.mongo.port = process.env.APP_PORT || 27017;
    s.mongo.dbName = "node-settings";

    s.redis.host = process.env.REDIS_HOST || "localhost";
    s.redis.port = process.env.REDIS_PORT || 6379;

    module.exports = s;
---


### Overriding settings in production:

    ...
    s.author.name = "Mateusz";
    s.author.username = "username";
    ...
---


### Use of settings in the app:

    ...
    var settings = require('./settings');
    var port = settings.app.port;
    ...
    app.listen(port);
    console.log("Listening on port:", port);
---


### Running your app server:

    $ NODE_ENV=production node app.js

Running the app in this settings:
The skeleton of settings will be taken from `base.js`, `username` will be taken from the `base.js`,
but it will be overridden by the one stored in `production.js` and `production.js` adds new `name` element to `author`.


## License

May be freely distributed under the MIT License  
Copyright (c) 2014 [knowbody](https://github.com/knowbody)
