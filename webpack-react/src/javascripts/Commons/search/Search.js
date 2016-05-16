import React from "react";
import "./Search.scss";



var Search = React.createClass({
	showParentFocus:function(){
		this.props.onInputFocus();
	},
	showFilteredList:function(){
		var userInput = this.refs.search.value;
		if(this.props.onInputChange){
			this.props.onInputChange(userInput);
		}
	},
	render:function(){
		return (
			<div className="search-wrapper">
				<input type="text" name="search" ref="search"
					value={this.props.value?this.props.value:""} placeholder={this.props.data}
					onFocus= {this.showParentFocus}
					onChange={this.showFilteredList}
				 className="search"/>
			{this.props.children}
			</div>
			)
	}

});

export default Search;