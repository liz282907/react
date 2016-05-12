import React from "react";
import ReactDom from "react-dom";

import {host} from '../../../../config/serverConfig.js';

import "./Grids.scss";



var Grids = React.createClass({
	getImageUrls:function(){

		var images = ["01_taxi.png","02_zhuanche.png",
						"03_shunfengche.png","04_kuaiche.png",
						"05_designate.png","06_service.png",
						"07_bus.png","08_pay.png"];
		return images;
	},
	render:function(){
		var requireContext = require.context("../../../images",false,/\.png$/);
		var that = this;
		var lis = this.props.data.map(function(category,index){
			category.url = host+category.id;

			var imgsrc = requireContext("./"+that.getImageUrls()[index]);

			return (
				<li className="grid">
					<a href={category.url}>
						<div className="image-wrapper">
							<img className="logo" src={imgsrc}/>
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