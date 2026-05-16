<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Course extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'courses';

    protected $fillable = [
        'title',
        'slug',
        'language',
        'level',
        'description',
        'cover_image',
        'accent_color',
        'estimated_hours',
        'outcomes',
        'is_published',
    ];

    protected $casts = [
        'outcomes' => 'array',
        'is_published' => 'boolean',
    ];

    public function lessons()
    {
        return $this->hasMany(Lesson::class)->orderBy('order');
    }
}
