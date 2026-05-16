<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('accentra:about', function () {
    $this->info('Accentra Laravel MVC app is ready.');
})->purpose('Display Accentra project information');
