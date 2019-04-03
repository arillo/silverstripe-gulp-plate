const { src, dest } = require('gulp');
const changed = require('gulp-changed');
const config = require('../config').html;
const htmlmin = require('gulp-htmlmin');
const gulpif = require('gulp-if');
const browserSync = require('browser-sync');
const removeHtml = require('gulp-remove-html');
const replace = require('gulp-replace');

function html() {
  const isProd = global.env === 'prod';
  const isWatch = global.env === 'watch';

  return src(config.src)
    .pipe(changed(config.dest))
    .pipe(gulpif(isProd, removeHtml({ keyword: 'Dev' })))
    .pipe(gulpif(isProd, replace('%themedir%', config.themeDir)))
    .pipe(gulpif(isWatch, removeHtml({ keyword: 'Prod' })))
    .pipe(gulpif(isProd, htmlmin(config.compression)))
    .pipe(dest(config.dest))
    .pipe(browserSync.reload({ stream: true }));
}

module.exports = html;
