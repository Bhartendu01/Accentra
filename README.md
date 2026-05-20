# Accentra

Accentra is a production-ready AI-powered language learning platform with JWT authentication, Google OAuth entry point, speech recognition practice, pronunciation analysis, gamified progress, interactive lessons, admin management, analytics, and a premium responsive React UI.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Framer Motion, React Router, Axios, Context API, Recharts
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, Passport Google OAuth
- Laravel MVC: Laravel-ready app with routes, controllers, Blade templates, middleware, validation, sessions, mail, MongoDB models, migrations, seeders, and REST APIs in `laravel/`
- Speech: Web Speech API, SpeechSynthesis, custom pronunciation scoring engine
- Security: Helmet, CORS, rate limiting, bcrypt, JWT middleware, express-validator
- Deployment: Docker, Docker Compose, environment variables

## Folder Structure

```text
accentra-language-platform/
  client/                 React + Vite application
    src/
      components/         Shared UI, layout, charts, speech, learning widgets
      context/            Auth and theme state
      data/               Sample course content
      pages/              Public, private, admin pages
      services/           Axios API client
  server/                 Express API
    src/
      config/             Database and passport setup
      controllers/        Route handlers
      middleware/         Auth, validation, errors
      models/             MongoDB schemas
      routes/             API routes
      services/           Speech scoring, AI tutor, email helpers
      seed/               Realistic demo data
  laravel/                INT221 Laravel MVC version
    app/Http/Controllers  MVC controllers
    app/Models            MongoDB models
    resources/views       Blade templates
    routes                web.php and api.php
    database              migrations and seeders
  docker-compose.yml
  .env.example
```

## Local Development

1. Install dependencies:

```bash
npm install
npm run install:all
```

2. Create `.env` from `.env.example` and update values. For local MongoDB, use:

```bash
MONGO_URI=mongodb://127.0.0.1:27017/accentra
CLIENT_URL=http://localhost:5173
```

3. Seed sample data:

```bash
npm run seed
```

4. Run both apps:

```bash
npm run dev
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:5000/api/health`

## Laravel MVC Version

The Laravel MVC implementation is in `laravel/` and follows the INT221 syllabus structure.

```bash
cd laravel
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve --host=127.0.0.1 --port=8000
```

Open `http://127.0.0.1:8000`. More detail is in `docs/LARAVEL_MVC_STRUCTURE.md`.

## Demo Accounts

- Student: `maya@student.com` / `Password123!`
- Admin: `admin@accentra.ai` / `Admin123!`

## Docker

```bash
cp .env.example .env
docker compose up --build
```

The client runs on `http://localhost:5173`, API on `http://localhost:5000`, and MongoDB on `localhost:27017`.

## API Documentation

All endpoints are prefixed with `/api`.

### Auth

- `POST /auth/register` create student account
- `POST /auth/login` login with email and password
- `GET /auth/me` current authenticated user
- `POST /auth/forgot-password` generate reset token flow
- `POST /auth/reset-password` reset password with token
- `POST /auth/verify-email` verify email token
- `GET /auth/google` start Google OAuth
- `GET /auth/google/callback` OAuth callback

### Courses and Lessons

- `GET /courses` list courses
- `GET /courses/:id` course detail
- `POST /courses` admin create course
- `PUT /courses/:id` admin update course
- `DELETE /courses/:id` admin delete course
- `GET /lessons/:id` lesson detail
- `POST /lessons` admin create lesson

### Learning

- `GET /progress/me` student progress
- `POST /progress/complete` mark lesson complete and award XP
- `POST /pronunciation/analyze` analyze spoken transcript against target
- `GET /pronunciation/history` user pronunciation history
- `POST /chat` AI tutor response

### Admin

- `GET /admin/overview` platform analytics
- `GET /admin/users` users list
- `PUT /admin/users/:id/role` update user role
- `DELETE /admin/users/:id` delete user

## Deployment

1. Provision MongoDB Atlas or managed MongoDB.
2. Set production environment variables on the host.
3. Build client with `npm run build --workspace client`.
4. Deploy `server/` to Render, Fly.io, Railway, ECS, or any Node host.
5. Deploy `client/dist` to Vercel, Netlify, S3/CloudFront, or Nginx.
6. Configure `CLIENT_URL`, CORS origins, JWT secret, SMTP, and Google OAuth redirect URL.
7. Run `npm run seed --workspace server` only for demo/staging environments.

## Future Enhancements

- Swap the local AI tutor fallback for OpenAI Assistants or Responses API.
- Add phoneme-level scoring from Azure Speech, Google Speech, or Whisper alignment.
- Add live classroom sessions, teacher dashboards, and assignment workflows.
- Add Stripe subscriptions and organization/team plans.
- Add native mobile apps with React Native.
