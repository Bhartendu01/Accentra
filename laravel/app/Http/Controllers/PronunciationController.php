<?php

namespace App\Http\Controllers;

use App\Http\Requests\PronunciationAnalyzeRequest;
use App\Models\PronunciationResult;
use App\Services\PronunciationAnalyzer;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;

class PronunciationController extends Controller
{
    public function practice(): View
    {
        $sentences = [
            'I would like a cup of coffee please.',
            'Could you recommend a quiet table near the window?',
            'I am learning a new language every day.',
        ];

        return view('speaking.practice', compact('sentences'));
    }

    public function analyze(PronunciationAnalyzeRequest $request, PronunciationAnalyzer $analyzer): JsonResponse
    {
        $analysis = $analyzer->analyze($request->expected_text, $request->spoken_text);

        $result = PronunciationResult::query()->create([
            'user_id' => $request->user()->id,
            'lesson_id' => $request->lesson_id,
            'expected_text' => $request->expected_text,
            'spoken_text' => $request->spoken_text,
            ...$analysis,
        ]);

        return response()->json($result)->header('X-Accentra-Analyzer', 'Laravel-Service');
    }
}
