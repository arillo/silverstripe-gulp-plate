const path = require('path');
const fs = require('fs');

const dir = process.env.PWD;

const projectFolder = path.basename(path.resolve(dir, '../../'));
const themeDir = path.basename(dir).replace('source_', '');

const src = path.resolve(dir, 'src');
const dest = path.resolve(dir, '..', themeDir);

let proxy = 'php7.test';
if (fs.existsSync(__dirname + '/config-local.js')) {
  proxy = require('./config-local.js').proxy;
}

// Generic task to move static assets.
// Files are not watched for changes.
// All all the paths you need.
const assets = [
  // {
  //   src: `${src}/fonts/**`,
  //   dest: `${dest}/fonts`,
  // },
];

const browserSync = {
  port: 9000,
  proxy: `http://${proxy}/${projectFolder}`,
  notify: false,
  open: false,
};

const html = {
  src: `${src}/templates/**/*.*`,
  dest: `${dest}/templates`,
  themeDir,

  compression: {
    collapseWhitespace: true,
  },
};

const images = {
  src: `${src}/images/**`,
  dest: `${dest}/images`,
};

const scss = {
  src: `${src}/scss/**/*.{sass,scss}`,
  dest: `${dest}/css`,
  options: {
    outputStyle: 'expanded',
  },

  // Css Selectors that should be removed from your css.
  // useful to remove unneeded thirdparty styles.
  remove: [],

  compression: {
    preset: 'default',
  },
};

const sprite = {
  src: `${src}/icons/**/*.svg`,
  dest: `${dest}/images`,
  scssDest: `${src}/scss/base`,
  spriteName: 'sprite.svg',
  template: `${dir}/gulpfile.js/tpl/_sprite.scss`,
};

const webpack = {
  context: `${src}/js`,
  entry: {
    // Path relative to `context`
    main: ['./main.js'],
  },
  output: {
    filename: '[name].js',
    path: `${dest}/js`,
    // Path on server
    // publicPath: `/${projectFolder}/themes/${themeDir}/js`, // SS3
    publicPath: `/${projectFolder}/resources/themes/${themeDir}/js`, // SS4
  },
  resolve: {
    alias: {
      utils: `${src}/js/utils`,
      modules: `${src}/js/modules`,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
    ],
  },
};

const report = {
  src: [scss.dest, webpack.output.path, images.dest],
};

module.exports = {
  dir,
  dest,
  src,
  browserSync,
  scss,
  assets,
  images,
  html,
  sprite,
  report,
  webpack,
};
