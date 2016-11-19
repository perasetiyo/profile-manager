var Reflect = require('reflect-r');
var regeneratorRuntime = require('babel-regenerator-runtime');
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpError = exports.AppError = exports.ERROR_CODES = exports.PeopleRepository = exports.PeopleModel = exports.ORMUtils = exports.Redis = exports.PG = exports.boot = undefined;

var _sourceMapSupport = require('source-map-support');

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _pg = require('./connections/pg');

var _pg2 = _interopRequireDefault(_pg);

var _redis = require('./connections/redis');

var _redis2 = _interopRequireDefault(_redis);

var _error = require('./error.js');

var _people = require('./repositories/people');

var _people2 = _interopRequireDefault(_people);

var _people3 = require('./models/people');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sourceMapSupport.install)(); /** @module Index */


// Exposes main entrypoint to the lib.
exports.default = _app2.default;

// Exposes modules

exports.boot = _app.boot;
exports.PG = _pg2.default;
exports.Redis = _redis2.default;
exports.ORMUtils = _utils.ORMUtils;

// Exposes Models

exports.PeopleModel = _people3.PeopleModel;

// Exposes Repositories

exports.PeopleRepository = _people2.default;

// Exposes the lib error.

exports.ERROR_CODES = _error.ERROR_CODES;
exports.AppError = _error.AppError;
exports.HttpError = _error.HttpError;
//# sourceMappingURL=index.js.map
