<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Lesson;
use App\Models\Progress;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $student = User::query()->updateOrCreate(
            ['email' => 'maya@student.com'],
            [
                'name' => 'Maya Chen',
                'password' => 'Password123!',
                'role' => 'student',
                'native_language' => 'English',
                'target_languages' => ['Spanish', 'French'],
                'xp' => 1420,
                'level' => 6,
                'streak' => 18,
                'daily_goal_minutes' => 20,
                'badges' => [['title' => 'Pronunciation Pro', 'icon' => 'mic']],
                'email_verified_at' => now(),
            ]
        );

        User::query()->updateOrCreate(
            ['email' => 'admin@accentra.ai'],
            [
                'name' => 'Admin Lee',
                'password' => 'Admin123!',
                'role' => 'admin',
                'native_language' => 'English',
                'target_languages' => ['English'],
                'xp' => 5000,
                'level' => 20,
                'streak' => 45,
                'daily_goal_minutes' => 30,
                'email_verified_at' => now(),
            ]
        );

        $languages = [
            ['name' => 'English', 'color' => '#14b8a6', 'sentence' => 'I would like a cup of coffee please.'],
            ['name' => 'Spanish', 'color' => '#f97316', 'sentence' => 'Buenos dias, quiero practicar mi pronunciacion.'],
            ['name' => 'French', 'color' => '#8b5cf6', 'sentence' => 'Je voudrais reserver une table pour ce soir.'],
            ['name' => 'German', 'color' => '#22c55e', 'sentence' => 'Ich lerne jeden Tag neue deutsche Worter.'],
            ['name' => 'Japanese', 'color' => '#ef4444', 'sentence' => 'Konnichiwa, watashi wa nihongo o benkyo shiteimasu.'],
        ];

        foreach ($languages as $language) {
            foreach (['Beginner', 'Intermediate', 'Advanced'] as $level) {
                $course = Course::query()->updateOrCreate(
                    ['slug' => Str::slug($language['name'].'-'.$level)],
                    [
                        'title' => "{$language['name']} {$level}",
                        'language' => $language['name'],
                        'level' => $level,
                        'description' => "Learn {$language['name']} with vocabulary, grammar, listening, speaking, quizzes, and AI feedback.",
                        'accent_color' => $language['color'],
                        'estimated_hours' => $level === 'Beginner' ? 12 : ($level === 'Intermediate' ? 24 : 36),
                        'outcomes' => ['Clear pronunciation', 'Grammar confidence', 'Real conversation practice'],
                        'is_published' => true,
                    ]
                );

                for ($i = 1; $i <= 3; $i++) {
                    Lesson::query()->updateOrCreate(
                        ['course_id' => $course->id, 'order' => $i],
                        [
                            'title' => "{$level} Mission {$i}: Real Conversation",
                            'duration_minutes' => 10 + $i * 2,
                            'xp_reward' => 20 + $i * 5,
                            'objectives' => ['Learn useful phrases', 'Practice rhythm', 'Complete speaking challenge'],
                            'vocabulary' => [
                                ['term' => 'practice', 'translation' => 'practica', 'example' => 'Daily practice improves fluency.'],
                                ['term' => 'reservation', 'translation' => 'reserva', 'example' => 'I have a reservation.'],
                            ],
                            'grammar' => [['title' => 'Polite requests', 'body' => 'Use softeners to sound natural.']],
                            'speaking_sentences' => [$language['sentence'], 'Could you repeat that more slowly?'],
                            'exercises' => [
                                ['type' => 'fill-blank', 'prompt' => 'I ___ like a coffee.', 'options' => ['would', 'am', 'has'], 'answer' => 'would'],
                                ['type' => 'speaking', 'prompt' => 'Read aloud.', 'target' => $language['sentence']],
                            ],
                            'is_published' => true,
                        ]
                    );
                }
            }
        }

        $firstCourse = Course::query()->where('language', 'Spanish')->first();
        Progress::query()->updateOrCreate(
            ['user_id' => $student->id, 'course_id' => $firstCourse?->id],
            [
                'completed_lessons' => [],
                'weekly_minutes' => [
                    ['day' => 'Mon', 'minutes' => 24],
                    ['day' => 'Tue', 'minutes' => 18],
                    ['day' => 'Wed', 'minutes' => 32],
                ],
                'completion_rate' => 35,
                'consistency' => 86,
                'last_studied_at' => now(),
            ]
        );
    }
}
