import React from "react";
import ReactDom from "react-dom";
import "./Search.scss";



var Search = React.createClass({
	render:function(){
		return (
			<div className="search-wrapper">
				<input type="text" name="search" placeholder="搜索" className="search"/>
			</div>
			)
	}

});

export default Search;