<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use App\Models\Progress;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class LessonController extends Controller
{
    public function show(Lesson $lesson): View
    {
        $lesson->load('course');

        return view('lessons.show', compact('lesson'));
    }

    public function complete(Lesson $lesson): RedirectResponse
    {
        $user = auth()->user();
        $progress = Progress::query()->firstOrCreate(
            ['user_id' => $user->id, 'course_id' => $lesson->course_id],
            ['completed_lessons' => [], 'weekly_minutes' => [], 'completion_rate' => 0, 'consistency' => 0]
        );

        $completed = collect($progress->completed_lessons ?? [])->push($lesson->id)->unique()->values()->all();
        $progress->update([
            'completed_lessons' => $completed,
            'completion_rate' => min(100, count($completed) * 25),
            'last_studied_at' => now(),
        ]);

        $user->increment('xp', $lesson->xp_reward ?? 20);
        $user->increment('streak');

        return back()->with('status', 'Lesson completed and XP awarded.');
    }
}
