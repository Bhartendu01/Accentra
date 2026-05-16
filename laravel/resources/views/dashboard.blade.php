@extends('layouts.app')

@section('content')
<section class="container section">
    <span class="tag">Student dashboard</span>
    <h1 class="headline-gradient" style="font-size:52px; margin:14px 0 24px">Welcome, {{ $user->name }}</h1>
    <div class="grid grid-4">
        <div class="card"><span class="muted">Daily streak</span><div class="stat">{{ $user->streak }}</div></div>
        <div class="card"><span class="muted">XP points</span><div class="stat">{{ $user->xp }}</div></div>
        <div class="card"><span class="muted">Level</span><div class="stat">{{ $user->level }}</div></div>
        <div class="card"><span class="muted">Goal</span><div class="stat">{{ session('daily_goal_minutes', $user->daily_goal_minutes ?? 20) }}m</div></div>
    </div>
    <div class="panel" style="margin-top:22px; background:linear-gradient(135deg,#0f172a,#115e59); color:white">
        <span class="tag">Today</span>
        <h2 style="font-size:34px; margin:14px 0 8px">Recommended next move: speaking practice</h2>
        <p style="color:#d1fae5">Record one sentence, improve two difficult words, and keep the streak alive.</p>
        <a class="btn teal" href="{{ route('speaking.practice') }}">Open pronunciation lab</a>
    </div>
    <div class="grid grid-3" style="margin-top:22px">
        <div class="card" style="grid-column:span 2"><h3>Recommended lessons</h3>@foreach($recommendedCourses as $course)<p><strong>{{ $course->title }}</strong> <span class="muted">{{ $course->estimated_hours }} hours</span></p>@endforeach</div>
        <div class="card"><h3>Leaderboard</h3>@foreach($leaderboard as $learner)<p>{{ $loop->iteration }}. {{ $learner->name }} <strong style="float:right">{{ $learner->xp }} XP</strong></p>@endforeach</div>
    </div>
</section>
@endsection
