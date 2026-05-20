@extends('layouts.app')

@section('content')
<section class="container section">
    <h1>User Management</h1>
    <div class="panel"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>XP</th></tr></thead><tbody>@foreach($users as $user)<tr><td>{{ $user->name }}</td><td>{{ $user->email }}</td><td>{{ $user->role }}</td><td>{{ $user->xp }}</td></tr>@endforeach</tbody></table></div>
</section>
@endsection
