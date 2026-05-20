import PronunciationResult from '../models/PronunciationResult.js';
import { analyzePronunciation } from '../services/pronunciation.service.js';

export async function analyze(req, res) {
  const { expectedText, spokenText, lessonId } = req.body;
  if (!expectedText || !spokenText) return res.status(400).json({ message: 'Expected and spoken text are required' });
  const analysis = analyzePronunciation(expectedText, spokenText);
  const result = await PronunciationResult.create({
    user: req.user._id,
    lesson: lessonId,
    expectedText,
    spokenText,
    ...analysis
  });
  res.status(201).json({ result });
}

export async function history(req, res) {
  const results = await PronunciationResult.find({ user: req.user._id }).sort('-createdAt').limit(30);
  res.json({ results });
}
