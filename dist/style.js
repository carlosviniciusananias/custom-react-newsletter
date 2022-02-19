"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Sucess = exports.Label = exports.Input = exports.Form = exports.Error = exports.Container = exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  text-align: center;\n"])));

exports.Container = Container;

var Title = _styledComponents["default"].h3(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 30px;\n  line-height: 41px;\n  letter-spacing: 0.02em;\n  color: #300e09;\n"])));

exports.Title = Title;

var Form = _styledComponents["default"].form(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  gap: 10px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n"])));

exports.Form = Form;

var Label = _styledComponents["default"].label(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: left;\n  margin-bottom: 5px;\n  letter-spacing: 0.2em;\n"])));

exports.Label = Label;

var Input = _styledComponents["default"].input(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  height: 52px;\n  padding: 0 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  border: 1px solid #343434;\n"])));

exports.Input = Input;

var Button = _styledComponents["default"].button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 52px;\n  width: 155px;\n  border: 0;\n  color: #fff;\n  cursor: pointer;\n  font-weight: 600;\n  border-radius: 5px;\n  background-color: #343434;\n  text-transform: uppercase;\n\n  &:hover {\n    background-color: #2e2c2c;\n  }\n"])));

exports.Button = Button;

var Sucess = _styledComponents["default"].p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  color: green;\n"])));

exports.Sucess = Sucess;

var Error = _styledComponents["default"].p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  color: red;\n"])));

exports.Error = Error;