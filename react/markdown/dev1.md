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