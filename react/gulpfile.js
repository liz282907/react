var gulp = require("gulp");
var babel = require("gulp-babel");
var gulpConnect = require("gulp-connect");
var browserify = require("gulp-browserify");

var path = {
	src:["src/**/*.js"],
	dest:"build"
}

gulp.task("build",function(){
	return gulp.src(path.src)
		.pipe(babel())
		.pipe(gulp.dest(path.dest));
});
gulp.task("babel:watch",function(){
	gulp.watch(path.src,["build"]);
});

/**
*下面的部分是起一个本地服务，用于测试react
*
********/
gulp.task('server',function(){
	gulpConnect.server({
		port:80,
		livereload:true,
	 	fallback:"src/views/page1.html"
	});
});

gulp.task("browserify",function(){
	gulp.src("build/javascripts/routes/*.js")
		.pipe(browserify({
			insertGlobals:true
			// debug:!gulp.env.production
		}))
		.pipe(gulp.dest("build/javascripts/entries/*.js"));
})

gulp.task("default",["server","build","babel:watch"]);