var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./src/css/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch'], function() {
  console.log('Start watch sass')
});
