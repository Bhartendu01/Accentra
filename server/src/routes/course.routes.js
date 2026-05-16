import express from 'express';
import { protect, requireRole } from '../middleware/auth.js';
import { createCourse, deleteCourse, getCourse, listCourses, updateCourse } from '../controllers/course.controller.js';

const router = express.Router();
router.get('/', listCourses);
router.get('/:id', getCourse);
router.post('/', protect, requireRole('admin'), createCourse);
router.put('/:id', protect, requireRole('admin'), updateCourse);
router.delete('/:id', protect, requireRole('admin'), deleteCourse);
export default router;
