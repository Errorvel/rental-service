import {Router} from 'express';
import offerRouter from './offerRoutes.js';
import userRoutes from './userRoutes.js';
import reviewRoutes from './reviewRoutes.js';

const router = new Router();

router.use('/', offerRouter);
router.use('/comments', reviewRoutes);
router.use('/users', userRoutes);
export { router };