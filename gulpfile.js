//Requiring packages
//the thing inside brackets has to match the node folder name
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();
 

//Gulp Tasks below

//Gulp Scripts Task
gulp.task('scripts', function(){
  gulp.src('./js/*.js')
  .pipe(uglify()) //call the uglify function on the files
  .pipe(rename({extname: '.min.js'})) //rename uglified file
  .pipe(gulp.dest('./build/js'))
});

//Gulp Say hello Task
gulp.task('say_hello', function(){
  console.log('hello');
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
});

//Gulp default task (always at the bottom)
gulp.task('default', ['watch', 'browser-sync']); 
