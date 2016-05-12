import React from "react";
import ReactDom from "react-dom";
import "./Grids.scss";



var Grids = React.createClass({
	render:function(){
		var lis = this.props.data.map(function(category){
			return (
				<li className="grid">
					<a href={category.url}>
						<div className="image-wrapper">
							<img className="logo" src={require("../../../images/taxi.png")}/>
						</div>

						<span className="title">{category.name}</span>
					</a>
				</li>
				)
		});
		return (
			<ul className="grid-wrapper clearfix">
				{lis}
			</ul>
			)
	}

});

export default Grids;