"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handleSubmitNewsletter = function handleSubmitNewsletter(_ref) {
  var entity = _ref.entity;

  _axios["default"].post("/api/dataentities/".concat(entity, "/documents"), {// name: data.name,
    // email: data.email,
    // telephone: data.telephone,
    // subject: data.subject,
    // message: data.message
  }).then(function () {// setSucess(true)
  })["catch"](function (error) {
    console.log(error);
  });
};

var Newsletter = function Newsletter(_ref2) {
  var title = _ref2.title,
      error = _ref2.error,
      sucess = _ref2.sucess;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, title), /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "name"
  }, "name"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "insert your name"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "email"
  }, "email"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    placeholder: "insert your e-mail"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSubmitNewsletter
  }, "send")), /*#__PURE__*/_react["default"].createElement("div", null, error, sucess));
};

Newsletter.propTypes = {
  entity: _propTypes["default"].string,
  title: _propTypes["default"].string,
  error: _propTypes["default"].string,
  sucess: _propTypes["default"].string
};
var _default = Newsletter;
exports["default"] = _default;