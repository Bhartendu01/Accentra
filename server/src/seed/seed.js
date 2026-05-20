import dotenv from 'dotenv';
import mongoose from 'mongoose';
import slugify from 'slugify';
import { connectDB } from '../config/db.js';
import User from '../models/User.js';
import Course from '../models/Course.js';
import Lesson from '../models/Lesson.js';
import Progress from '../models/Progress.js';
import PronunciationResult from '../models/PronunciationResult.js';

dotenv.config();

const languages = [
  { language: 'English', color: '#14b8a6', sentence: 'I would like a cup of coffee please.' },
  { language: 'Spanish', color: '#f97316', sentence: 'Buenos dias, quiero practicar mi pronunciacion.' },
  { language: 'French', color: '#8b5cf6', sentence: 'Je voudrais reserver une table pour ce soir.' },
  { language: 'German', color: '#22c55e', sentence: 'Ich lerne jeden Tag neue deutsche Worter.' },
  { language: 'Japanese', color: '#ef4444', sentence: 'Konnichiwa, watashi wa nihongo o benkyo shiteimasu.' }
];
const levels = ['Beginner', 'Intermediate', 'Advanced'];

async function seed() {
  await connectDB();
  await Promise.all([
    User.deleteMany(), Course.deleteMany(), Lesson.deleteMany(), Progress.deleteMany(), PronunciationResult.deleteMany()
  ]);

  const [student, admin] = await User.create([
    { name: 'Maya Chen', email: 'maya@student.com', password: 'Password123!', targetLanguages: ['Spanish', 'French'], xp: 1420, level: 6, streak: 18, emailVerified: true, badges: [{ title: '7 Day Streak', icon: 'flame' }, { title: 'Pronunciation Pro', icon: 'mic' }] },
    { name: 'Admin Lee', email: 'admin@accentra.ai', password: 'Admin123!', role: 'admin', xp: 5000, level: 20, emailVerified: true }
  ]);

  const courses = [];
  for (const lang of languages) {
    for (const level of levels) {
      const course = await Course.create({
        title: `${lang.language} ${level}`,
        language: lang.language,
        level,
        slug: slugify(`${lang.language}-${level}`, { lower: true }),
        description: `Build ${level.toLowerCase()} ${lang.language} skills through vocabulary, grammar, listening, speech practice, and AI coaching.`,
        coverImage: `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80`,
        accentColor: lang.color,
        estimatedHours: level === 'Beginner' ? 12 : level === 'Intermediate' ? 24 : 36,
        outcomes: ['Speak with clearer pronunciation', 'Understand daily conversations', 'Build grammar confidence']
      });
      courses.push(course);
      for (let i = 1; i <= 4; i += 1) {
        await Lesson.create({
          course: course._id,
          title: `${level} Mission ${i}: Real-world Conversation`,
          order: i,
          durationMinutes: 10 + i * 3,
          xpReward: 20 + i * 5,
          objectives: ['Learn useful phrases', 'Practice sentence rhythm', 'Complete a speaking challenge'],
          vocabulary: [
            { term: 'greeting', translation: 'saludo / salutation', example: 'A warm greeting starts the conversation.' },
            { term: 'reservation', translation: 'reserva / reservation', example: 'I have a reservation tonight.' },
            { term: 'practice', translation: 'practica / pratique', example: 'Daily practice improves fluency.' }
          ],
          grammar: [
            { title: 'Polite requests', body: 'Use modal verbs and softeners to sound natural in service conversations.' },
            { title: 'Word stress', body: 'Stress the content words and reduce small function words for better fluency.' }
          ],
          speakingSentences: [lang.sentence, 'Could you repeat that more slowly?', 'I am learning a new language every day.'],
          exercises: [
            { type: 'flashcard', prompt: 'Flip the card and say the word aloud.', target: 'practice', answer: 'practice' },
            { type: 'fill-blank', prompt: 'I would like ___ cup of coffee.', options: ['a', 'an', 'the'], answer: 'a', explanation: 'Use "a" before consonant sounds.' },
            { type: 'match', prompt: 'Match the phrase with its meaning.', options: ['hello', 'thank you', 'goodbye'], answer: 'hello' },
            { type: 'speaking', prompt: 'Read the sentence clearly.', target: lang.sentence, audioText: lang.sentence }
          ]
        });
      }
    }
  }

  await Progress.create({
    user: student._id,
    course: courses[1]._id,
    completedLessons: [],
    completionRate: 35,
    consistency: 86,
    weeklyMinutes: [
      { day: 'Mon', minutes: 24 }, { day: 'Tue', minutes: 18 }, { day: 'Wed', minutes: 32 },
      { day: 'Thu', minutes: 26 }, { day: 'Fri', minutes: 41 }, { day: 'Sat', minutes: 15 }, { day: 'Sun', minutes: 30 }
    ],
    lastStudiedAt: new Date()
  });

  await PronunciationResult.create({
    user: student._id,
    expectedText: 'I would like a cup of coffee please.',
    spokenText: 'I would like a cup of coffee please',
    accuracy: 96,
    fluency: 94,
    confidence: 98,
    mispronouncedWords: [],
    suggestions: ['Excellent clarity. Try a slightly faster natural pace.']
  });

  console.log('Seed complete');
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
