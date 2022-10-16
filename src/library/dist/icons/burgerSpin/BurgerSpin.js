"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerSpin = void 0;

require("../burger.css");

require("./styles.css");

var _jsxRuntime = require("react/jsx-runtime");

var BurgerSpin = function BurgerSpin(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "burger burger-spin ".concat(isClosed && "is-closed")
  });
};

exports.BurgerSpin = BurgerSpin;