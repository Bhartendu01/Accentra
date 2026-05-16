import slugify from 'slugify';
import Course from '../models/Course.js';
import Lesson from '../models/Lesson.js';

export async function listCourses(req, res) {
  const { language, level } = req.query;
  const filter = { isPublished: true };
  if (language) filter.language = language;
  if (level) filter.level = level;
  const courses = await Course.find(filter).sort('language level');
  res.json({ courses });
}

export async function getCourse(req, res) {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ message: 'Course not found' });
  const lessons = await Lesson.find({ course: course._id, isPublished: true }).sort('order');
  res.json({ course, lessons });
}

export async function createCourse(req, res) {
  const course = await Course.create({ ...req.body, slug: slugify(`${req.body.language}-${req.body.level}`, { lower: true }) });
  res.status(201).json({ course });
}

export async function updateCourse(req, res) {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json({ course });
}

export async function deleteCourse(req, res) {
  await Lesson.deleteMany({ course: req.params.id });
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: 'Course and lessons deleted' });
}
