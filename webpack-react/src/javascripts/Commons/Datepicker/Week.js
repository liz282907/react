import React from "react";
import {WEEKDAYS} from "./LocaleHelper.js";
import Day from "./Day.js";


var Week = React.createClass({
	render:function(){
		return (
		<div className="week">
			{
				WEEKDAYS.map(function(weekday){
					return <Day value={weekday} />
				})
			}
		</div>
		)
	}

});

export default Week;