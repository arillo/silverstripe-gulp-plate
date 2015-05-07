var path = require('path');
var gulp = require('gulp');

function distName() {
  var folder = path.dirname(__dirname);
  folder = path.basename(folder);
  return folder.replace('_source', '');
}

var folderName = distName()
var dest = "./../"+ folderName;
var src = './src';


module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },

  sass: {
    src: src + "/sass/**/*.{sass,scss}",
    dest: dest + '/css',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },

  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },

  markup: {
    src: src + "/templates/**",
    dest: dest + "/templates"
  },

  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/javascript/global.coffee',
      dest: dest + '/js',
      outputName: 'global.js',
      // Additional file extentions to make optional
      extensions: ['.coffee', '.hbs'],
      // list of modules to make require-able externally
      require: ['jquery', 'backbone/node_modules/underscore']
      // See https://github.com/greypants/gulp-starter/issues/87 for note about
      // why this is 'backbone/node_modules/underscore' and not 'underscore'
    }, {
      entries: src + '/javascript/page.js',
      dest: dest + 'js',
      outputName: 'page.js',
      // list of externally available modules to exclude from the bundle
      external: ['jquery', 'underscore']
    }]
  },

  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/*.js',
    dest: dest
  },

  svgSprite: {
    src: src + '/icons/*.svg',
    dest: './',
    options : {
      mode: {
        css: {
          prefix: ".i-%s",
          common: "i",
          dimensions: "-s",
          sprite: "../src/images/sprite.svg",
          render: {
            scss: {
              template: "./gulp/tpl/_sprite.scss",
              dest: "../src/sass/_sprite.scss"
            }
          }
        }
      }
    }
  }
};
