# Browserify entry point for the global.js bundle (yay CoffeeScript!)
$ = require 'jquery'
plugin = require 'plugin'

# Uncomment this for having referenced
# inline svg icons working in ie
# 
# svg4everybody = require 'svg4everybody'
# 
#remember to initialize on doc ready svg4everybody()

console.log 'main.js loaded!'


$ ->
  plugin()
