var gulp   = require('gulp')
	        minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat')
var stylus = require('gulp-stylus')

gulp.task('css', function () {
  return gulp.src(['bower_components/bootstrap-stylus/stylus/bootstrap.styl', 'css/app.styl'])
    .pipe(stylus())
    .pipe(concat('app.css'))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('assets'))
})

gulp.task('watch:css', ['css'], function () {
  gulp.watch('css/**/*.styl', ['css'])
})
