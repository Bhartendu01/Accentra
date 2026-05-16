import express from 'express';
import { protect } from '../middleware/auth.js';
import { chat, getHistory } from '../controllers/chat.controller.js';

const router = express.Router();
router.post('/', protect, chat);
router.get('/history', protect, getHistory);
export default router;
