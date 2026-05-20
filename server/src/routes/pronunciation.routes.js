import express from 'express';
import { protect } from '../middleware/auth.js';
import { analyze, history } from '../controllers/pronunciation.controller.js';

const router = express.Router();
router.post('/analyze', protect, analyze);
router.get('/history', protect, history);
export default router;
