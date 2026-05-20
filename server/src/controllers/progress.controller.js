import Progress from '../models/Progress.js';
import Lesson from '../models/Lesson.js';
import User from '../models/User.js';
import Certificate from '../models/Certificate.js';

export async function getMyProgress(req, res) {
  const progress = await Progress.find({ user: req.user._id }).populate('course completedLessons currentLesson');
  const leaderboard = await User.find().sort('-xp').limit(10).select('name avatar xp level streak');
  res.json({ progress, leaderboard });
}

export async function completeLesson(req, res) {
  const lesson = await Lesson.findById(req.body.lessonId);
  if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
  const progress = await Progress.findOneAndUpdate(
    { user: req.user._id, course: lesson.course },
    { $setOnInsert: { currentLesson: lesson._id }, $set: { lastStudiedAt: new Date() }, $addToSet: { completedLessons: lesson._id } },
    { upsert: true, new: true }
  );
  const totalLessons = await Lesson.countDocuments({ course: lesson.course });
  progress.completionRate = totalLessons ? Math.round((progress.completedLessons.length / totalLessons) * 100) : 0;
  progress.weeklyMinutes = updateWeeklyMinutes(progress.weeklyMinutes, lesson.durationMinutes);
  progress.consistency = Math.min(100, progress.weeklyMinutes.filter((d) => d.minutes > 0).length * 14);
  await progress.save();

  const user = await User.findById(req.user._id);
  user.xp += lesson.xpReward;
  user.level = Math.max(1, Math.floor(user.xp / 250) + 1);
  user.streak = user.streak + 1;
  if (progress.completionRate === 100) user.badges.push({ title: 'Course Finisher', icon: 'award' });
  await user.save();

  let certificate = null;
  if (progress.completionRate === 100) {
    certificate = await Certificate.findOneAndUpdate(
      { user: user._id, course: lesson.course },
      { certificateId: `ACC-${Date.now()}-${String(user._id).slice(-4)}`, finalScore: 95 },
      { upsert: true, new: true }
    );
  }

  res.json({ progress, user: { ...user.toObject(), password: undefined }, certificate });
}

function updateWeeklyMinutes(rows = [], minutes) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = days[(new Date().getDay() + 6) % 7];
  const map = new Map(days.map((day) => [day, { day, minutes: 0 }]));
  rows.forEach((row) => map.set(row.day, row));
  map.get(today).minutes += minutes;
  return Array.from(map.values());
}
