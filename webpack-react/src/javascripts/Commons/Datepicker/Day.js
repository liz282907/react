import React from "react";

import "./Day.scss";


var Day = React.createClass({
	updateDate:function(){
		var base = this.props.base;
		var curValue = this.refs.grid.childNodes[0].nodeValue;
		this.props.updateChosenDate(this.props.base.setDate(curValue));
	},
	getClassName:function(){
			if(!this.props.modifier)
				return ("day-"+this.props.modifier)
			else return "day-normal";
		},
	render:function(){

		return (
			<div ref="grid" className={this.getClassName()} onClick={this.updateDate}>{this.props.value}</div>
			)
	}

});

export default Day;