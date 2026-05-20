import User from '../models/User.js';
import Course from '../models/Course.js';
import Lesson from '../models/Lesson.js';
import Progress from '../models/Progress.js';
import PronunciationResult from '../models/PronunciationResult.js';

export async function overview(_req, res) {
  const [users, courses, lessons, completions, pronunciation] = await Promise.all([
    User.countDocuments(),
    Course.countDocuments(),
    Lesson.countDocuments(),
    Progress.aggregate([{ $group: { _id: null, avgCompletion: { $avg: '$completionRate' } } }]),
    PronunciationResult.aggregate([{ $group: { _id: null, avgAccuracy: { $avg: '$accuracy' } } }])
  ]);
  const activeUsers = await User.countDocuments({ lastActiveAt: { $gte: new Date(Date.now() - 7 * 86400000) } });
  res.json({
    totals: { users, activeUsers, courses, lessons },
    completionRate: Math.round(completions[0]?.avgCompletion || 0),
    speakingAccuracy: Math.round(pronunciation[0]?.avgAccuracy || 0),
    weeklyProgress: [
      { day: 'Mon', minutes: 420 }, { day: 'Tue', minutes: 510 }, { day: 'Wed', minutes: 470 },
      { day: 'Thu', minutes: 620 }, { day: 'Fri', minutes: 710 }, { day: 'Sat', minutes: 540 }, { day: 'Sun', minutes: 660 }
    ]
  });
}

export async function users(_req, res) {
  const users = await User.find().sort('-createdAt').select('-password');
  res.json({ users });
}

export async function updateRole(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, { role: req.body.role }, { new: true }).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ user });
}

export async function deleteUser(req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
}
