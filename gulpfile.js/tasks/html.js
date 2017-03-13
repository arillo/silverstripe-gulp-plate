/* eslint import/no-extraneous-dependencies: 0 */

const gulp          = require('gulp');
const changed       = require('gulp-changed');
const config        = require('../config').html;
const htmlmin       = require('gulp-htmlmin');
const gulpif        = require('gulp-if');
const browserSync   = require('browser-sync');

gulp.task('html', function() {
  const isProd = global.env === 'prod';

  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(gulpif(isProd, htmlmin(config.compression)))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
