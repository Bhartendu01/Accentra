<?php $__env->startSection('title', 'Register - Accentra'); ?>

<?php $__env->startSection('content'); ?>
<section class="container section" style="max-width:620px">
    <div class="panel">
        <h1>Create account</h1>
        <form method="POST" action="<?php echo e(route('register.store')); ?>">
            <?php echo csrf_field(); ?>
            <label class="field">Name <input name="name" value="<?php echo e(old('name')); ?>" required></label>
            <label class="field">Email <input name="email" type="email" value="<?php echo e(old('email')); ?>" required></label>
            <label class="field">Target language
                <select name="target_language"><?php $__currentLoopData = $supportedLanguages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $language): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?><option><?php echo e($language); ?></option><?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?></select>
            </label>
            <label class="field">Password <input name="password" type="password" required></label>
            <label class="field">Confirm password <input name="password_confirmation" type="password" required></label>
            <?php if($errors->any()): ?> <div class="error"><?php echo e($errors->first()); ?></div> <?php endif; ?>
            <button class="btn" style="width:100%; margin-top:20px">Start learning</button>
        </form>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\saura\Desktop\Accentra\laravel\resources\views/auth/register.blade.php ENDPATH**/ ?>