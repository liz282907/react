import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';

import Category from "../components/category.js";

var ulElement = document.getElementById("category");


//下面是一些示例，具体的路由、组件、名称定义待定
ReactDom.render(
	<Router history={browserHistory}>
		<Route path = "/monitor/category/:categoryId" component = {Category}>
		</Route>
	</Router>
	,ulElement);