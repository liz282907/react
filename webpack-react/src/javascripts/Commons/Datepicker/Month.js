import React from "react";
import Day from "./Day.js";

import {getDayDictOfMonth} from "./helper.js";



var Month = React.createClass({
	render:function(){
		var showMonth = getDayDictOfMonth(this.props.chosenDate);
		var firstIndex = showMonth.indexOf(1);
		var lastIndex = showMonth.lastIndexOf(1);

		var Days = showMonth.map(function(date,index){
			if(index<firstIndex || index>=lastIndex){
				return <Day modifier={"disabled"} value={date}/>
			}else if(this.props.chosenDate.getDate()===date){
				<Day modifier={"highlight"} value={date}/>
			}else{
				return <Day value={date} base={this.props.chosenDate} updateChosenDate={this.props.updateChosenDate}/>
			}
		});

		return (
			<div className="month-container">
				{Days}
			</div>
			)
	}

});

export default Month;