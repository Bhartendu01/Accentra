<?php

namespace App\Services;

class PronunciationAnalyzer
{
    public function analyze(string $expectedText, string $spokenText): array
    {
        $expectedWords = $this->words($expectedText);
        $spokenWords = $this->words($spokenText);

        $breakdown = [];
        $matched = 0;

        foreach ($expectedWords as $word) {
            $best = 0;
            foreach ($spokenWords as $candidate) {
                similar_text($word, $candidate, $percent);
                $best = max($best, (int) round($percent));
            }

            $isMatched = $best >= 78;
            $matched += $isMatched ? 1 : 0;
            $breakdown[] = ['word' => $word, 'matched' => $isMatched, 'similarity' => $best];
        }

        $accuracy = count($expectedWords) ? (int) max(0, min(100, round(($matched / count($expectedWords)) * 100))) : 0;
        $fluency = (int) max(0, min(100, $accuracy + 4 - abs(count($expectedWords) - count($spokenWords)) * 3));
        $confidence = (int) max(0, min(100, round(($accuracy + $fluency) / 2) + 5));
        $missed = collect($breakdown)->where('matched', false)->pluck('word')->values()->all();

        return [
            'accuracy' => $accuracy,
            'fluency' => $fluency,
            'confidence' => $confidence,
            'mispronounced_words' => $missed,
            'suggestions' => empty($missed)
                ? ['Excellent clarity. Increase speed while keeping the same rhythm.']
                : array_map(fn ($word) => "Practice '{$word}' slowly, then repeat the full sentence.", array_slice($missed, 0, 4)),
            'word_breakdown' => $breakdown,
        ];
    }

    private function words(string $text): array
    {
        $clean = preg_replace('/[^\p{L}\p{N}\s\']/u', '', mb_strtolower($text));

        return array_values(array_filter(preg_split('/\s+/', trim($clean))));
    }
}
