@extends('layouts.app')

@section('content')
<section class="container section">
    <span class="tag">Course library</span>
    <h1 class="headline-gradient" style="font-size:54px; margin:14px 0 10px">Language Courses</h1>
    <p class="lead">Beginner, Intermediate, and Advanced paths for English, Spanish, French, German, and Japanese.</p>
    <div class="grid grid-3">
        @foreach($courses as $course)
            <a class="card course-card" style="--teal: {{ $course->accent_color ?? '#14b8a6' }}" href="{{ is_string($course->id ?? null) && str_starts_with($course->id, 'demo-') ? '#' : route('courses.show', $course) }}">
                <span class="tag">{{ $course->level }}</span>
                <h2>{{ $course->title }}</h2>
                <p class="muted">{{ $course->description }}</p>
            </a>
        @endforeach
    </div>
</section>
@endsection
