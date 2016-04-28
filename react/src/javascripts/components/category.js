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

var Category = React.createClass({
	render:function(){
		return(
			<div>
				<hr />
				<Header title="Header:props of title"/>
				<Select >
				</Select>
				<div>{this.props.params.categoryId}</div>
			</div>
		)}

});

export default Category;