# Browserify entry point for the global.js bundle (yay CoffeeScript!)
$ = require 'jquery'
plugin = require 'plugin'
svg4everybody = require 'svg4everybody'

console.log 'main.js loaded!'
$ ->
  svg4everybody()