<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Lesson;
use App\Models\User;
use Illuminate\View\View;

class AdminController extends Controller
{
    public function dashboard(): View
    {
        return view('admin.dashboard', [
            'users' => User::query()->count(),
            'courses' => Course::query()->count(),
            'lessons' => Lesson::query()->count(),
            'activeUsers' => User::query()->where('updated_at', '>=', now()->subDays(7))->count(),
        ]);
    }

    public function users(): View
    {
        return view('admin.users', ['users' => User::query()->latest()->get()]);
    }

    public function courses(): View
    {
        return view('admin.courses', ['courses' => Course::query()->latest()->get()]);
    }
}
