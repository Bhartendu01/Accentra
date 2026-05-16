<?php

namespace App\Services;

class AiTutorService
{
    public function reply(string $message, string $language = 'English'): string
    {
        $lower = mb_strtolower($message);

        if (str_contains($lower, 'pronunciation')) {
            return "For {$language} pronunciation, isolate the difficult sound, repeat it three times, then say it inside a full sentence.";
        }

        if (str_contains($lower, 'translate')) {
            return "Translate the meaning first, not the exact word order. Share the phrase and I will help make it natural.";
        }

        if (str_contains($lower, 'grammar')) {
            return "Check the subject, verb tense, and object. Then read the sentence aloud to confirm it sounds natural.";
        }

        return "Let's practice {$language}. Answer this in one complete sentence: What did you learn today?";
    }
}
