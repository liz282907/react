import React from "react";
import "./Card.scss";
import Overlay from "../Overlay/Overlay.js";


var Card = React.createClass({
	getInitialState:function(){
		return {
			showPopupDescription:false
		}
	},
	showPopup:function(){
		this.setState({showPopupDescription:true});
	},
	hidePopup:function(){
		this.setState({showPopupDescription:false});
	},
	render:function(){
		return(
			<div className="card">
				<div className="field-title">
					<h1>{this.props.fieldData.title}</h1>
					<img className="introduction" src={require("../../../images/introduction.png")} onClick={this.showPopup}/>
					{this.state.showPopupDescription?
						(<div >
							<Overlay />
							<div className="popup-description">
								<div className="popup-body">
									<h3 className="title">指标定义</h3>
									<div>
										<p className="definition">{this.props.fieldData.description}</p>
										<p className="detail">{
											this.props.fieldData.detail_description
										}</p>
									</div>
								</div>

								<button className="btn" onClick={this.hidePopup}>确定</button>
							</div>
						</div>):null
					}
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