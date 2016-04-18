1.start

- 下载[react包](https://facebook.github.io/react/downloads.html)
- 安装依赖
```
npm install --save-dev react react-dom gulp-babel gulp babelify babel-preset-react babel-preset-es2015
```

package.json示意

![package.json](http://i2.piimg.com/098ab323ac1db688.png)

- 新建.babelrc文件写入
```
{"presets":["react","es2015"]}
```

- 建立项目框架，新添main.js,main.html 如图

![项目结构示意图](http://i2.piimg.com/c5b2c3fa2e5e4aa4.png)

```
// main.js
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
//用于将模板转为 HTML 语言，并插入指定的 DOM 节点
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

- 编辑gulpfile.js
```
![gulpfile.js](http://i3.piimg.com/0911f9f07e2c121b.png)
```

- 运行gulp build,gulp babel:watch(这一步是将模块化这些es6转es5)
- 运行browserify
（将多个模块合并成一个文件，同时让服务器端的CommonJS格式的模块可以运行在浏览器端）
```
browserify build/javascripts/main.js > build/javascripts/app.js
```
所有的js都会整合进app.js里面，也就是说，在html中也只需引入它即可。

-更新main.html中引入的js文件

![编译后的html文件](http://i4.piimg.com/d382838623199675.png)

- finally,打开html文件就可以看到啦