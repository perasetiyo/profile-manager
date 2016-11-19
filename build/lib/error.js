var Reflect = require('reflect-r');
var regeneratorRuntime = require('babel-regenerator-runtime');
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
    function ExtendableBuiltin() {
        var instance = Reflect.construct(cls, Array.from(arguments));
        Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
        return instance;
    }

    ExtendableBuiltin.prototype = Object.create(cls.prototype, {
        constructor: {
            value: cls,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(ExtendableBuiltin, cls);
    } else {
        ExtendableBuiltin.__proto__ = cls;
    }

    return ExtendableBuiltin;
}

/** The base extensible error class */
var BaseError = function (_extendableBuiltin2) {
    _inherits(BaseError, _extendableBuiltin2);

    function BaseError(message) {
        _classCallCheck(this, BaseError);

        var _this = _possibleConstructorReturn(this, (BaseError.__proto__ || Object.getPrototypeOf(BaseError)).call(this, message));

        _this.name = _this.constructor.name;
        return _this;
    }

    return BaseError;
}(_extendableBuiltin(Error));

/** Wraps KirimoApi errors */


var AppError = function (_BaseError) {
    _inherits(AppError, _BaseError);

    function AppError(message, statusCode, internal) {
        var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

        var _ref$code = _ref.code;
        var code = _ref$code === undefined ? '500000' : _ref$code;
        var errors = _ref.errors;

        _classCallCheck(this, AppError);

        var _this2 = _possibleConstructorReturn(this, (AppError.__proto__ || Object.getPrototypeOf(AppError)).call(this, '' + message));

        if (statusCode instanceof Object) {
            _this2.code = statusCode.code;
            _this2.internal = statusCode.internal;
        } else {
            _this2.code = statusCode;
            _this2.internal = internal || code;
        }
        _this2.errors = errors;
        _this2.name = _this2.constructor.name;
        return _this2;
    }

    return AppError;
}(BaseError);

var HttpError = function (_AppError) {
    _inherits(HttpError, _AppError);

    function HttpError(message, statusCode, internal) {
        var _ref2 = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

        var _ref2$code = _ref2.code;
        var code = _ref2$code === undefined ? '500001' : _ref2$code;
        var errors = _ref2.errors;

        _classCallCheck(this, HttpError);

        var _this3 = _possibleConstructorReturn(this, (HttpError.__proto__ || Object.getPrototypeOf(HttpError)).call(this, message, statusCode, internal, { code: code, errors: errors }));

        _this3.name = _this3.constructor.name;
        return _this3;
    }

    return HttpError;
}(AppError);

var ERROR_CODES = {
    VALIDATOR: {
        Common: { code: 400, internal: 400001 },
        Invalid: { code: 422, internal: 422001 }
    },
    COMMON: {
        Unauthorized: { code: 401, internal: 401000 },
        NotFound: { code: 404, internal: 404100 },
        Create: { code: 422, internal: 422100 },
        Update: { code: 422, internal: 422101 },
        Delete: { code: 422, internal: 422102 },
        Duplicate: { code: 422, internal: 422103 }
    },
    USER: {
        CreatePassword: { code: 422, internal: 422200 }
    },
    ADDRESS: {}
};

exports.AppError = AppError;
exports.HttpError = HttpError;
exports.ERROR_CODES = ERROR_CODES;
//# sourceMappingURL=error.js.map
