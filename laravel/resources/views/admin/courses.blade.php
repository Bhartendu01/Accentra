@extends('layouts.app')

@section('content')
<section class="container section">
    <h1>Course Management</h1>
    <div class="panel">
        <form method="POST" action="{{ route('courses.store') }}">
            @csrf
            <div class="grid grid-3">
                <input name="title" placeholder="Course title" required>
                <select name="language">@foreach($supportedLanguages as $language)<option>{{ $language }}</option>@endforeach</select>
                <select name="level"><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
            </div>
            <textarea name="description" placeholder="Description" required style="margin-top:12px"></textarea>
            <input name="estimated_hours" type="number" placeholder="Estimated hours" required style="margin-top:12px">
            <button class="btn" style="margin-top:12px">Add course</button>
        </form>
    </div>
    <div class="grid grid-3" style="margin-top:22px">@foreach($courses as $course)<div class="card"><h3>{{ $course->title }}</h3><p class="muted">{{ $course->language }} • {{ $course->level }}</p></div>@endforeach</div>
</section>
@endsection
