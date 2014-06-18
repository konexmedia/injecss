/*
 * injecss
 *
 * Copyright(c) 2014 André König <andre.koenig@konexmedia.com>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@konexmedia.com>
 *
 */

'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sequence = require('run-sequence');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var header = require('gulp-header');
var open = require('gulp-open');

var pkg = require('./package.json');

var paths = {};

var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version <%= pkg.version %>',
    ' * @author <%= pkg.author.name %> (<%= pkg.author.email %>)',
    ' * @license <%= pkg.license %>',
    ' *',
    ' */', ''].join('\n');

paths.sources = ['./index.js'];
paths.test = ['./test.html'];
paths.lintables = ['./*.js'];
paths.dist = './dist';

gulp.task('lint', function () {
    return gulp.src(paths.lintables)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
    return sequence('browserify:build', function () {
        return gulp.src(paths.test)
            .pipe(open());
    });
});

gulp.task('browserify:build', function () {
    return gulp.src(paths.sources)
        .pipe(browserify({
            standalone: 'konexmedia.' + pkg.name
        }))
        .pipe(uglify())
        .pipe(rename(pkg.name + '.min.js'))
        .pipe(header(banner, {pkg : pkg}))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('build', ['lint', 'browserify:build']);

gulp.task('default', ['build']);