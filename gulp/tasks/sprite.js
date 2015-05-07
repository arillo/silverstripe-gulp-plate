var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var del = require('del');
var config  = require('../config').svgSprite;
var handleErrors = require('../util/handleErrors');

// Clean
gulp.task('sprite:clean', function(cb){
  del([config.dest + '/src/images/sprite-*.svg'], {dot: true}, cb);
});

gulp.task('sprite', ['sprite:clean'], function (){

  var sprite = gulp.src(config.src)
    .pipe(svgSprite(config.options))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));

  return sprite;
});
