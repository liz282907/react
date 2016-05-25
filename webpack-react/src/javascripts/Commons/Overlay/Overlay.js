import React from "react";
// import "./Overlay.scss";


var overlayStyle = {
	position:"fixed",
	width:"100%",
	height:"100%",
	top:0,
	left:0,
	backgroundColor:"#000",
	opacity:0.5,
	zIndex:5
}
var Overlay = React.createClass({
	handleClick:function(e){
		if(!this.props.onUserClick)
			return;
		else
			this.props.onUserClick(e);
	},
	getStyle:function(){
		return Object.assign({},overlayStyle,this.props.customerStyle);
	},
	render:function(){
		return(
			<div style={this.getStyle()} onClick={this.handleClick}>
			</div>
			)

	}
});

export default Overlay;