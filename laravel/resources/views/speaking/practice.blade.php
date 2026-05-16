@extends('layouts.app')

@section('content')
<section class="container section">
    <h1>Pronunciation Lab</h1>
    <p class="lead">Use browser speech recognition, then submit the transcript to the Laravel pronunciation analyzer.</p>
    <div class="grid">
        @foreach($sentences as $sentence)
            <div class="card">
                <h3>{{ $sentence }}</h3>
                <button class="btn secondary" type="button" onclick="speak(@js($sentence))">Listen</button>
                <button class="btn" type="button" onclick="record(@js($sentence), this)">Record</button>
                <pre class="muted" style="white-space:pre-wrap"></pre>
            </div>
        @endforeach
    </div>
</section>
<script>
function speak(text) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}
function record(expected, button) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const output = button.parentElement.querySelector('pre');
    if (!SpeechRecognition) { output.textContent = 'Speech recognition is not supported in this browser.'; return; }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = async (event) => {
        const spoken = Array.from(event.results).map(result => result[0].transcript).join(' ');
        output.textContent = 'Transcript: ' + spoken + '\nAnalyzing...';
        const response = await fetch('{{ route('speaking.analyze') }}', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-CSRF-TOKEN': '{{ csrf_token() }}' },
            body: JSON.stringify({ expected_text: expected, spoken_text: spoken })
        });
        const data = await response.json();
        output.textContent = `Transcript: ${spoken}\nAccuracy: ${data.accuracy}%\nFluency: ${data.fluency}%\nConfidence: ${data.confidence}%\nSuggestions: ${(data.suggestions || []).join(' ')}`;
    };
    recognition.start();
}
</script>
@endsection
