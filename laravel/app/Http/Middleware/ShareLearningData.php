<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Symfony\Component\HttpFoundation\Response;

class ShareLearningData
{
    public function handle(Request $request, Closure $next): Response
    {
        View::share('supportedLanguages', ['English', 'Spanish', 'French', 'German', 'Japanese']);
        View::share('currentLocale', app()->getLocale());

        return $next($request);
    }
}
