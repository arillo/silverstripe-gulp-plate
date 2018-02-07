const path = require('path');

const dir = process.env.PWD;

const projectFolder = path.basename(path.resolve(dir, '../../'));
const themeFolder = path.basename(dir).replace('source_', '');

const src = path.resolve(dir, 'src');
const dest = path.resolve(dir, '..', themeFolder);

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

  compression: {
    collapseWhitespace: true,
  },
};

const images = {
  src: `${src}/images/**`,
  dest: `${dest}/images`,
};

const sass = {
  src: `${src}/sass/**/*.{sass,scss}`,
  dest: `${dest}/css`,
  options: {
    outputStyle: 'expanded',
    indentedSyntax: true,
    // Include paths to thirdparty styles
    includePaths: ['./node_modules/normalize.css'],
  },

  prefix: 'last 3 versions',

  // Css Selectors that should be removed from your css.
  // useful to remove unneeded thirdparty styles.
  remove: [],

  compression: {
    safe: true,
    core: true,
    autoprefixer: false,
    discardComments: {
      removeAll: true,
    },
  },
};

const sprite = {
  src: `${src}/icons/**/*.svg`,
  dest: `${dest}/images`,
  sassDest: `${src}/sass/base`,
  spriteName: 'sprite.svg',
  template: `${dir}/gulpfile.js/tpl/_sprite.scss`,
};

const js = {
  context: `${src}/js`,
  entry: {
    // Path relative to `context`
    main: ['./main.js'],
  },
  output: {
    filename: '[name].js',
    path: `${dest}/js`,
    // Path on server
    publicPath: `/${projectFolder}/themes/${themeFolder}/js`,
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, '../src/js/utils'),
      modules: path.resolve(__dirname, '../src/js/modules'),
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
  src: [sass.dest, js.output.path, images.dest],
};

module.exports = {
  dir,
  dest,
  src,
  browserSync,
  sass,
  assets,
  images,
  html,
  sprite,
  report,
  js,
};
