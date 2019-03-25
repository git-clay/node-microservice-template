import * as envDbConfig from './knexfile.js';
import * as knex from 'knex';
const environment = process.env.NODE_ENV || 'development';
const config = envDbConfig[environment];

export default knex(config);
