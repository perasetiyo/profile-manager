require('dotenv').load();

const gulp = require('gulp'),
    path = require('path'),
    ava = require('gulp-ava'),
    babel = require('gulp-babel'),
    cache = require('gulp-cached'),
    concat = require('gulp-concat-util'),
    sourcemaps = require('gulp-sourcemaps'),
    chmod = require('gulp-chmod');

gulp.task('compile-lib', () => {
    return gulp.src('lib/**/*.js')
        .pipe(cache('transpile-lib'))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat.header('var regeneratorRuntime = require(\'babel-regenerator-runtime\');\n'))
        .pipe(concat.header('var Reflect = require(\'reflect-r\');\n'))
        .pipe(sourcemaps.write('.', { sourceRoot: path.join(__dirname, 'lib') }))
        .pipe(gulp.dest('build/lib'));
});

gulp.task('compile-src', () => {
    return gulp.src('src/**/*.js')
        .pipe(cache('transpile-src'))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat.header('var regeneratorRuntime = require(\'babel-regenerator-runtime\');\n'))
        .pipe(concat.header('var Reflect = require(\'reflect-r\');\n'))
        .pipe(sourcemaps.write('.', { sourceRoot: path.join(__dirname, 'src') }))
        .pipe(gulp.dest('build/src'));
});

gulp.task('compile-bin', () => {
    return gulp.src('bin/*')
        .pipe(cache('transpile-bin'))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat.header('var regeneratorRuntime = require(\'babel-regenerator-runtime\');\n'))
        .pipe(concat.header('var Reflect = require(\'reflect-r\');\n'))
        .pipe(concat.header('require(\'dotenv\').load();\n'))
        .pipe(concat.header('#!/usr/bin/env node\n'))
        .pipe(sourcemaps.write('.', { sourceRoot: path.join(__dirname, 'bin') }))
        .pipe(chmod(755))
        .pipe(gulp.dest('build/bin'));
});

gulp.task('compile-test', () => {
    return gulp.src('test/**/*.js')
        .pipe(cache('transpile-test'))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat.header('var regeneratorRuntime = require(\'babel-regenerator-runtime\');\n'))
        .pipe(concat.header('var Reflect = require(\'reflect-r\');\n'))
        .pipe(concat.header('require(\'dotenv\').load({path:\'../../deploy/env/test/dotenv\'});\n'))
        .pipe(sourcemaps.write('.', { sourceRoot: path.join(__dirname, 'test') }))
        .pipe(gulp.dest('build/test'));
});

gulp.task('test', [ 'compile' ], () => {
    return gulp.src('build/test/*.js')
        .pipe(ava());
});

gulp.task('watch', () => {
    gulp.watch('lib/**/*', [ 'compile-lib', 'compile-src', 'compile-test' ]);
});

gulp.task('compile', [ 'compile-lib', 'compile-src', 'compile-test', 'compile-bin' ]);

gulp.task('default', [ 'compile', 'test' ]);
