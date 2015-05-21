'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var config   = require('../config').jslint;
var coffeelint = require('gulp-coffeelint');
var stylish = require('jshint-stylish');
var coffeeStyle = require('coffeelint-stylish');

gulp.task('jshint', function(){
  return gulp.src(config.srcJs)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('coffeelint', function(){
  return gulp.src(config.srcCoffee)
    .pipe(coffeelint())
    .pipe(coffeelint.reporter(coffeeStyle));
});