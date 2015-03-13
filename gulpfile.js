'use strict';

gulp.task('lint', ['eslint', 'jscs', 'jshint', 'lintspaces']);

gulp.task('default', ['lint'], function() {
});
