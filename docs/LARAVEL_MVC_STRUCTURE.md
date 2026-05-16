# Accentra Laravel MVC Structure

The `laravel/` folder is the syllabus-aligned INT221 implementation of Accentra. The existing `client/` React UI and `server/` Express API are preserved, while this Laravel app demonstrates proper MVC structure, Blade views, routing, middleware, validation, sessions, email, MongoDB models, migrations, seeders, and REST API routes.

## Folder Map

```text
laravel/
  app/
    Http/
      Controllers/       Home, Auth, Dashboard, Course, Lesson, Speaking, Tutor, Admin, Profile
      Middleware/        Role middleware and shared view-data middleware
      Requests/          Form validation classes
    Mail/                Verification email
    Models/              MongoDB Eloquent-style models
    Services/            Pronunciation analyzer and AI tutor logic
  bootstrap/             Laravel application bootstrap
  config/                App, auth, database, session, mail
  database/
    migrations/          MongoDB collection/index setup
    seeders/             Demo users, courses, lessons, progress
  resources/views/       Blade template inheritance and pages
  routes/
    web.php              Named web routes, route groups, middleware, resource routes
    api.php              REST API examples
```

## INT221 Syllabus Coverage

- Unit I: Composer project, Laravel app structure, `artisan`, config files.
- Unit II: Basic routing, named routes, redirects, JSON responses, route groups.
- Unit III: Controllers, middleware, resource routing, Blade inheritance.
- Unit IV: Request data, cookies/sessions through profile daily goal, mail through verification email.
- Unit V: Form requests, CSRF fields, method fields, validation rules and errors.
- Unit VI: MongoDB models, migrations, seeders, CRUD-style resource controllers, REST APIs.

## Run Laravel MVC App

```bash
cd laravel
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve --host=127.0.0.1 --port=8000
```

Open: `http://127.0.0.1:8000`

Demo accounts after seeding:

- Student: `maya@student.com` / `Password123!`
- Admin: `admin@accentra.ai` / `Admin123!`

## Key Routes

- `/` landing page
- `/login`, `/register`, `/forgot-password`
- `/dashboard`
- `/courses`, `/courses/{course}`
- `/lessons/{lesson}`
- `/speaking`
- `/tutor`
- `/profile`
- `/admin`, `/admin/users`, `/admin/courses`
- `/api/health`
- `/api/courses`
- `/api/pronunciation/analyze`
