import { Router } from 'express';
import { handlerIndex } from './controller';

const router = Router();

/**
 * GET /
 *
 * Returns current time
 */
router.get('/', handlerIndex);

export default router;
