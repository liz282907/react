###项目说明

这个demo是基于阮一峰老师的[react入门](http://www.ruanyifeng.com/blog/2015/03/react.html)写的，考虑到当时的demo没有模块化（直接在html中引用的js文件），因此我创建了这个项目。

- es6转es5用的babel（src文件夹->build文件夹）
- 用browserify将模块整合，编译成build文件夹中的app.js，即为最终入口，