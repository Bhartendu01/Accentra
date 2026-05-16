@extends('layouts.app')

@section('content')
<section class="container section">
    <span class="tag">{{ $course->language }} {{ $course->level }}</span>
    <h1>{{ $course->title }}</h1>
    <p class="lead">{{ $course->description }}</p>
    <div class="grid grid-3">
        @foreach($course->lessons as $lesson)
            <a class="card" href="{{ route('lessons.show', $lesson) }}">
                <h3>{{ $lesson->title }}</h3>
                <p class="muted">{{ $lesson->duration_minutes }} minutes • {{ $lesson->xp_reward }} XP</p>
            </a>
        @endforeach
    </div>
</section>
@endsection
