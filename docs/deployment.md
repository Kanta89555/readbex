# Deployment

## Deployment targets

This starter app is intended to run on a modern Node.js hosting platform such as Vercel, Netlify, or a containerized environment.

## Setup

1. Install dependencies:

```bash
cd my-app
npm install
```

2. Run locally:

```bash
npm run dev
```

3. Build:

```bash
npm run build
```

4. Start production:

```bash
npm start
```

## Environment

- `.env.local` stores local environment variables.
- Add secret values only in environment variables or secure platform settings.

## CI/CD

- Use GitHub Actions, Vercel, or other CI to run `npm install` and `npm run build`.
- Deploy from `main` or a release branch.
- Ensure tests and lint checks run before merge.
