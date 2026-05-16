import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
  type: { type: String, enum: ['vocabulary', 'grammar', 'sentence', 'listening', 'speaking', 'quiz', 'flashcard', 'drag-drop', 'match', 'fill-blank'], required: true },
  prompt: String,
  target: String,
  options: [String],
  answer: mongoose.Schema.Types.Mixed,
  explanation: String,
  audioText: String
}, { _id: true });

const lessonSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  order: { type: Number, default: 1 },
  durationMinutes: { type: Number, default: 12 },
  xpReward: { type: Number, default: 20 },
  objectives: [String],
  vocabulary: [{ term: String, translation: String, example: String }],
  grammar: [{ title: String, body: String }],
  speakingSentences: [String],
  exercises: [exerciseSchema],
  isPublished: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Lesson', lessonSchema);
