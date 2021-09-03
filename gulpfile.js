const 
	gulp = require('gulp'),
	del = require('delete'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	bs_reload = browserSync.reload


let dist = 'dist/';
let src = 'src/'


// CLEAN Working Folder

gulp.task('clean_folder', function(cb) {
	del([dist + '*'], cb);
});
gulp.task('clean:dist', function() {
	return del.sync(dist + '*');
});

// copy and compile

gulp.task('html', function() {
	return gulp.src(src + '*.*')
	.pipe(gulp.dest(dist))
});

gulp.task('css', function() {
	return gulp.src([src + 'css/**/*.css'])
	.pipe(gulp.dest(dist + 'css'))
});

gulp.task('images', function() {
	return gulp.src([src + 'img/**/*.*'])
	.pipe(gulp.dest(dist + 'img'))
});

gulp.task('sass', function() {
	return gulp.src([src + 'sass/**/*.+(scss|sass)'])
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(dist + 'css'))
});

gulp.task('scripts', function() {
	return gulp.src([src + 'js/**/*.js'])
	.pipe(gulp.dest(dist + 'js'))
});

gulp.task('browserSync', function() {
	browserSync.init({
	  server: {
		baseDir: dist
	  },
	})
})


gulp.task('watch_me', function(){
	//gulp.watch('app/scss/**/*.scss', ['sass']); 
	// Other watchers
	gulp.watch(src, gulp.series(['clean_folder','html','css','img','sass','js'])
	.on('change', bs_reload));
  })