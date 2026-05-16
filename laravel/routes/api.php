<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\PronunciationController;
use App\Http\Controllers\TutorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/health', fn () => response()->json(['status' => 'ok', 'framework' => 'Laravel MVC']));

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn (Request $request) => $request->user());
    Route::post('/pronunciation/analyze', [PronunciationController::class, 'analyze'])->name('api.pronunciation.analyze');
    Route::post('/tutor/ask', [TutorController::class, 'ask'])->name('api.tutor.ask');
});

Route::apiResource('courses', CourseController::class)
    ->only(['index', 'show'])
    ->names('api.courses');
