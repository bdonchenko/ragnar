var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function() {
    var tsResult = gulp.src('src/**/*.ts')
        .pipe(tsProject());
    
    tsResult.dts
        //.pipe(concat('Ragnar.d.ts'))
        .pipe(gulp.dest('lib'));
    
    tsResult.js
        //.pipe(concat('Ragnar.js'))
        .pipe(gulp.dest('lib'));
});

