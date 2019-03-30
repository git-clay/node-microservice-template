import server from './shared/server/app';
import controllers from './controllers';
import env from './config/env';
import middleware from './shared/server/middlewares';
import * as figlet from 'figlet';
import * as sourceMapSupport from 'source-map-support';
import providers from './config/providers';
import app from './shared/server/app';

sourceMapSupport.install();
// process.on('unhandledRejection', console.log);

const _knexConn = providers.connection;

middleware.initMiddlewares();
controllers.initControllers();
middleware.initExceptionMiddlewares();

const normalizePort = val => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const _port = normalizePort(process.env.PORT || '3000');
app.set('port', _port);

server.listen(_port);
