import React from "react";
import ReactDom from "react-dom";

import Header from "../Commons/header.js";
import Select from "../Commons/select.js";
import Card from "../Commons/Card/Card.js";


import '../../stylesheets/reset.css';
//mock
import {fieldData} from "../../../mock/fieldData.js";

/*
var SelectLists = React.createClass({
	render:function(){
		return React.Children.map(this.props.children,function(ele){
				return <li>{ele}</li>;
			})
	}
});
*/
//建议 查询条件放数组，不停push，pop，生成query，形成url，与history一致。

var Category = React.createClass({
	getInitialState:function(){
		return {
			fieldsData:[],
		}
	},
	getTotalCards:function(){
		/*
		var Cards = this.state.fieldsData.map(function(fieldData){
			return (
				<Card fieldData={fieldData} />);
		});
		return Cards;
		*/
		return (<Card fieldData={fieldData}/>)

	},
	render:function(){
		var Cards = this.getTotalCards();
		var query = this.props.location.query;

		var containerStyle={
			position: "relative",
			width: "100%",
			height: "100%",
		};

		return(
			<div style={containerStyle}>
				{Cards}
				<div>{this.props.params.categoryId}</div>
				<div>当前日期：{query.time}</div>
				<div>城市：{query.city}</div>
				<div>城市：{query.interval}</div>
			</div>
		)}

});

export default Category;