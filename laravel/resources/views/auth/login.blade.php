@extends('layouts.app')

@section('title', 'Login - Accentra')

@section('content')
<section class="container section" style="max-width:520px">
    <div class="panel">
        <h1>Login</h1>
        <p class="muted">Student: maya@student.com / Password123! Admin: admin@accentra.ai / Admin123!</p>
        <form method="POST" action="{{ route('login.store') }}">
            @csrf
            <label class="field">Email <input name="email" type="email" value="{{ old('email', 'maya@student.com') }}" required></label>
            @error('email') <div class="error">{{ $message }}</div> @enderror
            <label class="field">Password <input name="password" type="password" value="Password123!" required></label>
            <label style="display:flex; gap:8px; margin-top:14px"><input style="width:auto" type="checkbox" name="remember"> Remember me</label>
            <button class="btn" style="width:100%; margin-top:20px">Login</button>
        </form>
        <p><a href="{{ route('password.request') }}">Forgot password?</a></p>
    </div>
</section>
@endsection
