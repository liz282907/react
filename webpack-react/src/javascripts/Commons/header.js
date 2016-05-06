import React from "react";
import ReactDom from "react-dom";


var Header = React.createClass({
	render:function(){
		return (
			<header>
				<span>{this.props.title}</span>
				<button>分享</button>
			</header>
			)
	}

});

export default Header;