#### 1. start

- **可选**：下载[react包](https://facebook.github.io/react/downloads.html)

**注**：下载的包是react各种版本的js文件，用法类似于引入jquery，请挪步[官方文档](http://facebook.github.io/react/docs/getting-started.html) return,以下均针对npm管理包展开。

#### 2. 安装依赖
```
npm install --save-dev react react-dom gulp-babel gulp babelify babel-preset-react babel-preset-es2015
```

**补充**：

 - react react-dom 是react的两个核心包
 - babel是一个编译器，可以帮我们将es6转为es5，同时将jsx编译为js
 - gulp是自动化构建工具（在gulpfile.js中定义任务，可监听变化，自动执行）

package.json示意

![package.json](http://i2.piimg.com/098ab323ac1db688.png)

#### 3.新建.babelrc文件写入
```
{"presets":["react","es2015"]}  //in case we will use es6
```

#### 4. 建立项目框架，新添main.js,main.html 

如图

![项目结构示意图](http://i2.piimg.com/c5b2c3fa2e5e4aa4.png)

```
// main.js
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
//用于将模板转为 HTML 语言，并插入指定的 DOM 节点（example）
```

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
  </head>
  <body>
    <div id="example"></div>
    <script src="src/javascripts/main.js"></script>
  </body>
</html>
```
如果用babel这样引入的话，是不需要在head的script标签中加入的，只需最后编译好的js文件即可。

#### 5. 编辑gulpfile.js

![gulpfile.js](http://i2.piimg.com/411aabb28475241a.png)


#### 6. 运行gulp build,gulp babel:watch
#### 7. browserify
（将多个模块合并成一个文件，同时让服务器端的CommonJS格式的模块可以运行在浏览器端）
```
browserify build/javascripts/main.js > build/javascripts/app.js
```
所有的js都会整合进app.js里面，也就是说，在html中也只需引入它即可。

#### 8. 更新main.html中引入的js文件

![编译后的html文件](http://i4.piimg.com/d382838623199675.png)

#### 9. finally,打开html文件就可以看到啦