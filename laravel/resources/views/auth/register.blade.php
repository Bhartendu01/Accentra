@extends('layouts.app')

@section('title', 'Register - Accentra')

@section('content')
<section class="container section" style="max-width:620px">
    <div class="panel">
        <h1>Create account</h1>
        <form method="POST" action="{{ route('register.store') }}">
            @csrf
            <label class="field">Name <input name="name" value="{{ old('name') }}" required></label>
            <label class="field">Email <input name="email" type="email" value="{{ old('email') }}" required></label>
            <label class="field">Target language
                <select name="target_language">@foreach($supportedLanguages as $language)<option>{{ $language }}</option>@endforeach</select>
            </label>
            <label class="field">Password <input name="password" type="password" required></label>
            <label class="field">Confirm password <input name="password_confirmation" type="password" required></label>
            @if($errors->any()) <div class="error">{{ $errors->first() }}</div> @endif
            <button class="btn" style="width:100%; margin-top:20px">Start learning</button>
        </form>
    </div>
</section>
@endsection
