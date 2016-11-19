var Reflect = require('reflect-r');
var regeneratorRuntime = require('babel-regenerator-runtime');
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = (0, _knex2.default)({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_DB
    }
});

client.on('query', function (data) {
    if (process.env.NODE_DEBUG && process.env.DATABASE_DEBUG) {
        console.log('Query', JSON.stringify(data));
    }
});

exports.default = client;
//# sourceMappingURL=pg.js.map
