import React from 'react';

import Search from '../Commons/search/Search.js';
import Grids from '../Commons/Grids/Grids.js';
import PopupPage from "./PopupPage.js";


// import '../../stylesheets/sass/page1.scss';
import '../../stylesheets/reset.css';
import '../../stylesheets/util.scss';


import {categoryList,monitorList} from "../../../config/serverConfig.js";

// var serverConfig = require("../../../config/serverConfig.js");


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
	fetchMonitorListFromServer:function(){
		$.ajax({
			url:monitorList,
			type:"GET",
			dataType:"json",
			success:function(data){
				console.log(data);
				this.setState({
					monitorList:data
				});
			}.bind(this),
			error:function(xhr,errorType,error){
				console.log(err);
			}.bind(this)
		});
	},
	showPopupPage:function(){
		this.setState({showPopupPage:true});
		// this.refs.home.style.pointerEvents = "none";
		// this.refs.homeSearch.getDomNode().style.pointerEvents="none";
		// React.findDomNode(this.refs.homeSearch).style.pointerEvents = "none";
		// React.findDomNode(this.refs.popupPage).setAttribute("display","block");
		// console.log("-------popupPage-------",this.refs.popupPage.getDomNode().);
	},
	hidePopupPage:function(){
		this.setState({showPopupPage:false});

	},
	componentDidMount:function(){
		this.fetchCategoriesFromServer();
		this.fetchMonitorListFromServer();
	},
	getInitialState:function(){
		return {
			showPopupPage:false,
			categories:[],
			monitorList:[]
		}
	},
	render:function(){

		var style = {
			position:"relative"
		};
		var searchWrapper={
			padding: "14px 20px"
		};


		return (
			<div style={style} ref="home">
				<div style={searchWrapper} >
					<Search data="搜索" onInputFocus={this.showPopupPage} onInputBlur={this.hidePopupPage}/>
				</div>
				<Grids data={this.state.categories}/>
				{this.state.showPopupPage ?
					<PopupPage ref="popupPage" monitorListData={this.state.monitorList} onCancelBtnClick={this.hidePopupPage}/>
					: null}
			</div>)

		}

});

export default App;