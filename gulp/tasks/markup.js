'use strict';

var gulp = require('gulp');
var changed = require('gulp-changed');
var config = require('../config').markup;
var browserSync  = require('browser-sync');

gulp.task('markup', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
