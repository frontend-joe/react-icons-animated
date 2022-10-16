"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerArrow = void 0;

require("../burger.css");

require("./styles.css");

var _jsxRuntime = require("react/jsx-runtime");

var BurgerArrow = function BurgerArrow(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "burger burger-arrow ".concat(isClosed && "is-closed")
  });
};

exports.BurgerArrow = BurgerArrow;