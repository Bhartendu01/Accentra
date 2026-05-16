<!doctype html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $__env->yieldContent('title', 'Accentra'); ?></title>
    <style>
        :root { color-scheme: light; --ink:#0f172a; --teal:#14b8a6; --orange:#f97316; --violet:#8b5cf6; --muted:#64748b; }
        * { box-sizing: border-box; }
        body { margin:0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background:#f8fafc; color:var(--ink); }
        a { color:inherit; text-decoration:none; }
        .nav { position:sticky; top:0; z-index:10; display:flex; align-items:center; justify-content:space-between; padding:16px min(5vw,64px); background:rgba(255,255,255,.82); backdrop-filter:blur(18px); border-bottom:1px solid #e2e8f0; }
        .brand { display:flex; align-items:center; gap:10px; font-weight:900; font-size:22px; }
        .mark { width:38px; height:38px; display:grid; place-items:center; border-radius:999px; background:var(--ink); color:#99f6e4; }
        .links { display:flex; align-items:center; gap:18px; font-weight:700; color:#475569; }
        .btn { display:inline-flex; align-items:center; justify-content:center; border:0; border-radius:8px; padding:12px 18px; background:var(--ink); color:white; font-weight:900; cursor:pointer; }
        .btn.secondary { background:#e2e8f0; color:var(--ink); }
        .btn.teal { background:var(--teal); }
        .container { width:min(1180px, 92vw); margin-inline:auto; }
        .hero { min-height:620px; display:grid; grid-template-columns:1.1fr .9fr; align-items:center; gap:42px; padding:70px 0; }
        .hero h1 { font-size:clamp(44px, 7vw, 86px); line-height:1; margin:0; letter-spacing:0; }
        .hero p, .lead { color:var(--muted); font-size:19px; line-height:1.75; }
        .panel, .card { background:white; border:1px solid #e2e8f0; border-radius:8px; box-shadow:0 16px 50px rgba(15,23,42,.08); }
        .panel { padding:28px; }
        .grid { display:grid; gap:18px; }
        .grid-3 { grid-template-columns:repeat(3, minmax(0,1fr)); }
        .grid-4 { grid-template-columns:repeat(4, minmax(0,1fr)); }
        .card { padding:22px; }
        .stat { font-size:34px; font-weight:900; margin-top:10px; }
        .muted { color:var(--muted); }
        .tag { display:inline-flex; border-radius:999px; padding:6px 10px; background:#ccfbf1; color:#0f766e; font-size:12px; font-weight:900; text-transform:uppercase; letter-spacing:.08em; }
        .section { padding:54px 0; }
        .field { display:grid; gap:8px; margin-top:16px; font-weight:800; }
        input, select, textarea { width:100%; border:1px solid #cbd5e1; border-radius:8px; padding:13px 14px; font:inherit; background:white; }
        .error { color:#be123c; font-size:14px; margin-top:6px; }
        .alert { border-radius:8px; padding:14px 16px; background:#dcfce7; color:#166534; font-weight:800; margin-bottom:18px; }
        table { width:100%; border-collapse:collapse; }
        th, td { padding:14px; border-bottom:1px solid #e2e8f0; text-align:left; }
        .course-card { border-top:5px solid var(--teal); }
        .footer { padding:36px; text-align:center; color:var(--muted); border-top:1px solid #e2e8f0; }
        @media (max-width: 840px) { .hero, .grid-3, .grid-4 { grid-template-columns:1fr; } .links { display:none; } .hero { min-height:auto; padding-top:36px; } }
    </style>
    <?php echo $__env->yieldPushContent('head'); ?>
</head>
<body>
    <nav class="nav">
        <a class="brand" href="<?php echo e(route('home')); ?>"><span class="mark">A</span> Accentra</a>
        <div class="links">
            <a href="<?php echo e(route('courses.index')); ?>">Courses</a>
            <?php if(auth()->guard()->check()): ?>
                <a href="<?php echo e(route('dashboard')); ?>">Dashboard</a>
                <a href="<?php echo e(route('speaking.practice')); ?>">Speaking</a>
                <a href="<?php echo e(route('tutor.index')); ?>">Tutor</a>
                <?php if(auth()->user()->role === 'admin'): ?>
                    <a href="<?php echo e(route('admin.dashboard')); ?>">Admin</a>
                <?php endif; ?>
                <form method="POST" action="<?php echo e(route('logout')); ?>"><?php echo csrf_field(); ?> <button class="btn secondary" type="submit">Logout</button></form>
            <?php else: ?>
                <a href="<?php echo e(route('login')); ?>">Login</a>
                <a class="btn" href="<?php echo e(route('register')); ?>">Start free</a>
            <?php endif; ?>
        </div>
    </nav>
    <main>
        <?php if(session('status')): ?>
            <div class="container" style="padding-top:18px"><div class="alert"><?php echo e(session('status')); ?></div></div>
        <?php endif; ?>
        <?php echo $__env->yieldContent('content'); ?>
    </main>
    <footer class="footer">Accentra Laravel MVC • INT221 routing, controllers, Blade, sessions, validation, MongoDB, and REST APIs.</footer>
</body>
</html>
<?php /**PATH C:\Users\saura\Documents\Codex\2026-05-14\you-are-a-senior-full-stack\laravel\resources\views/layouts/app.blade.php ENDPATH**/ ?>