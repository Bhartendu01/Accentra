import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  completedLessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  currentLesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  weeklyMinutes: [{ day: String, minutes: Number }],
  consistency: { type: Number, default: 0 },
  completionRate: { type: Number, default: 0 },
  lastStudiedAt: Date
}, { timestamps: true });

progressSchema.index({ user: 1, course: 1 }, { unique: true });

export default mongoose.model('Progress', progressSchema);
