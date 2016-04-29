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

var linksData = [{ id: "01", name: "出租车监控" }, { id: "02", name: "快车监控" }, { id: "03", name: "顺风车监控" }, { id: "04", name: "代驾监控" }, { id: "05", name: "客服监控" }];

// var wrapperApp = React.createElement(App,{data:linksData});

var AppWrapper = _react2.default.createClass({
	displayName: 'AppWrapper',

	render: function render() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_app2.default, { data: linksData }),
			this.props.children
		);
	}
});
var router = _react2.default.createElement(
	_reactRouter.Router,
	{ history: _reactRouter.browserHistory },
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: '/monitor/', component: AppWrapper },
		_react2.default.createElement(_reactRouter.Route, { path: 'category/:categoryId', component: _category2.default })
	)
);
_reactDom2.default.render(router, ulElement);