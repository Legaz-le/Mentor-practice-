const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles(){
    return src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(purgecss({
            content: ['*.html']
        }).on('error', function(err) {
            console.error('PurgeCSS Error:', err.message);
            this.emit('end');
        }))
        .pipe(dest('css'));
}

function watchChange(){
     watch(['sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchChange)