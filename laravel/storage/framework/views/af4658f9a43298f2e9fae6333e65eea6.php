<?php $__env->startSection('title', 'Accentra - AI Language Learning'); ?>

<?php $__env->startSection('content'); ?>
<section class="container hero">
    <div>
        <span class="tag">AI powered speech coach</span>
        <h1 class="headline-gradient" style="margin-top:18px">Accentra</h1>
        <p>Learn languages with real-time pronunciation analysis, interactive lessons, AI tutor guidance, progress tracking, and certificates designed to keep you motivated every day.</p>
        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:26px">
            <a class="btn" href="<?php echo e(route('register')); ?>">Start learning</a>
            <a class="btn secondary" href="<?php echo e(route('courses.index')); ?>">Browse courses</a>
        </div>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:28px">
            <?php $__currentLoopData = $supportedLanguages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $language): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <span class="language-pill"><?php echo e($language); ?></span>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
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
        <div class="card"><span class="tag">Practice</span><h3>Interactive Lessons</h3><p class="muted">Build vocabulary, grammar, listening, and speaking skills through short guided modules.</p></div>
        <div class="card"><span class="tag">Grow</span><h3>Admin Analytics</h3><p class="muted">Track courses, users, completion rates, active learners, and learning consistency.</p></div>
    </div>
</section>

<section class="container section">
    <div class="panel" style="display:grid; gap:22px; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); align-items:center;">
        <div>
            <span class="tag">Personalized learning</span>
            <h2 style="font-size:38px; margin:14px 0 10px">Practice that adapts to your voice</h2>
            <p class="muted">Accentra turns every speaking attempt into a clear learning path with targeted pronunciation tips, daily goals, and lessons that keep your momentum visible.</p>
            <a class="btn" href="<?php echo e(route('speaking.practice')); ?>" style="margin-top:18px">Try pronunciation lab</a>
        </div>
        <div class="grid">
            <div class="card"><strong>01</strong><br><span class="muted">Listen to native-paced examples before speaking.</span></div>
            <div class="card"><strong>02</strong><br><span class="muted">Record your sentence and get instant clarity, fluency, and confidence scores.</span></div>
            <div class="card"><strong>03</strong><br><span class="muted">Review difficult words and repeat with smarter suggestions.</span></div>
        </div>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\saura\Desktop\Accentra\laravel\resources\views/home.blade.php ENDPATH**/ ?>