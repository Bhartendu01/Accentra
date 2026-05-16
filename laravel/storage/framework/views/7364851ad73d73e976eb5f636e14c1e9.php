<?php $__env->startSection('content'); ?>
<section class="container section">
    <span class="tag">Student dashboard</span>
    <h1>Welcome, <?php echo e($user->name); ?></h1>
    <div class="grid grid-4">
        <div class="card"><span class="muted">Daily streak</span><div class="stat"><?php echo e($user->streak); ?></div></div>
        <div class="card"><span class="muted">XP points</span><div class="stat"><?php echo e($user->xp); ?></div></div>
        <div class="card"><span class="muted">Level</span><div class="stat"><?php echo e($user->level); ?></div></div>
        <div class="card"><span class="muted">Goal</span><div class="stat"><?php echo e(session('daily_goal_minutes', $user->daily_goal_minutes ?? 20)); ?>m</div></div>
    </div>
    <div class="grid grid-3" style="margin-top:22px">
        <div class="card" style="grid-column:span 2"><h3>Recommended lessons</h3><?php $__currentLoopData = $recommendedCourses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $course): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?><p><strong><?php echo e($course->title); ?></strong> <span class="muted"><?php echo e($course->estimated_hours); ?> hours</span></p><?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?></div>
        <div class="card"><h3>Leaderboard</h3><?php $__currentLoopData = $leaderboard; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $learner): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?><p><?php echo e($loop->iteration); ?>. <?php echo e($learner->name); ?> <strong style="float:right"><?php echo e($learner->xp); ?> XP</strong></p><?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?></div>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\saura\Documents\Codex\2026-05-14\you-are-a-senior-full-stack\laravel\resources\views/dashboard.blade.php ENDPATH**/ ?>