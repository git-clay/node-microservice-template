import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.POSTGRES_DB || !process.env.POSTGRES_URL) {
  // throw new PostgrsNotConnectedException();
}

export default {
  NODE_ENV: process.env.NODE_ENV,
  server_port: process.env.PORT,
  redis_url: process.env.REDIS_URL,
  onpremise_url: process.env.ONPREMISE_URL,
  onpremise_token: process.env.ONPREMISE_TOKEN,
  app_token: process.env.APPLICATION_TOKEN
};
