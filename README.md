# Silverstripe clean theme

Create a Silverstripe production theme using a gulp.js workflow.

Includes the following tools, tasks, and workflows:

- [Browserify](http://browserify.org/) (with [browserify-shim](https://github.com/thlorenz/browserify-shim))
- [Watchify](https://github.com/substack/watchify) (caching version of browserify for super fast rebuilds)
- [SASS](http://sass-lang.com/) (super fast libsass with [source maps](https://github.com/sindresorhus/gulp-ruby-sass#sourcemap), and [autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer))
- [CoffeeScript](http://coffeescript.org/) (with source maps!)
- [BrowserSync](http://browsersync.io) for live reloading and a static server
- [Image optimization](https://www.npmjs.com/package/gulp-imagemin)
- Error handling in the console [and in Notification Center](https://github.com/mikaelbr/gulp-notify)
- Shimming non common-js vendor code with other dependencies (like a jQuery plugin)
- Generate a svg icon sprite using [gulp-svg-sprite](https://github.com/jkphl/svg-sprite)

## Dependencies / Installation

Install Node. If you use homebrew, do:

```
$ brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

```
$ cd to project
$ npm install
```

This runs through all dependencies listed in `package.json` and downloads them to a `node_modules` folder in your project directory.

__Important:__

1. Make sure that the name of your directory is `myTheme_source` (The `_source` part being the important bit.).
2. Remove the .git folder/file (file if it is a submodule) to detach from the repo and include the `_source` theme in your Silverstripe git repo.
3. Add `node_modules` and `myTheme`, or whatever the name of your generated theme is, to the project's `.gitignore` file.

## `gulp` commands

```
$ gulp
```

Will generate a dev version of the theme in `myTheme` folder (omitting the `_source`) part


```
$ gulp watch
```

Will run the default task once, start a server and watch for file changes.

```
$ gulp production
```

Will generate a production version of the theme by running the tests and compressing js & css.

## Configuration

All paths and plugin settings have been abstracted into a centralized config object in `gulp/config.js`. Adapt the paths and settings to the structure and needs of your project.

## JavaScript Tests with Karma

This repo includes a basic js testing setup with the following: [Karma](http://karma-runner.github.io/0.12/index.html), [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/). There is `karma` gulp task, which the `production` task uses to run the tests before compiling. If any tests fail, the `production` task will abort.

To run the tests and start monitoring files:
```
./node_modules/karma/bin/karma start
```

Want to just run `karma start`? Either add `alias karma="./node_modules/karma/bin/karma"` to your shell config or install the karma command line interface globally with `npm install -g karma-cli`.


## References

- Silverstripe clean theme is based on https://github.com/greypants/gulp-starter
- Read the [blog post](http://viget.com/extend/gulp-browserify-starter-faq)
- Check out the [Wiki](https://github.com/greypants/gulp-starter/wiki)




# Issues

- sass sourcemaps not working properly
- no great sass & scss linter available, promising: https://github.com/sasstools/sass-lint
- .coffeeelintignore seems not to be working so only js directory is looked at