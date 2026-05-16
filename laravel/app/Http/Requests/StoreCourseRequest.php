<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCourseRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->role === 'admin';
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:120'],
            'language' => ['required', 'string', 'in:English,Spanish,French,German,Japanese'],
            'level' => ['required', 'string', 'in:Beginner,Intermediate,Advanced'],
            'description' => ['required', 'string', 'min:20'],
            'estimated_hours' => ['required', 'integer', 'min:1', 'max:100'],
        ];
    }
}
