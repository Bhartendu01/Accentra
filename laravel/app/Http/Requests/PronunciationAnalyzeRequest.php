<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PronunciationAnalyzeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'expected_text' => ['required', 'string', 'max:300'],
            'spoken_text' => ['required', 'string', 'max:300'],
            'lesson_id' => ['nullable', 'string'],
        ];
    }
}
