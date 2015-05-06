var gulp = require('gulp');
var gulp = require('gulp-svg-sprite');
var del = require('del');
var config  = require('../config').svgSprite;

// Clean
gulp.task('sprite:clean', function(cb){
  del(['./images/sprite-*.svg'], {dot: true}, cb);
});

// Svg
gulp.task('sprite', ['sprite:clean'], function (){
  return gulp.src('./svg-src/*.svg')
    .pipe(svgSprite(config)).on('error', function(error){gutil.log(error);})
    .pipe(gulp.dest('./'));
});
