<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        foreach (['progress', 'pronunciation_results', 'chat_histories', 'certificates'] as $collection) {
            Schema::connection('mongodb')->create($collection, function ($schema) {
                $schema->index('user_id');
            });
        }
    }

    public function down(): void
    {
        foreach (['progress', 'pronunciation_results', 'chat_histories', 'certificates'] as $collection) {
            Schema::connection('mongodb')->dropIfExists($collection);
        }
    }
};
