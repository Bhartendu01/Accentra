import ChatHistory from '../models/ChatHistory.js';
import { getTutorReply } from '../services/aiTutor.service.js';

export async function chat(req, res) {
  const { message, language } = req.body;
  if (!message) return res.status(400).json({ message: 'Message is required' });
  const reply = await getTutorReply(message, language);
  const history = await ChatHistory.findOneAndUpdate(
    { user: req.user._id },
    { $push: { messages: [{ role: 'user', content: message }, { role: 'assistant', content: reply.content }] } },
    { upsert: true, new: true }
  );
  res.json({ reply, history });
}

export async function getHistory(req, res) {
  const history = await ChatHistory.findOne({ user: req.user._id });
  res.json({ messages: history?.messages || [] });
}
