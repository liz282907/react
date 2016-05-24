import React from "react";
import Day from "./Day.js";

import {getDayDictOfMonth} from "./helper.js";



var Month = React.createClass({
	// getInitialState:function(){
	// 	return {
	// 		chosenDate:this.props.chosenDate
	// 	}
	// },
	componentWillReceiveProps:function(nextProps){
		//console.log("month Will ReceiveProps ",this.props.chosenDate);
		//this.props.chosenDate is old
		// this.setState({
		// 	chosenDate:nextProps
		// })
		console.log("month Will ReceiveProps ",nextProps);

	},
	render:function(){
		var that = this;
		// debugger;
		var showMonth = getDayDictOfMonth(that.props.chosenDate);
		// var showMonth = getDayDictOfMonth(this.state.chosenDate);
		// debugger;
		console.log("in Month   ",that.props.chosenDate);
		var firstIndex = showMonth.indexOf(1);
		var lastIndex = showMonth.lastIndexOf(1);

		var Days = showMonth.map(function(date,index){
			var cur_modify;
			if(index<firstIndex || index>=lastIndex){
				cur_modify = "disabled";
			}else if(that.props.chosenDate.getDate()==date){
				cur_modify = "highlight";
			}else{
				cur_modify = "";
			}

			return <Day key={index} modifier={cur_modify} value={date}  base={that.props.chosenDate} updateChosenDate={that.props.updateChosenDate}/>

		});

		return (
			<div className="month-container clearfix">
				{Days}
			</div>
			)
	}

});

export default Month;