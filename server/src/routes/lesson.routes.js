import express from 'express';
import { protect, requireRole } from '../middleware/auth.js';
import { createLesson, getLesson, updateLesson } from '../controllers/lesson.controller.js';

const router = express.Router();
router.get('/:id', protect, getLesson);
router.post('/', protect, requireRole('admin'), createLesson);
router.put('/:id', protect, requireRole('admin'), updateLesson);
export default router;
