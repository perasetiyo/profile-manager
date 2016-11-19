var Reflect = require('reflect-r');
var regeneratorRuntime = require('babel-regenerator-runtime');
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lib = require('../../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

/**
 * Validate based on request type
 * validation configuration is located at src/Http/Validators
 * @param type - request type
 */
exports.default = function (type, action) {
    return function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
            var filepath, truthy, Validator, validator;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            filepath = _path2.default.resolve('../src/Http/Validators/' + type + 'Validator.js');
                            truthy = false;
                            _context.prev = 2;
                            _context.next = 5;
                            return _fsPromise2.default.access(filepath);

                        case 5:
                            truthy = true;
                            _context.next = 10;
                            break;

                        case 8:
                            _context.prev = 8;
                            _context.t0 = _context['catch'](2);

                        case 10:
                            if (!truthy) {
                                _context.next = 16;
                                break;
                            }

                            console.log('validate ' + type + ':' + action);
                            Validator = require(filepath).default;
                            validator = new Validator(type, action, ctx);
                            _context.next = 16;
                            return validator.validate();

                        case 16:
                            _context.next = 18;
                            return next();

                        case 18:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[2, 8]]);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();
};
//# sourceMappingURL=Validate.js.map
