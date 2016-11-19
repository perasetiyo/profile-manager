var Reflect = require('reflect-r');
var regeneratorRuntime = require('babel-regenerator-runtime');
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ORMUtils = function () {
    function ORMUtils() {
        _classCallCheck(this, ORMUtils);
    }

    _createClass(ORMUtils, null, [{
        key: "getRange",
        value: function getRange() {
            var pagination = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var startRange = 1,
                endRange = 1;
            if (pagination.page > 1 && pagination.pageCount > 1) {
                startRange = pagination.page * pagination.pageSize - 1;
            }
            if (pagination.rowCount > 1) {
                if (pagination.pageCount > 1) {
                    var c = pagination.page * pagination.pageSize;
                    if (c < pagination.rowCount) {
                        endRange = c;
                    } else {
                        endRange = pagination.rowCount;
                    }
                } else {
                    endRange = pagination.rowCount;
                }
            }
            return { startRange: startRange, endRange: endRange };
        }
    }]);

    return ORMUtils;
}();

exports.ORMUtils = ORMUtils;
//# sourceMappingURL=utils.js.map
