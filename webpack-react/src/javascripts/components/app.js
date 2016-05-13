import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,Link,IndexRoute} from 'react-router';

import Search from '../Commons/search/Search.js';
import Grids from '../Commons/Grids/Grids.js';
import PopupPage from "./PopupPage.js";


// import '../../stylesheets/sass/page1.scss';
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
		console.log("home focus");
		this.setState({showPopupPage:true});
		// this.refs.home.style.pointerEvents = "none";
		console.log("-------dom node",this.refs.home.style);
		// this.refs.homeSearch.getDomNode().style.pointerEvents="none";
		// React.findDomNode(this.refs.homeSearch).style.pointerEvents = "none";
		// React.findDomNode(this.refs.popupPage).setAttribute("display","block");
		// console.log("-------popupPage-------",this.refs.popupPage.getDomNode().);
	},
	hidePopupPage:function(){
		this.setState({showPopupPage:false});
		// React.findDomNode(this.refs.popupPage).setAttribute("display","none");
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
		var searchWrapper={
			padding: "14px 20px"
		};
		// var overlayStyle = {
		// 	position: "fixed",
		// 	left:0,
		// 	top:0,
		// 	zIndex: 5,
		// 	width: "100%",
		// 	height: "100%",
		// 	border:"1px solid red",
		// 	backgroundColor:"#fff",
		// 	opcity:"0.6"
		// };

		return (
			<div style={style} ref="home">
				<div style={searchWrapper} >
					<Search data="搜索" onInputFocus={this.showPopupPage} onInputBlur={this.hidePopupPage}/>
				</div>
				<Grids data={this.state.categories}/>
				{this.state.showPopupPage ?
					<PopupPage ref="popupPage" onCancelBtnClick={this.hidePopupPage}/>
					: null}
			</div>)

		}

});

export default App;