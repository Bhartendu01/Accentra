<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class ProfileController extends Controller
{
    public function edit(): View
    {
        return view('profile.edit', ['user' => auth()->user()]);
    }

    public function update(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:80'],
            'native_language' => ['required', 'string', 'max:60'],
            'daily_goal_minutes' => ['required', 'integer', 'min:5', 'max:120'],
        ]);

        $request->user()->update($data);
        $request->session()->put('daily_goal_minutes', $data['daily_goal_minutes']);

        return back()->with('status', 'Profile updated.');
    }
}
