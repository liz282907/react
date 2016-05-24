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
![](http://i3.buimg.com/0273186cc8bf9cdc.png)

8,require貌似不支持绝对路径？
9.webpack不能支持css的+？
```
.stat1-item+stat1-item{
        border-left:1px solid #e7e7e7;
    }
```

10. vertical-align是inline-block依赖型的，本元素需要为inline-block，他的vertical-align才会生效
11.border-raduis:父子同时设置才会有效，如果父div中有多个div的话

12.sass不能这么写font吗 
![](http://i2.buimg.com/118a2a68fa683406.png)。会执行除法貌似

解答：需要这么写
```
@mixin font-style($size,$lineHeight,$color){
    font:#{$size}/#{$lineHeight} simHei;
    color:$color;
}
```

[关于sass那些事，sass用法](http://www.tuicool.com/articles/yIfmY3y)

13.react中html 标签中的属性要驼峰。比如focus关联的tabindex就得写成tabIndex

14.
month+1是因为 设置到下个月，
然后设置 day为0，不存在，回退上个月的最后一天了

function getCountDays() {
        var curDate = new Date();
        /* 获取当前月份 */
        var curMonth = curDate.getMonth();
       /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
       curDate.setMonth(curMonth + 1);
       /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
       curDate.setDate(0);
       /* 返回当月的天数 */
       return curDate.getDate();
}
例如,  获取当前月份(现在是3月)的总天数: 
getCountDays()       // 返回31

15.style的可扩展 
![Object.assign(es6)](http://i4.buimg.com/75a4662191155fd3.png)

16.属性 
普通元素属性：camel, data-  
组件：任意
```
showPanel:function(e){
        e.currentTarget.dataset.type
    },
```

17.报错总结 
- Uncaught TypeError: Cannot read property 'showPanel' of undefined.

因为用了this. 而且在map中，this就有了替换，所以要改变

- 设了padding后，会有位移，别忘了改width，或者用box-sizing:border-box

18. 禁用事件 
```
"day-disabled":Object.assign({},base,{
                "color":"#b1b1b1",
                "pointerEvents":"none"
            })
```
