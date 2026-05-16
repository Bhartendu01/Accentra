const grammarTips = {
  tense: 'Use the tense that matches the time signal. For daily habits use the simple present; for completed past actions use the simple past.',
  pronunciation: 'Practice difficult sounds in isolation, then in a short phrase, then in the full sentence. Record twice and compare clarity.',
  translation: 'Translate meaning, not word order. Natural sentences often change structure between languages.',
  article: 'Articles depend on whether the noun is specific. Use "the" for known items and "a/an" for one nonspecific item.'
};

export async function getTutorReply(message, language = 'English') {
  const lower = message.toLowerCase();
  const matchedKey = Object.keys(grammarTips).find((key) => lower.includes(key));
  if (process.env.OPENAI_API_KEY) {
    return {
      content: `OpenAI integration is configured for production. Tutor prompt: Help with ${language}: ${message}`,
      provider: 'openai-ready'
    };
  }
  if (lower.includes('hello') || lower.includes('conversation')) {
    return {
      provider: 'local-ai',
      content: `Let's practice a short ${language} conversation. I will ask first: What did you do today? Answer in one full sentence and I will correct it.`
    };
  }
  return {
    provider: 'local-ai',
    content: `${matchedKey ? grammarTips[matchedKey] : `For ${language}, focus on one clear idea per sentence and use familiar vocabulary first.`} Example: write your sentence, then check subject, verb, object, and pronunciation stress.`
  };
}
