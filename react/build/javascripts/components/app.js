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

	getInitialState: function getInitialState() {
		return {
			city: "全国",
			time: new Date().toJSON().slice(0, 10), //2016-04-29
			interval: 1000 * 60 //1 minite
		};
	},
	render: function render() {
		//category:{id: "01",name:"快车"}
		var that = this; //attention for this!!
		var lis = this.props.data.map(function (category, index) {
			//pathname+category.categoryId+
			//http://localhost/monitor/category/05?city=%E5%85%A8%E5%9B%BD&interval=60000&time=2016-04-29
			var url_path = "/monitor/category/" + category.id;
			var url_query = { city: that.state.city, time: that.state.time, interval: that.state.interval };

			return _react2.default.createElement(
				'li',
				{ key: category.id },
				_react2.default.createElement(
					_reactRouter.Link,
					{ to: { pathname: url_path, query: url_query } },
					category.name
				)
			);
		});

		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'ul',
				{ className: 'grids' },
				lis
			),
			this.props.children
		);
	}

});

exports.default = App;