###总结
1.jsx 
js语法与html混用，optional，but recommend
- js部分需要用{}包裹，否则不能正确识别加以解析
- {}中可以为js代码，也可以为变量。

2.组件
组件相当于若干个tag的对外封装，也相当于一个函数，接受若干属性，然后通过this.props..传递给内部tag。
- 组件首字母需大写
- 组件类的render方法required，用于输出
- 只能有一个顶层标签（也就是说return的时候如果多个标签的话用一个div将他们包裹起来就好）
- 组件的属性可以任意加，在js中可以通过this.props.attributes来获取。需要注意
class 属性需要写成 className ，for —> htmlFor (因为 class 和 for 是 JavaScript 的保留字。)
- 注意return的时候不能直接回车哈，之前js好像有讲过直接回车会把空格当成什么来着。。或者可以加一个（），继续保持内部内容的整洁
- this.props.children是所有子节点，= undefined|object|array 。可以用React.Children.map来遍历
```
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
    ReactDOM.render(
    <MyComponent3>
        <a>link1</a>
        <a>link2</a>
    </MyComponent3>,
    document.getElementById('example'));
```

- propsType属性（进行验证）
- getDefaultProps(设置默认属性)
- this.refs.refname获得真实节点
- getInitialState(this.state.stateName, this.setState(stateName:))
- componentWillMount()
- componentDidMount()
- componentWillUpdate(object nextProps, object nextState)
- componentDidUpdate(object prevProps, object prevState)
- componentWillUnmount()
    react组件样式是一个对象，<div style={{opacity: this.state.opacity}}></div>


###references
1.[服务器环境](https://facebook.github.io/react/docs/environments.html)

2.[英文版教程](https://facebook.github.io/react/docs/tutorial.html)

3.[中文镜像教程](http://reactjs.cn/react/docs/tutorial.html)

4.[阮一峰教程](http://www.ruanyifeng.com/blog/2015/03/react.html)

5.[react中文索引](http://nav.react-china.org/)

###to read
1.[语法介绍](https://facebook.github.io/react/docs/jsx-in-depth.html)
2.[事件清单](http://calendar.perfplanet.com/2013/diff/)