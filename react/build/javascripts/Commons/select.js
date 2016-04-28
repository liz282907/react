"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = _react2.default.createClass({
	displayName: "Select",

	render: function render() {
		return _react2.default.createElement(
			"p",
			null,
			"这是测试select"
		);
	}

});

exports.default = Select;