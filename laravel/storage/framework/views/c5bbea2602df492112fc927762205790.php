<?php $__env->startSection('title', 'Login - Accentra'); ?>

<?php $__env->startSection('content'); ?>
<section class="container section" style="max-width:520px">
    <div class="panel">
        <h1>Login</h1>
        <p class="muted">Student: maya@student.com / Password123! Admin: admin@accentra.ai / Admin123!</p>
        <form method="POST" action="<?php echo e(route('login.store')); ?>">
            <?php echo csrf_field(); ?>
            <label class="field">Email <input name="email" type="email" value="<?php echo e(old('email', 'maya@student.com')); ?>" required></label>
            <?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <div class="error"><?php echo e($message); ?></div> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
            <label class="field">Password <input name="password" type="password" value="Password123!" required></label>
            <label style="display:flex; gap:8px; margin-top:14px"><input style="width:auto" type="checkbox" name="remember"> Remember me</label>
            <button class="btn" style="width:100%; margin-top:20px">Login</button>
        </form>
        <p><a href="<?php echo e(route('password.request')); ?>">Forgot password?</a></p>
    </div>
</section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\saura\Documents\Codex\2026-05-14\you-are-a-senior-full-stack\laravel\resources\views/auth/login.blade.php ENDPATH**/ ?>