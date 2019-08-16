import logger from './logger';

import app from './app';

const APP_PORT = process.env.APP_PORT || process.env.PORT || '4000';
const APP_HOST = process.env.APP_HOST || '0.0.0.0';
const EXIT_ON_ERROR = process.env.EXIT_ON_ERROR === 'true';

app.listen(APP_PORT, APP_HOST, () => {
  logger.info(`Listening on http://${APP_HOST}:${APP_PORT}`);
});

process.on('unhandledRejection', err => {
  logger.error('Unhandled rejection', err);

  if (EXIT_ON_ERROR) {
    process.exit(1);
  }
});

process.on('uncaughtException', err => {
  logger.error('Uncaught exception', err);

  if (EXIT_ON_ERROR) {
    process.exit(1);
  }
});
