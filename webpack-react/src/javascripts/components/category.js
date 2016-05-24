import React from "react";

import Header from "../Commons/header.js";
import Select from "../Commons/select.js";
import Card from "../Commons/Card/Card.js";
import Datepicker from "../Commons/Datepicker/Datepicker.js";
import Overlay from "../Commons/Overlay/Overlay.js";


import '../../stylesheets/reset.css';
import '../../stylesheets/sass/page2.scss';

//mock
import {fieldData} from "../../../mock/fieldData.js";
import {selectData} from "../../../mock/select.js";

/*
var SelectLists = React.createClass({
	render:function(){
		return React.Children.map(this.props.children,function(ele){
				return <li>{ele}</li>;
			})
	}
});
*/
//建议 查询条件放数组，不停push，pop，生成query，形成url，与history一致。

var Category = React.createClass({
	getInitialState:function(){
		return {
			fieldsData:fieldData, //[]
			selectData:selectData,
			chosenDate:new Date(),
			showDatePicker:false

		}
	},
	handleDateChange:function(choice){
		this.setState({
			chosenDate:choice
		})
	},
	getPanel:function(){
		var panelHeight= document.body.clientHeight-170;
		console.log(document.body.clientHeight-170);

		var styles = {
			// panel:{
			// 	"position":"absolute",
			// 	"width":"100%",
			// 	"height":panelHeight+"px",
			// 	"top":"170px",
			// 	"left":0
			// },
			overlay:{
				"top":"170px",
				"position":"fixed"
			},
			datePicker:{
				"position":"absolute",
				"width":"100%",
				"minHeight":"700px",
				// "height":"100%",
				"top":"168px",
				"left":0,
				"backgroundColor":"#fff",
				"zIndex":1000
			}
		};
		var datePickerCompoment = (
			<div className="panel" style={styles.panel}>
				<Overlay customerStyle={styles.overlay}/>
				<Datepicker customerStyle={styles.datePicker} startDate={new Date(2016,1,24)} endDate={new Date(2016,5,24)} chosenDate = {this.state.chosenDate} onDateChange={this.handleDateChange}/>
			</div>
		);
		return (this.state.showDatePicker?datePickerCompoment:null);
	},
	showPanel:function(){
		this.setState({
			showDatePicker:true
		});
	},
	getTotalCards:function(){
		//
		//var Cards = this.state.fieldsData.map(function(fieldData){
		//	return (
		//		<Card fieldData={fieldData} />);
		//});
		//return Cards;
		//
		return (<Card fieldData={fieldData}/>)

	},
	getDatePicker:function(){
		// deprecated
		return (
			<Datepicker chosenDate = {this.state.chosenDate}  onDateChange={this.handleDateChange} />
		)
	},
	render:function(){
		console.log("in Category   ",this.state.chosenDate);
		var Cards = this.getTotalCards();
		var query = this.props.location.query;

		var that = this;

		var lis = this.state.selectData.dimensions.map(function(dimension,index){
			return (
				<li className="dimension" tabIndex="4" data-type={dimension.name} onClick={that.showPanel}>
					<span>{dimension.value[0]}</span>
					<span className="arrow"></span>
				</li>
			)
		});


		return(
			<div className="container">
				<div className="first-monitor">
					{selectData.level1}
					<span className="arrow"></span>
				</div>
				<ul className="dimensions clearfix">
					{lis}
				</ul>
				{this.getPanel()}

				{Cards}
				<div>{this.props.params.categoryId}</div>
				<div>当前日期：{query.time}</div>
				<div>城市：{query.city}</div>
				<div>城市：{query.interval}</div>
			</div>
		)}

});

export default Category;