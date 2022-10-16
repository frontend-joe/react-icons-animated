"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerVeggie = void 0;

require("../burger.css");

require("./styles.css");

var _jsxRuntime = require("react/jsx-runtime");

var BurgerVeggie = function BurgerVeggie(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "burger burger-veggie ".concat(isClosed && "is-closed")
  });
};

exports.BurgerVeggie = BurgerVeggie;