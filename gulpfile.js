//Requiring packages
//the thing inside brackets has to match the node folder name
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();
    gulp = require('gulp');
    eslint = require('gulp-eslint');
  

//Gulp Tasks below

//Gulp Scripts Task
gulp.task('scripts', ['lint'], function(){
  gulp.src('./js/*.js')
  .pipe(uglify()) //call the uglify function on the files
  .pipe(rename({extname: '.min.js'})) //rename uglified file
  .pipe(gulp.dest('./build/js'))
});

//Gulp Say hello Task
gulp.task('say_hello', function(){
  console.log('hello');
});

//Gulp task eslint
gulp.task('lint', function(){
return gulp.src(['./js/*.js'])
.pipe(eslint())
.pipe(eslint.format())
.pipe(eslint.failAfterError());
});

//Reload browser
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });// end of browser sync init
    gulp.watch(['./build/js/*.js']).on('change', browserSync.reload); //in here is what should be seen on the live site
});

//Gulp Watch Function
gulp.task('watch', function(){
   gulp.watch('js/*.js', ['scripts']);
   gulp.watch('js/*.js', ['lint']);
});

//Gulp default task (always at the bottom)
gulp.task('default', ['watch', 'lint', 'browser-sync']); 
