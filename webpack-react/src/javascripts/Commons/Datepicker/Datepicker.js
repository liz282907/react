import React from "react";
import Month from "./Month.js";
import Week from "./Week.js";
import Navbar from "./Navbar.js";



var Datepicker = React.createClass({
	getStyles:function(){
		var defaultStyle = {
			"boxSizing":"border-box",
			"padding":"0 26px"
		};
		return Object.assign({},defaultStyle,this.props.customerStyle);
	},
	render:function(){
		console.log("in datepicker   ",this.props.chosenDate);

		return (
			<div style={this.getStyles()}>
				<Navbar chosenDate={this.props.chosenDate} onArrowClick = {this.props.onDateChange}/>
				<Week />
				<Month chosenDate={this.props.chosenDate} updateChosenDate = {this.props.onDateChange}/>

			</div>

			)
	}

});

export default Datepicker;