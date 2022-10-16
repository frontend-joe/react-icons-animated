"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerRotate = void 0;

require("../burger.css");

require("./styles.css");

var _jsxRuntime = require("react/jsx-runtime");

var BurgerRotate = function BurgerRotate(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "burger burger-rotate ".concat(isClosed && "is-closed")
  });
};

exports.BurgerRotate = BurgerRotate;