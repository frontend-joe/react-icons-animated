"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerClose = void 0;

require("../burger.css");

require("./styles.css");

var _jsxRuntime = require("react/jsx-runtime");

var BurgerClose = function BurgerClose(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "burger burger-close ".concat(isClosed ? "is-closed" : "")
  });
};

exports.BurgerClose = BurgerClose;