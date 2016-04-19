'use strict';

var gulp          = require('gulp');
var $             = [];
var paths         = require('./config.js').paths;

$.data            = require('gulp-data');
$.pug             = require('gulp-pug');
$.plumber         = require('gulp-plumber');


/*------------------------------------------------------------------------------
 * Pug Tasks
------------------------------------------------------------------------------*/
gulp.task('pug', function() {
  return gulp.src(paths.srcPug + '*.pug')
    .pipe($.data(function(file) { return require('../json/setting.json'); }))
    .pipe($.plumber())
    .pipe($.pug({ pretty: true }))
    .pipe(gulp.dest(paths.htmlDir));
});
