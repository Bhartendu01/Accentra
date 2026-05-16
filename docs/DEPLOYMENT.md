# Deployment Guide

## Environment

Set the variables from `.env.example` in your production host. Required values are `NODE_ENV`, `PORT`, `CLIENT_URL`, `MONGO_URI`, `JWT_SECRET`, and Google OAuth credentials if Google login is enabled.

## Backend

1. Deploy `server/` to a Node.js host.
2. Use Node 20 or newer.
3. Run `npm install --omit=dev`.
4. Start with `npm start`.
5. Point `MONGO_URI` to MongoDB Atlas or a managed MongoDB instance.

## Frontend

1. Set `VITE_API_URL=https://your-api-domain.com/api`.
2. Run `npm run build --workspace client`.
3. Deploy `client/dist` to Vercel, Netlify, S3/CloudFront, or Nginx.

## Docker

```bash
cp .env.example .env
docker compose up --build
```

## Production Checklist

- Use a strong `JWT_SECRET`.
- Restrict `CLIENT_URL` and CORS to the production frontend.
- Configure HTTPS.
- Configure SMTP for email verification and password reset.
- Configure Google OAuth redirect URI: `https://your-api-domain.com/api/auth/google/callback`.
- Use hosted MongoDB with backups.
- Add log aggregation and uptime monitoring.
