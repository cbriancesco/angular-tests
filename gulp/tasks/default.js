var gulp = require('gulp');

gulp.task('default', ['browser-sync', 'stylus', 'jade', 'angular', 'fonts', 'thirdpartyJs', 'thirdpartyCss', 'data', 'root', 'images', 'scripts', 'watch']);

gulp.task('build', ['stylus-min', 'jade-min', 'angular', 'fonts', 'thirdpartyJs', 'thirdpartyCss', 'data', 'root', 'images', 'scripts-min']);
