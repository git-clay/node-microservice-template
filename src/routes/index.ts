import replaceEntity from './replaceEntity';
import HealthCheck from './HealthCheck';
import server from '../shared/server';

export default {
  /**
   * Start routes of server
   */
  initRoutes() {
    server.use('/replaceEntity', replaceEntity);
    server.use('/health', HealthCheck);
  }
};
