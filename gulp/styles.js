'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  gulp.task('styles', function () {
    var sassOptions = {
      style: 'expanded'
    };

    var injectFiles = gulp.src([
      options.src + '/{assets,components}/stylesheets/**/*.scss',
      '!' + options.src + '/assets/stylesheets/index.scss',
      '!' + options.src + '/assets/stylesheets/vendor.scss'
    ], { read: false });

    var injectOptions = {
      transform: function(filePath) {
        filePath = filePath.replace(options.src + '/assets/stylesheets/', '');
        filePath = filePath.replace(options.src + '/components/', '../components/');
        return '@import \'' + filePath + '\';';
      },
      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    };

    var indexFilter = $.filter('index.scss');
    var cssFilter = $.filter('**/*.css');

    return gulp.src([
      options.src + '/assets/stylesheets/index.scss',
      options.src + '/assets/stylesheets/vendor.scss'
    ])
    .pipe(indexFilter)
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(indexFilter.restore())
    .pipe($.rubySass(sassOptions)).on('error', options.errorHandler('RubySass'))
    .pipe(cssFilter)
    .pipe($.sourcemaps.init({ loadMaps: true }))
    .pipe($.autoprefixer()).on('error', options.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(cssFilter.restore())
    .pipe(gulp.dest(options.tmp + '/serve/app/'))
    .pipe(browserSync.reload({ stream: true }));
  });
};
