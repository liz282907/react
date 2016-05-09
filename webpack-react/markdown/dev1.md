##webpack配置问题总结
###1.webpack-dev-server和node 服务器之间关系的问题

- **方法一**：no-dev-server

我们开发时可以选择不用dev-server,直接webpack，打包到比如

    ![output](http://i3.buimg.com/36f211bd3a7bf7d5.png)

    目录下（也就是webpack.config.js中output指定的位置）：

```
BUILD_DIR = path.join(__dirname,'build',"javascripts","entries"),
output:{
        path:BUILD_DIR,
        filename:"[name].bundle.js",
```
然后在html中引入该文件：

![html中引入bundle](http://i3.buimg.com/3fcaf45e3dd0e68d.png)

---
- **方法二**：with dev-server

    当然，如果希望hot-loader，实时更新的话，那么需要借助webpack-dev-server，流程上说，webpack把编译好的文件放到静态服务器webpack-dev-server上，然后node服务器返回给前端html页面的时候，需要去加载html相关的js，这个js就需要去静态服务器上查找。因此，我们需要进行如下配置。

（1）入口文件更改：

//webpack.config.js

![](http://i3.buimg.com/3b1e16c00562efec.png)

（2）webpack编译到服务器的位置

//webpack.config.js

![](http://i3.buimg.com/f26a01ce35594289.png)

即图中publicPath的位置。

（3）node服务器查找资源的位置

//server.js 

![](http://i3.buimg.com/b845572c19cc2445.png)

其中的publicPath

（4）html页面关联的js目录更改

//your.html

![](http://i3.buimg.com/d388476afc2f9379.png)

现在运行run dev，开启服务器，就可以愉快的实时刷新啦（就跟sublime里面markdown可以实时在浏览器里刷一个样纸。不需要手动重新编译打包blahblah，完全解放双手。。。感天动地。。）

###readed
[WEBPACK DEV SERVER](http://www.jianshu.com/p/941bfaf13be1)

###2.scss
在webpack中，一切都是模块，在此之前，我们通常把js一个个模块独立开，然后import或者require进来，再通过browserify去进行打包。现在webpack不光可以实现这个功能，连css这些资源也可以视为模块，举例来说。
我们需要给Header组件增添样式，于是，新建Header.scss文件

```
@import "../../stylesheets/reset.css";
.header{

    .share-btn{
        padding: 20px;
        background-color:#abd;
    }
}
```

然后webpack.config.js中指定loader
```
{
                test:/\.scss$/,
                loaders:['style','css','sass'],
                //loader:"style!css!sass" //run from right to left
            },
```

首先会用sass-loader编译成css,css-loader处理里面的url模块加载，style-loader将css样式插入到页面中的style标签中。（loader是从右到左加载，从下到上）。

紧接着，我们就可以在js文件中引入样式了（是的。。。不需要在html中引入link标签），跟引入js一样。
```
//Header.js(定义Header组件js)
import React from "react";
import ReactDom from "react-dom";
import "./Header.scss";

...your component
```