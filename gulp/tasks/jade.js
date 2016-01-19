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


gulp.task('angular', function() {
    if(config.angular){
        return gulp.src(config.paths.dev.views.angular.templates + '*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(config.paths.prod.angular.templates));
    }
});


gulp.task('jade-min', function() {
    return gulp.src(config.paths.dev.views.pages + '*.jade')
    .pipe(jade())
    .pipe(gulp.dest(config.paths.prod.root));
});