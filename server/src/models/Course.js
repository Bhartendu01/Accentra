import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  language: { type: String, required: true },
  slug: { type: String, unique: true },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  description: String,
  coverImage: String,
  accentColor: { type: String, default: '#14b8a6' },
  estimatedHours: Number,
  outcomes: [String],
  isPublished: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Course', courseSchema);
