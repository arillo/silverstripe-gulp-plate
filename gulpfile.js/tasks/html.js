const gulp = require('gulp');
const changed = require('gulp-changed');
const config = require('../config').html;
const htmlmin = require('gulp-htmlmin');
const gulpif = require('gulp-if');
const browserSync = require('browser-sync');
const removeHtml = require('gulp-remove-html');

gulp.task('html', () => {
  const isProd = global.env === 'prod';
  const isNotWatch = global.env !== 'watch';

  return gulp
    .src(config.src)
    .pipe(changed(config.dest))
    .pipe(gulpif(isNotWatch, removeHtml({ keyword: 'RemoveProd' })))
    .pipe(gulpif(isProd, htmlmin(config.compression)))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({ stream: true }));
});
