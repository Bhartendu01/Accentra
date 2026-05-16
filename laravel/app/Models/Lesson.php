<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Lesson extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'lessons';

    protected $fillable = [
        'course_id',
        'title',
        'order',
        'duration_minutes',
        'xp_reward',
        'objectives',
        'vocabulary',
        'grammar',
        'speaking_sentences',
        'exercises',
        'is_published',
    ];

    protected $casts = [
        'objectives' => 'array',
        'vocabulary' => 'array',
        'grammar' => 'array',
        'speaking_sentences' => 'array',
        'exercises' => 'array',
        'is_published' => 'boolean',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
