import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,Link,IndexRoute} from 'react-router';

import Search from '../Commons/search/Search.js';
import Grids from '../Commons/Grids/Grids.js';
import PopupPage from "./PopupPage.js";

import '../../stylesheets/reset.css';
import '../../stylesheets/util.scss';


import {categoryList} from "../../../config/serverConfig.js";

// var serverConfig = require("../../../config/serverConfig.js");

// import Category from "../components/category.js";

//下面是一些示例，具体的路由、组件、名称定义待定

var App = React.createClass({
	fetchCategoriesFromServer:function(){
		$.ajax({
			url:categoryList,
			type:"GET",
			dataType:"json",
			success:function(data){
				this.setState({
					//[] array
					categories:data.categories
				});
			}.bind(this),
			error:function(xhr,errorType,error){
				console.log(err);

			}.bind(this)
		});
	},
	showPopupPage:function(){
		console.log("----------show-----------");
		this.setState({showPopupPage:true});
		// React.findDomNode(this.refs.popupPage).setAttribute("display","block");
		// console.log("-------popupPage-------",this.refs.popupPage.getDomNode().);
	},
	hidePopupPage:function(){
		console.log("----------hide-----------");
		this.setState({showPopupPage:false});
		// React.findDomNode(this.refs.popupPage).setAttribute("display","none");
		// console.log("-------popupPage-------",this.refs.popupPage.getDomNode().);
	},
	componentDidMount:function(){
		this.fetchCategoriesFromServer();
	},
	getInitialState:function(){
		return {
			showPopupPage:false,
			categories:[]
			// city: "全国",
			// time: new Date().toJSON().slice(0,10), //2016-04-29
			// interval:1000*60 //1 minite
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
		var style = {
			position:"relative"
		};
		return (
			<div style={style}>
				<Search data="搜索" onInputFocus={this.showPopupPage.bind(this)} onInputBlur={this.hidePopupPage.bind(this)}/>
				<Grids data={this.state.categories}/>
				{this.state.showPopupPage ? <PopupPage ref="popupPage"/> : null}

				{this.props.children}
			</div>)

		}

});

export default App;