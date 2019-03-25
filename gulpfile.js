import { task } from 'gulp';
import nodemon from 'gulp-nodemon';

/*
tasks
 */

task('start', () => {
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
