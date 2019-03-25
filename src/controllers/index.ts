import replaceEntity from './replaceEntity';
import HealthCheck from './HealthCheck';
import server from '../shared/server/app';

export default {
  /**
   * Start routes of server
   */
  initControllers() {
    server.use('/replaceEntity', replaceEntity);
    server.use('/health', HealthCheck);
  }
};
