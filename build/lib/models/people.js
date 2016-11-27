var Reflect = require('reflect-r');
var regeneratorRuntime = require('babel-regenerator-runtime');
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeopleModel = undefined;

var _orm = require('./orm');

var _orm2 = _interopRequireDefault(_orm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PeopleModel = _orm2.default.Model.extend({
  tableName: 'people'
});

exports.default = PeopleModel;
exports.PeopleModel = PeopleModel;
//# sourceMappingURL=people.js.map
