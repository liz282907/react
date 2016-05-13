import React from "react";
import ReactDom from "react-dom";
import "./Search.scss";



var Search = React.createClass({
	showParentFocus:function(){
		this.props.onInputFocus();
		console.log("in Search ",this.props.onInputFocus);
	},
	render:function(){
		return (
			<div className="search-wrapper">
				<input type="text" name="search" onFocus= {this.showParentFocus}
				onBlur={this.props.onInputBlur} placeholder={this.props.data} className="search"/>
			{this.props.children}
			</div>
			)
	}

});

export default Search;