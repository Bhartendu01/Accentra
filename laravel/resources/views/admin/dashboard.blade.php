@extends('layouts.app')

@section('content')
<section class="container section">
    <span class="tag">Admin panel</span>
    <h1>Platform analytics</h1>
    <div class="grid grid-4">
        <div class="card"><span class="muted">Users</span><div class="stat">{{ $users }}</div></div>
        <div class="card"><span class="muted">Active users</span><div class="stat">{{ $activeUsers }}</div></div>
        <div class="card"><span class="muted">Courses</span><div class="stat">{{ $courses }}</div></div>
        <div class="card"><span class="muted">Lessons</span><div class="stat">{{ $lessons }}</div></div>
    </div>
</section>
@endsection
