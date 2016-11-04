'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('public/stylesheets/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets/css/'));
});

gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
gulp.watch('public/stylesheets/**/*.scss', ['sass']);

gulp.task('watch', function(){
  gulp.watch('public/stylesheets/sass/**/*.scss', ['sass']);
  // Other watchers
})