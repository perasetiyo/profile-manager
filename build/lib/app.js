var Reflect = require('reflect-r');
var regeneratorRuntime = require('babel-regenerator-runtime');
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.boot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-console */
/** @module KirimoApi*/


var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaQs = require('koa-qs');

var _koaQs2 = _interopRequireDefault(_koaQs);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _error = require('./error');

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaValidate = require('koa-validate');

var _koaValidate2 = _interopRequireDefault(_koaValidate);

var _builtinStatusCodes = require('builtin-status-codes');

var _builtinStatusCodes2 = _interopRequireDefault(_builtinStatusCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Class representing KirimoApi */
var App = function () {
    function App(routes) {
        _classCallCheck(this, App);

        var router = new _koaRouter2.default();
        this.app = new _koa2.default();
        (0, _koaQs2.default)(this.app, 'first');
        this.app.use((0, _koaBodyparser2.default)({
            enableTypes: ['json', 'form'],
            formLimit: '1mb',
            jsonLimit: '1mb'
        }));
        this.app.use(this.json);
        this.app.use(this.plain);
        this.app.use(this.error);

        (0, _koaConvert2.default)(_koaValidate2.default);
        (0, _koaValidate2.default)(this.app);

        this.app.use(this.state);

        // TODO: Add logger

        routes(router);
        this.app.use(router.routes()).use(router.allowedMethods({ throw: true }));
    }

    _createClass(App, [{
        key: 'state',
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
                var _ctx$req, _ctx$req$method, method, _ctx$req$url, url, _ctx$req$headers, headers, _ctx$query, query, _ctx$params, params, _ctx$request$body, body;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _ctx$req = ctx.req;
                                _ctx$req$method = _ctx$req.method;
                                method = _ctx$req$method === undefined ? 'GET' : _ctx$req$method;
                                _ctx$req$url = _ctx$req.url;
                                url = _ctx$req$url === undefined ? '/' : _ctx$req$url;
                                _ctx$req$headers = _ctx$req.headers;
                                headers = _ctx$req$headers === undefined ? {} : _ctx$req$headers;
                                _ctx$query = ctx.query;
                                query = _ctx$query === undefined ? {} : _ctx$query;
                                _ctx$params = ctx.params;
                                params = _ctx$params === undefined ? {} : _ctx$params;
                                _ctx$request$body = ctx.request.body;
                                body = _ctx$request$body === undefined ? {} : _ctx$request$body;

                                ctx.state = {
                                    method: method,
                                    url: url,
                                    headers: headers,
                                    query: query,
                                    params: params,
                                    body: body
                                };
                                if (process.env.NODE_DEBUG) {
                                    console.log(JSON.stringify(ctx.state));
                                }
                                _context.next = 17;
                                return next();

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function state(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return state;
        }()
    }, {
        key: 'plain',
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                ctx.plain = function (payload) {
                                    var status = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];

                                    ctx.type = 'text/plain';
                                    ctx.status = status;
                                    ctx.body = typeof payload === 'string' ? payload : JSON.stringify(payload);
                                };

                                _context2.next = 3;
                                return next();

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function plain(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return plain;
        }()
    }, {
        key: 'json',
        value: function () {
            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, next) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                ctx.json = function (payload) {
                                    var status = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];

                                    ctx.type = 'application/json';
                                    ctx.status = status;
                                    ctx.body = payload;
                                };
                                _context3.next = 3;
                                return next();

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function json(_x6, _x7) {
                return _ref3.apply(this, arguments);
            }

            return json;
        }()
    }, {
        key: 'error',
        value: function () {
            var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx, next) {
                var code, message, internal, errors;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                _context4.next = 3;
                                return next();

                            case 3:
                                _context4.next = 14;
                                break;

                            case 5:
                                _context4.prev = 5;
                                _context4.t0 = _context4['catch'](0);

                                if (!(_context4.t0 instanceof _error.HttpError)) {
                                    code = '' + _context4.t0.code;

                                    code = parseInt(code.substr(0, 3)) || 500;
                                    code = _builtinStatusCodes2.default[_context4.t0.code] ? _context4.t0.code : 500;
                                    _context4.t0.code = code;
                                }

                                message = _context4.t0.message;
                                internal = _context4.t0.internal;
                                errors = _context4.t0.errors;

                                message = message || _builtinStatusCodes2.default[_context4.t0.code];
                                ctx.json({ message: message, code: internal || '500001', errors: errors }, _context4.t0.code);

                                if (process.env.NODE_DEBUG && process.env.NODE_ENV !== 'test') {
                                    console.log(_context4.t0.stack);
                                } else if (process.env.NODE_ENV === 'test') {
                                    console.log(_context4.t0.message);
                                }

                            case 14:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 5]]);
            }));

            function error(_x9, _x10) {
                return _ref4.apply(this, arguments);
            }

            return error;
        }()
    }, {
        key: 'listen',
        value: function listen(port, fn) {
            this.app.listen(port, function (err) {
                if (fn) {
                    return fn(err);
                }
                console.log(err || '~> up! ' + port);
            });
        }
    }]);

    return App;
}();

exports.default = App;


var boot = function boot(routes, port, fn) {
    var server = new App(routes);
    server.listen(port, fn);
};

exports.boot = boot;
//# sourceMappingURL=app.js.map
