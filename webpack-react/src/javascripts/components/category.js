import React from "react";

import Header from "../Commons/header.js";
import Select from "../Commons/select.js";
import Card from "../Commons/Card/Card.js";
import Datepicker from "../Commons/Datepicker/Datepicker.js";

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
			chosenDate:new Date()

		}
	},
	getTotalCards:function(){
		/*
		var Cards = this.state.fieldsData.map(function(fieldData){
			return (
				<Card fieldData={fieldData} />);
		});
		return Cards;
		*/
		return (<Card fieldData={fieldData}/>)

	},
	handleDateChange:function(choice){
		this.setState({
			chosenDate:choice
		})
	},
	getDatePicker:function(){
		return (
			<Datepicker chosenDate = {this.state.chosenDate} onDateChange={this.handleDateChange}/>
		)
	},
	render:function(){
		var Cards = this.getTotalCards();
		var query = this.props.location.query;

		var lis = this.state.selectData.dimensions.map(function(dimension,index){
			return (
				<li className="dimension" tabIndex="4" dataType={dimension.name}>
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
				{}

				{Cards}
				<div>{this.props.params.categoryId}</div>
				<div>当前日期：{query.time}</div>
				<div>城市：{query.city}</div>
				<div>城市：{query.interval}</div>
			</div>
		)}

});

export default Category;