import express from 'express';
import { protect, requireRole } from '../middleware/auth.js';
import { deleteUser, overview, updateRole, users } from '../controllers/admin.controller.js';

const router = express.Router();
router.use(protect, requireRole('admin'));
router.get('/overview', overview);
router.get('/users', users);
router.put('/users/:id/role', updateRole);
router.delete('/users/:id', deleteUser);
export default router;
