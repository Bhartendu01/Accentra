import mongoose from 'mongoose';

const pronunciationResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  expectedText: { type: String, required: true },
  spokenText: { type: String, required: true },
  accuracy: Number,
  fluency: Number,
  confidence: Number,
  mispronouncedWords: [String],
  suggestions: [String],
  wordBreakdown: [{ word: String, matched: Boolean, similarity: Number }]
}, { timestamps: true });

export default mongoose.model('PronunciationResult', pronunciationResultSchema);
