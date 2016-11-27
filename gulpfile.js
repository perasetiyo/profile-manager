require('dotenv').load();

const gulp = require('gulp'),
  del = require('del'),
  path = require('path'),
  ava = require('gulp-ava'),
  babel = require('gulp-babel'),
  cache = require('gulp-cached'),
  concat = require('gulp-concat-util'),
  sourcemaps = require('gulp-sourcemaps'),
  chmod = require('gulp-chmod'),
  rename = require('gulp-rename');

gulp.task('clean', () => {
  return del(['build'], {force: true});
})

gulp.task('compile-lib', ['clean'], () => {
  return gulp.src('lib/**/*.js')
    .pipe(cache('transpile-lib'))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat.header('var regeneratorRuntime = require(\'babel-regenerator-runtime\');\n'))
    .pipe(concat.header('var Reflect = require(\'reflect-r\');\n'))
    .pipe(sourcemaps.write('.', { sourceRoot: path.join(__dirname, 'lib') }))
    .pipe(gulp.dest('build/lib'));
})

gulp.task('compile-api', ['clean'], () => {
  return gulp.src('api/**/*.js')
    .pipe(cache('transpile-lib'))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat.header('var regeneratorRuntime = require(\'babel-regenerator-runtime\');\n'))
    .pipe(concat.header('var Reflect = require(\'reflect-r\');\n'))
    .pipe(sourcemaps.write('.', { sourceRoot: path.join(__dirname, 'api') }))
    .pipe(gulp.dest('build/api'));
})

gulp.task('compile-bin', ['clean'], () => {
    return gulp.src('bin/*')
        .pipe(cache('transpile-bin'))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat.header('var regeneratorRuntime = require(\'babel-regenerator-runtime\');\n'))
        .pipe(concat.header('var Reflect = require(\'reflect-r\');\n'))
        .pipe(concat.header('require(\'dotenv\').load();\n'))
        .pipe(concat.header('#!/usr/bin/env node\n'))
        .pipe(sourcemaps.write('.', { sourceRoot: path.join(__dirname, 'bin') }))
        .pipe(chmod({
          owner: {
            read: true,
            write: true,
            execute: true
          },
          group: {
            read: true,
            write: true,
            execute: true
          },
          others: {
            read: true,
            write: true,
            execute: true
          }
        }))
        .pipe(gulp.dest('build/bin'));
});

gulp.task('env:dev', function () {
    gulp.src('./deploy/env/dev/dotenv')
        .pipe(rename('.env'))
        .pipe(gulp.dest('./'));
});

gulp.task('test-api', [ 'env:dev', 'compile' ], () => {
    return gulp.src('build/api/test/*.js')
        .pipe(ava());
});

gulp.task('watch', () => {
    gulp.watch('lib/**/*', [ 'compile-lib', 'compile-api' ]);
});

gulp.task('compile', [ 'compile-lib', 'compile-api', 'compile-bin' ]);
// gulp.task('compile', [ 'compile-lib', 'compile-api', 'compile-bin' ]);

gulp.task('default', [ 'compile', 'test-api' ]);
// gulp.task('default', [ 'compile' ]);
