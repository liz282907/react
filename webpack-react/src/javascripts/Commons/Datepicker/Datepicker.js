import React from "react";
import Month from "./Month.js";
import Week from "./Week.js";


var Datepicker = React.createClass({
	render:function(){
		return (
			<div>
				<Week />
				<Month chosenDate={this.props.chosenDate} updateChosenDate = {this.props.onDateChange}/>
			</div>




			)
	}

});

export default Datepicker;