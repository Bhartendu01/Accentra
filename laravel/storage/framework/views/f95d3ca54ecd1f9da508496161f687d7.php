<?php $__env->startSection('title', 'Accentra - AI Language Learning'); ?>

<?php $__env->startSection('content'); ?>
<section class="container hero">
    <div>
        <span class="tag">AI powered speech coach</span>
        <h1 style="margin-top:18px">Accentra</h1>
        <p>A premium language learning platform built with Laravel MVC, Blade templates, MongoDB models, secure routing, sessions, validation, and AI pronunciation analysis.</p>
        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:26px">
            <a class="btn" href="<?php echo e(route('register')); ?>">Start learning</a>
            <a class="btn secondary" href="<?php echo e(route('courses.index')); ?>">Browse courses</a>
        </div>
    </div>
    <div class="panel">
        <div style="aspect-ratio:1; display:grid; place-items:center; border-radius:8px; background:linear-gradient(135deg,#0f172a,#115e59); color:white;">
            <div style="text-align:center">
                <div style="font-size:92px; font-weight:900">94%</div>
                <div style="font-weight:900">Pronunciation accuracy</div>
            </div>
        </div>
        <div class="grid grid-3" style="margin-top:16px">
            <div class="card"><strong>18</strong><br><span class="muted">day streak</span></div>
            <div class="card"><strong>1,420</strong><br><span class="muted">XP points</span></div>
            <div class="card"><strong>5</strong><br><span class="muted">languages</span></div>
        </div>
    </div>
</section>
<section class="container section">
    <div class="grid grid-3">
        <div class="card"><h3>Speech Recognition</h3><p class="muted">Browser speech-to-text, pronunciation score, difficult words, fluency and confidence feedback.</p></div>
        <div class="card"><h3>Laravel MVC</h3><p class="muted">Named routes, controllers, middleware, Blade inheritance, sessions, cookies, validation, and Eloquent models.</p></div>
        <div class="card"><h3>Admin Analytics</h3><p class="muted">Track courses, users, completion rates, active learners, and learning consistency.</p></div>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\saura\Documents\Codex\2026-05-14\you-are-a-senior-full-stack\laravel\resources\views/home.blade.php ENDPATH**/ ?>