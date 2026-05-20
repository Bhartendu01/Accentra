import { body } from 'express-validator';
import User from '../models/User.js';
import { signToken, randomToken } from '../utils/token.js';
import { sendEmail } from '../services/email.service.js';

export const registerRules = [
  body('name').trim().isLength({ min: 2 }),
  body('email').isEmail().normalizeEmail(),
  body('password').isStrongPassword({ minLength: 8, minSymbols: 0 })
];

export async function register(req, res) {
  const { name, email, password, nativeLanguage, targetLanguages } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(409).json({ message: 'Email is already registered' });
  const emailVerificationToken = randomToken();
  const user = await User.create({ name, email, password, nativeLanguage, targetLanguages, emailVerificationToken });
  await sendEmail({ to: email, subject: 'Verify your Accentra account', text: `Verification token: ${emailVerificationToken}` });
  res.status(201).json({ token: signToken(user), user: sanitizeUser(user), message: 'Account created. Verification email sent.' });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) return res.status(401).json({ message: 'Invalid credentials' });
  user.lastActiveAt = new Date();
  await user.save();
  res.json({ token: signToken(user), user: sanitizeUser(user) });
}

export async function me(req, res) {
  res.json({ user: req.user });
}

export async function forgotPassword(req, res) {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    user.passwordResetToken = randomToken();
    user.passwordResetExpires = new Date(Date.now() + 60 * 60 * 1000);
    await user.save();
    await sendEmail({ to: user.email, subject: 'Reset your Accentra password', text: `Reset token: ${user.passwordResetToken}` });
  }
  res.json({ message: 'If the email exists, a reset link has been sent.' });
}

export async function resetPassword(req, res) {
  const user = await User.findOne({ passwordResetToken: req.body.token, passwordResetExpires: { $gt: new Date() } });
  if (!user) return res.status(400).json({ message: 'Invalid or expired token' });
  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json({ message: 'Password updated' });
}

export async function verifyEmail(req, res) {
  const user = await User.findOne({ emailVerificationToken: req.body.token });
  if (!user) return res.status(400).json({ message: 'Invalid verification token' });
  user.emailVerified = true;
  user.emailVerificationToken = undefined;
  await user.save();
  res.json({ message: 'Email verified' });
}

export function googleCallback(req, res) {
  const client = process.env.CLIENT_URL || 'http://localhost:5173';
  res.redirect(`${client}/oauth/success?token=${req.user.token}`);
}

function sanitizeUser(user) {
  const obj = user.toObject ? user.toObject() : user;
  delete obj.password;
  return obj;
}
