<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseRequest;
use App\Models\Course;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Throwable;

class CourseController extends Controller
{
    public function index(): View
    {
        $courses = $this->safeCourseList();

        return view('courses.index', compact('courses'));
    }

    public function show(Course $course): View
    {
        $course->load('lessons');

        return view('courses.show', compact('course'));
    }

    public function store(StoreCourseRequest $request): RedirectResponse
    {
        $payload = $request->validated();
        Course::query()->create([
            ...$payload,
            'slug' => Str::slug($payload['language'].'-'.$payload['level'].'-'.$payload['title']),
            'accent_color' => '#14b8a6',
            'outcomes' => ['Pronunciation clarity', 'Grammar confidence', 'Conversation practice'],
            'is_published' => true,
        ]);

        return back()->with('status', 'Course created successfully.');
    }

    public function destroy(Course $course): RedirectResponse
    {
        $course->delete();

        return back()->with('status', 'Course deleted.');
    }

    private function safeCourseList(): Collection
    {
        try {
            return Course::query()->where('is_published', true)->orderBy('language')->get();
        } catch (Throwable) {
            return collect([
                (object) ['id' => 'demo-spanish', 'title' => 'Spanish Beginner', 'language' => 'Spanish', 'level' => 'Beginner', 'description' => 'Practice Spanish vocabulary, grammar, listening, and speaking.', 'accent_color' => '#f97316'],
                (object) ['id' => 'demo-french', 'title' => 'French Beginner', 'language' => 'French', 'level' => 'Beginner', 'description' => 'Build French confidence with guided speaking drills.', 'accent_color' => '#8b5cf6'],
                (object) ['id' => 'demo-japanese', 'title' => 'Japanese Beginner', 'language' => 'Japanese', 'level' => 'Beginner', 'description' => 'Learn daily Japanese phrases with pronunciation feedback.', 'accent_color' => '#ef4444'],
            ]);
        }
    }
}
