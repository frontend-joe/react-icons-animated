"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerDank = void 0;

require("../burger.css");

require("./styles.css");

var _jsxRuntime = require("react/jsx-runtime");

var BurgerDank = function BurgerDank(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "burger burger-dank ".concat(isClosed && "is-closed")
  });
};

exports.BurgerDank = BurgerDank;