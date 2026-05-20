<?php

return [
    'default' => env('DB_CONNECTION', 'mongodb'),
    'connections' => [
        'mongodb' => [
            'driver' => 'mongodb',
            'dsn' => env('MONGODB_URI', 'mongodb://127.0.0.1:27017'),
            'database' => env('MONGODB_DATABASE', 'accentra_laravel'),
        ],
        'sqlite' => [
            'driver' => 'sqlite',
            'database' => database_path('database.sqlite'),
            'prefix' => '',
        ],
    ],
    'migrations' => [
        'table' => 'migrations',
    ],
];
