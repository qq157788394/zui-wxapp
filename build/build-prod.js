const gulp = require('gulp')
const del = require('gulp-clean')
const rename = require('gulp-rename')
const runSequence = require('run-sequence')
const $ = require('gulp-load-plugins')()


// 清空dist目录
gulp.task('clean', () => {
  return gulp.src(['../dist/'])
    .pipe($.plumber())
    .pipe(del())
})

// 编译less
gulp.task('compile-css', () => {
  return gulp.src(['../src/**/*.less', '!../src/**/_*.less'])
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.autoprefixer(['iOS >= 8', 'Android > 4.1']))
    .pipe($.cssnano({
      zindex: false,
      minifySelectors: false,
      autoprefixer: false
    }))
    .pipe(rename((path) => {
      path.extname = '.wxss'
    }))
    .pipe(gulp.dest('../dist/'))
})

// 编译js
gulp.task('compile-js', () => {
    return gulp.src(['../src/**/*.js'])
      .pipe($.plumber())
      .pipe($.eslint())
      .pipe($.eslint.format('../node_modules/eslint-friendly-formatter'))
      .pipe($.eslint.failAfterError())
      .pipe($.babel())
      // .pipe($.uglify())
      .pipe(gulp.dest('../dist/'))
});

// 编译json
gulp.task('compile-json', () => {
  return gulp.src(['../src/**/*.json'])
    .pipe($.plumber())
    .pipe($.eslint())
    .pipe($.eslint.format('../node_modules/eslint-friendly-formatter'))
    .pipe(gulp.dest('../dist/'))
});

// 编译wxml
gulp.task('compile-wxml', () => {
  return gulp.src(['../src/**/*.wxml'])
    .pipe($.plumber())
    .pipe(gulp.dest('../dist/'))
})

// 运行
gulp.task('default', () => {
  runSequence(
    // 'clean',
    ['compile-css', 'compile-js', 'compile-json', 'compile-wxml']
  )
})
