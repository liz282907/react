1,用gulp-connect起一个web服务。
```
gulp.task('server',function(){
    gulpConnect.server({
        port:80,
        livereload:true
    });
});
```
如果在运行过程中遇到如图这样的问题，
![端口被占用](http://i2.piimg.com/d3117a7a51ca3768.png)
是因为默认的8080端口已经被使用了，只需设置一个新的端口即可

2.
![category页面](http://i3.piimg.com/cbe5f8e6bd958153.png)

3. 注意保持map前的this.
var that = this; //attention for this!!

4.key的问题
![](http://i4.piimg.com/92519797449f9f21.png)

###to do
1.[多browserify](http://stackoverflow.com/questions/23835898/how-to-output-multiple-bundles-with-browserify-and-gulp)
[](https://fettblog.eu/gulp-browserify-multiple-bundles/)
[](https://csspod.com/using-browserify-with-gulp/)

2.webpack
3.className