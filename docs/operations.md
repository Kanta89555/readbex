# Operations

## Monitoring and logging

- Add runtime logging for API and server actions.
- Integrate observability tools if the app grows.
- Monitor build and deploy failures in CI.

## Troubleshooting

Common checks:

- Ensure `npm install` completes successfully.
- Confirm `npm run build` passes without errors.
- Verify `.env.local` has required environment variables.

## Runbook

- Local development: `cd my-app && npm run dev`
- Production build: `cd my-app && npm run build`
- Start server: `cd my-app && npm start`

## Maintenance

- Keep dependencies up to date.
- Review `docs/adr/` for architectural decisions before making major changes.
- Update docs when changing routing, feature structure, or deployment configuration.
