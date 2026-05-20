<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class PronunciationResult extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'pronunciation_results';

    protected $fillable = [
        'user_id',
        'lesson_id',
        'expected_text',
        'spoken_text',
        'accuracy',
        'fluency',
        'confidence',
        'mispronounced_words',
        'suggestions',
        'word_breakdown',
    ];

    protected $casts = [
        'mispronounced_words' => 'array',
        'suggestions' => 'array',
        'word_breakdown' => 'array',
    ];
}
