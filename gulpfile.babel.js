'use strict';

import gulp from 'gulp';
import nodemon from 'gulp-nodemon';

/*
tasks
 */

gulp.task('start', () => {
  nodemon({
    script: './src/server',
    ext: 'ts html',
    // tasks: ['lint'],
  });
});

/*
default
 */

task('default', ['start']);
