var gulp = require('gulp'),
	browserSync = require('browser-sync'),
    config = require('../../config.json');

// Static server
gulp.task('browser-sync', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: [config.paths.prod.path, config.paths.dev.path]
        },
        notify: true,
        files: [
	      config.paths.prod.path + '**/*',
	      '!http://localhost:3000/*'
        ]
    });
});