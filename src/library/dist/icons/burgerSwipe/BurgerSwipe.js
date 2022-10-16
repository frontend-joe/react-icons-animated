"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerSwipe = void 0;

require("../burger.css");

require("./styles.css");

var _jsxRuntime = require("react/jsx-runtime");

var BurgerSwipe = function BurgerSwipe(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "burger burger-swipe ".concat(isClosed && "is-closed")
  });
};

exports.BurgerSwipe = BurgerSwipe;