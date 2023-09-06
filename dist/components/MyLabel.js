"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unused-vars */
require("./mylabel.css");
var MyLabel = function (_a) {
    var label = _a.label, _b = _a.size, size = _b === void 0 ? 'normal' : _b, color = _a.color, _c = _a.allCaps, allCaps = _c === void 0 ? false : _c, fontColor = _a.fontColor, _d = _a.backgroundColor, backgroundColor = _d === void 0 ? 'transparent' : _d;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "".concat(size, " ").concat(color, " label"), style: { color: fontColor, backgroundColor: backgroundColor } }, { children: allCaps ? label.toUpperCase() : label })));
};
exports.MyLabel = MyLabel;
