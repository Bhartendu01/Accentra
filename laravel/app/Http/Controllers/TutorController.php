<?php

namespace App\Http\Controllers;

use App\Models\ChatHistory;
use App\Services\AiTutorService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class TutorController extends Controller
{
    public function index(): View
    {
        return view('tutor.index');
    }

    public function ask(Request $request, AiTutorService $service): JsonResponse
    {
        $data = $request->validate([
            'message' => ['required', 'string', 'max:600'],
            'language' => ['nullable', 'string'],
        ]);

        $reply = $service->reply($data['message'], $data['language'] ?? 'English');

        $history = ChatHistory::query()->firstOrCreate(['user_id' => $request->user()->id], ['messages' => []]);
        $messages = $history->messages ?? [];
        $messages[] = ['role' => 'user', 'content' => $data['message'], 'created_at' => now()];
        $messages[] = ['role' => 'assistant', 'content' => $reply, 'created_at' => now()];
        $history->update(['messages' => $messages]);

        return response()->json(['reply' => $reply]);
    }
}
