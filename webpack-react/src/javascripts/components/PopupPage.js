import React from "react";
import ReactDom from "react-dom";

import Search from "../Commons/search/Search.js";
import "../Commons/search/Search.scss";


var PopupPage = React.createClass({
	render:function(){
		return (
			<div>
				<div className="search-bar">
					<Search data="监控" className="extended-search">
						<span className="delete-btn"></span>
					</Search>
					<span className="cancel-btn">
					</span>
				</div>
				<ul className="hint-list">

				</ul>

			</div>)

	}


});

export default PopupPage;