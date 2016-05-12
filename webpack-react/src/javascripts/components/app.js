import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,Link,IndexRoute} from 'react-router';
import '../../stylesheets/reset.css';
import '../../stylesheets/util.scss';
import Search from '../Commons/Search/Search.js';
import Grids from '../Commons/Grids/Grids.js';


// import Category from "../components/category.js";

//下面是一些示例，具体的路由、组件、名称定义待定

var App = React.createClass({
	getInitialState:function(){
		return {
			city: "全国",
			time: new Date().toJSON().slice(0,10), //2016-04-29
			interval:1000*60 //1 minite
		}
	},
	render:function(){
		/*
		//category:{id: "01",name:"快车"}
		var that = this; //attention for this!!
		var lis = this.props.data.map(function(category,index){
			//pathname+category.categoryId+
			//http://localhost/monitor/category/05?city=%E5%85%A8%E5%9B%BD&interval=60000&time=2016-04-29
			//<Link to={{pathname:url_path,query:url_query}}>{category.name}</Link>
			var url_path = "/monitor/category/"+category.id;
			var url_query = {city:that.state.city,time:that.state.time,interval:that.state.interval};

			var queryParams = [];
			for (var d in url_query)
			    queryParams.push(encodeURIComponent(d) + "=" + encodeURIComponent(url_query[d]));
			var queryStr = queryParams.join("&");


			return (
					<li key = {category.id}>
						<a href = {url_path+"?"+queryStr} >{category.name}</a>
					</li>);
		});
		*/
		return (
			<div>
				<Search />
				<Grids data={this.props.data}/>


				<ul className = "grids">
				</ul>
				{this.props.children}
			</div>)

		}

});

export default App;