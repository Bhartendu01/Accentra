<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PronunciationController;
use App\Http\Controllers\TutorController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Route::controller(AuthController::class)->group(function () {
    Route::get('/login', 'showLogin')->name('login');
    Route::post('/login', 'login')->name('login.store');
    Route::get('/register', 'showRegister')->name('register');
    Route::post('/register', 'register')->name('register.store');
    Route::get('/forgot-password', 'forgot')->name('password.request');
    Route::post('/forgot-password', 'sendReset')->name('password.email');
    Route::post('/logout', 'logout')->name('logout');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    Route::resource('courses', CourseController::class)->only(['index', 'show', 'store', 'destroy']);
    Route::get('/lessons/{lesson}', [LessonController::class, 'show'])->name('lessons.show');
    Route::post('/lessons/{lesson}/complete', [LessonController::class, 'complete'])->name('lessons.complete');
    Route::get('/speaking', [PronunciationController::class, 'practice'])->name('speaking.practice');
    Route::post('/speaking/analyze', [PronunciationController::class, 'analyze'])->name('speaking.analyze');
    Route::get('/tutor', [TutorController::class, 'index'])->name('tutor.index');
    Route::post('/tutor/ask', [TutorController::class, 'ask'])->name('tutor.ask');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

Route::prefix('admin')->name('admin.')->middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');
    Route::get('/users', [AdminController::class, 'users'])->name('users');
    Route::get('/courses', [AdminController::class, 'courses'])->name('courses');
});
