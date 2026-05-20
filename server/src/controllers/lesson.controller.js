import Lesson from '../models/Lesson.js';

export async function getLesson(req, res) {
  const lesson = await Lesson.findById(req.params.id).populate('course');
  if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
  res.json({ lesson });
}

export async function createLesson(req, res) {
  const lesson = await Lesson.create(req.body);
  res.status(201).json({ lesson });
}

export async function updateLesson(req, res) {
  const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
  res.json({ lesson });
}
