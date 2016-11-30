var Reflect = require('reflect-r');
var regeneratorRuntime = require('babel-regenerator-runtime');
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // module for server

// import { HttpError } from '../src/Http/Error';

// import validate from 'koa-validate';


var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaQs = require('koa-qs');

var _koaQs2 = _interopRequireDefault(_koaQs);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _kcors = require('kcors');

var _kcors2 = _interopRequireDefault(_kcors);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _builtinStatusCodes = require('builtin-status-codes');

var _builtinStatusCodes2 = _interopRequireDefault(_builtinStatusCodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App(routes) {
    _classCallCheck(this, App);

    var router = new _koaRouter2.default();
    this.app = new _koa2.default();

    this.app.use((0, _koaBodyparser2.default)({
      enableTypes: ['json']
    }));
    this.app.use(this.json);
    this.app.use((0, _kcors2.default)());

    // TODO: Add logger

    // TODO: validate(this.app);

    routes(router);
    this.app.use(router.routes());
  }

  _createClass(App, [{
    key: 'json',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ctx.json = function (payload) {
                  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
                  var message = arguments[2];

                  ctx.type = 'application/json';
                  ctx.status = status;
                  ctx.message = message;
                  ctx.body = payload;
                };
                _context.next = 3;
                return next();

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function json(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return json;
    }()
  }, {
    key: 'listen',
    value: function listen(port, fn) {
      this.app.listen(port, function (err) {
        if (fn) {
          return fn(err);
        }
        console.log(err || 'Server run on ' + port);
      });
    }
  }]);

  return App;
}();

exports.default = App;


var boot = function boot(routes, port, fn) {
  var api = new App(routes);

  api.listen(port, fn);
};

exports.boot = boot;
//# sourceMappingURL=app.js.map
