import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
  questions: [{
    prompt: String,
    options: [String],
    answer: String,
    explanation: String
  }]
}, { timestamps: true });

export default mongoose.model('Quiz', quizSchema);
