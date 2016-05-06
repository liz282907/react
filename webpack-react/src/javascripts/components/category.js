import React from "react";
import ReactDom from "react-dom";

import Header from "../Commons/header.js";
import Select from "../Commons/select.js";

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
	render:function(){
		var query = this.props.location.query;

		return(
			<div>
				<hr />
				<Header title="Header:props of title"/>

				<Select >
				</Select>
				<div>{this.props.params.categoryId}</div>
				<div>当前日期：{query.time}</div>
				<div>城市：{query.city}</div>
				<div>城市：{query.interval}</div>
			</div>
		)}

});

export default Category;