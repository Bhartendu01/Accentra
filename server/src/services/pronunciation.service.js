const normalize = (text = '') => text.toLowerCase().replace(/[^\p{L}\p{N}\s']/gu, '').replace(/\s+/g, ' ').trim();

function levenshtein(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j += 1) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      matrix[i][j] = a[i - 1] === b[j - 1]
        ? matrix[i - 1][j - 1]
        : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
    }
  }
  return matrix[a.length][b.length];
}

function similarity(a, b) {
  if (!a && !b) return 1;
  const max = Math.max(a.length, b.length);
  return Math.max(0, 1 - levenshtein(a, b) / max);
}

export function analyzePronunciation(expectedText, spokenText) {
  const expectedWords = normalize(expectedText).split(' ').filter(Boolean);
  const spokenWords = normalize(spokenText).split(' ').filter(Boolean);
  const used = new Set();
  const wordBreakdown = expectedWords.map((word) => {
    let best = { index: -1, score: 0 };
    spokenWords.forEach((candidate, index) => {
      if (used.has(index)) return;
      const score = similarity(word, candidate);
      if (score > best.score) best = { index, score };
    });
    if (best.index >= 0 && best.score >= 0.62) used.add(best.index);
    return { word, matched: best.score >= 0.78, similarity: Math.round(best.score * 100) };
  });

  const matched = wordBreakdown.filter((item) => item.matched).length;
  const orderPenalty = Math.abs(expectedWords.length - spokenWords.length) * 4;
  const rawAccuracy = expectedWords.length ? (matched / expectedWords.length) * 100 - orderPenalty : 0;
  const accuracy = Math.max(0, Math.min(100, Math.round(rawAccuracy)));
  const fluency = Math.max(0, Math.min(100, Math.round(accuracy - Math.max(0, expectedWords.length - spokenWords.length) * 3 + 8)));
  const confidence = Math.max(0, Math.min(100, Math.round((accuracy + fluency) / 2 + (spokenWords.length ? 4 : -15))));
  const mispronouncedWords = wordBreakdown.filter((item) => !item.matched).map((item) => item.word);
  const suggestions = mispronouncedWords.length
    ? mispronouncedWords.slice(0, 4).map((word) => `Slow down on "${word}" and repeat it as a separate syllable before saying the full sentence.`)
    : ['Excellent pronunciation. Try increasing your speaking speed while keeping the same clarity.'];

  return { accuracy, fluency, confidence, mispronouncedWords, suggestions, wordBreakdown };
}
