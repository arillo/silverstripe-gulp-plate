/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var config   = require('../config');
var browserSync   = require('browser-sync');
var runSequence = require('run-sequence');

gulp.task('watch', function() {

  runSequence('default', ['watchify','browserSync']);

  gulp.watch(config.svgSprite.src,  ['sprite']);
  gulp.watch(config.sass.src,       ['sass']);
  gulp.watch(config.images.src,     ['images', browserSync.reload]);
  gulp.watch(config.markup.src,     ['markup', browserSync.reload]);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
