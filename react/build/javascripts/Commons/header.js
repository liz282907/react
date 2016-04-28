"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _react2.default.createClass({
	displayName: "Header",

	render: function render() {
		return _react2.default.createElement(
			"header",
			null,
			_react2.default.createElement(
				"span",
				null,
				this.props.title
			),
			_react2.default.createElement(
				"button",
				null,
				"分享"
			)
		);
	}

});

exports.default = Header;