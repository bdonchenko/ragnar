var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('copy', function(){
    gulp.src('./README.md')
        .pipe(gulp.dest('lib'));
});


gulp.task('scripts', function() {
    gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('lib'));
});

gulp.task('default', ['scripts', 'copy']);

