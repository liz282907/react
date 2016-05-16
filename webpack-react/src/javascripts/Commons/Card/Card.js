import React from "react";
import "./Card.scss";


var Card = React.createClass({


	render:function(){
		return(
			<div className="card">
				<div className="field-title">
					<h1>{this.props.fieldData.title}</h1>
					<img className="introduction" src={require("../../../images/introduction.png")}/>
				</div>
				<div className="field-statics1">{
					this.props.fieldData.statics1.map(function(stat1){
						return (
								<div className="stat1-item">
									<span className="name">{stat1.name}</span>
									<span className="value">{stat1.value}</span>
								</div>
						)
					})
				}
				</div>
				<div className="field-statics2">
				{
					this.props.fieldData.statics2.map(function(stat2){
						return (
								<div className="stat2-item">
									<span className="name">{stat2.name}</span>
									<span className="value">{stat2.value}</span>
								</div>
						)
					})
				}
				</div>
				<div className="field-display"></div>
			</div>)

	}
});

export default Card;