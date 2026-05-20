@extends('layouts.app')

@section('content')
<section class="container section" style="max-width:820px">
    <h1>AI Tutor</h1>
    <div class="panel">
        <div id="chat" class="grid"><div class="card">Ask me about grammar, pronunciation, translation, or conversation practice.</div></div>
        <div style="display:flex; gap:10px; margin-top:18px">
            <input id="message" placeholder="Ask a grammar question">
            <button class="btn" onclick="askTutor()">Send</button>
        </div>
    </div>
</section>
<script>
async function askTutor() {
    const input = document.getElementById('message');
    const chat = document.getElementById('chat');
    const message = input.value.trim();
    if (!message) return;
    chat.insertAdjacentHTML('beforeend', `<div class="card" style="background:#0f172a;color:white">${message}</div>`);
    input.value = '';
    const response = await fetch('{{ route('tutor.ask') }}', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-CSRF-TOKEN': '{{ csrf_token() }}' },
        body: JSON.stringify({ message, language: 'English' })
    });
    const data = await response.json();
    chat.insertAdjacentHTML('beforeend', `<div class="card">${data.reply}</div>`);
}
</script>
@endsection
