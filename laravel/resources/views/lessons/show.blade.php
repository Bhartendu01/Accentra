@extends('layouts.app')

@section('content')
<section class="container section">
    <span class="tag">{{ $lesson->course->title }}</span>
    <h1>{{ $lesson->title }}</h1>
    <div class="grid grid-3">
        <div class="card"><h3>Vocabulary</h3>@foreach($lesson->vocabulary ?? [] as $word)<p><strong>{{ $word['term'] }}</strong> - {{ $word['translation'] }}<br><span class="muted">{{ $word['example'] }}</span></p>@endforeach</div>
        <div class="card"><h3>Grammar</h3>@foreach($lesson->grammar ?? [] as $rule)<p><strong>{{ $rule['title'] }}</strong><br><span class="muted">{{ $rule['body'] }}</span></p>@endforeach</div>
        <div class="card"><h3>Speaking</h3>@foreach($lesson->speaking_sentences ?? [] as $sentence)<p>{{ $sentence }}</p>@endforeach</div>
    </div>
    <form method="POST" action="{{ route('lessons.complete', $lesson) }}" style="margin-top:22px">@csrf <button class="btn teal">Complete lesson</button></form>
</section>
@endsection
