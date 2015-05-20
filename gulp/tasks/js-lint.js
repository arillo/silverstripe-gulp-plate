var gulp = require('gulp');
var jshint = require('gulp-jshint');
var config   = require('../config').jslint;
var coffeelint = require('gulp-coffeelint');

gulp.task('jshint', function(){
  return gulp.src(config.srcJs)
    .pipe(jshint())
    .on('error', function(err) {
      console.log(err);
    });
});

gulp.task('coffeelint', function(){
  return gulp.src(config.srcCoffee)
    .pipe(coffeelint())
    .on('error', function(err) {
      console.log(err);
    });
});