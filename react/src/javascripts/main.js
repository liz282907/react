// main.js
import React from 'react';
import ReactDOM from 'react-dom';
//below are the commonjs way
// var React = require('react');
// var ReactDOM = require('react-dom');

/************tutorial1
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
*********************/

var names = ['Alice', 'Emily', 'Kate'];
ReactDOM.render(
	<div>
	{
		names.map(function(name){
			return <h1>hello,{name}</h1>;
		})
	}
	</div>,
	document.getElementById('example')
	);
//reactDom是实例化根组件，用于启动项目，需要在html的最下面的js文件中，保证所有组件已加载


/*******************tutorial3: jsx
var name="lily";
var htmlArr = [<h1>first</h1>,<h1>second</h1>]
ReactDOM.render(
	<div>{htmlArr}</div>,
	document.getElementById('example')
	);
*************/

/*****************************tutorial4: component
// 1,normal version
var MyComponent = React.createClass({
	render:function(){
		return <h1>this is component test</h1>;
	}
});

// 2,attributes-added version             all the attributes can be obtained via the this.prop.attrs
var MyComponent2 = React.createClass({
	render:function(){
		return <div>
			<h1>this is component test,data is {this.props.data}</h1>
			<p>this is className: {this.props.className}</p>
		</div>;
	}
});

// 3,component attributes1: this.props.children
//this.props.children contains all the child node, = undefined|object|array,can use the
//React.Children.map to iterate
var MyComponent3 = React.createClass({
	render:function(){
		return (<ol>
		{
			React.Children.map(this.props.children,function(ele){
				return <li>{ele}</li>;
			})
		}
		</ol>)
	}
});
//ReactDOM.render(<MyComponent1 data="hidden-info" className="component"/>,document.getElementById('example'));
//ReactDOM.render(
//	<MyComponent3>
//		<a>link1</a>
//		<a>link2</a>
//	</MyComponent3>,
//	document.getElementById('example'));


var MyComponent4 = React.createClass({
	propTypes:{
		title: React.PropTypes.string.isRequired,
	},
	render:function(){
		return <h1>{this.props.title}</h1>;
	}
});

var testTitle = "123";
var testTitle2 = 123;
//will run as normal ,but throw a warning like this
ReactDOM.render(<MyComponent4 title={testTitle2} data="hidden-info" className="component"/>,
	document.getElementById('example'));


**********************************/