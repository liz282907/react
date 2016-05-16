1.require动态加载 
场景需求：加载img.
通常情况：
```
//jsx中
<div className="image-wrapper">
    <img className="logo" src={require("../../../images/imagename.png")}/>
</div>
```
但这个require是静态固定的，并不是动态渲染（即根据服务器返回的数据生成多个li，把数据填充进去）。
因此当我们这样写的时候：
```
var lis = this.props.data.map(function(category,index){
            return (
                <li className="grid">
                    <a href={category.url}>
                        <div className="image-wrapper">
                            <img className="logo" src={require(category.imgsrc)}/>
                        </div>
                        <span className="title">{category.name}</span>
                    </a>
                </li>
                )
        });
```
会遇到这样的问题，webpack打包时会找不到该module.

> Uncaught Error: Cannot find module '../../../01_shunfengche.png'.

是因为我们的模块需要在运行时加载，但是打包时在编译阶段，此时模块还没有确定，因此无法找到。我们可以借助require.context去解决这个问题：

```
var requireContext = require.context("../../../images",false,/\.png$/);

//api:
require.context(directory, useSubdirectories = false, regExp = /^\.\//)
```

我们规定了webpack打包时去查找的模块目录。

- 第一个参数是模块的目录
- 第二个是如果遇到子目录，是否也包括，
- 第三个是你要匹配的模块,正则描述。

该函数在编译时被执行，返回的函数requireContext是运行时才会被执行。即webpack编译时会跳过这部分，也就不会遇到上面的问题了。

使用：

```
var imgsrc = requireContext("./"+that.getImageUrls()[index]);
            return (
                ...
                            <img className="logo" src={imgsrc}/>
                ...
                )
```

###references
1.[7.context](http://www.cnblogs.com/Leo_wl/p/4862714.html)
2.[require.context](https://webpack.github.io/docs/context.html)


2. style 
【注意】：
（1）逗号
（2）驼峰 eg backgroundColor代替background-color
（3）双引号

```
var style = {
            position:"relative"
        };
        return (
            <div style={style}>
```


3. 不能对自定义组件加上className,不会被识别

4. background位置不受padding影响

5. 关于react事件绑定的this.（暂时的实践，待理论考量）

```
var App = React.createClass({
    showPopupPage:function(){
        this.setState({showPopupPage:true});
        // React.findDomNode(this.refs.popupPage).setAttribute("display","block");
        // console.log("-------popupPage-------",this.refs.popupPage.getDomNode().);
    },
    hidePopupPage:function(){
        this.setState({showPopupPage:false});
        // React.findDomNode(this.refs.popupPage).setAttribute("display","none");
        // console.log("-------popupPage-------",this.refs.popupPage.getDomNode().);
    },
    componentDidMount:function(){
        this.fetchCategoriesFromServer();
    },
    ...
    render:function(){
       ...
        return (
            <div style={style}>
                <div style={searchWrapper}>
                    <Search data="搜索" onInputFocus={this.showPopupPage} onInputBlur={this.hidePopupPage}/>
                </div>
            </div>)
        }
});
```
如果onInputFocus = {this.showPopupPage.bind(this)的话，就给当前组件添加了一个函数（showPopupPage）.以后重用该组件，就会自带这个。因此不用绑定即可。

6.json文件读取 
JSON.parse(fs.readFileSync(路径/文件名))
![json error](http://i4.buimg.com/aa01fc0ee013247d.png)

[校验工具：](http://www.bejson.com/)

7.anchor 
the url should only contain a single anchor.
![](http://i2.buimg.com/0e368bc4324a2aee.png)
