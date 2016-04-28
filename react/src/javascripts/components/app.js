import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,Link,IndexRoute} from 'react-router';

// import Category from "../components/category.js";

//下面是一些示例，具体的路由、组件、名称定义待定

var App = React.createClass({
	render:function(){
		return(
			<div>
				<ul>
					<li><Link to="/monitor/category/01">快车</Link></li>
					<li><Link to="/monitor/category/02">出租车</Link></li>
					<li><Link to="/monitor/category/03">专车</Link></li>
					<li><Link to="/monitor/category/04">其他检测项</Link></li>

					<li><a href="/monitor/category/01">快车</a></li>
					<li><Link to="/monitor/category/02">出租车</Link></li>
					<li><Link to="/monitor/category/03">专车</Link></li>
					<li><Link to="/monitor/category/04">其他检测项</Link></li>
				</ul>
				{ /* this.props.children */}
			</div>

		)}

});

export default App;