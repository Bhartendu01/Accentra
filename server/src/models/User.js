import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const achievementSchema = new mongoose.Schema({
  title: String,
  icon: String,
  earnedAt: { type: Date, default: Date.now }
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 8, select: false },
  googleId: String,
  avatar: String,
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  nativeLanguage: { type: String, default: 'English' },
  targetLanguages: [{ type: String }],
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  dailyGoalMinutes: { type: Number, default: 20 },
  streak: { type: Number, default: 0 },
  badges: [achievementSchema],
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  emailVerified: { type: Boolean, default: false },
  emailVerificationToken: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  lastActiveAt: Date
}, { timestamps: true });

userSchema.pre('save', async function hashPassword(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

export default mongoose.model('User', userSchema);
