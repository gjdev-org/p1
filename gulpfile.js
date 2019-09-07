var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');

gulp.task('js', function(done) {
    gulp.src('assets/vendor/js/*.js')
        .pipe(concat('megascript.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
    done();
});

gulp.task('css', function(done){
    gulp.src('assets/vendor/css/*.css')
	    .pipe(concat('megastyle.min.css'))
	    .pipe(clean())
        .pipe(gulp.dest('assets/css'));
    done();
});

gulp.task('default', gulp.parallel('js', 'css'));