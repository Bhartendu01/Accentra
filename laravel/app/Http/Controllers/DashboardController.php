<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Progress;
use App\Models\User;
use Illuminate\View\View;

class DashboardController extends Controller
{
    public function __invoke(): View
    {
        $user = auth()->user();
        $progress = Progress::query()->where('user_id', $user->id)->get();
        $recommendedCourses = Course::query()->where('is_published', true)->limit(3)->get();
        $leaderboard = User::query()->orderByDesc('xp')->limit(5)->get();

        return view('dashboard', compact('user', 'progress', 'recommendedCourses', 'leaderboard'));
    }
}
