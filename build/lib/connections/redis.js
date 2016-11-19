var Reflect = require('reflect-r');
var regeneratorRuntime = require('babel-regenerator-runtime');
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _thenRedis = require('then-redis');

var client = (0, _thenRedis.createClient)({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
});

exports.default = client;
//# sourceMappingURL=redis.js.map
