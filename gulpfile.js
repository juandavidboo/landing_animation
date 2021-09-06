const 
	gulp = require('gulp'),
	del = require('delete'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	bSync_reload = browserSync.reload

let dist = 'dist/';
let src = 'src/'

function clean_folder (cb) {
	del([dist + '/*'], cb);
}

function html() {
	return gulp.src(src + '*.*')
	.pipe(gulp.dest(dist))
}

function fonts(){
	return gulp.src(src + 'fonts/**/*.*')
	.pipe(gulp.dest(dist + '/fonts'));
}

function css(){
	return gulp.src(src + 'css/**/*.css')
	.pipe(gulp.dest(dist + '/css'));
}

function sass_css(){
	return gulp.src(src + 'sass/**/*.+(scss|sass)')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(dist + '/css'));
}


function scripts(){
	return gulp.src(src + 'js/**/*.js')
	.pipe(gulp.dest(dist + '/js'));
}

function img(){
	return gulp.src(src + 'img/**/*.*')
	.pipe(gulp.dest(dist + '/img'));
}

// Serve to browser
function serve(done) {
	browserSync.init(null, {
		notify: false,
		server: {
		baseDir: dist
		}
	});
	done();
}

// Watch for changes
function watch_src() {
	gulp.watch(src, gulp.series(html, css, sass_css, img, scripts))
		.on('change', bSync_reload);
}

exports.default = gulp.series(clean_folder, fonts, html, css, sass_css, img, scripts, serve, watch_src);
exports.build = gulp.series(clean_folder, fonts, html, css, sass_css, img, scripts);