'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _app = require('../components/app.js');

var _app2 = _interopRequireDefault(_app);

var _category = require('../components/category.js');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ulElement = document.getElementById("part1");

//下面是一些示例，具体的路由、组件、名称定义待定
var router = _react2.default.createElement(
	_reactRouter.Router,
	{ history: _reactRouter.browserHistory },
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: '/monitor/', component: _app2.default },
		_react2.default.createElement(_reactRouter.Route, { path: 'category/:categoryId', component: _category2.default })
	)
);
_reactDom2.default.render(router, ulElement);