import React from "react";

// import "./Day.scss";


var Day = React.createClass({
	getStyles:function(){
		var base= {
				"display":"inline-block",
				"fontSize": "26px",
				"line-height": "80px",
				// "float":"left",
				// "flex":1,
				// "justifyContent":"center",
				// "alignItems":"center",
				"minWidth": "128px",
				"textAlign":"center",
				// "verticalAlign":"middle"
			};
		var defaultStyle = {
			"day-normal": Object.assign({},base,{"color":"#636363"}),
			"day-highlight": Object.assign(
						{},
						base,
						{
							"color":"#fff",
							"background":"url(/src/images/highlight.png) no-repeat center center"
						}),
			"day-disabled":Object.assign({},base,{
				"color":"#b1b1b1",
				"pointerEvents":"none"
			})
		};
		var styles;
		if(this.props.modifier){
			styles = defaultStyle["day-"+this.props.modifier]
		}else
			styles = defaultStyle["day-normal"];

		return Object.assign({},styles,this.props.customerStyle);
	},
	updateDate:function(e){
		var base = this.props.base;
		var curValue = this.refs.grid.childNodes[0].nodeValue;
		var curDate = new Date(base.getFullYear(),base.getMonth(),curValue);
		this.props.updateChosenDate(curDate);
		this.props.hidePanel(e);
	},
	getClassName:function(){
			if(this.props.modifier)
				return ("day-"+this.props.modifier)
			else return "day-normal";
		},
	render:function(){
		//console.log(this.props.base);
		return (
			<div ref="grid" style = {this.getStyles()} onClick={this.updateDate}>{this.props.value}</div>
			)
	}

});

export default Day;