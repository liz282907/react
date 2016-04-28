import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,Link,browserHistory} from 'react-router';

import App from "../components/app.js";
import Category from "../components/category.js";

var ulElement = document.getElementById("part1");


//下面是一些示例，具体的路由、组件、名称定义待定
var router = (
	<Router history={browserHistory}>
		<Route path = "/monitor/" component = {App}>
			<Route path = "category/:categoryId" component = {Category}>
			</Route>
		</Route>
	</Router>
	);
ReactDom.render(
	router,ulElement);