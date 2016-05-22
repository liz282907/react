import React from "react";
import {WEEKDAYS} from "./LocaleHelper.js";
import Day from "./Day.js";


var Week = React.createClass({
	render:function(){
		return (
			WEEKDAYS.map(function(weekday){
				return <Day value={weekday} />
			})
		)
	}

});

export default Week;