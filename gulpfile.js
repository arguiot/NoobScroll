var gulp = require('gulp'),
    rename = require('gulp-rename')
    uglify = require('gulp-uglify');
gulp.task('default', function() {
  gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
});