<?php $__env->startSection('content'); ?>
<section class="container section">
    <h1>Pronunciation Lab</h1>
    <p class="lead">Use browser speech recognition, then submit the transcript to the Laravel pronunciation analyzer.</p>
    <div class="grid">
        <?php $__currentLoopData = $sentences; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $sentence): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="card">
                <h3><?php echo e($sentence); ?></h3>
                <button class="btn secondary" type="button" onclick="speak(<?php echo \Illuminate\Support\Js::from($sentence)->toHtml() ?>)">Listen</button>
                <button class="btn" type="button" onclick="record(<?php echo \Illuminate\Support\Js::from($sentence)->toHtml() ?>, this)">Record</button>
                <pre class="muted" style="white-space:pre-wrap"></pre>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
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
        const response = await fetch('<?php echo e(route('speaking.analyze')); ?>', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-CSRF-TOKEN': '<?php echo e(csrf_token()); ?>' },
            body: JSON.stringify({ expected_text: expected, spoken_text: spoken })
        });
        const data = await response.json();
        output.textContent = `Transcript: ${spoken}\nAccuracy: ${data.accuracy}%\nFluency: ${data.fluency}%\nConfidence: ${data.confidence}%\nSuggestions: ${(data.suggestions || []).join(' ')}`;
    };
    recognition.start();
}
</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\saura\Documents\Codex\2026-05-14\you-are-a-senior-full-stack\laravel\resources\views/speaking/practice.blade.php ENDPATH**/ ?>