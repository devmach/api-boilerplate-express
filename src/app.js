import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import defaultRoutes from './default';
import { logStream } from './logger';

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('tiny', { stream: logStream }));
app.use(bodyParser.json({ extended: true }));

app.use('/', defaultRoutes);

export default app;
