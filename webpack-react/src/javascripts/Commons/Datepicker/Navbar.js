import React from "react";


var defaultStyle={
		root:{
			"width":"100%",
			"lineHeight":"84px",
			"marginTop":"20px",
			"textAlign":"center"

		},
		title:{
			"flex":1,
			"lineHeight":"84px",
			"fontSize":"32px",
			"color":"#636363",
			"letterSpacing":3
		},
		img:{
			"display":"inline-block",
			"verticalAlign":"middle",
			"margin":"0 40px",
			"padding":"30px 24px"
		},
		imgLeft:{
			"float":"left",
			"paddingLeft":"45px",
		},
		imgRight:{
			"float":"right",
			"paddingRight":"45px"
		}
};

var Navbar = React.createClass({
	changeDate:function(e){

		var month = this.props.chosenDate.getMonth();
		if(e.currentTarget.dataset.sign=="next")
			month +=1;
		else if(e.currentTarget.dataset.sign=="prev")
			month -=1;
		this.props.onArrowClick(new Date(this.props.chosenDate.getFullYear(),month,this.props.chosenDate.getDate()));
	},
	render:function(){
		var style = Object.assign({},defaultStyle.root,this.props.customerStyle);

		return (
			<div style={style} className="">
				<img data-sign="prev" style={Object.assign({},defaultStyle.img,defaultStyle.imgLeft)}
					src="/src/images/arrow_left.png" alt="prev"
					onClick={this.changeDate}/>

				<span style={defaultStyle.title} data-date={this.props.chosenDate}>
					{this.props.chosenDate.getFullYear()+" 年 "+(this.props.chosenDate.getMonth()+1)+" 月"}
				</span>

				<img data-sign="next" style={Object.assign({},defaultStyle.img,defaultStyle.imgRight)}
					src="/src/images/arrow_right.png" alt="next"
					onClick={this.changeDate}
				/>
			</div>
		)
	}

});

export default Navbar;