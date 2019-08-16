import fs from 'fs';
import winston, { format } from 'winston';
import 'winston-daily-rotate-file';

const LOG_DIR = process.env.LOG_DIR || 'logs';
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR);
}

/**
 * Creates a new winston logger.
 *
 * Default transports are console and rotating files. We keep logs
 * for last 7 days. Also please see https://12factor.net/logs
 */
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: format.combine(format.colorize(), format.simple()),
      level: LOG_LEVEL
    }),
    new winston.transports.DailyRotateFile({
      format: format.combine(format.timestamp(), format.json()),
      maxFiles: '7d',
      level: LOG_LEVEL,
      dirname: LOG_DIR,
      datePattern: 'YYYY-MM-DD',
      filename: `%DATE%-${LOG_LEVEL}.log`,
      zippedArchive: true,
      maxSize: '20m'
    })
  ]
});

export const logStream = {
  write(message) {
    logger.info(message.toString());
  }
};

export default logger;
