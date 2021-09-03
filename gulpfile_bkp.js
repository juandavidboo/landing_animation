const { series, src, dest, watch } = require('gulp'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload,
	del = require('delete'),
	handlebars = require('gulp-compile-handlebars'),
	rename = require('gulp-rename'),
	replace = require('gulp-replace'),
	sass = require('gulp-sass');


// Working folder definition
let cfg = {
	src: './src',
	dev: './dev',
	dist: './dist'
};

// Working folder manual setup
cfg.wf = cfg.dist;

function set_wf_dev(done) {
	cfg.wf = cfg.dev;
	done();
}

function set_wf_dist(done) {
	cfg.wf = cfg.dist;
	done();
}


// CLEAN Working Folder
function clean_wf (cb) {
	del([cfg.wf + '/*'], cb);
	//del([HTML_dist], cb);
}

// Compile handlebars to html
/*function compile_html() {
	return src('./src/pages/*.hbs')
	.pipe(handlebars({}, {
		ignorePartials: true,
		batch: ['./src/partials']
	}))
	.pipe(rename({
		extname: '.html'
	}))
	.pipe(replace(/\uFEFF/ig, "")) //cut out zero width nbsp characters the compiler adds in
	.pipe(dest([cfg.wf + '/html']));
};*/

function fonts(){
	return src('./src/fonts/**/*.*')
	.pipe(dest([cfg.wf + '/fonts']));
}

function css(){
	return src('./src/css/**/*.css')
	.pipe(dest([cfg.wf + '/css']));
}

function scss_css(){
    return src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest([cfg.wf + '/css']));
}


function scripts(){
	return src('./src/js/**/*.js')
	.pipe(dest([cfg.wf + '/js']));
}

function img(){
	return src('./src/img/**/*.*')
	.pipe(dest([cfg.wf + '/img']));
}


// Serve to browser
function serve(done) {
	browserSync.init(null, {
	  notify: false,
	  server: {
		baseDir: cfg.wf,
		directory: true
	  }
	});
	done();
  }

// Watch for changes
function watch_src() {
	watch(cfg.src, series(compile_html, css, scss_css, img, scripts))
	  .on('change', reload);
  }


exports.default = series(clean_wf, set_wf_dist, fonts, css, scss_css, compile_html, img, scripts, serve, watch_src);

exports.build = series(clean_wf, set_wf_dist, fonts, css, scss_css, compile_html, img, scripts);