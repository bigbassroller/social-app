var gulp   = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('js', function () {
  return gulp.src([
  	'node_modules/jquery/dist/jquery.js',
  	'node_modules/angular/angular.js', 
    'node_modules/angular-route/angular-route.js', 
  	'ng/module.js', 
  	'ng/**/*.js',
  	'bower_components/bootstrap-stylus/js/transition.js',
  	'bower_components/bootstrap-stylus/js/affix.js',
  	'bower_components/bootstrap-stylus/js/alert.js',
  	'bower_components/bootstrap-stylus/js/button.js',
  	'bower_components/bootstrap-stylus/js/carousel.js',
  	'bower_components/bootstrap-stylus/js/collapse.js',
  	'bower_components/bootstrap-stylus/js/dropdown.js',
  	'bower_components/bootstrap-stylus/js/modal.js',
    'bower_components/bootstrap-stylus/js/tooltip.js',
  	'bower_components/bootstrap-stylus/js/popover.js',
  	'bower_components/bootstrap-stylus/js/scrollspy.js',
  	'bower_components/bootstrap-stylus/js/tab.js'
  	])
    .pipe(sourcemaps.init())
      .pipe(ngAnnotate())
      .pipe(concat('app.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'))
})

gulp.task('watch:js', ['js'], function () {
  gulp.watch('ng/**/*.js', ['js'])
})
