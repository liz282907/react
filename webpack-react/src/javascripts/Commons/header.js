import React from "react";
import ReactDom from "react-dom";
import "./Header.scss";


var Header = React.createClass({
	render:function(){
		return (
			<header className="header">
				<span>{this.props.title}</span>
				<button className="share-btn">分享</button>
			</header>
			)
	}

});

export default Header;