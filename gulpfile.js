'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./static/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./static/styles/*.scss', gulp.series('sass'));
});
