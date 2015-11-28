'use strict';

var gulp          = require('gulp');
var $             = [];
var paths         = require('./config.js').paths;

$.data            = require('gulp-data');
$.slim            = require('gulp-slim');
$.plumber         = require('gulp-plumber');


/*------------------------------------------------------------------------------
 * Slim Tasks
------------------------------------------------------------------------------*/
gulp.task('slim', function() {
  return gulp.src(paths.srcSlim + '*.slim')
    .pipe($.data(function(file) { return require('../json/setting.json'); }))
    .pipe($.plumber())
    .pipe($.slim({ pretty: true }))
    .pipe(gulp.dest(paths.htmlDir));
});
