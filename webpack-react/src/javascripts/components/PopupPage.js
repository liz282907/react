import React from "react";
import ReactDom from "react-dom";

import Search from "../Commons/search/Search.js";
import "../../stylesheets/sass/PopupPage.scss";


var PopupPage = React.createClass({
	componentDidMount:function(){
		console.log("mount!");
	},
	handleInputFocus:function(){
		console.log("popup focus");
	},
	handleInputBlur:function(){
		console.log("popup blur");
	},
	render:function(){
		return (
			<div className="popup">
				<div className="search-box">
					<Search data="监控" onInputFocus = {this.handleInputFocus} onInputBlur = {this.handleInputBlur}>
						<span className="delete-btn"></span>
					</Search>
					<span className="cancel-btn" onClick={this.props.onCancelBtnClick}>取消
					</span>
				</div>
				<ul className="hint-list">

				</ul>

			</div>)

	}


});

export default PopupPage;