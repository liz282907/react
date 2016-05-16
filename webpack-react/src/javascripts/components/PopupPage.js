import React from "react";
import ReactDom from "react-dom";

import Search from "../Commons/search/Search.js";
import "../../stylesheets/sass/PopupPage.scss";


var PopupPage = React.createClass({
	getInitialState:function(){
		return {
			inputValue:""
		}
	},
	getHintList:function(){
		var userInput = this.state.inputValue;
		var monitorList = this.props.monitorListData.monitorList;
		var hintList = [],temp ={};

		monitorList.forEach(function(level1){
			level1.secondLevel.forEach(function(level2){
				level2.fields.filter(function(name){
					return (name.indexOf(userInput)!==-1);
				}).forEach(function(filteredName){
					temp.name = [level1.name,level2.name,filteredName].join("-");
					temp.url = "";
					hintList.push(temp);
				});
			});
		});
		var lis = hintList.map(function(item){
							return (
								<li className="listItem">
									<a href={item.url}>{item.name}</a>
								</li>)
						});
		return lis;
	},
	componentDidMount:function(){
	},
	handleInputFocus:function(){
		//to do:focus border 高亮事件
	},
	handleInputChange:function(value){
		this.setState({
			inputValue:value
		})
	},
	handleDeleteBtn:function(){
		this.setState({
			inputValue:""
		});
	},
	render:function(){
		var lis  = this.getHintList();

		return (
			<div className="popup">
				<div className="search-box">
					<Search data="监控" value={this.state.inputValue} onInputFocus = {this.handleInputFocus} onInputChange = {this.handleInputChange}>
						<img className="delete-btn" onClick={this.handleDeleteBtn} src={require("../../images/delete.png")}/>
					</Search>
					<span className="cancel-btn" onClick={this.props.onCancelBtnClick}>取消
					</span>
				</div>
				<ul className="hint-list">
					{lis}
				</ul>

			</div>)

	}


});

export default PopupPage;