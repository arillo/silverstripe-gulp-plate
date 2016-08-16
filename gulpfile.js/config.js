'use strict';

var convertToRem  = require('./util/convertToRem');
var path          = require('path');

function destName() {
  var folder = path.dirname(__dirname);
  folder = path.basename(folder);
  return folder.replace('source_', '');
}

function baseName() {
  var folder = path.join(__dirname, '..', '..', '..');
  return path.parse(folder).base;
}

var baseFolderName  = baseName();
var destFolderName  = destName();
var dest            = './../' + destFolderName;
var src             = './src';


module.exports = {
  destFolder: dest,

  browserSync: {
    proxy: 'http://arillo.dev/' + baseFolderName,
    port: 9000,
    notify: false,
    open: false
  },

  sass: {
    src: src + '/sass/**/*.{sass,scss}',
    dest: dest + '/css',
    settings: {
      indentedSyntax: true,
      outputStyle: 'expanded'
    },
    prefix: [
      'ie >= 10',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 28',
      'ios >= 8',
      'edge >= 13',
      'android >= 4.4',
      'bb >= 10'
    ],
    // Css Selectors that should be removed from your css.
    // useful to remove unneeded thirdparty styles.
    remove: []
  },

  // Generic move task, useful to move assets that do
  // not need transformations. Keep in mind that
  // these files will not be watched and are only
  // moved when the default task is executed.
  move: [
    // {
    //   src: src + '/fonts/**',
    //   dest: dest + '/fonts'
    // }
  ],

  html: {
    src: src + '/templates/**',
    dest: dest + '/templates'
  },

  images: {
    src: src + '/images/**',
    dest: dest + '/images'
  },

  eslint: {
    src: src + '/js/**/*.js',
    options: './eslintrc.json'
  },

  svgSprite: {
    src: src + '/icons',
    glob: '**/*.svg',
    dest: dest + '/images',

    // Sprite type:
    // 1. `symbol` for inline SVGs
    // 2. `css` for sprites as css background image
    type: 'symbol',

    // These paths are not very straight forward as
    // the svg-sprite plugin as a strange API.
    sassDest: '../../source_' + destFolderName + '/src/sass/base/_sprite.scss',
    spriteImgName: 'sprite.svg',
    templateSymbol: 'gulpfile.js/tpl/_sprite-symbol.scss',
    templateCss: 'gulpfile.js/tpl/_sprite-css.scss',
    templateVars: {
      cssPath: '../images/',
      rem: convertToRem
    },
  },

  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below.
    // See README.md for more info.
    bundleConfigs: [
      {
        entries: src + '/js/main.js',
        dest: dest + '/js',
        outputName: 'main.js'
      }
    ]
  },

  production: {
    dest: dest,

    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/*.js',

    cssDest: dest + '/css',
    jsDest: dest + '/js',

    cssCompressionOpts: {
      safe: true,
      mergeLonghand: false,
      discardComments: {
        removeAll: true
      }
    },

    reportSrc: [
      dest + '/css/*.css',
      dest + '/js/*.js',
      dest + '/images/**/*'
    ]
  }
};
