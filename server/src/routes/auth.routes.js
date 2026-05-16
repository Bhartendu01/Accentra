import express from 'express';
import passport from 'passport';
import { body } from 'express-validator';
import { protect } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { forgotPassword, googleCallback, login, me, register, registerRules, resetPassword, verifyEmail } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', registerRules, validate, register);
router.post('/login', [body('email').isEmail(), body('password').notEmpty()], validate, login);
router.get('/me', protect, me);
router.post('/forgot-password', [body('email').isEmail()], validate, forgotPassword);
router.post('/reset-password', [body('token').notEmpty(), body('password').isLength({ min: 8 })], validate, resetPassword);
router.post('/verify-email', [body('token').notEmpty()], validate, verifyEmail);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));
router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/login' }), googleCallback);

export default router;
