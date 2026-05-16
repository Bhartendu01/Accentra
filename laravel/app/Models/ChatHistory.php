<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class ChatHistory extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'chat_histories';

    protected $fillable = ['user_id', 'messages'];

    protected $casts = ['messages' => 'array'];
}
