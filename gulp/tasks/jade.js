var gulp = require('gulp'),
    jade = require('gulp-jade'),
    config = require('../../config.json');

gulp.task('jade', function() {
    return gulp.src(config.paths.dev.views.pages + '*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(config.paths.prod.root));
});


gulp.task('jade-min', function() {
    return gulp.src(config.paths.dev.views.pages + '*.jade')
        .pipe(jade())
        .pipe(gulp.dest(config.paths.prod.root));
});