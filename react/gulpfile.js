var gulp = require("gulp");
var babel = require("gulp-babel");

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
})