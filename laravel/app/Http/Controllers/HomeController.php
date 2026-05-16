<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Support\Collection;
use Illuminate\View\View;
use Throwable;

class HomeController extends Controller
{
    public function __invoke(): View
    {
        $courses = $this->safeCourses();

        return view('home', compact('courses'));
    }

    private function safeCourses(): Collection
    {
        try {
            return Course::query()->where('is_published', true)->limit(5)->get();
        } catch (Throwable) {
            return collect([
                (object) ['title' => 'Spanish Beginner', 'level' => 'Beginner', 'language' => 'Spanish', 'accent_color' => '#f97316'],
                (object) ['title' => 'French Beginner', 'level' => 'Beginner', 'language' => 'French', 'accent_color' => '#8b5cf6'],
                (object) ['title' => 'Japanese Beginner', 'level' => 'Beginner', 'language' => 'Japanese', 'accent_color' => '#ef4444'],
            ]);
        }
    }
}
