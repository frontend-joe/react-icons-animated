"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerFade = void 0;

require("../burger.css");

require("./styles.css");

var _jsxRuntime = require("react/jsx-runtime");

var BurgerFade = function BurgerFade(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "burger-fade-wrap",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "burger burger-fade-top ".concat(isClosed && "is-closed")
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "burger burger-fade ".concat(isClosed && "is-closed")
    })]
  });
};

exports.BurgerFade = BurgerFade;