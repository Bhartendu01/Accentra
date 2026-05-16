<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::connection('mongodb')->create('users', function ($collection) {
            $collection->index('email');
            $collection->index('role');
        });
    }

    public function down(): void
    {
        Schema::connection('mongodb')->dropIfExists('users');
    }
};
