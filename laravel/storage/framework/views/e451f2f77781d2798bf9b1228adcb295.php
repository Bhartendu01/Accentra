<!doctype html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $__env->yieldContent('title', 'Accentra'); ?></title>
    <style>
        :root { color-scheme: light; --ink:#0f172a; --teal:#14b8a6; --orange:#f97316; --violet:#8b5cf6; --rose:#e11d48; --sky:#0284c7; --muted:#64748b; --line:#e2e8f0; }
        * { box-sizing: border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background:linear-gradient(180deg,#f8fafc 0%,#eefdf9 42%,#fff7ed 100%); color:var(--ink); }
        body::before { content:""; position:fixed; inset:0; pointer-events:none; z-index:-1; background:linear-gradient(135deg,rgba(20,184,166,.16),transparent 28%),linear-gradient(225deg,rgba(249,115,22,.14),transparent 32%); }
        a { color:inherit; text-decoration:none; }
        .nav { position:sticky; top:0; z-index:10; display:flex; align-items:center; justify-content:space-between; padding:14px min(5vw,64px); background:rgba(255,255,255,.78); backdrop-filter:blur(22px); border-bottom:1px solid rgba(226,232,240,.8); box-shadow:0 18px 60px rgba(15,23,42,.05); }
        .brand { display:flex; align-items:center; gap:10px; font-weight:900; font-size:22px; }
        .mark { width:40px; height:40px; display:grid; place-items:center; border-radius:12px; background:linear-gradient(135deg,var(--ink),#134e4a); color:#99f6e4; box-shadow:0 16px 35px rgba(20,184,166,.22); }
        .links { display:flex; align-items:center; gap:18px; font-weight:700; color:#475569; }
        .links a { transition:.2s ease; }
        .links a:hover { color:#0f766e; transform:translateY(-1px); }
        .btn { display:inline-flex; align-items:center; justify-content:center; border:0; border-radius:8px; padding:12px 18px; background:linear-gradient(135deg,var(--ink),#115e59); color:white; font-weight:900; cursor:pointer; box-shadow:0 16px 35px rgba(15,23,42,.18); transition:.2s ease; }
        .btn:hover { transform:translateY(-2px); box-shadow:0 22px 45px rgba(15,23,42,.22); }
        .btn.secondary { background:#e2e8f0; color:var(--ink); box-shadow:none; }
        .btn.teal { background:linear-gradient(135deg,var(--teal),#0f766e); }
        .container { width:min(1180px, 92vw); margin-inline:auto; }
        .hero { min-height:690px; display:grid; grid-template-columns:1.08fr .92fr; align-items:center; gap:48px; padding:76px 0 58px; }
        .hero h1 { font-size:clamp(44px, 7vw, 86px); line-height:1; margin:0; letter-spacing:0; }
        .hero p, .lead { color:var(--muted); font-size:19px; line-height:1.75; }
        .headline-gradient { background:linear-gradient(90deg,#0f172a,#0f766e,#f97316); -webkit-background-clip:text; background-clip:text; color:transparent; }
        .panel, .card { background:rgba(255,255,255,.86); border:1px solid rgba(226,232,240,.92); border-radius:8px; box-shadow:0 20px 60px rgba(15,23,42,.09); backdrop-filter:blur(14px); }
        .panel { padding:28px; }
        .grid { display:grid; gap:18px; }
        .grid-3 { grid-template-columns:repeat(3, minmax(0,1fr)); }
        .grid-4 { grid-template-columns:repeat(4, minmax(0,1fr)); }
        .card { padding:22px; transition:.2s ease; }
        .card:hover { transform:translateY(-4px); box-shadow:0 28px 70px rgba(15,23,42,.12); }
        .stat { font-size:34px; font-weight:900; margin-top:10px; }
        .muted { color:var(--muted); }
        .tag { display:inline-flex; border-radius:999px; padding:6px 10px; background:#ccfbf1; color:#0f766e; font-size:12px; font-weight:900; text-transform:uppercase; letter-spacing:.08em; }
        .section { padding:54px 0; }
        .field { display:grid; gap:8px; margin-top:16px; font-weight:800; }
        input, select, textarea { width:100%; border:1px solid #cbd5e1; border-radius:8px; padding:13px 14px; font:inherit; background:white; outline-color:var(--teal); }
        .error { color:#be123c; font-size:14px; margin-top:6px; }
        .alert { border-radius:8px; padding:14px 16px; background:#dcfce7; color:#166534; font-weight:800; margin-bottom:18px; }
        table { width:100%; border-collapse:collapse; }
        th, td { padding:14px; border-bottom:1px solid #e2e8f0; text-align:left; }
        .course-card { border-top:5px solid var(--teal); }
        .language-pill { display:inline-flex; align-items:center; justify-content:center; min-height:42px; border-radius:999px; padding:10px 15px; background:white; border:1px solid var(--line); font-weight:900; box-shadow:0 12px 30px rgba(15,23,42,.06); }
        .metric-strip { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-top:18px; }
        .metric-strip div { border-radius:8px; background:rgba(255,255,255,.16); color:white; padding:14px; text-align:center; font-weight:900; }
        .screen-card { position:relative; overflow:hidden; background:linear-gradient(145deg,#0f172a,#134e4a 58%,#7c2d12); color:white; }
        .orbit { position:absolute; border:1px solid rgba(153,246,228,.28); border-radius:999px; animation:spin 16s linear infinite; }
        .orbit.one { width:310px; height:310px; inset:46px auto auto 50%; transform-origin:center; }
        .orbit.two { width:230px; height:230px; inset:86px auto auto 56%; animation-duration:22s; }
        .floating-chip { position:absolute; padding:9px 12px; border-radius:999px; background:rgba(255,255,255,.14); border:1px solid rgba(255,255,255,.18); font-weight:900; backdrop-filter:blur(8px); }
        @keyframes spin { to { rotate:360deg; } }
        .footer { padding:36px; text-align:center; color:var(--muted); border-top:1px solid #e2e8f0; background:rgba(255,255,255,.5); }
        @media (max-width: 840px) { .hero, .grid-3, .grid-4, .metric-strip { grid-template-columns:1fr; } .links { display:none; } .hero { min-height:auto; padding-top:36px; } }
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
    <footer class="footer">Accentra | Speak clearly. Learn confidently. Grow every day.</footer>
</body>
</html>
<?php /**PATH C:\Users\saura\Desktop\Accentra\laravel\resources\views/layouts/app.blade.php ENDPATH**/ ?>