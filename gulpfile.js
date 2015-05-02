var gulp = require('gulp');

require('gulp-load')(gulp);
gulp.loadTasks(__dirname);

gulp.task('build', ['less', 'transpile', 'browserify-prd', 'entry']);

gulp.task('default', [
  'less',
  'transpile',
  'entry',
  'watch',
  'server'
]);
