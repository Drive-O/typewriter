const gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
imports = require("postcss-import"),
nesting = require("postcss-nesting");

gulp.task("default", function(){
	console.log("Hooray - you created a Gulp task");
});

gulp.task("styles", function(){
	return gulp.src("./assets/styles/style.css")
	.pipe(postcss([imports, autoprefixer, nesting])) //filter, setzt auto Prefixes css
	.pipe(gulp.dest("./temp/styles")); 
	//Async func
})

gulp.task("watch", function(){
	watch("./assets/styles/**/*.css", function(){
		gulp.start("styles");
	});
})

