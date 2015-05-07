# Browserify entry point for the global.js bundle (yay CoffeeScript!)
# View =  require './view'
# view = new View(el: '#content')
$ = require 'jquery'
plugin  = require 'plugin'

console.log 'global.js loaded!'
plugin()