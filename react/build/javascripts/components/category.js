"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = require("../Commons/header.js");

var _header2 = _interopRequireDefault(_header);

var _select = require("../Commons/select.js");

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
var SelectLists = React.createClass({
	render:function(){
		return React.Children.map(this.props.children,function(ele){
				return <li>{ele}</li>;
			})
	}
});
*/

var Category = _react2.default.createClass({
	displayName: "Category",

	render: function render() {
		return _react2.default.createElement(
			"div",
			null,
			_react2.default.createElement("hr", null),
			_react2.default.createElement(_header2.default, { title: "Header:props of title" }),
			_react2.default.createElement(_select2.default, null),
			_react2.default.createElement(
				"div",
				null,
				this.props.params.categoryId
			)
		);
	}

});

exports.default = Category;