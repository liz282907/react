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