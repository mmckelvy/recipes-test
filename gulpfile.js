var gulp = require('gulp');
var stylus = require('gulp-stylus');
var shell = require('gulp-shell');
var nodemon = require('gulp-nodemon');

// Compile Stylus files.
gulp.task('css', function() {
	gulp.src('./public/css/src/styles.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./public/css/lib'));
});

// Create Browserify bundle.
gulp.task('scripts:client', shell.task([
	'browserify -t jadeify ./public/js/index.js -o ./public/js/dist/bundle.js'
])); 

// Start the server.
gulp.task('start', shell.task([
	'node app.js'
]));

// Watch files for changes.
gulp.task('watch', function() {
	gulp.watch(['./public/css/src/styles.styl'], ['css']);
	gulp.watch(['./public/js/*.js'], ['scripts:client']);
});

gulp.task('default', ['css', 'scripts:client', 'start', 'watch']);

