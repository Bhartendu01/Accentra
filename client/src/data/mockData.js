export const languages = [
  { name: 'English', learners: '2.4M', color: '#14b8a6', flag: 'EN' },
  { name: 'Spanish', learners: '1.8M', color: '#f97316', flag: 'ES' },
  { name: 'French', learners: '1.2M', color: '#8b5cf6', flag: 'FR' },
  { name: 'German', learners: '940K', color: '#22c55e', flag: 'DE' },
  { name: 'Japanese', learners: '1.1M', color: '#ef4444', flag: 'JP' }
];

export const sampleCourses = languages.flatMap((language) => ['Beginner', 'Intermediate', 'Advanced'].map((level, index) => ({
  _id: `${language.name}-${level}`,
  title: `${language.name} ${level}`,
  language: language.name,
  level,
  accentColor: language.color,
  estimatedHours: [12, 24, 36][index],
  description: `Master ${language.name} ${level.toLowerCase()} skills through guided lessons, speaking drills, quizzes, and AI tutor feedback.`,
  outcomes: ['Daily conversation', 'Pronunciation clarity', 'Grammar confidence']
})));

export const weeklyProgress = [
  { day: 'Mon', minutes: 24, accuracy: 78 },
  { day: 'Tue', minutes: 18, accuracy: 82 },
  { day: 'Wed', minutes: 32, accuracy: 86 },
  { day: 'Thu', minutes: 26, accuracy: 88 },
  { day: 'Fri', minutes: 41, accuracy: 91 },
  { day: 'Sat', minutes: 15, accuracy: 90 },
  { day: 'Sun', minutes: 30, accuracy: 94 }
];

export const sampleLesson = {
  _id: 'demo-lesson',
  title: 'Cafe Conversation: Polite Requests',
  durationMinutes: 14,
  xpReward: 30,
  objectives: ['Order confidently', 'Use polite modal verbs', 'Practice sentence rhythm'],
  vocabulary: [
    { term: 'reservation', translation: 'reserva', example: 'I have a reservation for two.' },
    { term: 'recommend', translation: 'recomendar', example: 'What do you recommend today?' },
    { term: 'receipt', translation: 'recibo', example: 'Could I have the receipt?' }
  ],
  grammar: [{ title: 'Could / Would', body: 'Use could and would to make requests softer and more natural.' }],
  speakingSentences: ['I would like a cup of coffee please.', 'Could you recommend a dessert?', 'We have a reservation for seven o clock.'],
  exercises: [
    { type: 'flashcard', prompt: 'Say the phrase aloud', target: 'Could I have the menu?' },
    { type: 'fill-blank', prompt: 'I ___ like a glass of water.', options: ['would', 'am', 'have'], answer: 'would' },
    { type: 'match', prompt: 'Match "receipt" with the meaning', options: ['bill proof', 'table', 'coffee'], answer: 'bill proof' }
  ]
};

export const leaderboard = [
  { name: 'Maya', xp: 1420, level: 6 },
  { name: 'Arjun', xp: 1385, level: 6 },
  { name: 'Sofia', xp: 1260, level: 5 },
  { name: 'Noah', xp: 1110, level: 5 }
];
