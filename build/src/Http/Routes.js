var Reflect = require('reflect-r');
var regeneratorRuntime = require('babel-regenerator-runtime');
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Validate = require('./Middlewares/Validate');

var _Validate2 = _interopRequireDefault(_Validate);

var _Authenticated = require('./Middlewares/Authenticated');

var _Authenticated2 = _interopRequireDefault(_Authenticated);

var _PeopleController = require('./Controllers/PeopleController');

var _PeopleController2 = _interopRequireDefault(_PeopleController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_VERSION = process.env.API_VERSION || 'v1';

exports.default = function (router) {
    // set prefix
    router.prefix('/' + API_VERSION);

    // people
    router.get('/people', (0, _Validate2.default)('People', 'list'), _PeopleController2.default.list);
    router.post('/people', (0, _Validate2.default)('People', 'create'), _PeopleController2.default.create);
    router.get('/people/:id', (0, _Validate2.default)('People', 'get'), _PeopleController2.default.get);
    router.put('/people/:id', (0, _Validate2.default)('People', 'update'), _PeopleController2.default.update);
    router.delete('/people/:id', (0, _Validate2.default)('People', 'delete'), _PeopleController2.default.delete);
};
//# sourceMappingURL=Routes.js.map
