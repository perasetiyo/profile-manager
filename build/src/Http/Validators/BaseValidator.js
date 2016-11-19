var Reflect = require('reflect-r');
var regeneratorRuntime = require('babel-regenerator-runtime');
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lib = require('../../../lib');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseValidator = function () {
    function BaseValidator(type, action, ctx) {
        _classCallCheck(this, BaseValidator);

        this.type = type;
        this.action = action;
        this.ctx = ctx;
    }

    _createClass(BaseValidator, [{
        key: 'validate',
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var errors;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                if (!(typeof this[this.action] === 'function')) {
                                    _context.next = 4;
                                    break;
                                }

                                _context.next = 4;
                                return this[this.action]();

                            case 4:
                                _context.next = 10;
                                break;

                            case 6:
                                _context.prev = 6;
                                _context.t0 = _context['catch'](0);

                                console.log(_context.t0.stack);
                                throw new _lib.HttpError('Validation Failed', _lib.ERROR_CODES.VALIDATOR.Common);

                            case 10:
                                errors = this.ctx.errors;

                                if (!errors) {
                                    _context.next = 16;
                                    break;
                                }

                                console.log(errors);
                                throw new _lib.HttpError('Invalid Parameters', _lib.ERROR_CODES.VALIDATOR.Invalid.code, _lib.ERROR_CODES.VALIDATOR.Invalid.internal, { errors: errors });

                            case 16:
                                console.log('validation ' + this.action + ' passed');

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 6]]);
            }));

            function validate() {
                return _ref.apply(this, arguments);
            }

            return validate;
        }()
    }]);

    return BaseValidator;
}();

exports.default = BaseValidator;
//# sourceMappingURL=BaseValidator.js.map
