<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Progress extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'progress';

    protected $fillable = [
        'user_id',
        'course_id',
        'completed_lessons',
        'current_lesson_id',
        'weekly_minutes',
        'completion_rate',
        'consistency',
        'last_studied_at',
    ];

    protected $casts = [
        'completed_lessons' => 'array',
        'weekly_minutes' => 'array',
        'last_studied_at' => 'datetime',
    ];
}
