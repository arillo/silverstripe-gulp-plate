'use strict';

var gulp      = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var del       = require('del');
var config    = require('../config').svgSprite;
var ifElse    = require('gulp-if-else');
var replace   = require('gulp-replace');
var plumber   = require('gulp-plumber');


// Clean
/* jshint ignore:start */
gulp.task('sprite:clean', function(cb){
  del([config.dest + '/images/sprite-*.svg'], {dot: true}, cb);
});
/* jshint ignore:end */

gulp.task('sprite', ['sprite:clean'], function (cb){
  return gulp.src(config.glob, {cwd: config.src})
    .pipe(ifElse(config.type === 'inline',
      function() {
        return plumber()
        .pipe(svgSprite(config.options)).on('error', function(error){ console.log(error); })
        .pipe(replace(/fill="#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})"/g, ''))
        .pipe(gulp.dest(config.dest))
      },
      function() {
        return svgSprite(config.optionsBackground)
        .on('error', function(error){ console.log(error); })
        .pipe(gulp.dest(config.dest));
    }))
});



