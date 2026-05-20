@extends('layouts.app')

@section('content')
<section class="container section" style="max-width:720px">
    <div class="panel">
        <h1>Profile Settings</h1>
        <form method="POST" action="{{ route('profile.update') }}">
            @csrf
            @method('PUT')
            <label class="field">Name <input name="name" value="{{ old('name', $user->name) }}"></label>
            <label class="field">Native language <input name="native_language" value="{{ old('native_language', $user->native_language) }}"></label>
            <label class="field">Daily goal minutes <input name="daily_goal_minutes" type="number" value="{{ old('daily_goal_minutes', $user->daily_goal_minutes ?? 20) }}"></label>
            <button class="btn" style="margin-top:18px">Save profile</button>
        </form>
    </div>
</section>
@endsection
