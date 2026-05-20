<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Certificate extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'certificates';

    protected $fillable = ['user_id', 'course_id', 'certificate_id', 'final_score', 'issued_at'];

    protected $casts = ['issued_at' => 'datetime'];
}
