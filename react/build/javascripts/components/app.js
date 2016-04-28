'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Category from "../components/category.js";

//下面是一些示例，具体的路由、组件、名称定义待定

var App = _react2.default.createClass({
	displayName: 'App',

	render: function render() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/monitor/category/01' },
						'快车'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/monitor/category/02' },
						'出租车'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/monitor/category/03' },
						'专车'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/monitor/category/04' },
						'其他检测项'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'a',
						{ href: '/monitor/category/01' },
						'快车'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/monitor/category/02' },
						'出租车'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/monitor/category/03' },
						'专车'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/monitor/category/04' },
						'其他检测项'
					)
				)
			)
		);
	}

});

exports.default = App;