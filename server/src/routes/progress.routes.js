import express from 'express';
import { protect } from '../middleware/auth.js';
import { completeLesson, getMyProgress } from '../controllers/progress.controller.js';

const router = express.Router();
router.get('/me', protect, getMyProgress);
router.post('/complete', protect, completeLesson);
export default router;
