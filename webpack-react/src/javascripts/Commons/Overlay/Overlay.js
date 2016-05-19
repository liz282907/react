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


	render:function(){
		return(
			<div style={overlayStyle}>
			</div>
			)

	}
});

export default Overlay;