##webpack开发问题总结
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

现在运行run dev，开启服务器，就可以愉快的实时刷新啦