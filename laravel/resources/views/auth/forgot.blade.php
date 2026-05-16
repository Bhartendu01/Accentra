@extends('layouts.app')

@section('content')
<section class="container section" style="max-width:520px">
    <div class="panel">
        <h1>Forgot password</h1>
        <form method="POST" action="{{ route('password.email') }}">
            @csrf
            <label class="field">Email <input name="email" type="email" required></label>
            <button class="btn" style="width:100%; margin-top:20px">Send reset link</button>
        </form>
    </div>
</section>
@endsection
