"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var NativeSafeAreaSpacerView = react_native_1.requireNativeComponent('SafeAreaSpacerView');
var SafeAreaSpacerView = function (_a) {
    var style = _a.style;
    return (
    // @ts-ignore
    NativeSafeAreaSpacerView ? <NativeSafeAreaSpacerView style={style}/> : <react_native_1.View style={style}/>);
};
SafeAreaSpacerView.displayName = 'IGNORE';
exports.default = SafeAreaSpacerView;
