var Reflect = require('reflect-r');
var regeneratorRuntime = require('babel-regenerator-runtime');
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boot = exports.PeopleModel = exports.PeopleRepository = exports.ORMUtils = exports.PG = undefined;

var _sourceMapSupport = require('source-map-support');

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _people = require('../api/repositories/people');

var _people2 = _interopRequireDefault(_people);

var _pg = require('./connections/pg');

var _pg2 = _interopRequireDefault(_pg);

var _people3 = require('./models/people');

var _utils = require('./connections/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sourceMapSupport.install)(); // module for main index
exports.default = _app2.default;
exports.PG = _pg2.default;
exports.ORMUtils = _utils.ORMUtils;
exports.PeopleRepository = _people2.default;
exports.PeopleModel = _people3.PeopleModel;
exports.boot = _app.boot;
//# sourceMappingURL=index.js.map
