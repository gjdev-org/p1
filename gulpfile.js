var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean-css');

gulp.task('js', function() {
    return gulp.src('assets/vendor/js/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('css', function(){
   gulp.src('assets/vendor/css/*.css')
   .pipe(concat('vendors.css'))
   .pipe(clean())
   .pipe(gulp.dest('assets/css'));
});

gulp.task('default',['js','css'],function(){
});