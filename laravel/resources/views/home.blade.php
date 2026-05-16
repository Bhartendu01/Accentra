@extends('layouts.app')

@section('title', 'Accentra - AI Language Learning')

@section('content')
<section class="container hero">
    <div>
        <span class="tag">AI powered speech coach</span>
        <h1 class="headline-gradient" style="margin-top:18px">Accentra</h1>
        <p>Learn languages with real-time pronunciation analysis, interactive lessons, AI tutor guidance, certificates, and a Laravel MVC architecture that stays clean enough for your INT221 viva.</p>
        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:26px">
            <a class="btn" href="{{ route('register') }}">Start learning</a>
            <a class="btn secondary" href="{{ route('courses.index') }}">Browse courses</a>
        </div>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:28px">
            @foreach($supportedLanguages as $language)
                <span class="language-pill">{{ $language }}</span>
            @endforeach
        </div>
    </div>
    <div class="panel screen-card">
        <span class="floating-chip" style="top:28px; left:28px">AI Tutor</span>
        <span class="floating-chip" style="top:72px; right:30px">18 day streak</span>
        <span class="floating-chip" style="bottom:126px; left:34px">+240 XP</span>
        <div class="orbit one"></div>
        <div class="orbit two"></div>
        <div style="aspect-ratio:1; display:grid; place-items:center; border-radius:8px; position:relative;">
            <div style="text-align:center; position:relative; z-index:1">
                <div style="font-size:112px; line-height:1; font-weight:900">94%</div>
                <div style="font-weight:900; color:#ccfbf1">Pronunciation accuracy</div>
                <p style="max-width:310px; color:#e2e8f0; font-size:15px; line-height:1.6">Accentra hears your sentence, scores clarity, and shows exactly which words need practice.</p>
            </div>
        </div>
        <div class="metric-strip">
            <div>18<br><span style="font-size:12px;color:#ccfbf1">day streak</span></div>
            <div>1,420<br><span style="font-size:12px;color:#ccfbf1">XP points</span></div>
            <div>5<br><span style="font-size:12px;color:#ccfbf1">languages</span></div>
        </div>
    </div>
</section>

<section class="container section">
    <span class="tag">Platform highlights</span>
    <h2 style="font-size:42px; margin:14px 0 22px">Everything a language learner expects</h2>
    <div class="grid grid-3">
        <div class="card"><span class="tag">Speak</span><h3>Speech Recognition</h3><p class="muted">Browser speech-to-text, pronunciation score, difficult words, fluency and confidence feedback.</p></div>
        <div class="card"><span class="tag">Build</span><h3>Laravel MVC</h3><p class="muted">Named routes, controllers, middleware, Blade inheritance, sessions, cookies, validation, and Eloquent models.</p></div>
        <div class="card"><span class="tag">Grow</span><h3>Admin Analytics</h3><p class="muted">Track courses, users, completion rates, active learners, and learning consistency.</p></div>
    </div>
</section>

<section class="container section">
    <div class="panel" style="display:grid; gap:22px; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); align-items:center;">
        <div>
            <span class="tag">MVC ready</span>
            <h2 style="font-size:38px; margin:14px 0 10px">Clean project structure, no confusing names</h2>
            <p class="muted">The project is named Accentra and the Laravel code is split into Controllers, Models, Requests, Middleware, Blade views, routes, migrations, and seeders.</p>
        </div>
        <div class="grid">
            <div class="card"><strong>CO2</strong> Routing, requests, responses, JSON, redirects</div>
            <div class="card"><strong>CO3</strong> Controllers, Blade templates, resource routing</div>
            <div class="card"><strong>CO6</strong> MongoDB models, migrations, seeders, REST APIs</div>
        </div>
    </div>
</section>
@endsection
