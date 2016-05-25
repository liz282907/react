import React from "react";
import Day from "./Day.js";

import {getDayDictOfMonth,cloneDate,validDateInMonth} from "./helper.js";



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


	},
	render:function(){
		var that = this;
		// debugger;
		var showMonth = getDayDictOfMonth(that.props.chosenDate);
		var curDate = cloneDate(that.props.chosenDate);
		// var showMonth = getDayDictOfMonth(this.state.chosenDate);
		// debugger;
		var firstIndex = showMonth.indexOf(1),
			lastIndex = showMonth.lastIndexOf(1);

		var Days = showMonth.map(function(date,index){
			var cur_modify;
			//无效日期情况：本身不是这个月的（lastindex有可能==firstindex,这样整个月都会被无效掉） ，是这个月但不在有效时间范围内的
			if(index<firstIndex|| ((lastIndex!=firstIndex) && (index>=lastIndex))||
				(index>=firstIndex&&index<lastIndex && !validDateInMonth(curDate,date,that.props.startDate,that.props.endDate))){
				cur_modify = "disabled";
			}else if(that.props.chosenDate.getDate()==date){
				cur_modify = "highlight";
			}else{
				cur_modify = "";
			}

			return <Day key={index} modifier={cur_modify} value={date}  base={that.props.chosenDate}
						updateChosenDate={that.props.updateChosenDate}
						hidePanel = {that.props.hidePanel}/>

		});

		return (
			<div className="month-container clearfix">
				{Days}
			</div>
			)
	}

});

export default Month;