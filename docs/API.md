# Accentra API Routes

Base URL: `/api`

## Authentication

| Method | Route | Access | Description |
| --- | --- | --- | --- |
| POST | `/auth/register` | Public | Create a student account and send verification token |
| POST | `/auth/login` | Public | Return JWT and user profile |
| GET | `/auth/me` | User | Return current authenticated user |
| POST | `/auth/forgot-password` | Public | Send reset token when account exists |
| POST | `/auth/reset-password` | Public | Reset password with token |
| POST | `/auth/verify-email` | Public | Verify email token |
| GET | `/auth/google` | Public | Start Google OAuth |
| GET | `/auth/google/callback` | Public | Complete OAuth and redirect to frontend |

## Learning

| Method | Route | Access | Description |
| --- | --- | --- | --- |
| GET | `/courses` | Public | List published courses |
| GET | `/courses/:id` | Public | Course detail with lessons |
| GET | `/lessons/:id` | User | Lesson detail |
| GET | `/progress/me` | User | User progress and leaderboard |
| POST | `/progress/complete` | User | Mark lesson complete, award XP, update streak |
| POST | `/pronunciation/analyze` | User | Score spoken transcript against target sentence |
| GET | `/pronunciation/history` | User | Recent pronunciation results |
| POST | `/chat` | User | AI tutor response |
| GET | `/chat/history` | User | Tutor chat history |

## Admin

| Method | Route | Access | Description |
| --- | --- | --- | --- |
| POST | `/courses` | Admin | Create course |
| PUT | `/courses/:id` | Admin | Update course |
| DELETE | `/courses/:id` | Admin | Delete course and lessons |
| POST | `/lessons` | Admin | Create lesson |
| PUT | `/lessons/:id` | Admin | Update lesson |
| GET | `/admin/overview` | Admin | Platform analytics |
| GET | `/admin/users` | Admin | Manage users |
| PUT | `/admin/users/:id/role` | Admin | Change user role |
| DELETE | `/admin/users/:id` | Admin | Delete user |
