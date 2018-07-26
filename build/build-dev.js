const gulp = require('gulp')
const del = require('del')
const rename = require('gulp-rename');
const runSequence = require('run-sequence')
const $ = require('gulp-load-plugins')()

// 清空dist目录
gulp.task('clean', () => {
  return del(['./dist/**'])
})

gulp.task('compile-css', () => {
  return gulp.src(['../src/**/*.less', '!../src/**/_*.less'])
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.autoprefixer(['iOS >= 8', 'Android > 4.1']))
    // .pipe($.cssnano({
    //   zindex: false,
    //   minifySelectors: false,
    //   autoprefixer: false
    // }))
    .pipe(rename((path) => {
      path.extname = '.wxss';
    }))
    .pipe(gulp.dest('../examples/dist/'))
})

gulp.task('compile-js', () => {
    return gulp.src(['../src/**/*.js'])
      .pipe($.plumber())
      .pipe($.eslint())
      .pipe($.eslint.format('../node_modules/eslint-friendly-formatter'))
      .pipe($.eslint.failAfterError())
      .pipe($.babel())
      // .pipe($.uglify())
      .pipe(gulp.dest('../examples/dist/'))
})

gulp.task('compile-json', () => {
    return gulp.src(['../src/**/*.json'])
      .pipe($.plumber())
      .pipe($.eslint())
      .pipe($.eslint.format('../node_modules/eslint-friendly-formatter'))
      .pipe(gulp.dest('../examples/dist/'))
})

gulp.task('compile-wxml', () => {
    return gulp.src(['../src/**/*.wxml'])
      .pipe($.plumber())
      .pipe(gulp.dest('../examples/dist/'))
})

gulp.task('auto', () => {
    gulp.watch('../src/**/*.less', ['compile-css']);
    gulp.watch('../src/**/*.js', ['compile-js']);
    gulp.watch('../src/**/*.json', ['compile-json']);
    gulp.watch('../src/**/*.wxml', ['compile-wxml']);
})

gulp.task('default', () => {
  runSequence(
    'clean',
    ['compile-css', 'compile-js', 'compile-json', 'compile-wxml'],
    'auto'
  )
})
