import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,Link,browserHistory} from 'react-router';

import App from "../components/app.js";
import Category from "../components/category.js";

var ulElement = document.getElementById("part1");



//下面是一些示例，具体的路由、组件、名称定义待定

var linksData = [{id:"01",name:"出租车监控"},{id:"02",name:"快车监控"},{id:"03",name:"顺风车监控"},
	{id:"04",name:"代驾监控"},{id:"05",name:"客服监控"}];

// var wrapperApp = React.createElement(App,{data:linksData});

var AppWrapper = React.createClass({
	render:function(){
		return(
			<div>
				<App data = {linksData}/>
				{this.props.children}
			</div>
			 )
	}
});
var router = (
	<Router history={browserHistory}>
		<Route  path = "/monitor/index" component = {AppWrapper}>
		</Route>
	</Router>
	);
ReactDom.render(
	router,ulElement);