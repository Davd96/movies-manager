
const { src, dest, series, watch } = require('gulp');

const mainBowerFiles = require('main-bower-files');
const bowerNormalize = require('gulp-bower-normalize');

const jade = require('gulp-jade');
const sass = require('gulp-sass');
const server = require('browser-sync').create();
const del = require('del');

const paths = {
    bowerInput: mainBowerFiles(),
    jadeInput: './app/**/*.jade',
    jsInput: './app/**/*.js',
    cssInput: './app/**/*.scss',

    bowerOutput: './dist/assets/bower',
    jadeOutput: './dist/',
    jsOutput: './dist/assets/js',
    cssOutput: './dist/assets/css'
}


function bower() {
    return src(paths.bowerInput, { base: 'bower_components' })
        .pipe(bowerNormalize({ bowerJson: './bower.json' }))
        .pipe(dest('./dist/assets/bower'));
}

function html() {
    return src(paths.jadeInput, { allowEmpty: true })
        .pipe(jade())
        .pipe(dest(paths.jadeOutput));
}

function js() {
    return src(paths.jsInput)
        .pipe(dest(paths.jsOutput));
}

function css() {
    return src(paths.cssInput)
        .pipe(sass())
        .pipe(dest(paths.cssOutput));
}

function startServer() {
    server.init({
        server: {
            baseDir: "./dist"
        }
    });
}
async function clean(cb) {
    await del('./dist/');
    cb();

}

function reload(cb) {
    server.reload();
    cb();
}

watch('./app/**/*', series(clean, bower, html, js, css, reload));
watch('./bower.json', series(clean, bower, html, js, css, reload));


exports.default = series(clean, bower, html, js, css, startServer);
