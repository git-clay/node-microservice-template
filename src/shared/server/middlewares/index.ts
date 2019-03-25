import server from '../app';

import * as logger from 'morgan';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';

import exception from './exception';
import notFound from './404';

export default {
  initMiddlewares() {
    server.use(compression());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(cookieParser());
    server.use(cors());
    if (process.env.NODE_ENV !== 'production') {
      server.use(morgan('tiny'));
    }
    if (process.env.NODE_ENV !== 'test') { server.use(logger('dev')); }

  },
  initExceptionMiddlewares() {
    server.use(notFound);
    server.use(exception);
  }
};
