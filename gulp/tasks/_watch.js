/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var config   = require('../config');
var browserSync   = require('browser-sync');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');


gulp.task('watch', ['clean'], function() {
  runSequence('default', ['watchify','browserSync']);

  watch(config.svgSprite.src, function(){
    runSequence('sprite:cleanDest','sprite', 'images', browserSync.reload);
  });

  // gulp.watch(config.svgSprite.src,  ['sprite', browserSync.reload]);
  gulp.watch(config.sass.src,       ['sass']);
  gulp.watch(config.images.src,     ['images', browserSync.reload]);
  gulp.watch(config.markup.src,     ['markup', browserSync.reload]);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
