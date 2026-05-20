<?php $__env->startSection('content'); ?>
<section class="container section">
    <span class="tag">Course library</span>
    <h1 class="headline-gradient" style="font-size:54px; margin:14px 0 10px">Language Courses</h1>
    <p class="lead">Beginner, Intermediate, and Advanced paths for English, Spanish, French, German, and Japanese.</p>
    <div class="grid grid-3">
        <?php $__currentLoopData = $courses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $course): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <a class="card course-card" style="--teal: <?php echo e($course->accent_color ?? '#14b8a6'); ?>" href="<?php echo e(is_string($course->id ?? null) && str_starts_with($course->id, 'demo-') ? '#' : route('courses.show', $course)); ?>">
                <span class="tag"><?php echo e($course->level); ?></span>
                <h2><?php echo e($course->title); ?></h2>
                <p class="muted"><?php echo e($course->description); ?></p>
            </a>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\saura\Desktop\Accentra\laravel\resources\views/courses/index.blade.php ENDPATH**/ ?>