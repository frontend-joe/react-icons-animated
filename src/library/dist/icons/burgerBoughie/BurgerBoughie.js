"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerBoughie = void 0;

require("../burger.css");

require("./styles.css");

var _jsxRuntime = require("react/jsx-runtime");

var BurgerBoughie = function BurgerBoughie(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "burger burger-boughie ".concat(isClosed && "is-closed")
  });
};

exports.BurgerBoughie = BurgerBoughie;